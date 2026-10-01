import React from 'react';
import { toolsList, skillsList } from '@/data/skills-data';

export default function Toolbox() {
  return (
    <section className="section wrap">
      <div className="section-kicker mono">05 / TOOLBOX</div>
      <div className="tool-layout">
        <div className="tool-intro">
          <h2 className="display">
            TOOLS<br />
            I USE.
          </h2>
          <p style={{ lineHeight: 1.6, maxWidth: 290 }}>
            A practical toolkit for asking, exploring, making, and communicating ideas.
          </p>
        </div>
        <div>
          <div className="tool-tags">
            {toolsList.map((t) => (
              <span className="tool-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="skill-list">
            {skillsList.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
