import useScrollAnimation from '../../hooks/useScrollAnimation';
import ServiceCard from './ServiceCard';
import './Services.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9" rx="1" />
        <rect x="10" y="7" width="4" height="14" rx="1" />
        <rect x="17" y="3" width="4" height="18" rx="1" />
      </svg>
    ),
    title: 'Análise de Dados',
    description:
      'Transformo dados brutos em insights estratégicos para instituições de saúde. Análises estatísticas, identificação de padrões e suporte à tomada de decisão clínica e administrativa.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        <line x1="9" y1="13" x2="15" y2="13" />
      </svg>
    ),
    title: 'Organização de Informações',
    description:
      'Estruturo e organizo bancos de dados, prontuários e registros para facilitar o acesso e a confiabilidade das informações no seu ambiente de trabalho.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <circle cx="17.5" cy="17.5" r="3.5" />
      </svg>
    ),
    title: 'Gráficos e Dashboards',
    description:
      'Crio painéis interativos e visualizações claras que facilitam o monitoramento de indicadores de saúde, metas assistenciais e KPIs institucionais.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <line x1="9" y1="7" x2="16" y2="7" />
        <line x1="9" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: 'Minicursos',
    description:
      'Capacitação em Python, Pandas, Matplotlib, probabilidade e estatística aplicada. Cursos práticos voltados a profissionais da saúde que desejam dominar a análise de dados.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Consultoria e Treinamentos',
    description:
      'Consultoria personalizada para equipes e gestores de saúde. Treinamentos práticos para implementar cultura data-driven em hospitais, clínicas e laboratórios.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M12 12l5-3" />
        <path d="M12 12v6" />
      </svg>
    ),
    title: 'Extração de Dados',
    description:
      'Extraio e consolido dados de múltiplas fontes — planilhas, sistemas de saúde, bases públicas e APIs — garantindo integridade e rastreabilidade da informação.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Acompanhamento e Monitoramento',
    description:
      'Monitoramento contínuo de indicadores e métricas de saúde. Acompanho seus dados ao longo do tempo para garantir que as decisões estejam gerando resultados.',
  },
];

export default function Services() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="services" id="servicos">
      <div className="services__header">
        <h2 className="services__title">Serviços</h2>
        <div className="services__underline"></div>
        <p className="services__subtitle">
          Soluções completas em análise de dados para o setor da saúde
        </p>
      </div>

      <div className="services__grid" ref={sectionRef}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}
