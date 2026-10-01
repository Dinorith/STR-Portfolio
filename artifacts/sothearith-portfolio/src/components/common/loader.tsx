import React, { useEffect, useState } from 'react';
import { siteConfig } from '@/data/site-config';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), 480);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className={`loading-screen ${show ? '' : 'done'}`} aria-hidden={!show}>
      <div className="loader-title">{siteConfig.name}™</div>
      <div className="mono">INITIALIZING EXPERIENCE...</div>
      <div className="loader-bar" />
      <div className="mono">80% / READY</div>
    </div>
  );
}
