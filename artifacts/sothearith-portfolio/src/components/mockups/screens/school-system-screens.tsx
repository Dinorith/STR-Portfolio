import React from 'react';

const rentflowScreenshotMap: Record<string, string> = {
  'landing-page': '/rentflow-landing.png',
  'superadmin-console': '/rentflow-superadmin.png',
  'owner-dashboard': '/rentflow-owner.png',
  // Backward compatibility / aliases
  'dashboard': '/rentflow-landing.png',
  'properties': '/rentflow-superadmin.png',
  'contracts': '/rentflow-owner.png',
  'payments': '/rentflow-owner.png',
};

export function SchoolSystemCanvas({ sectionId }: { sectionId: string }) {
  const src = rentflowScreenshotMap[sectionId] || '/rentflow-landing.png';

  return (
    <div className="web-canvas speaknews-screenshot-canvas">
      <img
        src={src}
        alt={`RentFlow system — ${sectionId}`}
        className="speaknews-screenshot-img"
        loading="lazy"
      />
    </div>
  );
}
