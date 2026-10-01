import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Lock, RotateCw, Share2 } from 'lucide-react';
import type { WebShowcaseSection } from '../data/projects-data';
import { SpeakNewsCanvas } from './mockups/screens/speaknews-screens';
import { SchoolSystemCanvas } from './mockups/screens/school-system-screens';

interface WebBrowserMockupProps {
  section: WebShowcaseSection;
  projectSlug: string;
  index: number;
}

export default function WebBrowserMockup({ section, projectSlug, index }: WebBrowserMockupProps) {
  const isSpeakNews = projectSlug === 'speaknews';

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="web-showcase-item"
    >
      {/* Section Explanatory Header */}
      <div className="showcase-caption-bar">
        <div className="caption-badge mono">{section.badge}</div>
        <h3 className="showcase-title">{section.title}</h3>
        <p className="showcase-desc">{section.description}</p>
      </div>

      {/* Realistic Desktop Browser Frame */}
      <div className="desktop-browser-frame">
        {/* Browser Top Chrome */}
        <div className="browser-chrome">
          {/* Window Control Buttons */}
          <div className="browser-controls">
            <span className="dot dot-close" />
            <span className="dot dot-min" />
            <span className="dot dot-max" />
          </div>

          {/* Active Tab */}
          <div className="browser-tab">
            <span className="tab-favicon">{isSpeakNews ? '⚡' : '🎓'}</span>
            <span className="tab-title">
              {isSpeakNews
                ? 'SpeakNews — Audio Journalism'
                : 'AcademiaOS — School Management & Design System'}
            </span>
          </div>

          {/* Address / URL Bar */}
          <div className="browser-address-bar">
            <Lock size={12} className="ssl-lock-icon" />
            <span className="url-protocol">https://</span>
            <span className="url-domain">
              {isSpeakNews
                ? 'speaknews.media/investigations/audio-era'
                : 'admin.academiaos.edu/system/overview'}
            </span>
            <RotateCw size={11} className="refresh-icon" />
          </div>

          {/* Right Action Icons */}
          <div className="browser-right-actions">
            <Bookmark size={13} />
            <Share2 size={13} />
          </div>
        </div>

        {/* Browser Body / Web Canvas */}
        <div className="browser-viewport-canvas">
          {isSpeakNews ? (
            <SpeakNewsCanvas sectionId={section.id} />
          ) : (
            <SchoolSystemCanvas sectionId={section.id} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export { SpeakNewsCanvas, SchoolSystemCanvas };
