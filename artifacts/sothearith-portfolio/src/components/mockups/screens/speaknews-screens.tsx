import React from 'react';

const screenshotMap: Record<string, string> = {
  'homepage': '/speaknews-homepage.png',
  'article': '/speaknews-article.png',
  'footer-navigation': '/speaknews-footer.png',
  // Backward compatibility
  'current-audit': '/speaknews-homepage.png',
  'homepage-redesign': '/speaknews-article.png',
  'article-experience': '/speaknews-footer.png',
};

export function SpeakNewsCanvas({ sectionId }: { sectionId: string }) {
  const src = screenshotMap[sectionId];

  if (!src) {
    return (
      <div className="web-canvas speaknews-screenshot-canvas">
        <div className="screenshot-placeholder mono">SCREENSHOT NOT AVAILABLE</div>
      </div>
    );
  }

  return (
    <div className="web-canvas speaknews-screenshot-canvas">
      <img
        src={src}
        alt={`SpeakNews website — ${sectionId}`}
        className="speaknews-screenshot-img"
        loading="lazy"
      />
    </div>
  );
}

export function StudioWebCanvas({ sectionId: _sectionId }: { sectionId: string }) {
  return (
    <div className="web-canvas studio-canvas">
      <header className="studio-nav">
        <div className="studio-brand">ATELIER / 04</div>
        <div className="studio-links mono">
          <span>SPATIAL</span>
          <span>DIGITAL</span>
          <span>PHILOSOPHY</span>
          <span>INQUIRE</span>
        </div>
      </header>

      <div className="studio-hero-content">
        <div className="studio-tag mono">DESIGN PRACTICE &amp; SPATIAL LABORATORY</div>
        <h1 className="studio-headline">
          BUILDING<br />
          TANGIBLE<br />
          FUTURES.
        </h1>
        <div className="studio-bottom-grid">
          <p>We craft considered digital and architectural environments at the intersection of discipline and expression.</p>
          <div className="mono studio-loc">CAMBODIA / WORLDWIDE — 2026</div>
        </div>
      </div>
    </div>
  );
}
