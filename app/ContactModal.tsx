"use client";

import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "./contacts";
import { WhatsAppIcon } from "./icons";

const BUDGET_OPTIONS = [
  "до $500",
  "$500 — 2 000",
  "$2 000 — 5 000",
  "больше $5 000",
] as const;

// ЗАПОЛНИТЬ: ссылка на политику обработки персональных данных.
// Пока пусто — текст согласия выводится без ссылки.
const PRIVACY_URL = "";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [budget, setBudget] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const openFromContactLink = (event: globalThis.MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>('a[href="#contact"]');

      if (!link) return;

      event.preventDefault();
      triggerRef.current = link;
      setError("");
      setStatus("idle");
      setIsOpen(true);
    };

    document.addEventListener("click", openFromContactLink);
    return () => document.removeEventListener("click", openFromContactLink);
  }, []);

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 820px)");
    let frame = 0;

    const updateVisibility = () => {
      frame = 0;
      if (!mobileViewport.matches) {
        setShowFloatingCta(false);
        return;
      }

      const regularCtaIsVisible = Array.from(
        document.querySelectorAll<HTMLElement>("[data-collaboration-cta]"),
      ).some((element) => {
        const bounds = element.getBoundingClientRect();
        return bounds.bottom > 0 && bounds.top < window.innerHeight;
      });

      setShowFloatingCta(!regularCtaIsVisible);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateVisibility);
    };

    const contentObserver = new MutationObserver(scheduleUpdate);
    contentObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    mobileViewport.addEventListener("change", scheduleUpdate);
    scheduleUpdate();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      contentObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      mobileViewport.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  const isFloatingVisible = showFloatingCta && !isOpen;

  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeModal();
  };

  const whatsappFallbackLink = () => {
    const message = [
      "Здравствуйте! Хочу обсудить сотрудничество.",
      name.trim() ? `Меня зовут ${name.trim()}.` : "",
      budget ? `Рекламный бюджет в месяц: ${budget}.` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending") return;

    const phoneDigits = whatsapp.replace(/\D/g, "");

    if (!name.trim()) {
      setError("Напишите, как к вам обращаться.");
      return;
    }

    if (phoneDigits.length < 10) {
      setError("Проверьте номер WhatsApp — кажется, не хватает цифр.");
      return;
    }

    if (!budget) {
      setError("Выберите рекламный бюджет в месяц.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          whatsapp: whatsapp.trim(),
          budget,
          company,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        setError(result?.error || "Заявка не отправилась. Напишите, пожалуйста, в WhatsApp.");
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Заявка не отправилась. Напишите, пожалуйста, в WhatsApp.");
    }
  };

  return (
    <>
      <div
        className={`mobile-floating-bar ${isFloatingVisible ? "is-visible" : ""}`}
        aria-hidden={isFloatingVisible ? undefined : true}
      >
        <a
          className="mobile-floating-cta"
          href="#contact"
          tabIndex={isFloatingVisible ? undefined : -1}
        >
          Обсудить <span aria-hidden="true">↗</span>
        </a>

        <a
          className="mobile-floating-wa"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isFloatingVisible ? undefined : -1}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>

      {isOpen && createPortal(
        <div className="contact-modal-overlay" onMouseDown={handleOverlayClick}>
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        <button
          ref={closeButtonRef}
          className="contact-modal-close"
          type="button"
          onClick={closeModal}
          aria-label="Закрыть форму"
        >
          ×
        </button>

        {status === "sent" ? (
          <div className="contact-modal-done">
            <p className="contact-modal-eyebrow">Заявка отправлена</p>
            <h2 id="contact-modal-title">
              Готово. Напишу вам <em>в течение дня</em>
            </h2>
            <p id="contact-modal-description">
              Если хочется обсудить прямо сейчас — вот прямая ссылка, там уже
              набран текст, останется только отправить.
            </p>

            <div className="contact-modal-done-actions">
              <a
                className="contact-modal-wa"
                href={whatsappFallbackLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Написать сразу в WhatsApp
              </a>

              <button type="button" onClick={closeModal}>
                Вернуться на сайт
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="contact-modal-copy">
              <p className="contact-modal-eyebrow">Новый проект</p>
              <h2 id="contact-modal-title">
                Ваш проект может стать <em>следующим кейсом</em>
              </h2>
              <p id="contact-modal-description">
                Оставьте контакты — напишу вам в WhatsApp и обсудим задачу.
              </p>
            </div>

            <form className="contact-modal-form" onSubmit={handleSubmit} noValidate>
              <label>
                <span>Ваше имя</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setError("");
                  }}
                  placeholder="Как к вам обращаться"
                />
              </label>

              <label>
                <span>Номер WhatsApp</span>
                <input
                  type="tel"
                  name="whatsapp"
                  autoComplete="tel"
                  inputMode="tel"
                  value={whatsapp}
                  onChange={(event) => {
                    setWhatsapp(event.target.value);
                    setError("");
                  }}
                  placeholder="+7 701 000 00 00"
                />
              </label>

              <fieldset className="contact-modal-budget">
                <legend>Рекламный бюджет в месяц</legend>
                <div className="contact-modal-budget-options">
                  {BUDGET_OPTIONS.map((option) => (
                    <label key={option} className={budget === option ? "is-selected" : ""}>
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={budget === option}
                        onChange={() => {
                          setBudget(option);
                          setError("");
                        }}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="contact-modal-honeypot" aria-hidden="true">
                Не заполняйте это поле
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                />
              </label>

              <div className="contact-modal-submit-row">
                <button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Отправляю…" : "Обсудить сотрудничество"}
                  <span aria-hidden="true">↗</span>
                </button>

                <p className="contact-modal-consent">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  {PRIVACY_URL ? (
                    <>
                      {" "}
                      — <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">политика</a>
                    </>
                  ) : null}
                  .
                </p>

                <p
                  className={error ? "contact-modal-error is-visible" : "contact-modal-error"}
                  aria-live="polite"
                >
                  {error}
                </p>

                {status === "error" ? (
                  <a
                    className="contact-modal-wa"
                    href={whatsappFallbackLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon />
                    Написать в WhatsApp
                  </a>
                ) : null}
              </div>
            </form>
          </>
        )}
      </section>
        </div>,
        document.body,
      )}
    </>
  );
}
