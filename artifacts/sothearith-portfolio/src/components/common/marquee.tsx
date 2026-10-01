import React from 'react';

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const text = 'UI/UX DESIGN — PRODUCT DESIGN — DIGITAL EXPERIENCES — INTERACTION — ';
  return (
    <div
      className={`marquee ${reverse ? 'reverse' : ''}`}
      aria-label="UI/UX design, product design, digital experiences"
    >
      <div className="marquee-track" aria-hidden="true">
        {Array.from({ length: 4 }, (_, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
