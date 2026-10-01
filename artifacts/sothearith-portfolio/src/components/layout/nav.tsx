import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems, navCta } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (hash: string) => {
    setOpen(false);
    if (location !== '/') {
      setLocation('/');
      window.setTimeout(
        () => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }),
        40,
      );
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="nav-shell">
        <nav className="nav" aria-label="Main navigation">
          <Link href="/" className="brand" aria-label="Sothearith home">
            {siteConfig.brand}<sup>™</sup>
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.hash);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href={navCta.href}>
            {navCta.label} <ArrowRight size={14} />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            data-testid="button-menu"
          >
            {open ? (
              <>
                <X size={15} /> CLOSE
              </>
            ) : (
              <>
                MENU <Menu size={15} />
              </>
            )}
          </button>
        </nav>
      </header>

      {open && (
        <div className="menu-overlay">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                go(item.hash);
              }}
            >
              {item.label}
              {item.hash === 'contact' && <ArrowUpRight size={34} />}
            </a>
          ))}
          <p className="mono">CAMBODIA — AVAILABLE FOR SELECTED PROJECTS</p>
        </div>
      )}
    </>
  );
}
