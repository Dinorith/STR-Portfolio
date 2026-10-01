import React, { useEffect } from 'react';
import { Link, useParams } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  Globe,
  CheckCircle,
} from 'lucide-react';
import { projectsList } from '@/data/projects-data';
import MobileScreensCarousel from '@/components/mobile-screens-carousel';
import WebBrowserMockup from '@/components/web-browser-mockup';
import NotFound from '@/pages/not-found';

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const reduceMotion = useReducedMotion();

  const project = projectsList.find((p) => p.slug === params.slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} — ${project.platform} UX/UI Case Study — Sothearith`;
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  const currentIndex = projectsList.findIndex((p) => p.slug === project.slug);
  const nextProject = projectsList[(currentIndex + 1) % projectsList.length];
  const isMobile = project.platform === 'Mobile App';

  return (
    <div className="project-detail-page">
      {/* Top Breadcrumb & Return Bar */}
      <div className="detail-top-bar wrap">
        <Link href="/" className="back-link-btn" data-testid="button-back-work">
          <ArrowLeft size={15} /> <span>BACK TO WORK</span>
        </Link>
        <div className="mono detail-platform-indicator">
          {isMobile ? <Smartphone size={14} /> : <Globe size={14} />}
          <span>{project.platform.toUpperCase()} SPECIFICATION</span>
        </div>
      </div>

      <main className="wrap">
        {/* =================================================================
            1. CLEAN PROJECT HEADER (Common & Tailored for Mobile / Web)
           ================================================================= */}
        <header className="project-clean-header">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="header-top-meta mono"
          >
            <span className="project-index-num">PROJECT / 0{currentIndex + 1}</span>
            <span className="meta-separator">•</span>
            <span className="project-cat-badge">{project.category}</span>
            <span className="meta-separator">•</span>
            <span className="project-year-badge">{project.year}</span>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            className="project-display-title"
          >
            {project.name}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: 'easeOut' }}
            className="project-lead-desc"
          >
            {project.desc}
          </motion.p>

          {/* Quick Specification Metadata Grid */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
            className="header-specs-grid"
          >
            <div className="spec-cell">
              <span className="spec-label mono">MY ROLE</span>
              <strong className="spec-val">{project.role}</strong>
            </div>

            <div className="spec-cell">
              <span className="spec-label mono">TOOLS USED</span>
              <div className="spec-tags">
                {project.tools.map((t) => (
                  <span key={t} className="tool-pill">{t}</span>
                ))}
              </div>
            </div>

            <div className="spec-cell">
              <span className="spec-label mono">PLATFORM</span>
              <strong className="spec-val platform-highlight">
                {isMobile ? <Smartphone size={14} className="inline-icon" /> : <Globe size={14} className="inline-icon" />}
                {project.platform}
              </strong>
            </div>

            <div className="spec-cell">
              <span className="spec-label mono">TIMELINE</span>
              <strong className="spec-val">{project.timeline}</strong>
            </div>
          </motion.div>
        </header>

        {/* =================================================================
            2. BODY CONTENT: MOBILE APP vs WEB PROJECT
           ================================================================= */}
        {isMobile ? (
          /* MOBILE APP LAYOUT: Exploring UI Screens + 10-Screen Phone Carousel */
          project.mobileScreens && (
            <MobileScreensCarousel
              screens={project.mobileScreens}
              projectSlug={project.slug}
            />
          )
        ) : (
          /* WEB PROJECT LAYOUT: Large Desktop / Browser Mockup Showcase */
          <section className="web-showcase-section" aria-label="Website Showcase">
            <div className="section-head-row">
              <div>
                <span className="mono section-sub-tag">
                  <span className="live-indicator-dot" /> DESKTOP CANVASES & ARCHITECTURE
                </span>
                <h3 className="section-main-title">WEBSITE SHOWCASE</h3>
              </div>
              <div className="mono web-scroll-hint">
                SCROLL TO EXPLORE ARCHITECTURE ↓
              </div>
            </div>

            <div className="web-mockups-stack">
              {project.webShowcase?.map((section, idx) => (
                <WebBrowserMockup
                  key={section.id}
                  section={section}
                  projectSlug={project.slug}
                  index={idx}
                />
              ))}
            </div>
          </section>
        )}

        {/* =================================================================
            3. PROJECT OVERVIEW SECTION
           ================================================================= */}
        <section className="project-overview-section" aria-label="Project Overview">
          <div className="overview-kicker mono">
            <span className="kicker-line" />
            <span>02 / PROJECT OVERVIEW & SYNTHESIS</span>
          </div>

          <div className="overview-grid">
            <div className="overview-primary-col">
              <div className="overview-block">
                <span className="block-tag mono">WHAT THE {isMobile ? 'PRODUCT' : 'WEBSITE'} IS</span>
                <h3 className="block-title">Transforming fragmented workflows into deliberate clarity.</h3>
                <p className="block-text">{project.overview.whatItIs}</p>
              </div>

              <div className="overview-block">
                <span className="block-tag mono">
                  {isMobile ? 'THE PROBLEM & PURPOSE' : 'WHAT I WORKED ON & PURPOSE'}
                </span>
                <h4 className="block-subtitle">Framing the User Challenge</h4>
                <p className="block-text">{project.overview.problemOrPurpose}</p>
              </div>
            </div>

            <div className="overview-secondary-col">
              <div className="overview-block">
                <span className="block-tag mono">MY ROLE IN THE PROJECT</span>
                <p className="block-text role-statement">{project.overview.myRole}</p>
              </div>

              <div className="overview-block">
                <span className="block-tag mono">
                  {isMobile ? 'WHAT I CONTRIBUTED TO THE UX/UI' : 'UX/UI IMPROVEMENTS'}
                </span>
                <ul className="contributions-list">
                  {project.overview.contributionsOrImprovements.map((item, i) => (
                    <li key={i}>
                      <CheckCircle size={16} className="check-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.overview.keyDecisions && (
                <div className="overview-block">
                  <span className="block-tag mono">KEY DESIGN DECISIONS</span>
                  <ul className="contributions-list decisions">
                    {project.overview.keyDecisions.map((dec, i) => (
                      <li key={i}>
                        <span className="mono dec-num">0{i + 1}</span>
                        <span>{dec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* =================================================================
              4. EXTERNAL CTAs
             ================================================================= */}
          <div className="project-cta-banner">
            <div className="cta-copy">
              <span className="mono cta-pre">READY TO DIVE DEEPER?</span>
              <h3 className="cta-title">Explore the live execution & documentation.</h3>
            </div>

            <div className="cta-buttons-cluster">
              {/* For Web / SpeakNews: Prominent Visit Website button */}
              {project.externalLinks.liveWebsite && (
                <a
                  href={project.externalLinks.liveWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta btn-cta-primary"
                  data-testid="button-visit-website"
                >
                  <span>VISIT WEBSITE</span>
                  <ArrowUpRight size={17} />
                </a>
              )}

              {/* For Mobile: View on Google Play */}
              {project.externalLinks.googlePlay && (
                <a
                  href={project.externalLinks.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta btn-cta-primary"
                  data-testid="button-google-play"
                >
                  <span>VIEW ON GOOGLE PLAY</span>
                  <ExternalLink size={16} />
                </a>
              )}

              {/* View Case Study on Behance */}
              {project.externalLinks.behance && (
                <a
                  href={project.externalLinks.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta btn-cta-secondary"
                  data-testid="button-behance"
                >
                  <span>VIEW ON BEHANCE</span>
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* =================================================================
            5. NEXT PROJECT / BOTTOM NAVIGATION
           ================================================================= */}
        <div className="detail-bottom-nav">
          <Link href="/" className="bottom-nav-link">
            <ArrowLeft size={16} />
            <span>ALL SELECTED WORKS</span>
          </Link>

          <Link href={`/work/${nextProject.slug}`} className="bottom-nav-link next-link">
            <div className="next-label-group">
              <span className="mono">NEXT CASE STUDY</span>
              <strong>{nextProject.name}</strong>
            </div>
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    </div>
  );
}
