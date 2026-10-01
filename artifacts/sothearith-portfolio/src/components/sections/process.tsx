import React from 'react';
import { processItems } from '@/data/skills-data';

export default function Process() {
  return (
    <section className="section wrap" id="process">
      <div className="section-kicker mono">04 / PROCESS</div>
      <div className="process-grid">
        <div className="process-intro">
          <h2 className="display">
            HOW<br />
            I WORK.
          </h2>
          <p style={{ maxWidth: 320, lineHeight: 1.6 }}>
            A flexible, collaborative path from a first question to a considered experience. The right
            process makes room for what we learn.
          </p>
        </div>
        <div className="timeline">
          {processItems.map((step) => (
            <article className="process-item" key={step.number}>
              <span className="step">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
