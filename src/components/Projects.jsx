import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks';
import { Github, External } from './Icons';

function ProjectCard({ project, labels, index }) {
  const ref = useReveal();
  return (
    <article className="card reveal" ref={ref} style={{ transitionDelay: `${index * 90}ms` }}>
      <div className="card__thumb" aria-hidden="true">
        <span className="card__thumb-num">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="card__body">
        <h3 className="card__title">{project.name}</h3>
        <p className="card__desc">{project.description}</p>
        <ul className="tags">
          {project.tags.map((tag) => (
            <li className="tag" key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="card__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="card__link">
              <Github /> {labels.viewCode}
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="card__link">
              <External /> {labels.viewDemo}
            </a>
          )}
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
            <ProjectCard key={i} index={i} project={project} labels={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
