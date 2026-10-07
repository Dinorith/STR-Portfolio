import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import type { WebShowcaseSection } from '../data/projects-data';
import { SpeakNewsCanvas } from './mockups/screens/speaknews-screens';
import { SchoolSystemCanvas } from './mockups/screens/school-system-screens';
import { SalaWebCanvas } from './mockups/screens/sala-web-screens';

interface WebBrowserMockupProps {
  section: WebShowcaseSection;
  projectSlug: string;
  index: number;
}

const getUrl = (projectSlug: string, sectionId: string) => {
  if (projectSlug === 'speaknews')
    return sectionId === 'article' ? 'speak-news.com.kh/articles' : 'speak-news.com.kh';
  if (projectSlug === 'sala-app') return 'sala.io/dashboard';
  if (sectionId === 'landing-page') return 'rentflow.app';
  if (sectionId === 'superadmin-console') return 'rentflow.app/admin';
  return 'rentflow.app/owner';
};

export default function WebBrowserMockup({ section, projectSlug, index }: WebBrowserMockupProps) {
  const isSpeakNews = projectSlug === 'speaknews';
  const isSalaApp   = projectSlug === 'sala-app';
  const url = getUrl(projectSlug, section.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="web-showcase-item"
    >
      {/* Caption row */}
      <div className="showcase-caption-bar">
        <div className="caption-badge mono">{section.badge}</div>
        <h3 className="showcase-title">{section.title}</h3>
        <p className="showcase-desc">{section.description}</p>
      </div>

      {/* Screen card */}
      <div className="screen-card-frame">
        {/* Slim top bar */}
        <div className="screen-card-topbar">
          <div className="sc-dots">
            <span className="sc-dot sc-dot-close" />
            <span className="sc-dot sc-dot-min" />
            <span className="sc-dot sc-dot-max" />
          </div>
          <div className="sc-url-pill">
            <Lock size={10} className="sc-lock" />
            <span className="sc-url-text">https://{url}</span>
          </div>
          <div className="sc-spacer" />
        </div>

        {/* Screenshot viewport */}
        <div className="screen-card-viewport">
          {isSpeakNews ? (
            <SpeakNewsCanvas sectionId={section.id} />
          ) : isSalaApp ? (
            <SalaWebCanvas sectionId={section.id} />
          ) : (
            <SchoolSystemCanvas sectionId={section.id} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export { SpeakNewsCanvas, SchoolSystemCanvas };
