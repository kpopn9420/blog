import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks';
import { asset } from '../i18n';
import { External } from './Icons';

function ProjectCard({ project, index }) {
  const ref = useReveal();
  return (
    <article className="card reveal" ref={ref} style={{ transitionDelay: `${index * 90}ms` }}>
      <div className="card__thumb" aria-hidden={project.image ? undefined : 'true'}>
        {project.image ? (
          <img className="card__thumb-img" src={asset(project.image)} alt={project.name} loading="lazy" />
        ) : (
          <span className="card__thumb-num">{String(index + 1).padStart(2, '0')}</span>
        )}
      </div>
      <div className="card__body">
        <h3 className="card__title">{project.name}</h3>
        <p className="card__desc">{project.description}</p>
        {project.status && <p className="card__status">{project.status}</p>}
        <ul className="tags">
          {project.tags.map((tag) => (
            <li className="tag" key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="card__links">
          {project.links
            .filter((l) => l.url)
            .map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="card__link">
                <External /> {l.label}
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useApp();
  const p = t.projects;
  const ref = useReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="reveal" ref={ref}>
          <p className="kicker">{p.kicker}</p>
          <h2 className="section__title">{p.title}</h2>
          <p className="section__subtitle">{p.subtitle}</p>
        </div>
        <div className="projects__grid">
          {p.items.map((project, i) => (
            <ProjectCard key={i} index={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
