import React, { useEffect } from 'react';
import Loader from '@/components/common/loader';
import CustomCursor from '@/components/common/custom-cursor';
import Nav from '@/components/layout/nav';
import Hero from '@/components/sections/hero';
import Marquee from '@/components/common/marquee';
import Work from '@/components/sections/work';
import About from '@/components/sections/about';
import Philosophy from '@/components/sections/philosophy';
import Process from '@/components/sections/process';
import Toolbox from '@/components/sections/toolbox';
import FAQ from '@/components/sections/faq';
import Contact from '@/components/sections/contact';
import { siteConfig } from '@/data/site-config';

export default function Home() {
  useEffect(() => {
    document.title = siteConfig.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteConfig.description);
    }
  }, []);

  return (
    <>
      <Loader />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Philosophy />
        <Marquee reverse />
        <Process />
        <Toolbox />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
