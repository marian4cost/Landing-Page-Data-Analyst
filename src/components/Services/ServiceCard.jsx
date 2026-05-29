import './Services.css';

export default function ServiceCard({ icon, title, description, delay }) {
  return (
    <div className="service-card fade-in" style={{ transitionDelay: `${delay}ms` }}>
      <div className="service-card__icon">
        {icon}
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </div>
  );
}
