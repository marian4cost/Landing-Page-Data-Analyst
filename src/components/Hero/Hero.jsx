import useScrollAnimation from '../../hooks/useScrollAnimation';
import dashboardImg from '../../assets/dashboard.png';
import './Hero.css';

export default function Hero() {
  const sectionRef = useScrollAnimation();

  const handleCTA = (e) => {
    e.preventDefault();
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" ref={sectionRef}>
      {/* Decorative floating elements */}
      <div className="hero__particles">
        <span className="particle particle--1"></span>
        <span className="particle particle--2"></span>
        <span className="particle particle--3"></span>
        <span className="particle particle--4"></span>
        <span className="particle particle--5"></span>
        <span className="particle particle--6"></span>
      </div>

      <div className="hero__container">
        <div className="hero__content fade-in">
          <span className="hero__tagline">Analista de Dados</span>
          <h1 className="hero__title">
            Transformando <span className="hero__title--accent">dados</span> em decisão
          </h1>
          <p className="hero__description">
            Relatórios, dashboards, gráficos, estudo de caso e análise
            para pesquisadores e profissionais.
          </p>
          <button className="hero__cta" onClick={handleCTA} id="cta-servicos">
            Conheça meus serviços
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
            </svg>
          </button>
        </div>

        <div className="hero__visual fade-in">
          <div className="hero__dashboard-wrapper">
            <div className="hero__dashboard-glow"></div>
            <img
              src={dashboardImg}
              alt="Dashboard de análise de dados para saúde"
              className="hero__dashboard-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
