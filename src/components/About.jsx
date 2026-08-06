import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks';
import { skillIcons } from './Icons';

export default function About() {
  const { t } = useApp();
  const a = t.about;
  const ref = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container reveal" ref={ref}>
        <p className="kicker">{a.kicker}</p>
        <h2 className="section__title">{a.title}</h2>

        <div className="about__grid">
          <div className="about__text">
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about__skills">
            <h3 className="about__skills-title">{a.highlightsTitle}</h3>
            <ul className="skill-list">
              {a.highlights.map((s, i) => {
                const Icon = skillIcons[s.icon];
                return (
                  <li className="skill" key={i}>
                    <span className="skill__icon">{Icon && <Icon />}</span>
                    <span>{s.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
