"use client";

import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const WHATSAPP_NUMBER = "77010705794";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");
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

  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeModal();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const phoneDigits = whatsapp.replace(/\D/g, "");
    if (!name.trim() || phoneDigits.length < 10 || !monthlyBudget.trim()) {
      setError("Укажите имя, корректный WhatsApp и рекламный бюджет.");
      return;
    }

    const message = [
      "Здравствуйте! Хочу обсудить сотрудничество.",
      `Меня зовут ${name.trim()}.`,
      `Мой WhatsApp: ${whatsapp.trim()}.`,
      `Рекламный бюджет в месяц: ${monthlyBudget.trim()}.`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <a
        className={`mobile-floating-cta ${showFloatingCta && !isOpen ? "is-visible" : ""}`}
        href="#contact"
        aria-hidden={showFloatingCta && !isOpen ? undefined : true}
        tabIndex={showFloatingCta && !isOpen ? undefined : -1}
      >
        Обсудить сотрудничество <span aria-hidden="true">↗</span>
      </a>

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
              placeholder="Санжар"
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

          <label>
            <span>Рекламный бюджет в месяц</span>
            <input
              type="text"
              name="monthly-budget"
              inputMode="decimal"
              value={monthlyBudget}
              onChange={(event) => {
                setMonthlyBudget(event.target.value);
                setError("");
              }}
              placeholder="Например, $3 000"
            />
          </label>

          <div className="contact-modal-submit-row">
            <button type="submit">
              Обсудить сотрудничество <span aria-hidden="true">↗</span>
            </button>
            <p className={error ? "contact-modal-error is-visible" : "contact-modal-error"} aria-live="polite">
              {error}
            </p>
          </div>
        </form>
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}
