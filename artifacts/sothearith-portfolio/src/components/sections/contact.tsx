import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import Footer from '@/components/layout/footer';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="section-kicker mono">07 / HAVE A GOOD ONE IN MIND?</div>
        <div className="contact-inner">
          <h2>
            LET'S<br />
            MAKE<br />
            SOMETHING<br />
            <span>GOOD.</span>
          </h2>
          <div>
            <p className="contact-copy">
              Have a project, product, or idea in mind? Tell me what you're thinking. We can work out
              the useful next step together.
            </p>
            <a
              className="btn contact-btn"
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              START A PROJECT <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="contact-meta">
          <div>
            <span className="mono">TELEGRAM</span>
            <p>
              <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
                {siteConfig.telegramUsername}
              </a>
            </p>
          </div>
          <div>
            <span className="mono">LOCATION</span>
            <p>{siteConfig.location}</p>
          </div>
          <div>
            <span className="mono">SOCIALS</span>
            <div className="socials">
              {siteConfig.socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
