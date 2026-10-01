import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react';
import type { MobileScreen } from '@/data/projects-data';
import MobilePhoneMockup from './mobile-phone-mockup';

interface MobileScreensCarouselProps {
  screens: MobileScreen[];
  projectSlug: string;
}

export default function MobileScreensCarousel({ screens, projectSlug }: MobileScreensCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  const total = screens.length;
  const currentScreen = screens[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Automatic slideshow interval (every 4 seconds when playing and not hovered)
  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = window.setInterval(() => {
      goToNext();
    }, 4200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  return (
    <section className="exploring-ui-screens-section" aria-label="Exploring UI Screens">
      {/* Section Sub-header */}
      <div className="section-head-row">
        <div>
          <span className="mono section-sub-tag">
            <span className="live-indicator-dot" /> INTERACTIVE WALKTHROUGH · 10 SCREENS
          </span>
          <h3 className="section-main-title">EXPLORING UI SCREENS</h3>
        </div>
        <div className="carousel-controls-toolbar">
          <button
            type="button"
            className="carousel-tool-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span className="mono">{isPlaying ? 'PAUSE' : 'AUTO-PLAY'}</span>
          </button>
          <div className="screen-counter-badge mono">
            {currentScreen.number} / {String(total).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Interactive App Flow Breadcrumb Stepper */}
      <div className="walkthrough-stepper-wrap" aria-label="App screen progression">
        <div className="stepper-scroll-container">
          {screens.map((s, index) => {
            const isActive = index === currentIndex;
            const isPassed = index < currentIndex;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => goToIndex(index)}
                className={`step-pill ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                aria-current={isActive ? 'step' : undefined}
                data-testid={`step-screen-${s.id}`}
              >
                <span className="step-num">{s.number}</span>
                <span className="step-name">{s.label}</span>
                {index < total - 1 && <span className="step-arrow">→</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage: Large Phone Mockup + Walkthrough Annotation */}
      <div
        className="carousel-stage-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Arrow Left */}
        <button
          type="button"
          onClick={goToPrev}
          className="stage-nav-arrow arrow-left"
          aria-label="Previous screen"
          data-testid="carousel-btn-prev"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Center Stage Phone Mockup */}
        <div className="stage-phone-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen.id}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -12 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="phone-motion-box"
            >
              <MobilePhoneMockup screen={currentScreen} projectSlug={projectSlug} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          onClick={goToNext}
          className="stage-nav-arrow arrow-right"
          aria-label="Next screen"
          data-testid="carousel-btn-next"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      {/* Screen Explanatory Annotation Box (Below Phone) */}
      <div className="screen-detail-callout">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="callout-content"
          >
            <div className="callout-tag mono">
              <span>SCREEN {currentScreen.number}</span>
              <span className="divider">•</span>
              <span>{currentScreen.name.toUpperCase()}</span>
            </div>
            <h4 className="callout-title">{currentScreen.title}</h4>
            <p className="callout-desc">{currentScreen.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="pagination-dots-row" role="tablist" aria-label="Screen pagination">
          {screens.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={idx === currentIndex}
              aria-label={`Go to screen ${idx + 1}: ${s.name}`}
              className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
