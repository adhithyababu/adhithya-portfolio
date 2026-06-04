import type { SkillCategory } from '../types/portfolio';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 bg-bg2 border-t border-b border-border">
      <div className="max-w-5xl mx-auto px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-border block" />
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-subtle">
            Skills & Services
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((category) => (
            <div
              key={category.name}
              className="bg-bg border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
                <span className="text-[0.85rem] font-semibold text-ink">{category.name}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-[0.72rem] font-medium px-2 py-1 rounded"
                    style={{ background: '#E6F1FB', color: '#185FA5' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
