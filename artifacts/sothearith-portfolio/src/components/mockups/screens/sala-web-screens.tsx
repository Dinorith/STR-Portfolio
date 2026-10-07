import React from 'react';

const salaWebScreenshotMap: Record<string, string> = {
  'web-dashboard': '/sala-web-dashboard.png',
  'web-students':  '/sala-web-students.png',
  'web-grades':    '/sala-web-grades.png',
};

export function SalaWebCanvas({ sectionId }: { sectionId: string }) {
  const src = salaWebScreenshotMap[sectionId] || '/sala-web-dashboard.png';

  return (
    <div className="web-canvas speaknews-screenshot-canvas">
      <img
        src={src}
        alt={`SALA App Web System — ${sectionId}`}
        className="speaknews-screenshot-img"
        loading="lazy"
      />
    </div>
  );
}
