import React from 'react';
import { Headphones, Play, Search, Volume2 } from 'lucide-react';

export function SpeakNewsCanvas({ sectionId }: { sectionId: string }) {
  if (sectionId === 'article-reader') {
    return (
      <div className="web-canvas speaknews-reader">
        {/* Top Reading Navigation */}
        <div className="reader-nav-bar">
          <div className="reader-brand">SPEAKNEWS<span>.</span></div>
          <div className="reader-progress-info mono">READING TIME · 5 MIN / 890 WORDS</div>
          <button type="button" className="reader-listen-toggle">
            <Headphones size={13} /> LISTEN TO ESSAY (4:12)
          </button>
        </div>

        {/* Floating Persistent Audio Dock */}
        <div className="floating-audio-bar">
          <div className="audio-play-state">
            <button type="button" className="play-pulse-btn"><Play size={14} fill="#fff" /></button>
            <div>
              <div className="audio-track-title">Investigative Briefing · Chapter 02: Synthetic Minds</div>
              <div className="audio-author mono">Narrated by Elena Vance, Senior Tech Editor</div>
            </div>
          </div>
          {/* Simulated Audio Waveform */}
          <div className="audio-waveform-bars">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                className="wave-bar"
                style={{ height: `${Math.max(15, (Math.sin(i * 0.4) * 0.5 + 0.5) * 100)}%` }}
              />
            ))}
          </div>
          <div className="audio-timer mono">01:45 / 04:12</div>
          <div className="audio-speed-badge mono">1.25x</div>
        </div>

        {/* Editorial Story Layout */}
        <article className="reader-article-layout">
          <div className="article-meta-row mono">
            <span>DEEP INVESTIGATION</span>
            <span>PUBLISHED TODAY</span>
            <span>TECHNOLOGY & SOCIETY</span>
          </div>

          <h1 className="article-headline">The Quiet Revolution of Human-Scaled Computing.</h1>
          <p className="article-subhead">
            How physical tactile devices and ambient audio interfaces are replacing endless notification feeds with calm intentionality.
          </p>

          <div className="article-author-card">
            <div className="author-avatar">EV</div>
            <div>
              <strong>Elena Vance</strong>
              <span className="mono">CHIEF TECHNOLOGY CORRESPONDENT</span>
            </div>
          </div>

          {/* Body paragraphs with audio synchronization highlight */}
          <div className="article-text-body">
            <p className="audio-synced-paragraph">
              <span className="synced-highlight">
                The shift began when we realized screen fatigue wasn't a personal failure, but an architectural flaw.
                Modern interfaces were designed to harvest peripheral attention rather than reward focused contemplation.
              </span>{' '}
              By introducing ambient spatial sound cues, information can be digested at the periphery without forcing the gaze away from the physical room.
            </p>

            <blockquote className="article-pullquote">
              "We spent twenty years making screens brighter and louder. The next twenty years will be spent making technology feel invisible."
            </blockquote>

            <p>
              In our usability trials across 300 daily listeners, users who switched to synchronized audio-article modes retained 42% more structural nuance compared to speed-skimming bullet points. The interface does not demand your eyes; it simply speaks when you are ready.
            </p>
          </div>
        </article>
      </div>
    );
  }

  if (sectionId === 'audio-hub') {
    return (
      <div className="web-canvas speaknews-hub">
        <div className="hub-top-bar">
          <div className="reader-brand">SPEAKNEWS<span>/</span>AUDIO</div>
          <div className="hub-search">
            <Search size={14} />
            <span>Search 1,400+ narrated investigative articles...</span>
          </div>
          <div className="hub-profile-chip">PRO MEMBER</div>
        </div>

        {/* Audio Hub Hero Grid */}
        <div className="hub-content-grid">
          <div className="hub-featured-playlist">
            <div className="playlist-tag mono">TODAY'S 15-MINUTE BRIEF</div>
            <h3>The Global Intelligence Morning Memo</h3>
            <p>Six vital economic, design, and diplomatic stories narrated by our Singapore and Geneva bureaus.</p>
            <div className="playlist-actions">
              <button type="button" className="btn-play-all"><Play size={14} fill="#111" /> PLAY MORNING MEMO</button>
              <span className="mono playlist-duration">6 STORIES · 14 MIN TOTAL</span>
            </div>
          </div>

          {/* Trending Episodes List */}
          <div className="episodes-list">
            {[
              { num: '01', title: 'Why Modular Architecture is Winning Microservices', time: '4:20', cat: 'TECH' },
              { num: '02', title: 'The Economics of Rare Earth Refining in Southeast Asia', time: '6:15', cat: 'MARKETS' },
              { num: '03', title: 'Typography as Structural Architecture in Urban Wayfinding', time: '5:40', cat: 'DESIGN' },
            ].map((ep) => (
              <div key={ep.num} className="episode-card">
                <span className="ep-num mono">{ep.num}</span>
                <div className="ep-info">
                  <span className="ep-cat mono">{ep.cat}</span>
                  <h4>{ep.title}</h4>
                </div>
                <div className="ep-play-btn">
                  <Play size={12} fill="#111" />
                  <span className="mono">{ep.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default: Homepage Experience
  return (
    <div className="web-canvas speaknews-homepage">
      {/* Editorial Header */}
      <header className="speaknews-masthead">
        <div className="masthead-date mono">TUESDAY, OCTOBER 2026 · EDITION NO. 1,429 · PHNOM PENH & WORLDWIDE</div>
        <div className="masthead-title">SPEAKNEWS</div>
        <nav className="masthead-nav mono">
          <a href="#investigations" className="active">INVESTIGATIONS</a>
          <a href="#audio">LIVE AUDIO</a>
          <a href="#tech">TECH & ARCHITECTURE</a>
          <a href="#economy">GLOBAL MARKETS</a>
          <a href="#culture">CULTURE</a>
        </nav>
      </header>

      {/* Breaking Live Audio Stream Banner */}
      <div className="breaking-stream-banner">
        <div className="live-pill"><span className="pulse" /> LIVE BROADCAST</div>
        <span className="breaking-title">Global Energy Transition Summit: Live correspondent audio briefing</span>
        <button type="button" className="mini-stream-btn"><Volume2 size={13} /> LISTEN NOW</button>
      </div>

      {/* Main 3-Column Editorial Grid */}
      <div className="editorial-triptych">
        {/* Column 1: Featured Main Investigation */}
        <div className="lead-story-col">
          <div className="story-category mono">LEAD INVESTIGATION · 6 MIN READ + AUDIO</div>
          <h2 className="lead-headline">
            The Algorithmic City: How Urban Sensors are Quietly Rewriting Civic Space.
          </h2>
          <p className="lead-excerpt">
            From automated traffic routing to predictive climate resilience, Asian metropolises are pioneering a new form of ambient governance. Here is what happens when public space becomes computational.
          </p>
          <div className="story-listen-bar">
            <button type="button" className="listen-pill-btn"><Play size={12} fill="#fff" /> LISTEN (06:14)</button>
            <span className="mono">BY SOTHEARITH RITH & FIELD REPORTERS</span>
          </div>
        </div>

        {/* Column 2: Secondary Stories */}
        <div className="secondary-col">
          <div className="sub-story">
            <span className="mono">INTERACTIVE ESSAY</span>
            <h3>The Renaissance of Independent Design Studios</h3>
            <p>Why small, multidisciplinary practices are outpacing monolithic agencies in high-value digital products.</p>
            <span className="mono audio-dur"><Headphones size={11} /> 3:45 MIN AUDIO</span>
          </div>
          <div className="sub-story">
            <span className="mono">DATA SPOTLIGHT</span>
            <h3>Green Hydrogen Infrastructure Along the Mekong Basin</h3>
            <p>Comprehensive satellite audit reveals accelerating renewable transmission corridors.</p>
            <span className="mono audio-dur"><Headphones size={11} /> 5:10 MIN AUDIO</span>
          </div>
        </div>

        {/* Column 3: The Audio Digest Sidebar */}
        <div className="sidebar-audio-col">
          <div className="sidebar-header mono">PODCAST CHANNELS</div>
          <div className="sidebar-podcast-card">
            <span className="mono">DAILY BRIEF</span>
            <h4>Morning Intelligence</h4>
            <p>10 minutes of essential global signals before market open.</p>
            <button type="button" className="btn-dark-mini">SUBSCRIBE RSS</button>
          </div>
          <div className="sidebar-stats-box">
            <div className="stat-num">98.4%</div>
            <div className="stat-label mono">LISTENER RETENTION RATE WITH DUAL-READ MODE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StudioWebCanvas({ sectionId: _sectionId }: { sectionId: string }) {
  return (
    <div className="web-canvas studio-canvas">
      <header className="studio-nav">
        <div className="studio-brand">ATELIER / 04</div>
        <div className="studio-links mono">
          <span>SPATIAL</span>
          <span>DIGITAL</span>
          <span>PHILOSOPHY</span>
          <span>INQUIRE</span>
        </div>
      </header>

      <div className="studio-hero-content">
        <div className="studio-tag mono">DESIGN PRACTICE & SPATIAL LABORATORY</div>
        <h1 className="studio-headline">
          BUILDING<br />
          TANGIBLE<br />
          FUTURES.
        </h1>
        <div className="studio-bottom-grid">
          <p>We craft considered digital and architectural environments at the intersection of discipline and expression.</p>
          <div className="mono studio-loc">CAMBODIA / WORLDWIDE — 2026</div>
        </div>
      </div>
    </div>
  );
}
