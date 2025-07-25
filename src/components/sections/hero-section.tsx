"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { staggerContainer, fadeInLeft } from "@/lib/utils";
import { TypingAnimation, RotatingText } from "@/components/ui/typing-animation";
import { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import { shouldReduceAnimations } from "@/lib/performance";

// Dynamically import the heavy Threads component with shorter delay
const Threads = dynamic(() => import("@/components/ui/threads"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800" />
  )
});

export default function HeroSection() {
  const [showDescription, setShowDescription] = useState(false);
  const [showRotatingText, setShowRotatingText] = useState(false);
  const [showThreads, setShowThreads] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const rotatingTexts = [
    "CS Student",
    "Data Analyst", 
    "Software Developer",
    "Frontend Designer"
  ];

  useEffect(() => {
    // Shorter delay for Threads to improve perceived performance
    const timer = setTimeout(() => setShowThreads(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Reduce animation complexity for better performance
  const animationDuration = shouldReduceAnimations() ? 0.3 : 0.6;
  const shouldAnimate = !shouldReduceAnimations();

  return (
    <section ref={sectionRef} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Threads Background - Only load when needed */}
      {showThreads && (
        <div className="absolute inset-0">
          <Threads
            amplitude={1.5}
            distance={0}
            enableMouseInteraction={false}
            color={[0.2, 0.4, 0.8]}
          />
        </div>
      )}
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 py-20 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <TypingAnimation
                  text="Hello, I&apos;m "
                  speed={shouldReduceAnimations() ? 80 : 60}
                  className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent"
                  onComplete={() => setShowDescription(true)}
                />
                {showDescription && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: animationDuration }}
                    className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                  >
                    <TypingAnimation
                      text="Muneer Khan"
                      speed={shouldReduceAnimations() ? 100 : 80}
                      delay={100}
                      onComplete={() => setShowRotatingText(true)}
                    />
                  </motion.span>
                )}
              </motion.h1>
              
              {showRotatingText && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: animationDuration }}
                  className="text-2xl md:text-3xl font-semibold"
                >
                  <span className="text-slate-700 dark:text-slate-300">I&apos;m a </span>
                  <RotatingText
                    texts={rotatingTexts}
                    className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                    speed={60}
                    delay={800}
                  />
                </motion.div>
              )}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: showRotatingText ? 1 : 0 }}
                transition={{ delay: 0.4, duration: animationDuration }}
                className="flex items-center gap-3 text-lg text-slate-600 dark:text-slate-300"
              >
                <span>Ashburn, VA</span>
                <span>•</span>
                <span>UVA Computer Science</span>
              </motion.div>
            </motion.div>

            {/* Critical content - Show immediately for better LCP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: animationDuration }}
              className="space-y-6"
            >
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mt-22">
                I&apos;m passionate about creating impactful solutions through 
                <span className="text-blue-600 font-semibold"> machine learning</span>, 
                <span className="text-purple-600 font-semibold"> full-stack development</span>, and 
                <span className="text-emerald-600 font-semibold"> innovative research</span>. 
                Currently building the future one project at a time.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-slate-600 dark:text-slate-300">
                    Currently working at <span className="font-semibold text-slate-900 dark:text-white">Zyglio</span> as a Software Engineer Intern
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-slate-600 dark:text-slate-300">
                    Research at <span className="font-semibold text-slate-900 dark:text-white">UVA Robotics Lab</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-slate-600 dark:text-slate-300">
                    Building <span className="font-semibold text-slate-900 dark:text-white">AdmitifyAI</span> startup
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="mailto:muneerkhan992000@gmail.com"
                  whileHover={shouldAnimate ? { scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" } : {}}
                  whileTap={shouldAnimate ? { scale: 0.95 } : {}}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/muneer-a-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldAnimate ? { scale: 1.2, rotate: 5 } : {}}
                  whileTap={shouldAnimate ? { scale: 0.9 } : {}}
                  className="w-14 h-14 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/muneer-khan-one"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldAnimate ? { scale: 1.2, rotate: -5 } : {}}
                  whileTap={shouldAnimate ? { scale: 0.9 } : {}}
                  className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: animationDuration }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image Container with Simplified Animations */}
              <motion.div
                animate={shouldAnimate ? { 
                  rotate: [0, 1, -1, 0],
                  scale: [1, 1.01, 1],
                } : {}}
                transition={{ 
                  duration: shouldAnimate ? 8 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-80 rounded-3xl overflow-hidden p-1 will-change-transform"
                style={{
                  background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
                  backgroundSize: "400% 400%",
                }}
              >
                <motion.div
                  animate={shouldAnimate ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  } : {}}
                  transition={{
                    duration: shouldAnimate ? 6 : 0,
                    repeat: shouldAnimate ? Infinity : 0,
                    ease: "linear"
                  }}
                  style={{
                    background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
                    backgroundSize: "400% 400%",
                  }}
                  className="absolute inset-0 rounded-3xl"
                />
                
                <div className="relative w-full h-full rounded-3xl bg-white dark:bg-slate-800 overflow-hidden">
                  <Image 
                    src="/mk-pfp.JPG"
                    alt="Muneer Khan"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl"
                    priority
                  />
                  
                  {/* Overlay gradient for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
                </div>
              </motion.div>
              
              {/* Floating Stats - All 3 bubbles restored */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-4 shadow-xl border-2 border-white/20 will-change-transform"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">3.74</div>
                  <div className="text-sm opacity-90">GPA</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -15, 10], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-4 shadow-xl border-2 border-white/20 will-change-transform"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">2027</div>
                  <div className="text-sm opacity-90">Graduation</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [-5, 15, -5], y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-16 -right-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl p-3 shadow-lg will-change-transform"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">UVA</div>
                  <div className="text-xs opacity-90">CS</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Simplified Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: animationDuration }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={shouldAnimate ? { y: [0, 10, 0] } : {}}
            transition={{ duration: 2, repeat: shouldAnimate ? Infinity : 0, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-slate-600 dark:text-slate-300"
          >
            <span className="text-sm font-medium">Scroll to explore my work</span>
            <motion.div
              animate={shouldAnimate ? { 
                y: [0, 5, 0],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ 
                duration: 1.5, 
                repeat: shouldAnimate ? Infinity : 0, 
                ease: "easeInOut" 
              }}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white"
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 