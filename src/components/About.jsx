import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks';
import { asset } from '../i18n';
import { skillIcons } from './Icons';

export default function About() {
  const { t } = useApp();
  const a = t.about;
  const moments = t.moments || [];
  const ref = useReveal();
  const momentsRef = useReveal();

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

        {moments.length > 0 && (
          <div className="moments reveal" ref={momentsRef}>
            <h3 className="moments__title">{a.momentsTitle}</h3>
            <div className="moments__grid">
              {moments.map((m, i) => (
                <figure className="moment" key={i}>
                  <img className="moment__img" src={asset(m.img)} alt={m.caption} loading="lazy" />
                  <figcaption className="moment__caption">{m.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
