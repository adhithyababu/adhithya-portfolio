import type { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const sorted = [...projects].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0));

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-border block" />
              <span className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-subtle">Work</span>
            </div>
            <h2
              className="font-serif tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              Selected Projects
            </h2>
          </div>
          <span className="text-[0.78rem] text-subtle">{projects.length} projects</span>
        </div>

        {/* Project list */}
        <div className="border border-border rounded-xl overflow-hidden">
          {sorted.map((project, i) => (
            <div
              key={project.id}
              className={`bg-bg2 grid gap-6 p-8 transition-colors duration-200 hover:bg-bg ${
                i < sorted.length - 1 ? 'border-b border-border' : ''
              }`}
              style={{ gridTemplateColumns: 'auto 1fr auto' }}
            >
              {/* Number */}
              <div
                className="font-serif text-2xl leading-none pt-0.5"
                style={{ color: project.highlight ? '#185FA5' : '#D3D1C7' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className="text-[1.05rem] font-semibold text-ink">{project.title}</span>
                  {project.highlight && (
                    <span
                      className="text-[0.68rem] font-medium px-2 py-0.5 rounded-full border"
                      style={{ background: '#E6F1FB', color: '#185FA5', borderColor: '#B5D4F4' }}
                    >
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-[0.85rem] text-muted leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[0.7rem] bg-bg3 border border-border text-muted px-2 py-0.5 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 items-end">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.75rem] font-medium px-3.5 py-1.5 rounded-md text-white transition-colors duration-200"
                    style={{ background: '#185FA5' }}
                    onMouseOver={(e) => (e.currentTarget.style.background = '#0C447C')}
                    onMouseOut={(e) => (e.currentTarget.style.background = '#185FA5')}
                  >
                    Live ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.75rem] font-medium px-3.5 py-1.5 rounded-md border border-border text-muted hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
