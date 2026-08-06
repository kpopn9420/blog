import { useEffect, useRef, useState } from 'react';
import { SECTIONS } from './i18n';

// 進入畫面時淡入 / reveal elements as they scroll into view
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// 追蹤目前所在區塊，用來高亮導覽列 / track the active section for nav highlighting
export function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const handler = () => {
      const mid = window.scrollY + window.innerHeight / 2.4;
      let current = 'home';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, []);
  return active;
}
