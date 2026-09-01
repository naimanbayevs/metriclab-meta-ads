"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type CaseMetric = { value: string; label: string; detail?: string };

type CaseYear = {
  period: string;
  note?: string;
  highlights: CaseMetric[];
  metrics: CaseMetric[];
};

type CaseProof = {
  title: string;
  src: string | null;
  alt: string;
  amount: string;
  label: string;
};

type CaseStudy = {
  id: string;
  category: string;
  period: string;
  client: string;
  modalTitle?: string;
  description: string;
  task: string;
  primary: CaseMetric;
  secondary: CaseMetric[];
  fullMetrics: CaseMetric[];
  yearly?: CaseYear[];
  comparison?: CaseMetric[];
  work: string[];
  proof?: { src: string; alt: string; caption: string };
  proofs?: CaseProof[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "education",
    category: "Профессиональное обучение",
    period: "2024 — 2026",
    client: "Образовательная компания для бухгалтеров и бизнеса",
    modalTitle: "Профессиональное обучение в сфере финансов",
    description: "Компания в сфере профессионального образования для бухгалтеров, кадровых специалистов и бизнеса. Работа с платным трафиком велась по нескольким образовательным продуктам в 2024–2026 годах.",
    task: "Масштабировать привлечение клиентов на несколько образовательных продуктов, сохраняя контролируемую стоимость продажи.",
    primary: { value: "₸441 млн+", label: "выручки" },
    secondary: [
      { value: "2 521", label: "продажа" },
      { value: "−32%", label: "CPA продажи · 2025 vs 2024" },
    ],
    fullMetrics: [],
    yearly: [
      {
        period: "2024",
        highlights: [
          { value: "512", label: "продаж" },
          { value: "₸85,3 млн", label: "выручки" },
        ],
        metrics: [
          { value: "$48 091", label: "рекламный бюджет" },
          { value: "13 329", label: "лиды" },
          { value: "$3,61", label: "CPL" },
          { value: "$93,93", label: "CPA продажи" },
          { value: "3,84%", label: "конверсия лид → продажа" },
        ],
      },
      {
        period: "2025",
        highlights: [
          { value: "1 049", label: "продаж" },
          { value: "≈ ₸197 млн", label: "выручки" },
        ],
        metrics: [
          { value: "$66 902", label: "рекламный бюджет" },
          { value: "16 855", label: "лиды" },
          { value: "$3,97", label: "CPL" },
          { value: "$63,78", label: "CPA продажи", detail: "−32% vs 2024" },
          { value: "6,22%", label: "конверсия лид → продажа" },
        ],
      },
      {
        period: "2026",
        note: "Январь–июнь",
        highlights: [
          { value: "960", label: "продаж" },
          { value: "₸158,8 млн", label: "выручки" },
        ],
        metrics: [
          { value: "$67 182,10", label: "рекламный бюджет" },
          { value: "11 666", label: "лиды" },
          { value: "$5,76", label: "CPL" },
          { value: "$69,98", label: "CPA продажи" },
          { value: "8,23%", label: "конверсия лид → продажа" },
        ],
      },
    ],
    comparison: [
      { value: "+39%", label: "рекламный бюджет" },
      { value: "+26%", label: "лиды" },
      { value: "+105%", label: "продажи" },
      { value: "≈ +131%", label: "выручка" },
      { value: "−32%", label: "CPA продажи" },
    ],
    work: [
      "Перестроена структура платного трафика по продуктам и этапам воронки.",
      "Рекламные данные связаны с покупками и фактической выручкой.",
      "Масштабирование велось с постоянным контролем CAC и конверсии в покупку.",
    ],
    proofs: [
      { title: "Затраты · 2024", src: null, alt: "Скриншот рекламных расходов за 2024 год", amount: "$48 091", label: "рекламные расходы" },
      { title: "Затраты · 2025", src: null, alt: "Скриншот рекламных расходов за 2025 год", amount: "$66 902", label: "рекламные расходы" },
      { title: "Затраты · 2026 · январь–июнь", src: null, alt: "Скриншот рекламных расходов за январь–июнь 2026 года", amount: "$67 182", label: "рекламные расходы" },
    ],
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
  const [openProofImage, setOpenProofImage] = useState<{ src: string; alt: string } | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLElement | null>(null);
  const proofOpenRef = useRef(false);

  const closeProof = () => {
    proofOpenRef.current = false;
    setOpenProofImage(null);
  };

  const closeModal = () => {
    closeProof();
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
      if (event.key !== "Escape") return;
      if (proofOpenRef.current) closeProof();
      else closeModal();
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
    closeProof();
    setActiveCase(study);
  };

  const openProof = (src: string, alt: string) => {
    if (!window.matchMedia("(max-width: 820px)").matches) return;
    proofOpenRef.current = true;
    setOpenProofImage({ src, alt });
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
              className={`case-modal case-modal-${activeCase.id}`}
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
                <h2 id={`case-modal-${activeCase.id}`}>{activeCase.modalTitle ?? activeCase.client}</h2>
                <p id={`case-modal-description-${activeCase.id}`}>{activeCase.description}</p>
              </header>

              <section className="case-modal-section case-modal-task">
                <p className="case-modal-label">Задача</p>
                <p>{activeCase.task}</p>
              </section>

              {activeCase.yearly && (
                <section className="case-modal-section case-yearly-section">
                  <p className="case-modal-label">Динамика по годам</p>
                  <div className="case-year-grid">
                    {activeCase.yearly.map((year) => (
                      <article className="case-year" key={year.period}>
                        <header className="case-year-heading">
                          <strong>{year.period}</strong>
                          {year.note && <span>{year.note}</span>}
                        </header>
                        <div className="case-year-highlights">
                          {year.highlights.map((metric) => (
                            <div className="case-year-highlight" key={metric.label}>
                              <strong>{metric.value}</strong>
                              <span>{metric.label}</span>
                              {metric.detail && <small>{metric.detail}</small>}
                            </div>
                          ))}
                        </div>
                        <dl className="case-year-metrics">
                          {year.metrics.map((metric) => (
                            <div key={metric.label}>
                              <dt>{metric.label}</dt>
                              <dd>{metric.value}</dd>
                              {metric.detail && <small>{metric.detail}</small>}
                            </div>
                          ))}
                        </dl>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              <section className="case-modal-section">
                <p className="case-modal-label">Ключевые результаты</p>
                <div className={`case-modal-results case-modal-results-${activeCase.id} ${(activeCase.secondary.length + activeCase.fullMetrics.length) % 2 ? "has-odd-metrics" : ""}`}>
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

              {activeCase.comparison && (
                <section className="case-modal-section case-comparison-section">
                  <p className="case-modal-label">2025 vs 2024</p>
                  <div className="case-comparison-grid">
                    {activeCase.comparison.map((metric) => (
                      <div key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className="case-modal-section case-modal-proof">
                <p className="case-modal-label">Пруфы</p>
                {activeCase.proofs ? (
                  <div className="case-proof-grid">
                    {activeCase.proofs.map((proof) => (
                      <figure className="case-proof-card" key={proof.title}>
                        <p>{proof.title}</p>
                        {proof.src ? (
                          <button className="case-proof-trigger" type="button" onClick={() => openProof(proof.src!, proof.alt)} aria-label={`Открыть крупнее: ${proof.title}`}>
                            <img src={proof.src} alt={proof.alt} />
                          </button>
                        ) : (
                          <div className="case-proof-slot" role="img" aria-label={proof.alt}><span>Место для скриншота</span></div>
                        )}
                        <figcaption><strong>{proof.amount}</strong><span>{proof.label}</span></figcaption>
                      </figure>
                    ))}
                  </div>
                ) : activeCase.proof ? (
                  <figure>
                    <button className="case-proof-trigger" type="button" onClick={() => openProof(activeCase.proof!.src, activeCase.proof!.alt)} aria-label="Открыть пруф крупнее">
                      <img src={activeCase.proof.src} alt={activeCase.proof.alt} />
                    </button>
                    <figcaption>{activeCase.proof.caption}</figcaption>
                  </figure>
                ) : null}
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

              {openProofImage && (
                <div className="case-proof-lightbox" role="dialog" aria-modal="true" aria-label="Увеличенный пруф" onClick={closeProof}>
                  <button className="case-proof-lightbox-close" type="button" onClick={closeProof} aria-label="Закрыть увеличенный пруф">
                    <span aria-hidden="true">×</span>
                  </button>
                  <img src={openProofImage.src} alt={openProofImage.alt} onClick={(event) => event.stopPropagation()} />
                </div>
              )}
            </article>
          </div>,
          document.body,
        )}
    </>
  );
}
