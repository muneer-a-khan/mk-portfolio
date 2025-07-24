"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    className={`absolute rounded-full ${color} blur-xl opacity-30`}
    style={{
      width: size,
      height: size,
      left: `${initialX}%`,
      top: `${initialY}%`,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, -20, 0],
      scale: [1, 1.1, 0.9, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const AnimatedOrb = ({ 
  size, 
  gradient, 
  initialX, 
  initialY, 
  duration,
  delay = 0 
}: {
  size: number;
  gradient: string;
  initialX: number;
  initialY: number;
  duration: number;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full ${gradient} opacity-20 blur-2xl`}
    style={{
      width: size,
      height: size,
      left: `${initialX}%`,
      top: `${initialY}%`,
    }}
    animate={{
      y: [0, -50, 30, 0],
      x: [0, 30, -30, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Floating Shapes */}
      <FloatingShape
        size={400}
        color="bg-blue-300"
        initialX={10}
        initialY={20}
        duration={20}
        delay={0}
      />
      
      <FloatingShape
        size={300}
        color="bg-purple-300"
        initialX={70}
        initialY={60}
        duration={15}
        delay={5}
      />
      
      <FloatingShape
        size={250}
        color="bg-emerald-300"
        initialX={20}
        initialY={70}
        duration={18}
        delay={3}
      />
      
      <FloatingShape
        size={350}
        color="bg-pink-300"
        initialX={80}
        initialY={10}
        duration={22}
        delay={7}
      />

      {/* Animated Orbs */}
      <AnimatedOrb
        size={200}
        gradient="bg-gradient-to-r from-blue-400 to-cyan-400"
        initialX={5}
        initialY={40}
        duration={25}
        delay={2}
      />
      
      <AnimatedOrb
        size={150}
        gradient="bg-gradient-to-r from-purple-400 to-pink-400"
        initialX={85}
        initialY={80}
        duration={30}
        delay={8}
      />
      
      <AnimatedOrb
        size={180}
        gradient="bg-gradient-to-r from-emerald-400 to-teal-400"
        initialX={60}
        initialY={20}
        duration={28}
        delay={12}
      />

      {/* Particle Effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/30 dark:from-slate-900/50 dark:via-transparent dark:to-slate-900/30" />
    </div>
  );
} 