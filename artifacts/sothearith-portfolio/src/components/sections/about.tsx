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
            I’m Sothearith, a UI/UX designer from Cambodia. I work across web and mobile products, with a focus on turning complex requirements and workflows into clear, practical experiences. I care about the details that make a product easier to understand, navigate, and use.
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

        <div className="portrait-container">
          <img
            src="/portrait.jpg"
            alt="Sothearith portrait"
            className="portrait-image"
          />
          <div className="portrait-meta mono">
            <span>[ 03 / PORTRAIT ]</span>
            <span>SOTHEARITH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
