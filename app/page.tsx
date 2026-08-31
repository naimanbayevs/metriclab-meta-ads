const ArrowUpRight = () => (
  <span aria-hidden="true" className="arrow-up-right">
    ↗
  </span>
);

export default function Home() {
  return (
    <main className="site-shell">
      <div className="portfolio-panel">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Санжар Найманбаев — на главную">
            SN<span>.</span>
          </a>

          <nav className="main-nav" aria-label="Основная навигация">
            <a href="#cases">Кейсы</a>
            <a href="#process">Как я работаю</a>
            <a href="#services">Услуги</a>
          </nav>

          <a className="header-cta" href="#contact">
            <span className="header-cta-desktop">Обсудить проект</span>
            <span className="header-cta-mobile">Обсудить</span>
            <ArrowUpRight />
          </a>
        </header>

        <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Санжар Найманбаев · Meta Ads · Google Ads · TikTok Ads
          </p>

          <h1>
            Performance
            <br />
            <em>Marketer</em>
          </h1>

          <div className="hero-intro">
            <p className="value-proposition">
              Выстраиваю performance-маркетинг с фокусом на окупаемость —
              <br className="desktop-break" /> настраиваю рекламу, аналитику и связь с продажами под процессы бизнеса.
            </p>

            <div className="hero-proof mobile-proof" aria-label="Опыт и специализация">
              <div className="proof-item">
                <strong>10+</strong>
                <span className="proof-description">Лет в маркетинге</span>
              </div>
              <div className="proof-item">
                <strong>$500K+</strong>
                <span className="proof-description">Бюджетов под управлением</span>
              </div>
              <div className="proof-item">
                <strong>до ×5</strong>
                <span className="proof-description">Рост продаж в проектах</span>
              </div>
              <div className="proof-item">
                <strong>80%</strong>
                <span className="proof-description">клиентов работают со мной больше года</span>
              </div>
            </div>

            <div className="hero-actions mobile-actions">
              <a className="hero-button primary-cta" href="#contact">
                Обсудить проект <ArrowUpRight />
              </a>
              <a className="hero-button secondary-cta" href="#cases">
                Смотреть кейсы <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-actions">
              <a className="hero-button primary-cta" href="#contact">
                Обсудить проект <ArrowUpRight />
              </a>
              <a className="hero-button secondary-cta" href="#cases">
                Смотреть кейсы <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Портрет Санжара Найманбаева">
          <div className="accent-disc" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <p className="visual-note">
            Доступен для
            <br />
            новых проектов <span aria-hidden="true">↗</span>
          </p>
          <img
            className="hero-portrait"
            src="/sanzhar-hero-portrait.png"
            alt="Санжар Найманбаев"
            width="1145"
            height="1374"
          />
        </div>

        <div className="hero-proof" aria-label="Опыт и специализация">
          <div className="proof-item">
            <strong>10+</strong>
            <span>лет в рекламе и продажах</span>
          </div>
          <div className="proof-item">
            <strong>$500K+</strong>
            <span>рекламного бюджета под управлением</span>
          </div>
          <div className="proof-item">
            <strong>до ×5</strong>
            <span>рост продаж в проектах</span>
          </div>
          <div className="proof-item">
            <strong>80%</strong>
            <span>клиентов работают со мной больше года</span>
          </div>
        </div>
        </section>

        <section className="cases-section" id="cases" aria-labelledby="cases-title">
          <div className="cases-heading">
            <div>
              <p className="section-eyebrow"><span /> Кейсы / реальные данные</p>
              <h2 id="cases-title">От рекламного бюджета —<br /><em>до реальной выручки.</em></h2>
            </div>
            <p className="cases-intro">
              Два проекта, где результат измеряется не кликами и лидами,
              а покупками, продажами и деньгами в бизнесе.
            </p>
          </div>

          <div className="cases-list">
            <article className="case-card case-card-education">
              <header className="case-card-header">
                <div className="case-number">01</div>
                <div className="case-tags" aria-label="Категория и период кейса">
                  <span>Online education</span>
                  <span>2024 → 2025</span>
                </div>
              </header>

              <div className="case-card-copy">
                <p>Paid traffic / Казахстан</p>
                <h3>В 2 раза больше продаж —<br />при CAC ниже на 32%.</h3>
              </div>

              <div className="case-metrics case-metrics-light" aria-label="Результаты онлайн-образования">
                <div><strong>₸197 млн</strong><span>выручка за 2025</span></div>
                <div><strong>1 049</strong><span>покупок за год</span></div>
                <div><strong>6,22%</strong><span>конверсия в покупку</span></div>
                <div><strong>$63,8</strong><span>стоимость покупателя</span></div>
              </div>

              <div className="case-comparison" aria-label="Сравнение 2024 и 2025 годов">
                <div className="comparison-year comparison-year-before">
                  <span>2024</span>
                  <strong>512 покупок</strong>
                  <small>₸85,3 млн выручки · CAC $93,9</small>
                </div>
                <div className="comparison-growth" aria-hidden="true">
                  <i /><b>+105% покупок</b><i />
                </div>
                <div className="comparison-year comparison-year-after">
                  <span>2025</span>
                  <strong>1 049 покупок</strong>
                  <small>₸197 млн выручки · CAC $63,8</small>
                </div>
              </div>

              <p className="case-source">
                Результат за два сопоставимых полных года. Данные сверены по рекламной и коммерческой отчётности проекта.
              </p>
            </article>

            <article className="case-card case-card-football">
              <header className="case-card-header">
                <div className="case-number">02</div>
                <div className="case-tags" aria-label="Категория и период кейса">
                  <span>Детский спорт</span>
                  <span>12 месяцев</span>
                </div>
              </header>

              <div className="case-card-copy">
                <p>Meta Ads + amoCRM / 4 кабинета</p>
                <h3>1 848 продаж и ₸60,9 млн<br />выручки за 12 месяцев.</h3>
              </div>

              <div className="case-metrics case-metrics-dark" aria-label="Результаты сети футбольных школ">
                <div><strong>$52,2K</strong><span>рекламный бюджет</span></div>
                <div><strong>13 176</strong><span>новых заявок</span></div>
                <div><strong>$28,22</strong><span>стоимость продажи</span></div>
                <div><strong>2,37×</strong><span>blended ROAS</span></div>
              </div>

              <div className="case-funnel" aria-label="Воронка продаж футбольной школы">
                <div><span>01</span><strong>13 176</strong><small>заявок</small></div>
                <i><b>60,9%</b></i>
                <div><span>02</span><strong>8 026</strong><small>квал-лидов</small></div>
                <i><b>96%</b></i>
                <div><span>03</span><strong>7 701</strong><small>запись на пробное</small></div>
                <i><b>24%</b></i>
                <div><span>04</span><strong>1 848</strong><small>продаж</small></div>
              </div>

              <div className="case-card-footer">
                <p>
                  Объединил расходы из Meta с квалификациями, записями,
                  продажами и выручкой из CRM в одном дашборде.
                </p>
                <a href="#contact">Обсудить похожую задачу <ArrowUpRight /></a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
