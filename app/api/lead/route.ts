import { env as workerEnv } from "cloudflare:workers";

export const dynamic = "force-dynamic";

// Значения задаются переменными окружения, а не в коде:
//   TELEGRAM_BOT_TOKEN — токен от @BotFather
//   TELEGRAM_CHAT_ID   — ваш ID (узнать у @userinfobot)
// Локально кладутся в .env.local (он в .gitignore), в проде — в переменные
// окружения хостинга. Смотри .env.example.

const MAX_LENGTH = { name: 80, whatsapp: 40, budget: 40 } as const;

const ALLOWED_BUDGETS = new Set([
  "до $500",
  "$500 — 2 000",
  "$2 000 — 5 000",
  "больше $5 000",
]);

function readEnv(key: string): string | undefined {
  const fromWorker = (workerEnv as Record<string, unknown> | undefined)?.[key];
  if (typeof fromWorker === "string" && fromWorker.trim()) return fromWorker.trim();

  const fromNode = process.env?.[key];
  if (typeof fromNode === "string" && fromNode.trim()) return fromNode.trim();

  return undefined;
}

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function fail(error: string, status: number) {
  return Response.json({ ok: false, error }, { status });
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return fail("Не удалось прочитать форму.", 400);
  }

  // Скрытое поле, которое заполняют только боты.
  if (clean(payload.company, 40)) {
    return Response.json({ ok: true });
  }

  const name = clean(payload.name, MAX_LENGTH.name);
  const whatsapp = clean(payload.whatsapp, MAX_LENGTH.whatsapp);
  const budget = clean(payload.budget, MAX_LENGTH.budget);
  const digits = whatsapp.replace(/\D/g, "");

  if (!name || digits.length < 10 || digits.length > 15 || !ALLOWED_BUDGETS.has(budget)) {
    return fail("Проверьте имя, номер и бюджет.", 422);
  }

  const token = readEnv("TELEGRAM_BOT_TOKEN");
  const chatId = readEnv("TELEGRAM_CHAT_ID");

  if (!token || !chatId) {
    console.error("[lead] TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы");
    return fail("Заявка не отправилась. Напишите, пожалуйста, в WhatsApp.", 503);
  }

  const text = [
    "🟠 Новая заявка с сайта",
    "",
    `Имя: ${name}`,
    `WhatsApp: ${whatsapp}`,
    `Бюджет в месяц: ${budget}`,
  ].join("\n");

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("[lead] Telegram ответил", response.status, details.slice(0, 300));
      return fail("Заявка не отправилась. Напишите, пожалуйста, в WhatsApp.", 502);
    }
  } catch (error) {
    console.error("[lead] Не удалось достучаться до Telegram", error);
    return fail("Заявка не отправилась. Напишите, пожалуйста, в WhatsApp.", 502);
  }

  return Response.json({ ok: true });
}
