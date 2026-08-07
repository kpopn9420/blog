import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks';
import { asset, publicAsset } from '../i18n';
import { External } from './Icons';

function ProjectCard({ project, index }) {
  const ref = useReveal();
  const links = (project.links || []).filter((link) => link.url);

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
        {project.stageLabel && <span className="card__stage">{project.stageLabel}</span>}
        <h3 className="card__title">{project.name}</h3>
        <p className="card__desc">{project.description}</p>
        {project.status && <p className="card__status">{project.status}</p>}
        <ul className="tags">
          {project.tags.map((tag) => (
            <li className="tag" key={tag}>{tag}</li>
          ))}
        </ul>
        {links.length > 0 && (
          <div className="card__links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.internal ? publicAsset(link.url) : link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card__link"
              >
                <External /> {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useApp();
  const p = t.projects;
  const ref = useReveal();
  const groups = (p.groups || []).map((group) => ({
    ...group,
    items: p.items
      .filter((project) => project.category === group.id)
      .sort((a, b) => (b.rank || 0) - (a.rank || 0)),
  }));

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="reveal" ref={ref}>
          <p className="kicker">{p.kicker}</p>
          <h2 className="section__title">{p.title}</h2>
          <p className="section__subtitle">{p.subtitle}</p>
        </div>
        <div className="projects__groups">
          {groups.map((group) => (
            <div className="projects-group" key={group.id}>
              <div className="projects-group__header">
                <div>
                  <p className="projects-group__period">{group.period}</p>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
                <span className="projects-group__count">{group.items.length}</span>
              </div>
              <div className="projects__grid">
                {group.items.map((project, index) => (
                  <ProjectCard key={project.name} index={index} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
