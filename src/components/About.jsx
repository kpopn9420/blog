import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks';
import { asset } from '../i18n';
import { skillIcons } from './Icons';

export default function About() {
  const { t } = useApp();
  const a = t.about;
  const education = t.education || [];
  const ref = useReveal();
  const educationRef = useReveal();

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

        {education.length > 0 && (
          <div className="education reveal" ref={educationRef}>
            <h3 className="education__title">{a.educationTitle}</h3>
            <ol className="education__timeline">
              {education.map((item) => (
                <li className="education-item" key={`${item.period}-${item.school}`}>
                  <div className="education-item__logo">
                    <img src={asset(item.logo)} alt={item.logoAlt} loading="lazy" />
                  </div>
                  <div className="education-item__content">
                    <time>{item.period}</time>
                    <h4>{item.school}</h4>
                    <p>{item.degree}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
