'use client';

import { useState, useEffect } from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { StickyCTA } from "@/components/sticky-cta";
import { ScrollToTop } from "@/components/scroll-to-top";
import { HeroSection } from "@/sections/hero-section";
import { AboutSection } from "@/sections/about-section";
import { ServicesSection } from "@/sections/services-section";
import { FounderSection } from "@/sections/founder-section";
import { OfficeSection } from "@/sections/office-section";
import { VideoSection } from "@/sections/video-section";
import { StatsSection } from "@/sections/stats-section";
import { ContactSection } from "@/sections/contact-section";
import { CTASection } from "@/sections/cta-section";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <div className="min-h-screen bg-background text-slate-800 dark:bg-slate-950 dark:text-slate-100">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <FounderSection />
            <OfficeSection />
            <VideoSection />
            <StatsSection />
            <ContactSection />
            <CTASection />
          </main>
          <Footer />
          <StickyCTA />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

