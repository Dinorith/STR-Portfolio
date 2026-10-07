import React from 'react';
import type { ProjectData as Project } from '@/data/projects-data';

/* ── Project Real Image Display Config ────────────────────────────────── */
const projectVisualConfig: Record<
  string,
  {
    type: 'phone' | 'browser' | 'dual-phone';
    primaryImage: string;
    secondaryImage?: string;
    alt: string;
    url?: string;
    badge?: string;
  }
> = {
  'sala-app': {
    type: 'browser',
    primaryImage: '/sala-web-dashboard.png',
    alt: 'SALA SMS Web System Dashboard',
    url: 'sala.io/dashboard',
    badge: 'WEB SYSTEM + MOBILE APP',
  },
  'hr-management-app': {
    type: 'dual-phone',
    primaryImage: '/hr-home.png',
    secondaryImage: '/hr-checkin.png',
    alt: 'HR Management App Screens',
    badge: 'MOBILE APP',
  },
  'speaknews': {
    type: 'browser',
    primaryImage: '/speaknews-homepage.png',
    alt: 'SpeakNews Website Redesign',
    url: 'speak-news.com.kh',
    badge: 'EDITORIAL REDESIGN',
  },
  'rentflow': {
    type: 'browser',
    primaryImage: '/rentflow-owner.png',
    alt: 'RentFlow Property Owner Dashboard',
    url: 'rentflow.app/owner',
    badge: 'SYSTEM DASHBOARD',
  },
};

export default function ProjectVisual({ project }: { project: Project }) {
  const config = projectVisualConfig[project.slug];

  // If specific config doesn't exist, fall back to project thumbnail or default
  if (!config) {
    const fallbackImage = project.thumbnail || '/sala-web-dashboard.png';
    return (
      <div className="project-visual">
        <div className="front-screen-card">
          <div className="fsc-topbar">
            <div className="fsc-dots">
              <span className="fsc-dot" />
              <span className="fsc-dot" />
              <span className="fsc-dot" />
            </div>
            <span className="fsc-title">{project.name}</span>
          </div>
          <div className="fsc-viewport">
            <img src={fallbackImage} alt={project.name} className="fsc-img" loading="lazy" />
          </div>
        </div>
      </div>
    );
  }

  // Dual phone display for mobile apps (e.g. HR App)
  if (config.type === 'dual-phone') {
    return (
      <div className="project-visual project-visual-phone-stage">
        {config.secondaryImage && (
          <div className="real-phone-frame phone-back" aria-hidden="true">
            <div className="phone-notch-pill" />
            <div className="phone-screen-area">
              <img
                src={config.secondaryImage}
                alt={`${config.alt} secondary`}
                className="real-screen-img"
                loading="lazy"
              />
            </div>
          </div>
        )}

        <div className="real-phone-frame phone-front">
          <div className="phone-notch-pill" />
          <div className="phone-screen-area">
            <img
              src={config.primaryImage}
              alt={config.alt}
              className="real-screen-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }

  // Browser / desktop screen card display for web applications
  return (
    <div className="project-visual project-visual-screen-stage">
      <div className="front-screen-card">
        <div className="fsc-topbar">
          <div className="fsc-dots">
            <span className="fsc-dot dot-red" />
            <span className="fsc-dot dot-yellow" />
            <span className="fsc-dot dot-green" />
          </div>
          {config.url && (
            <div className="fsc-url-pill">
              <span className="fsc-url-text">https://{config.url}</span>
            </div>
          )}
          {config.badge && <span className="fsc-badge mono">{config.badge}</span>}
        </div>
        <div className="fsc-viewport">
          <img
            src={config.primaryImage}
            alt={config.alt}
            className="fsc-img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
