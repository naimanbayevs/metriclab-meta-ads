"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type CaseStudy = {
  id: string;
  category: string;
  period: string;
  client: string;
  description: string;
  task: string;
  primary: { value: string; label: string };
  secondary: Array<{ value: string; label: string }>;
  fullMetrics: Array<{ value: string; label: string }>;
  work: string[];
  proof: { src: string; alt: string; caption: string };
};

const caseStudies: CaseStudy[] = [
  {
    id: "finmaster",
    category: "Онлайн-курсы",
    period: "2024 → 2025",
    client: "Finmaster Group",
    description: "Онлайн-образование в Казахстане с несколькими образовательными продуктами и платным трафиком как одним из ключевых каналов продаж.",
    task: "Масштабировать рекламные кампании и увеличить объём покупок, не ухудшая стоимость привлечения клиента.",
    primary: { value: "₸197 млн", label: "выручки" },
    secondary: [
      { value: "+105%", label: "покупок" },
      { value: "−32%", label: "CAC" },
    ],
    fullMetrics: [
      { value: "1 049", label: "покупок за год" },
      { value: "6,22%", label: "конверсия в покупку" },
      { value: "$63,8", label: "стоимость покупателя" },
    ],
    work: [
      "Перестроена структура платного трафика по продуктам и этапам воронки.",
      "Рекламные данные связаны с покупками и фактической выручкой.",
      "Масштабирование велось с постоянным контролем CAC и конверсии в покупку.",
    ],
    proof: {
      src: "/case-online-education.png",
      alt: "Анонимизированный продуктовый отчёт онлайн-школы",
      caption: "Анонимизированный продуктовый отчёт за 2025 год",
    },
  },
  {
    id: "football",
    category: "Детский спорт",
    period: "12 месяцев",
    client: "Сеть детских футбольных школ",
    description: "Сеть футбольных школ для детей: четыре рекламных кабинета Meta и продажи, зафиксированные в amoCRM.",
    task: "Связать рекламные расходы с квалификациями, записями на пробное занятие, продажами и выручкой — и видеть экономику всей сети в одном отчёте.",
    primary: { value: "1 848", label: "продаж" },
    secondary: [
      { value: "₸60,9 млн", label: "выручки" },
      { value: "$28,22", label: "стоимость продажи" },
    ],
    fullMetrics: [
      { value: "13 176", label: "новых заявок" },
      { value: "$52,2K", label: "рекламный бюджет" },
      { value: "2,37×", label: "blended ROAS" },
    ],
    work: [
      "Объединены данные четырёх рекламных кабинетов Meta и amoCRM.",
      "Собрана единая воронка от заявки до квалификации, пробного занятия и продажи.",
      "В отчёт добавлены расходы, стоимость продажи, выручка и blended ROAS.",
    ],
    proof: {
      src: "/case-football-school.png",
      alt: "Отчёт по рекламе и продажам сети детских футбольных школ",
      caption: "Сводный отчёт по Meta Ads и данным CRM",
    },
  },
];

export default function CasesSection() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLElement | null>(null);

  const closeModal = () => {
    setActiveCase(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    if (!activeCase) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    if (modalRef.current) modalRef.current.scrollTop = 0;
    window.requestAnimationFrame(() => {
      if (modalRef.current) modalRef.current.scrollTop = 0;
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [activeCase]);

  const openModal = (study: CaseStudy, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveCase(study);
  };

  return (
    <>
      <section className="cases-section" id="cases" aria-labelledby="cases-title">
        <div className="cases-heading">
          <h2 id="cases-title">Мои кейсы</h2>
        </div>

        <div className="cases-list">
          {caseStudies.map((study) => (
            <article className="case-card" key={study.id}>
              <div className="case-card-top">
                <span>{study.category}</span>
                <span>{study.period}</span>
              </div>

              <h3 className="case-client">{study.client}</h3>

              <div className="case-primary-result">
                <strong>{study.primary.value}</strong>
                <span>{study.primary.label}</span>
              </div>

              <div className="case-secondary-results" aria-label="Дополнительные результаты">
                {study.secondary.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              <button
                className="case-details-button"
                type="button"
                onClick={(event) => openModal(study, event.currentTarget)}
                aria-haspopup="dialog"
              >
                Смотреть кейс <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {activeCase &&
        createPortal(
          <div className="case-modal-overlay" onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}>
            <article
              ref={modalRef}
              className="case-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`case-modal-${activeCase.id}`}
              aria-describedby={`case-modal-description-${activeCase.id}`}
            >
              <button ref={closeRef} className="case-modal-close" type="button" onClick={closeModal} aria-label="Закрыть кейс">
                <span aria-hidden="true">×</span>
              </button>

              <header className="case-modal-header">
                <div className="case-modal-tags">
                  <span>{activeCase.category}</span>
                  <span>{activeCase.period}</span>
                </div>
                <h2 id={`case-modal-${activeCase.id}`}>{activeCase.client}</h2>
                <p id={`case-modal-description-${activeCase.id}`}>{activeCase.description}</p>
              </header>

              <section className="case-modal-section case-modal-task">
                <p className="case-modal-label">Задача</p>
                <p>{activeCase.task}</p>
              </section>

              <section className="case-modal-section">
                <p className="case-modal-label">Ключевые результаты</p>
                <div className="case-modal-results">
                  <div className="case-modal-main-result">
                    <strong>{activeCase.primary.value}</strong>
                    <span>{activeCase.primary.label}</span>
                  </div>
                  {[...activeCase.secondary, ...activeCase.fullMetrics].map((metric) => (
                    <div className="case-modal-metric" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="case-modal-section case-modal-proof">
                <p className="case-modal-label">Пруфы</p>
                <figure>
                  <img src={activeCase.proof.src} alt={activeCase.proof.alt} />
                  <figcaption>{activeCase.proof.caption}</figcaption>
                </figure>
              </section>

              <section className="case-modal-section">
                <p className="case-modal-label">Что было сделано</p>
                <ol className="case-modal-work">
                  {activeCase.work.map((item, index) => (
                    <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
                  ))}
                </ol>
              </section>

              <footer className="case-modal-footer">
                <a href="#contact" onClick={closeModal}>Обсудить похожий проект <span aria-hidden="true">↗</span></a>
              </footer>
            </article>
          </div>,
          document.body,
        )}
    </>
  );
}
