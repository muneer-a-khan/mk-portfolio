"use client";

import { Suspense, useEffect } from 'react';
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import CanvasSection from "@/components/sections/canvas-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";
import Navbar from "@/components/ui/navbar";
import LoadingSkeleton from "@/components/ui/loading-skeleton";
import AnimatedBackground from "@/components/ui/animated-background";
import { measurePerformance, optimizeScroll, monitorLongTasks } from "@/lib/performance";

export default function Home() {
  useEffect(() => {
    // Initialize performance monitoring
    measurePerformance();
    optimizeScroll();
    monitorLongTasks();

    // Preload critical resources
    const preloadImage = () => {
      const img = new Image();
      img.src = '/mk-pfp.JPG';
    };
    preloadImage();
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingSkeleton />}>
        <AnimatedBackground />
      </Suspense>
      <Navbar />
      <main className="min-h-screen relative">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <CanvasSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
