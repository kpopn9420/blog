import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { useActiveSection } from '../hooks';
import { asset, SECTIONS } from '../i18n';
import { Sun, Moon } from './Icons';

export default function Navbar() {
  const { t, lang, theme, toggleLang, toggleTheme } = useApp();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={(e) => go(e, 'home')}>
          <img className="nav__brand-avatar" src={asset('profile.webp')} alt="" aria-hidden="true" />
          <span className="nav__brand-text">{lang === 'zh' ? '謝宜庭' : 'Yi-Ting'}</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link ${active === id ? 'is-active' : ''}`}
              onClick={(e) => go(e, id)}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
          <button className="lang-btn" onClick={toggleLang} aria-label="Switch language">
            {t.langLabel}
          </button>
          <button
            className={`burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
