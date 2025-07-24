import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import CanvasSection from "@/components/sections/canvas-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";
import Navbar from "@/components/ui/navbar";
import AnimatedBackground from "@/components/ui/animated-background";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
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
