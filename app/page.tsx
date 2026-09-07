import CasesSection from "./CasesSection";
import ContactModal from "./ContactModal";
import ProcessSection from "./ProcessSection";

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
            src="/sanzhar-hero-portrait.webp"
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

        <CasesSection />
        <ProcessSection />
      </div>
      <ContactModal />
    </main>
  );
}
