import type { Profile } from '../types/portfolio';

const techPills = ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Python', 'AI / ML'];

interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <div id="hero" className="max-w-5xl mx-auto px-8 pt-24 pb-20">
      {/* Available label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-border block" />
        <span className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-subtle">
          Available for opportunities
        </span>
      </div>

      {/* Name */}
      <h1
        className="font-serif leading-none tracking-tight mb-4"
        style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
      >
        {profile.shortName}{' '}
        <em className="italic not-italic" style={{ color: '#185FA5' }}>
          Babu
        </em>
      </h1>

      {/* Tagline */}
      <p className="text-lg text-muted max-w-xl leading-relaxed mb-10 font-light">
        {profile.tagline} — from intelligent backends to polished user interfaces.
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {techPills.map((p) => (
          <span
            key={p}
            className="text-[0.78rem] font-medium bg-bg3 border border-border rounded-full px-4 py-1.5 text-muted"
          >
            {p}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex gap-3 flex-wrap">
        <a
          href="#projects"
          className="bg-accent text-white rounded-md px-7 py-3 text-sm font-medium hover:bg-accent2 transition-colors duration-200"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-border rounded-md px-7 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors duration-200"
        >
          Get in Touch
        </a>
      </div>

      {/* Divider */}
      <div className="mt-20 h-px bg-border" />
    </div>
  );
}
