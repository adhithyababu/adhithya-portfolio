import type { Profile } from '../types/portfolio';

interface AboutSectionProps {
  profile: Profile;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-border block" />
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-subtle">About</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Headline */}
          <div>
            <h2
              className="font-serif leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Building things that{' '}
              <em className="italic" style={{ color: '#185FA5' }}>
                work
              </em>
              , elegantly.
            </h2>
          </div>

          {/* Bio + stats */}
          <div>
            <p
              className="text-base text-muted leading-loose mb-8"
              style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
            >
              {profile.bio}
            </p>

            <div className="flex gap-8 pt-6 border-t border-border">
              <div>
                <div className="font-serif text-4xl text-ink leading-none">4+</div>
                <div className="text-[0.75rem] text-subtle mt-1">Projects Shipped</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-ink leading-none">2</div>
                <div className="text-[0.75rem] text-subtle mt-1">Domains</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-ink leading-none">MERN</div>
                <div className="text-[0.75rem] text-subtle mt-1">Core Stack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
