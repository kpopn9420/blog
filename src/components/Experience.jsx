import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks';
import { asset } from '../i18n';

function ExperienceCard({ item, index }) {
  const ref = useReveal();

  return (
    <article
      className="experience-card reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`experience-card__media ${item.imageContain ? 'is-contain' : ''}`}>
        {item.image ? (
          <img src={asset(item.image)} alt={item.imageAlt || item.title} loading="lazy" />
        ) : (
          <span className="experience-card__monogram" aria-hidden="true">{item.monogram}</span>
        )}
        <span className="experience-card__period">{item.period}</span>
      </div>

      <div className="experience-card__body">
        <div className="experience-card__meta">
          <span>{item.organization}</span>
          <span>{item.category}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default function Experience() {
  const { t } = useApp();
  const e = t.experience;
  const ref = useReveal();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="reveal" ref={ref}>
          <p className="kicker">{e.kicker}</p>
          <h2 className="section__title">{e.title}</h2>
          <p className="section__subtitle">{e.subtitle}</p>
        </div>

        <div className="experience__grid">
          {e.items.map((item, index) => (
            <ExperienceCard key={`${item.period}-${item.title}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
