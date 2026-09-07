const stageSteps = [
  ["Бриф", "Аудит", "Рынок и продукт", "Стратегия и офферы", "Креативы"],
  ["Pixel + CAPI + GA4", "Запуск", "Тесты", "Аналитика", "Отчёт"],
  ["Рабочие связки", "Рост бюджета", "Контроль CPA и ROAS", "Новые гипотезы", "Dashboard"],
];

function StepList({ stage }: { stage: number }) {
  return (
    <ol className="process-substeps" aria-label={`Подэтапы этапа ${stage + 1}`}>
      {stageSteps[stage].map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>{item}
        </li>
      ))}
    </ol>
  );
}

function StrategyBoard({ active }: { active: number }) {
  return (
    <div className={`process-scene strategy-board process-step-${active}`} aria-hidden="true">
      <div className="strategy-brief">
        <p>Бриф</p>
        <dl><div><dt>Продукт</dt><dd>Экспертная услуга</dd></div><div><dt>ЦА</dt><dd>Владельцы бизнеса</dd></div><div><dt>Средний чек</dt><dd>₸150K</dd></div><div><dt>Гео</dt><dd>KZ</dd></div></dl>
      </div>
      <div className="strategy-research">
        <p>Анализ рынка</p>
        <span>Конкурент 01</span><span>Конкурент 02</span><span>Конкурент 03</span>
      </div>
      <div className="strategy-offers">
        <p>Офферы</p>
        <strong>01</strong><strong>02</strong><strong>03</strong>
      </div>
      <div className="strategy-creatives">
        <p>Направления креативов</p>
        <i /><i /><i />
      </div>
    </div>
  );
}

function AdvertisingWorkspace({ active }: { active: number }) {
  return (
    <div className={`process-scene advertising-workspace process-step-${active}`} aria-hidden="true">
      <div className="ads-tracking"><p>Аналитика</p><span>Pixel</span><span>CAPI</span><span>GA4</span></div>
      <div className="ads-tests">
        <p>Активные тесты</p>
        <div><span>Тест 01</span><strong>CPA $42</strong></div>
        <div className="ads-test-winner"><span>Тест 02</span><strong>CPA $29</strong></div>
        <div><span>Тест 03</span><strong>CPA $51</strong></div>
      </div>
      <div className="ads-creatives">
        <p>Креатив / оффер</p>
        <div className="ads-creative-card"><span>01</span><strong>Боль</strong></div>
        <div className="ads-creative-card is-selected"><span>02</span><strong>Оффер</strong></div>
        <div className="ads-creative-card"><span>03</span><strong>Доверие</strong></div>
      </div>
      <dl className="ads-metrics"><div><dt>Расходы</dt><dd>$8.4K</dd></div><div><dt>Лиды</dt><dd>1 286</dd></div><div><dt>CPA</dt><dd>$29</dd></div><div><dt>ROAS</dt><dd>4.5×</dd></div></dl>
      <p className="ads-result"><span /> Лучшая связка найдена</p>
    </div>
  );
}

function GrowthDashboard({ active }: { active: number }) {
  return (
    <div className={`process-scene growth-dashboard process-step-${active}`} aria-hidden="true">
      <div className="growth-selected"><p>Рабочая связка</p><strong>Кампания 02 · CPA $30 · ROAS 4.5×</strong></div>
      <div className="growth-topline">
        <div><p>Бюджет</p><strong>$20</strong><i>→</i><strong>$50</strong><i>→</i><strong>$100</strong></div>
        <dl><div><dt>CPA</dt><dd>$31 · $30 · $32</dd></div><div><dt>ROAS</dt><dd>4.2× · 4.5× · 4.3×</dd></div></dl>
      </div>
      <div className="growth-crm"><p>CRM</p><span>Лид</span><i>→</i><span>Квалифицирован</span><i>→</i><span>Продажа</span></div>
      <div className="growth-report">
        <dl><div><dt>Расходы</dt><dd>$24K</dd></div><div><dt>Продажи</dt><dd>386</dd></div><div><dt>CPA</dt><dd>$31</dd></div><div><dt>Выручка</dt><dd>₸42M</dd></div><div><dt>ROAS</dt><dd>4.7×</dd></div></dl>
        <div className="growth-chart"><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
      <div className="growth-cycle"><span>Рабочая гипотеза</span><i>→</i><span>Масштаб</span><i>→</i><span>Анализ</span><i>→</i><span>Новая гипотеза</span><b>↻</b></div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className="process-scenes-section" id="process" aria-labelledby="process-scenes-title">
      <header className="process-scenes-heading"><h2 id="process-scenes-title">Как я работаю</h2></header>

      <article className="process-chapter process-chapter-one" data-process-stage="0">
        <div className="process-chapter-main">
          <div className="process-chapter-copy">
            <div className="process-chapter-index"><strong>01</strong><span>Подготовка</span></div>
            <h3>Сначала разбираюсь<br />в продукте</h3>
            <p>До запуска рекламы изучаю продукт, рынок и текущую рекламу, <span className="mobile-text-break" />собираю стратегию, офферы и креативы.</p>
          </div>
          <StepList stage={0} />
          <StrategyBoard active={4} />
        </div>
      </article>

      <article className="process-chapter process-chapter-two" data-process-stage="1">
        <div className="process-chapter-main">
          <div className="process-chapter-copy">
            <div className="process-chapter-index"><strong>02</strong><span>Запуск и аналитика</span></div>
            <h3><span className="process-title-nowrap">Запускаю, тестирую</span><br />и считаю</h3>
            <p>Настраиваю передачу данных, запускаю рекламные кампании, <span className="mobile-text-break" />тестирую гипотезы и анализирую эффективность рекламы и креативов.</p>
          </div>
          <StepList stage={1} />
          <AdvertisingWorkspace active={4} />
        </div>
      </article>

      <article className="process-chapter process-chapter-three" data-process-stage="2">
        <div className="process-chapter-main">
          <div className="process-chapter-copy">
            <div className="process-chapter-index"><strong>03</strong><span>Масштабирование</span></div>
            <h3>Масштабирую то,<br />что работает</h3>
            <p>Увеличиваю бюджеты на рабочих связках, контролирую CPA и ROAS, <span className="mobile-text-break" />запускаю новые гипотезы и ищу следующие точки роста.</p>
          </div>
          <StepList stage={2} />
          <GrowthDashboard active={4} />
        </div>
      </article>
    </section>
  );
}
