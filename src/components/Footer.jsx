import { useApp } from '../context/AppContext';
import { Github, Linkedin, Mail } from './Icons';

export default function Footer() {
  const { t, lang } = useApp();
  const c = t.contact;
  const year = new Date().getFullYear();
  const name = lang === 'zh' ? '謝宜庭' : 'Hsieh Yi-Ting';

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="nav__brand-mark">宜</span>
          <span>{name}</span>
        </div>
        <div className="footer__social">
          <a href={c.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
          <a href={c.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={`mailto:${c.email}`} aria-label="Email"><Mail /></a>
        </div>
        <p className="footer__copy">
          © {year} {name}. {t.footer.rights}. · {t.footer.built}
        </p>
      </div>
    </footer>
  );
}
