import React from 'react';
import type { ProjectData as Project } from '@/data/projects-data';

export function MicroPhoneMockup() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-top">
        <span>9:41</span>
        <span>•••</span>
      </div>
      <div className="app-mark">
        niva<span style={{ color: '#0057ff' }}>.</span>
      </div>
      <div className="mono" style={{ marginTop: 5 }}>
        YOUR MONEY, IN VIEW
      </div>
      <div className="phone-hero">
        A little more<br />
        room to grow.
      </div>
      <div className="phone-row">
        <span>Everyday account</span>
        <b>$2,480</b>
      </div>
      <div className="phone-row">
        <span>Weekly spend</span>
        <b>$146</b>
      </div>
      <div className="phone-button">SEE YOUR ACTIVITY →</div>
    </div>
  );
}

export default function ProjectVisual({ project }: { project: Project }) {
  if (project.theme === 'featured') {
    return (
      <div className="project-visual">
        <div className="back-phone" />
        <MicroPhoneMockup />
      </div>
    );
  }

  if (project.theme === 'student') {
    return (
      <div className="project-visual phone-set">
        <MicroPhoneMockup />
        <MicroPhoneMockup />
        <MicroPhoneMockup />
      </div>
    );
  }

  if (project.theme === 'system') {
    return (
      <div className="project-visual">
        <div className="system-board">
          <div className="board-cell">
            BUTTONS
            <div className="btn-dark" style={{ padding: 8, fontSize: 8 }}>
              CONTINUE →
            </div>
          </div>
          <div className="board-cell">
            COLOUR
            <div className="swatches">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="board-cell">
            TYPEFACE
            <br />
            <b style={{ fontSize: 20, letterSpacing: '-.08em' }}>Aa Bb</b>
          </div>
          <div className="board-cell">
            INPUT
            <br />
            <span style={{ borderBottom: '1px solid', padding: 5 }}>Search anything…</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual">
      <div className="mock-site">
        <div className="mock-header">
          <b>STUDIO / 04</b>
          <span>MENU +</span>
        </div>
        <h3>
          MAKE<br />
          SPACE<br />
          FOR IDEAS.
        </h3>
        <div className="mono">AN OPEN CANVAS FOR WHAT'S NEXT.</div>
        <div className="mock-block" />
      </div>
    </div>
  );
}
