import React from 'react';
import { bioFacts } from '@/data/skills-data';

export default function About() {
  return (
    <section id="about" className="section wrap">
      <div className="section-kicker mono">03 / ABOUT</div>
      <div className="about-grid">
        <div>
          <h2 className="about-title">
            I LIKE<br />
            MAKING<br />
            COMPLICATED<br />
            THINGS SIMPLE.
          </h2>
          <p className="about-copy">
            I'm Sothearith, a UI/UX designer focused on creating digital products that are clear,
            useful, and intentional. I work from Cambodia, partnering with people who care about making
            things better.
          </p>
          <div className="bio-facts">
            {bioFacts.map((fact) => (
              <div className="bio-fact" key={fact.label}>
                <span className="mono">{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div
          className="portrait-placeholder"
          role="img"
          aria-label="Abstract typographic portrait placeholder, portrait coming soon"
        >
          <span className="portrait-text">
            PORTRAIT<br />
            COMING<br />
            SOON
          </span>
          <span className="mono" style={{ position: 'absolute', bottom: 12, left: 12 }}>
            NO IMAGE / BY DESIGN
          </span>
        </div>
      </div>
    </section>
  );
}
