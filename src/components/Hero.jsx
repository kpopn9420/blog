import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Arrow, ChevronDown } from './Icons';

// 打字輪播效果 / rotating typed roles
function useTypedRoles(roles) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    setText('');
    setI(0);
    setDel(false);
  }, [roles]);

  useEffect(() => {
    const full = roles[i % roles.length];
    if (!del && text === full) {
      const p = setTimeout(() => setDel(true), 1400);
      return () => clearTimeout(p);
    }
    if (del && text === '') {
      setDel(false);
      setI((v) => (v + 1) % roles.length);
      return;
    }
    const speed = del ? 45 : 90;
    const timer = setTimeout(() => {
      setText(del ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, del, i, roles]);

  return text;
}

export default function Hero() {
  const { t } = useApp();
  const h = t.hero;
  const typed = useTypedRoles(h.roles);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="blob blob--1" />
        <div className="blob blob--2" />
        <div className="blob blob--3" />
        <div className="grid-overlay" />
      </div>

      <div className="hero__content">
        <p className="hero__greeting">{h.greeting}</p>
        <h1 className="hero__name">{h.name}</h1>
        <div className="hero__role">
          <span className="hero__role-text">{typed}</span>
          <span className="hero__caret" />
        </div>
        <p className="hero__tagline">{h.tagline}</p>
        <p className="hero__subtitle">{h.subtitle}</p>

        <div className="hero__cta">
          <button className="btn btn--primary" onClick={() => go('projects')}>
            {h.ctaProjects} <Arrow />
          </button>
          <button className="btn btn--ghost" onClick={() => go('contact')}>
            {h.ctaContact}
          </button>
        </div>
      </div>

      <button className="hero__scroll" onClick={() => go('about')} aria-label={h.scroll}>
        <span>{h.scroll}</span>
        <ChevronDown />
      </button>
    </section>
  );
}
