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
  amount?: string;
  label?: string;
  caption?: string;
};

type CaseStage = {
  title: string;
  note?: string;
  metrics: CaseMetric[];
};

type CaseEquation = {
  factors: CaseMetric[];
  result: CaseMetric;
};

type CaseStudy = {
  id: string;
  category: string;
  period: string;
  client: string;
  modalTitle?: string;
  startNote?: string;
  description: string;
  task: string;
  primary: CaseMetric;
  secondary: CaseMetric[];
  fullMetrics: CaseMetric[];
  modalPrimaryValue?: string;
  modalPrimaryLabel?: string;
  modalMetrics?: CaseMetric[];
  yearly?: CaseYear[];
  comparison?: CaseMetric[];
  stages?: CaseStage[];
  resultMetrics?: CaseMetric[];
  economics?: CaseEquation[];
  returnMetrics?: CaseMetric[];
  returnNote?: string;
  periodMetrics?: CaseMetric[];
  summary?: string;
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
      { value: "$63,78", label: "стоимость продажи" },
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
          { value: "$93,93", label: "стоимость продажи" },
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
          { value: "$63,78", label: "стоимость продажи" },
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
          { value: "$69,98", label: "стоимость продажи" },
          { value: "8,23%", label: "конверсия лид → продажа" },
        ],
      },
    ],
    work: [
      "Перестроена структура платного трафика по продуктам и этапам воронки.",
      "Рекламные данные связаны с покупками и фактической выручкой.",
      "Масштабирование велось с постоянным контролем CAC и конверсии в покупку.",
    ],
    proofs: [
      { title: "Затраты · 2024", src: "/education-ads-2024.png", alt: "Скриншот рекламных расходов за 2024 год", amount: "$48 091", label: "рекламные расходы" },
      { title: "Затраты · 2025", src: "/education-ads-2025.png", alt: "Скриншот рекламных расходов за 2025 год", amount: "$66 902", label: "рекламные расходы" },
      { title: "Затраты · 2026 · январь–июнь", src: "/education-ads-2026.png", alt: "Скриншот рекламных расходов за январь–июнь 2026 года", amount: "$67 182", label: "рекламные расходы" },
    ],
  },
  {
    id: "football",
    category: "Детский спорт",
    period: "12 месяцев",
    client: "Сеть детских футбольных школ",
    description: "Сеть футбольных школ для детей: четыре рекламных кабинета Meta и продажи, зафиксированные в amoCRM.",
    task: "Связать рекламные расходы с квалификациями, записями на пробное занятие, продажами и выручкой — и видеть экономику всей сети в одном отчёте.",
    primary: { value: "₸60,9 млн", label: "выручки" },
    secondary: [
      { value: "1 848", label: "продаж" },
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
  {
    id: "jewelry",
    category: "Ювелирные украшения",
    period: "2024 — 2026",
    client: "Бренд украшений из серебра",
    startNote: "Начало сотрудничества — ноябрь 2024 года.",
    description: "Бренд украшений из серебра. На момент начала работы рекламные кампании запускались практически с нуля, а у бренда ещё не было сформированной аудитории в социальных сетях.",
    task: "Построить стабильный канал продаж через платный трафик и постепенно масштабировать рекламный бюджет без потери окупаемости.",
    primary: { value: "7×+", label: "ROAS" },
    secondary: [
      { value: "$45K+", label: "рекламных расходов" },
      { value: "×10", label: "масштаб бюджета" },
    ],
    fullMetrics: [
      { value: "0 → 94K", label: "рост аудитории бренда" },
    ],
    modalPrimaryLabel: "ROAS при масштабировании",
    modalMetrics: [
      { value: "×10", label: "масштаб бюджета", detail: "$10 → $100 / день" },
      { value: "$45K+", label: "инвестировано в рекламу" },
      { value: "0 → 94K", label: "рост аудитории бренда" },
    ],
    stages: [
      {
        title: "Точка А",
        note: "Ноябрь 2024",
        metrics: [
          { value: "$10 / день", label: "рекламный бюджет" },
          { value: "0", label: "подписчиков" },
          { value: "Новый бренд", label: "без сформированной аудитории" },
        ],
      },
      {
        title: "Текущий результат",
        metrics: [
          { value: "$100 / день", label: "текущий рекламный бюджет" },
          { value: "7×+", label: "ROAS" },
          { value: "94 000", label: "подписчиков" },
          { value: "$45 000+", label: "рекламных расходов за период" },
        ],
      },
    ],
    summary: "За время сотрудничества рекламный бюджет был масштабирован с $10 до $100 в день. При этом реклама сохраняет ROAS от 7×. За период в платный трафик инвестировано около $45 тыс., а аудитория бренда выросла с нуля до 94 тыс. подписчиков.",
    work: [],
    proofs: [
      { title: "", src: "/jewelry-ads-proof.png", alt: "Скриншот рекламного кабинета ювелирного e-commerce бренда", caption: "Скриншот рекламного кабинета" },
    ],
  },
  {
    id: "kindergarten",
    category: "Частный детский сад",
    period: "2024 — 2026",
    client: "Частный детский сад в Алматы",
    startNote: "Ноябрь 2024 — март 2026 · около 17 месяцев.",
    description: "Частный детский сад в Алматы со стоимостью посещения ₸150 000 в месяц. Основной задачей платного трафика было обеспечивать стабильный поток новых клиентов при небольшом рекламном бюджете.",
    task: "Стабильно приводить новых клиентов в детский сад при рекламном бюджете около $300 в месяц и сохранять высокую окупаемость привлечения.",
    primary: { value: "≈3", label: "новых клиента / месяц" },
    secondary: [
      { value: "$300", label: "рекламный бюджет / месяц" },
      { value: "₸1,5 млн", label: "LTV клиента" },
    ],
    fullMetrics: [
      { value: "₸1,5 млн", label: "LTV клиента" },
      { value: "≈30×", label: "LTV ROAS" },
    ],
    modalPrimaryValue: "51",
    modalPrimaryLabel: "продажа за период",
    resultMetrics: [
      { value: "51", label: "продажа за период" },
      { value: "$300", label: "рекламный бюджет / месяц" },
      { value: "₸150 000", label: "месячная стоимость" },
      { value: "10 месяцев", label: "средний LTV" },
    ],
    economics: [
      {
        factors: [
          { value: "₸150 000", label: "в месяц" },
          { value: "10", label: "месяцев LTV" },
        ],
        result: { value: "₸1,5 млн", label: "LTV одного клиента" },
      },
      {
        factors: [
          { value: "3", label: "клиента" },
          { value: "₸1,5 млн", label: "LTV клиента" },
        ],
        result: { value: "≈₸4,5 млн", label: "потенциальная LTV-выручка месячной когорты" },
      },
    ],
    returnMetrics: [
      { value: "≈3×", label: "ROAS по выручке первого месяца", detail: "₸450 000 / ≈₸150 000 расходов" },
      { value: "≈30×", label: "LTV ROAS", detail: "≈₸4,5 млн / ≈₸150 000 расходов" },
    ],
    returnNote: "Оценка рассчитана при ориентировочном курсе ₸500/$ и среднем LTV 10 месяцев.",
    periodMetrics: [
      { value: "51", label: "продажа за период" },
      { value: "≈$5 100", label: "рекламных расходов" },
      { value: "≈₸76,5 млн", label: "потенциальная LTV-выручка привлечённых клиентов" },
    ],
    work: [],
  },
  {
    id: "footwear",
    category: "Fashion retail",
    period: "2025 — 2026",
    client: "Бренд обуви",
    startNote: "Май 2025 — май 2026.",
    description: "Работа была сосредоточена на постепенном масштабировании платного трафика и росте аудитории бренда.",
    task: "Масштабировать рекламные кампании и увеличивать аудиторию бренда без резкого роста рекламного бюджета.",
    primary: { value: "×4", label: "масштаб бюджета" },
    secondary: [
      { value: "+10 000", label: "подписчиков" },
      { value: "$3 600", label: "рекламных расходов" },
    ],
    fullMetrics: [],
    modalPrimaryLabel: "масштаб бюджета",
    modalMetrics: [
      { value: "+10 000", label: "подписчиков", detail: "25K → 35K" },
      { value: "+40%", label: "рост аудитории" },
      { value: "$3 600", label: "рекламных расходов за период" },
    ],
    stages: [
      {
        title: "Точка А",
        note: "Май 2025",
        metrics: [
          { value: "$10 / день", label: "рекламный бюджет" },
          { value: "25 000", label: "подписчиков" },
        ],
      },
      {
        title: "Точка Б",
        note: "Май 2026",
        metrics: [
          { value: "$40 / день", label: "рекламный бюджет" },
          { value: "35 000", label: "подписчиков" },
        ],
      },
    ],
    summary: "За 12 месяцев дневной рекламный бюджет был масштабирован с $10 до $40, а аудитория бренда выросла с 25 до 35 тыс. подписчиков. За период в рекламу было инвестировано около $3,6 тыс. Данные по выручке и ROAS не раскрываются.",
    work: [],
  },
  {
    id: "jewelry-brand",
    category: "Jewelry brand",
    period: "2025 — 2026",
    client: "Бренд украшений из серебра",
    startNote: "Сотрудничество с мая 2025 года.",
    description: "Бренд украшений из серебра с продажами через социальные сети. Работа с платным трафиком ведётся с мая 2025 года с фокусом на продажи и рост аудитории бренда.",
    task: "Масштабировать платный трафик, сохраняя высокую окупаемость рекламы и одновременно увеличивая аудиторию бренда.",
    primary: { value: "10×+", label: "ROAS" },
    secondary: [
      { value: "$10,2K+", label: "рекламных расходов" },
      { value: "37K+", label: "новых подписчиков" },
    ],
    fullMetrics: [],
    modalPrimaryLabel: "ROAS",
    modalMetrics: [
      { value: "$10,2K+", label: "рекламных расходов" },
      { value: "37K+", label: "новых подписчиков" },
    ],
    summary: "За период сотрудничества через несколько рекламных кабинетов в платный трафик инвестировано более $10 тыс. При этом реклама сохраняет ROAS от 10×, а подтверждённый рост аудитории составил более 37 тыс. новых подписчиков.",
    work: [],
  },
  {
    id: "premium-food",
    category: "Premium bakery",
    period: "2026",
    client: "Премиальная кондитерская",
    startNote: "Сотрудничество с июня 2026 года.",
    description: "Премиальная кондитерская с продажами через социальные сети. Платный трафик используется одновременно для роста аудитории бренда и генерации входящих обращений.",
    task: "Увеличивать аудиторию бренда и стабильно генерировать входящие обращения через платный трафик.",
    primary: { value: "2 625", label: "новых подписчиков" },
    secondary: [
      { value: "940", label: "начатых переписок" },
      { value: "$2,8K+", label: "рекламных расходов" },
    ],
    fullMetrics: [],
    modalPrimaryLabel: "новых подписчиков",
    modalMetrics: [
      { value: "$2 808,83", label: "рекламных расходов" },
      { value: "2 625", label: "новых подписчиков" },
    ],
    summary: "С июня 2026 года платный трафик принёс бренду более 2,6 тыс. новых подписчиков и 940 начатых переписок при рекламных расходах около $2,8 тыс.",
    work: [],
  },
];

export default function CasesSection() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const [openProofImage, setOpenProofImage] = useState<{ src: string; alt: string } | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLElement | null>(null);
  const proofOpenRef = useRef(false);
  const visibleModalMetrics = activeCase?.modalMetrics ?? (activeCase ? [...activeCase.secondary, ...activeCase.fullMetrics] : []);

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

          <article className="case-card case-contact-card">
            <div className="case-contact-card-top">
              <span>Новый проект</span>
              <span>Следующий кейс</span>
            </div>

            <div className="case-contact-card-copy">
              <h3>
                Ваш проект может стать <em>следующим кейсом</em>
              </h3>
              <p>Расскажите о задаче — обсудим, какой результат можно получить.</p>
            </div>

            <a className="case-contact-card-button" href="#contact">
              Обсудить сотрудничество <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>

      {activeCase &&
        createPortal(
          <>
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
                {activeCase.startNote && <p className="case-modal-start-note">{activeCase.startNote}</p>}
              </header>

              <section className="case-modal-section case-modal-task">
                <p className="case-modal-label">Задача</p>
                <p>{activeCase.task}</p>
              </section>

              {activeCase.resultMetrics && (
                <section className="case-modal-section case-business-section">
                  <p className="case-modal-label">Результат</p>
                  <div className="case-business-grid">
                    {activeCase.resultMetrics.map((metric) => (
                      <div className="case-business-metric" key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeCase.economics?.map((equation, equationIndex) => (
                <section className="case-modal-section case-economics-section" key={equation.result.label}>
                  <p className="case-modal-label">{equationIndex === 0 ? "Экономика одного клиента" : "Экономика месячной когорты"}</p>
                  <div className="case-economics-equation">
                    {equation.factors.map((factor, factorIndex) => (
                      <div className="case-equation-part" key={factor.label}>
                        {factorIndex > 0 && <span className="case-equation-operator" aria-hidden="true">×</span>}
                        <div>
                          <strong>{factor.value}</strong>
                          <span>{factor.label}</span>
                        </div>
                      </div>
                    ))}
                    <span className="case-equation-operator" aria-hidden="true">=</span>
                    <div className="case-equation-result">
                      <strong>{equation.result.value}</strong>
                      <span>{equation.result.label}</span>
                    </div>
                  </div>
                </section>
              ))}

              {activeCase.returnMetrics && (
                <section className="case-modal-section case-return-section">
                  <p className="case-modal-label">Окупаемость</p>
                  <div className="case-return-grid">
                    {activeCase.returnMetrics.map((metric) => (
                      <div key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                        {metric.detail && <small>{metric.detail}</small>}
                      </div>
                    ))}
                  </div>
                  {activeCase.returnNote && <p className="case-return-note">{activeCase.returnNote}</p>}
                </section>
              )}

              {activeCase.periodMetrics && (
                <section className="case-modal-section case-period-section">
                  <p className="case-modal-label">Итог за период</p>
                  <p className="case-period-note">Ноябрь 2024 — март 2026 · около 17 месяцев</p>
                  <div className="case-period-grid">
                    {activeCase.periodMetrics.map((metric) => (
                      <div key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

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

              {activeCase.stages && (
                <section className="case-modal-section case-stage-section">
                  <div className="case-stage-grid">
                    {activeCase.stages.map((stage) => (
                      <article className="case-stage" key={stage.title}>
                        <header className="case-stage-heading">
                          <strong>{stage.title}</strong>
                          {stage.note && <span>{stage.note}</span>}
                        </header>
                        <div className="case-stage-metrics">
                          {stage.metrics.map((metric) => (
                            <div key={metric.label}>
                              <strong>{metric.value}</strong>
                              <span>{metric.label}</span>
                              {metric.detail && <small>{metric.detail}</small>}
                            </div>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {activeCase.summary && activeCase.id !== "footwear" && (
                <section className="case-modal-section case-modal-summary">
                  <p className="case-modal-label">Итог</p>
                  <p>{activeCase.summary}</p>
                </section>
              )}

              {activeCase.id !== "education" && (
                <section className="case-modal-section">
                  <p className="case-modal-label">Ключевые результаты</p>
                  <div className={`case-modal-results case-modal-results-${activeCase.id} ${visibleModalMetrics.length % 2 ? "has-odd-metrics" : ""}`}>
                    <div className="case-modal-main-result">
                      <strong>{activeCase.modalPrimaryValue ?? activeCase.primary.value}</strong>
                      <span>{activeCase.modalPrimaryLabel ?? activeCase.primary.label}</span>
                    </div>
                    {visibleModalMetrics.map((metric) => (
                      <div className="case-modal-metric" key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                        {metric.detail && <small>{metric.detail}</small>}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeCase.summary && activeCase.id === "footwear" && (
                <section className="case-modal-section case-modal-summary">
                  <p className="case-modal-label">Итог</p>
                  <p>{activeCase.summary}</p>
                </section>
              )}

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

              {(activeCase.proofs || activeCase.proof) && (
                <section className="case-modal-section case-modal-proof">
                  {activeCase.proofs ? (
                  <div className="case-proof-grid">
                    {activeCase.proofs.map((proof) => (
                      <figure className="case-proof-card" key={proof.title || proof.alt}>
                        {proof.title && <p>{proof.title}</p>}
                        {proof.src ? (
                          <button className="case-proof-trigger" type="button" onClick={() => openProof(proof.src!, proof.alt)} aria-label={`Открыть крупнее: ${proof.title || proof.caption || "изображение"}`}>
                            <img src={proof.src} alt={proof.alt} />
                          </button>
                        ) : (
                          <div className="case-proof-slot" role="img" aria-label={proof.alt}><span>Место для скриншота</span></div>
                        )}
                        <figcaption>
                          {proof.amount && <strong>{proof.amount}</strong>}
                          {proof.label && <span>{proof.label}</span>}
                          {proof.caption && <span>{proof.caption}</span>}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  ) : activeCase.proof ? (
                  <figure>
                    <button className="case-proof-trigger" type="button" onClick={() => openProof(activeCase.proof!.src, activeCase.proof!.alt)} aria-label="Открыть изображение крупнее">
                      <img src={activeCase.proof.src} alt={activeCase.proof.alt} />
                    </button>
                    <figcaption>{activeCase.proof.caption}</figcaption>
                  </figure>
                  ) : null}
                </section>
              )}

              {activeCase.work.length > 0 && (
                <section className="case-modal-section">
                  <p className="case-modal-label">Что было сделано</p>
                  <ol className="case-modal-work">
                    {activeCase.work.map((item, index) => (
                      <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
                    ))}
                  </ol>
                </section>
              )}

              <footer className="case-modal-footer">
                <a href="#contact" onClick={closeModal}>Обсудить сотрудничество <span aria-hidden="true">↗</span></a>
              </footer>

              </article>
            </div>

            {openProofImage && (
              <div className="case-proof-lightbox" role="dialog" aria-modal="true" aria-label="Увеличенное изображение" onClick={closeProof}>
                <button className="case-proof-lightbox-close" type="button" onClick={(event) => {
                  event.stopPropagation();
                  closeProof();
                }} aria-label="Закрыть увеличенное изображение">
                  <span aria-hidden="true">×</span>
                </button>
                <img src={openProofImage.src} alt={openProofImage.alt} onClick={(event) => event.stopPropagation()} />
              </div>
            )}
          </>,
          document.body,
        )}
    </>
  );
}
