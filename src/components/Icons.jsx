// 精簡的 inline SVG 圖示 / lightweight inline SVG icons
const s = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Sun = (p) => (
  <svg {...s} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const Moon = (p) => (
  <svg {...s} {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
);
export const Github = (p) => (
  <svg {...s} {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 20 4.8a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.6 12.6 0 0 0-6.6 0C7 .9 5.9 1.2 5.9 1.2A4.9 4.9 0 0 0 5.8 4.8 5.2 5.2 0 0 0 4.4 8.4c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22" /></svg>
);
export const Linkedin = (p) => (
  <svg {...s} {...p}><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6zM6 9H2v11h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
);
export const Mail = (p) => (
  <svg {...s} {...p}><rect x="2" y="4" width="20" height="16" rx="2.5" /><path d="m3 6 9 6 9-6" /></svg>
);
export const Arrow = (p) => (
  <svg {...s} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ChevronDown = (p) => (
  <svg {...s} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const External = (p) => (
  <svg {...s} width="16" height="16" {...p}><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
);

// 專長圖示 / skill icons
export const Brain = (p) => (
  <svg {...s} {...p}><path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.5a3 3 0 0 0-1.5 5.6A3 3 0 0 0 7 16v.5A2.5 2.5 0 0 0 12 17V4.5A2.5 2.5 0 0 0 9.5 2zM14.5 2A2.5 2.5 0 0 1 17 4.5v.5a3 3 0 0 1 1.5 5.6A3 3 0 0 1 17 16v.5A2.5 2.5 0 0 1 12 17" /></svg>
);
export const Spark = (p) => (
  <svg {...s} {...p}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /><circle cx="12" cy="12" r="3" /></svg>
);
export const Chip = (p) => (
  <svg {...s} {...p}><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></svg>
);
export const Code = (p) => (
  <svg {...s} {...p}><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg>
);

export const skillIcons = { brain: Brain, spark: Spark, chip: Chip, code: Code };
