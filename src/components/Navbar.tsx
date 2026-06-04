import { useState, useEffect } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border shadow-sm' : 'border-b border-transparent'
      }`}
      style={{ background: 'rgba(248,247,244,0.93)', backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-between h-[60px]">
        <span className="font-serif text-xl tracking-tight text-ink">AB</span>
        <div className="flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] font-medium uppercase tracking-widest text-muted hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
