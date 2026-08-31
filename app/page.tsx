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
            <h2 id="cases-title">Мои кейсы</h2>
          </div>

          <div className="cases-list">
            <article className="case-card">
              <div className="case-card-copy">
                <div className="case-tags" aria-label="Категория и период кейса">
                  <span>2024 → 2025</span>
                  <span>Онлайн-курсы</span>
                </div>
                <div className="case-brief">
                  <p>Finmaster Group — онлайн-образование в Казахстане.</p>
                  <p><strong>Цель:</strong> масштабировать платный трафик, сохранив экономику продаж.</p>
                  <div className="case-results" aria-label="Ключевые результаты">
                    <span><b>+105%</b> покупок</span>
                    <span><b>₸197 млн</b> выручка</span>
                    <span><b>−32%</b> CAC</span>
                  </div>
                </div>
                <a className="case-link" href="#contact">Обсудить кейс <ArrowUpRight /></a>
              </div>

              <figure className="case-visual case-visual-dashboard">
                <div className="case-visual-label">Продуктовая аналитика · 2025</div>
                <img src="/case-online-education.png" alt="Анонимизированный отчёт по продуктам онлайн-школы" />
                <figcaption><strong>1 049</strong><span>покупок за год</span></figcaption>
              </figure>
            </article>

            <article className="case-card">
              <div className="case-card-copy">
                <div className="case-tags" aria-label="Категория и период кейса">
                  <span>12 месяцев</span>
                  <span>Детский спорт</span>
                </div>
                <div className="case-brief">
                  <p>Сеть детских футбольных школ: Meta Ads + amoCRM.</p>
                  <p><strong>Цель:</strong> связать четыре рекламных кабинета с продажами и выручкой в одной системе.</p>
                  <div className="case-results" aria-label="Ключевые результаты">
                    <span><b>1 848</b> продаж</span>
                    <span><b>₸60,9 млн</b> выручка</span>
                    <span><b>2,37×</b> ROAS</span>
                  </div>
                </div>
                <a className="case-link" href="#contact">Обсудить кейс <ArrowUpRight /></a>
              </div>

              <figure className="case-visual case-visual-football">
                <div className="case-visual-label">Сводный отчёт · Meta + CRM</div>
                <img src="/case-football-school.png" alt="Отчёт по рекламе и продажам сети детских футбольных школ" />
                <figcaption><strong>$28,22</strong><span>стоимость продажи</span></figcaption>
              </figure>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
