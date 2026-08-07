import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks';
import { Mail, Github, Linkedin, Arrow } from './Icons';

const FORM_ENDPOINT = 'https://formspree.io/f/xgvadwer';

export default function Contact() {
  const { t } = useApp();
  const c = t.contact;
  const ref = useReveal();
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('_subject', `Portfolio message from ${data.get('name') || 'a visitor'}`);
    setStatus('submitting');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const submitting = status === 'submitting';
  const feedback = status === 'success' ? c.sent : status === 'error' ? c.error : c.note;

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

          <form
            className="contact__form"
            action={FORM_ENDPOINT}
            method="POST"
            onSubmit={onSubmit}
            aria-busy={submitting}
          >
            <h3>{c.formTitle}</h3>
            <input className="hp-field" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
            <div className="field">
              <label htmlFor="name">{c.nameLabel}</label>
              <input id="name" name="name" type="text" placeholder={c.namePlaceholder} disabled={submitting} required />
            </div>
            <div className="field">
              <label htmlFor="email">{c.emailLabel}</label>
              <input id="email" name="email" type="email" placeholder={c.emailPlaceholder} disabled={submitting} required />
            </div>
            <div className="field">
              <label htmlFor="message">{c.messageLabel}</label>
              <textarea id="message" name="message" rows="4" placeholder={c.messagePlaceholder} disabled={submitting} required />
            </div>
            <button type="submit" className="btn btn--primary btn--full" disabled={submitting}>
              {submitting ? c.sending : c.send} {!submitting && <Arrow />}
            </button>
            <p className={`contact__note contact__note--${status}`} role="status" aria-live="polite">
              {feedback}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
