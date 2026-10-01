import React from 'react';
import { philosophyPrinciples } from '@/data/skills-data';

export default function Philosophy() {
  return (
    <section className="section wrap">
      <div className="section-kicker mono">DESIGN PHILOSOPHY</div>
      <div className="principles">
        {philosophyPrinciples.map((item) => (
          <article className="principle" key={item.number}>
            <span className="principle-num">{item.number} / PRINCIPLE</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
