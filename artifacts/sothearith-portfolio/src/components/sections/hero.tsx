import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { SculptureControls } from '@/components/hero-sculpture-3d';
import { siteConfig } from '@/data/site-config';

const HeroSculpture3D = lazy(() => import('@/components/hero-sculpture-3d'));

export function Sculpture() {
  const controls = useRef<SculptureControls>({ targetX: 0, targetY: 0, dragging: false });
  const [ready, setReady] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(query.matches);
    updateMotionPreference();
    query.addEventListener('change', updateMotionPreference);

    try {
      const testCanvas = document.createElement('canvas');
      const context = testCanvas.getContext('webgl2') ?? testCanvas.getContext('webgl');
      setWebglAvailable(Boolean(context));
      context?.getExtension('WEBGL_lose_context')?.loseContext();
    } catch {
      setWebglAvailable(false);
    }

    return () => query.removeEventListener('change', updateMotionPreference);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse' || window.matchMedia('(pointer: coarse)').matches)
      return;
    if (controls.current.dragging) {
      controls.current.targetY += event.movementX * 0.007;
      controls.current.targetX += event.movementY * 0.007;
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    controls.current.targetY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.32;
    controls.current.targetX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -0.24;
  };

  return (
    <div
      className={`hero-art${ready ? ' webgl-active' : ''}`}
      aria-label="Interactive dark chrome digital sculpture"
    >
      <div
        className="sculpture-stage"
        tabIndex={0}
        role="group"
        data-cursor="drag"
        aria-label="Interactive chrome sculpture. Move your pointer or drag to rotate; use the arrow keys when focused."
        onPointerMove={handlePointerMove}
        onPointerLeave={() => {
          if (!controls.current.dragging) {
            controls.current.targetX = 0;
            controls.current.targetY = 0;
          }
        }}
        onPointerDown={(event) => {
          if (
            !reducedMotion &&
            event.pointerType === 'mouse' &&
            !window.matchMedia('(pointer: coarse)').matches
          ) {
            controls.current.dragging = true;
            event.currentTarget.setPointerCapture(event.pointerId);
          }
        }}
        onPointerUp={(event) => {
          controls.current.dragging = false;
          if (event.currentTarget.hasPointerCapture(event.pointerId))
            event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={() => {
          controls.current.dragging = false;
        }}
        onKeyDown={(event) => {
          if (reducedMotion) return;
          if (event.key === 'ArrowLeft') controls.current.targetY -= 0.12;
          else if (event.key === 'ArrowRight') controls.current.targetY += 0.12;
          else if (event.key === 'ArrowUp') controls.current.targetX -= 0.1;
          else if (event.key === 'ArrowDown') controls.current.targetX += 0.1;
          else return;
          event.preventDefault();
        }}
      >
        <div className="sculpture-orbit" />
        <div className="sculpture-orbit two" />
        <div className="sculpture" />
        {webglAvailable && (
          <Suspense fallback={null}>
            <HeroSculpture3D
              controls={controls}
              reducedMotion={reducedMotion}
              onReady={() => setReady(true)}
            />
          </Suspense>
        )}
        <span className="art-label top mono">
          OBJECT / 001<br />
          DIGITAL ARTIFACT
        </span>
        <span className="art-label bottom mono">
          MATERIAL / CHROME<br />
          DRAG TO EXPLORE
        </span>
      </div>
      <span className="coord mono">ROTATION / 032°</span>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero wrap" id="top">
      <div className="hero-meta">
        <span className="mono">[01 / INTRODUCTION]</span>
        <span className="mono availability">
          <i className="status-dot" /> {siteConfig.availability}
        </span>
      </div>

      <div className="hero-copy">
        <motion.h1
          className="hero-title"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42, ease: 'easeOut' }}
        >
          <span className="line">HEY, I'M</span>
          <span className="line">{siteConfig.name}.</span>
          <span className="line muted" style={{ marginTop: '.2em' }}>
            I DESIGN
          </span>
          <span className="line blue">DIGITAL</span>
          <span className="line muted">EXPERIENCES.</span>
        </motion.h1>

        <div className="hero-role mono">
          {siteConfig.roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>

        <p className="hero-description">
          I create thoughtful digital experiences that turn complex ideas into simple, useful products.
        </p>

        <div className="button-row">
          <a className="btn btn-dark" href="#work">
            VIEW MY WORK <ArrowUpRight size={15} />
          </a>
          <a
            className="btn btn-light"
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            LET'S WORK <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <Sculpture />

      <div className="hero-bottom">
        <span className="mono">
          {siteConfig.coordinates}
        </span>
        <a className="mono scroll-hint" href="#work">
          SCROLL TO EXPLORE <ArrowDown size={13} />
        </a>
        <span className="mono">SYSTEM: DESIGN / RESEARCH / PROTOTYPE</span>
      </div>
    </section>
  );
}
