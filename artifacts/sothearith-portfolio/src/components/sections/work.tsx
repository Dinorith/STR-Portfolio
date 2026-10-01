import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { projectsList as projects } from '@/data/projects-data';
import ProjectVisual from '@/components/mockups/project-visual';

export default function Work() {
  const [active, setActive] = useState(projects[0].slug);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    projects.forEach((p) => {
      const el = document.getElementById(p.slug);
      if (el) {
        const ob = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) setActive(p.slug);
          },
          { rootMargin: '-35% 0px -45% 0px' },
        );
        ob.observe(el);
        observers.push(ob);
      }
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="work" className="section wrap">
      <div className="section-kicker mono">02 / SELECTED WORK</div>
      <div className="projects-head">
        <h2 className="display">
          PROJECTS<br />
          I'VE BUILT.
        </h2>
        <p>
          A selection of interfaces, products, and digital experiences. Each project here is a design
          exploration, made to ask better questions and make useful ideas tangible.
        </p>
      </div>

      <div className="project-layout">
        <nav className="project-index" aria-label="Project index">
          {projects.map((p, i) => (
            <a
              key={p.slug}
              className={active === p.slug ? 'active' : ''}
              href={`#${p.slug}`}
            >
              <span className="index-dot">{active === p.slug ? '●' : '○'}</span> 0{i + 1} {p.label}
            </a>
          ))}
        </nav>

        <div className="project-stack">
          {projects.map((p, i) => (
            <Link
              href={`/work/${p.slug}`}
              className={`project-card ${p.theme}`}
              id={p.slug}
              key={p.slug}
              aria-label={`View case study: ${p.name}`}
              data-cursor="project"
              data-testid={`link-project-${p.slug}`}
            >
              <div className="project-info">
                <span className="project-number">0{i + 1}</span>
                <div>
                  <span className="mono">
                    {p.category} / {p.year}
                  </span>
                  <h3 className="project-title">{p.name}</h3>
                  <p className="project-detail">{p.desc}</p>
                </div>
                <div>
                  <div className="project-tags">
                    {(p.tags || ['UI/UX', 'DESIGN']).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="project-link">
                    VIEW CASE STUDY <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              <ProjectVisual project={p} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
