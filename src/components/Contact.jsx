import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks';
import { Mail, Github, Linkedin, Arrow } from './Icons';

export default function Contact() {
  const { t } = useApp();
  const c = t.contact;
  const ref = useReveal();
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = encodeURIComponent(`Website message from ${data.get('name') || ''}`);
    const body = encodeURIComponent(`${data.get('message') || ''}\n\n— ${data.get('name') || ''} (${data.get('email') || ''})`);
    // 用 mailto 開啟郵件軟體 / open the user's mail client
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container reveal" ref={ref}>
        <p className="kicker">{c.kicker}</p>
        <h2 className="section__title">{c.title}</h2>
        <p className="section__subtitle">{c.subtitle}</p>

        <div className="contact__grid">
          <div className="contact__info">
            <h3>{c.infoTitle}</h3>
            <ul className="contact__list">
              <li>
                <a href={`mailto:${c.email}`} className="contact__item">
                  <span className="contact__item-icon"><Mail /></span>
                  <span>{c.email}</span>
                </a>
              </li>
              <li>
                <a href={c.githubUrl} target="_blank" rel="noopener noreferrer" className="contact__item">
                  <span className="contact__item-icon"><Github /></span>
                  <span>{c.github}</span>
                </a>
              </li>
              <li>
                <a href={c.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact__item">
                  <span className="contact__item-icon"><Linkedin /></span>
                  <span>{c.linkedin}</span>
                </a>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={onSubmit}>
            <h3>{c.formTitle}</h3>
            <div className="field">
              <label htmlFor="name">{c.nameLabel}</label>
              <input id="name" name="name" type="text" placeholder={c.namePlaceholder} required />
            </div>
            <div className="field">
              <label htmlFor="email">{c.emailLabel}</label>
              <input id="email" name="email" type="email" placeholder={c.emailPlaceholder} required />
            </div>
            <div className="field">
              <label htmlFor="message">{c.messageLabel}</label>
              <textarea id="message" name="message" rows="4" placeholder={c.messagePlaceholder} required />
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              {sent ? c.sent : c.send} {!sent && <Arrow />}
            </button>
            <p className="contact__note">{c.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
