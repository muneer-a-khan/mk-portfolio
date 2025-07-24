import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";
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
        <ContactSection />
      </main>
    </>
  );
}
