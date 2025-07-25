"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { createIntersectionObserver, shouldReduceAnimations } from "@/lib/performance";

// Simplified floating shape with minimal animations
const FloatingShape = ({ 
  size, 
  color, 
  initialX, 
  initialY, 
  duration,
  delay = 0 
}: {
  size: number;
  color: string;
  initialX: number;
  initialY: number;
  duration: number;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full ${color} blur-xl opacity-20 will-change-transform`}
    style={{
      width: size,
      height: size,
      left: `${initialX}%`,
      top: `${initialY}%`,
    }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 0.3, 0.2],
    }}
    transition={{
      duration: shouldReduceAnimations() ? duration * 0.3 : duration * 0.7,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
  />
);

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Use performance-optimized intersection observer
    const observer = createIntersectionObserver((isIntersecting) => {
      setIsVisible(isIntersecting);
    });

    if (containerRef.current && observer) {
      observer.observe(containerRef.current);
    }

    return () => observer?.disconnect();
  }, []);

  if (!mounted) return null;

  // Drastically reduce animations for better performance
  const shouldAnimate = isVisible && !shouldReduceAnimations();
  const shapeCount = shouldReduceAnimations() ? 2 : 3;

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Minimal Floating Shapes - Only when visible and device can handle it */}
      {shouldAnimate && (
        <>
          <FloatingShape
            size={300}
            color="bg-blue-300"
            initialX={10}
            initialY={20}
            duration={30}
            delay={0}
          />
          
          <FloatingShape
            size={200}
            color="bg-purple-300"
            initialX={70}
            initialY={60}
            duration={25}
            delay={10}
          />
          
          {shapeCount > 2 && (
            <FloatingShape
              size={250}
              color="bg-emerald-300"
              initialX={20}
              initialY={70}
              duration={35}
              delay={5}
            />
          )}
        </>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/30 dark:from-slate-900/50 dark:via-transparent dark:to-slate-900/30" />
    </div>
  );
} 