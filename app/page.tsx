const ArrowUpRight = () => (
  <span aria-hidden="true" className="arrow-up-right">
    ↗
  </span>
);

export default function Home() {
  return (
    <main className="site-shell">
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
          Обсудить проект <ArrowUpRight />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Таргетированная реклама · Meta Ads
          </p>

          <h1>
            Реклама
            <br />
            с фокусом
            <br />
            <em>на продажи</em>
          </h1>

          <div className="hero-intro">
            <p>
              Помогаю бизнесу получать целевые обращения и выстраивать понятную
              связь между рекламой, заявками и продажами.
            </p>

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
            Реклама, которая
            <br />
            работает на бизнес
          </p>
          <img
            className="hero-portrait"
            src="/sanzhar-hero.png"
            alt="Санжар Найманбаев"
            width="1122"
            height="1402"
          />
        </div>

        <div className="hero-proof" aria-label="Опыт и специализация">
          <div className="proof-item">
            <strong>10+</strong>
            <span>лет в рекламе и продажах</span>
          </div>
          <div className="proof-item">
            <strong>$500K</strong>
            <span>рекламного бюджета</span>
          </div>
          <div className="proof-item">
            <strong>×5</strong>
            <span>рост продаж</span>
          </div>
          <div className="proof-item">
            <strong>LTV↑</strong>
            <span>клиенты остаются надолго</span>
          </div>
        </div>
      </section>
    </main>
  );
}
