import React from 'react';
import { Wifi } from 'lucide-react';
import type { MobileScreen } from '../data/projects-data';
import { SalaAppScreenContent } from './mockups/screens/sala-app-screens';
import { HRAppScreenContent } from './mockups/screens/hr-app-screens';

interface MobilePhoneMockupProps {
  screen: MobileScreen;
  projectSlug: string;
}

export default function MobilePhoneMockup({ screen, projectSlug }: MobilePhoneMockupProps) {
  const isSalaApp = projectSlug === 'sala-app' || projectSlug === 'student-app';

  return (
    <div className="phone-mockup-wrapper">
      {/* Outer Phone Hardware Case */}
      <div className="phone-hardware">
        {/* Antenna bands & buttons simulation */}
        <div className="phone-btn phone-btn-volume-up" />
        <div className="phone-btn phone-btn-volume-down" />
        <div className="phone-btn phone-btn-power" />

        {/* Outer Titanium Bezel */}
        <div className="phone-bezel">
          {/* Inner Glass Screen */}
          <div className="phone-glass-screen">
            {/* Status Bar */}
            <div className="phone-status-bar">
              <span className="phone-time">9:41</span>
              {/* Dynamic Island */}
              <div className="dynamic-island">
                <div className="dynamic-sensor" />
                <div className="dynamic-pill-dot" />
              </div>
              <div className="phone-indicators">
                <Wifi size={12} strokeWidth={2.5} />
                <span className="phone-battery">
                  <span>89%</span>
                  <span className="battery-icon">
                    <span className="battery-fill" />
                  </span>
                </span>
              </div>
            </div>

            {/* Screen Content Container */}
            <div className="phone-app-viewport">
              {isSalaApp ? (
                <SalaAppScreenContent screenId={screen.id} />
              ) : (
                <HRAppScreenContent screenId={screen.id} />
              )}
            </div>

            {/* iOS Home Indicator Pill */}
            <div className="phone-home-indicator">
              <div className="home-bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SalaAppScreenContent, HRAppScreenContent };
