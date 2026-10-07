import React from 'react';
import { siteConfig } from '@/data/site-config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <div className="footer-brand">
          {siteConfig.brand}<sup>™</sup>
        </div>
        <span className="mono">
          UI/UX DESIGNER<br />
          PRODUCT DESIGNER
        </span>
        <span className="mono">
          © 2026 {siteConfig.name}<br />
          BUILT WITH INTENTION.
        </span>
      </div>
    </footer>
  );
}
