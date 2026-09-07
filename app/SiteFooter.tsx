import {
  EMAIL,
  EMAIL_LINK,
  TELEGRAM_HANDLE,
  TELEGRAM_LINK,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
} from "./contacts";
import { MailIcon, TelegramIcon, WhatsAppIcon } from "./icons";

// ЗАПОЛНИТЬ: юридическая строка — ИП или ТОО, работа по договору, счёт
// и закрывающие документы. Пока строки нет, блок .site-footer-legal не выводится.
const LEGAL_LINE = "";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contacts">
      <div className="site-footer-top">
        <div className="site-footer-intro">
          <p className="site-footer-eyebrow">Связаться</p>
          <p className="site-footer-lead">
            Напишите в мессенджер — отвечу лично, обычно в течение дня.
          </p>
        </div>

        <ul className="site-footer-links">
          <li>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              <span>
                <b>WhatsApp</b>
                {WHATSAPP_DISPLAY}
              </span>
            </a>
          </li>
          <li>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <TelegramIcon />
              <span>
                <b>Telegram</b>@{TELEGRAM_HANDLE}
              </span>
            </a>
          </li>
          <li>
            <a href={EMAIL_LINK}>
              <MailIcon />
              <span>
                <b>Почта</b>
                {EMAIL}
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="site-footer-bottom">
        <p>Санжар Найманбаев · performance-маркетинг</p>
        {LEGAL_LINE ? <p className="site-footer-legal">{LEGAL_LINE}</p> : null}
      </div>
    </footer>
  );
}
