"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { cn, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 py-20 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent leading-tight"
              >
                Hello 👋, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Muneer Khan
                </span>
              </motion.h1>
              
              <motion.div className="flex items-center gap-3 text-lg text-slate-600 dark:text-slate-300">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Ashburn, VA</span>
                <span>•</span>
                <span>UVA Computer Science</span>
              </motion.div>
            </motion.div>

            <motion.p 
              variants={fadeInLeft}
              className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg"
            >
              I'm a Computer Science student at the University of Virginia with a passion for 
              <span className="text-blue-600 font-semibold"> software development</span>, 
              <span className="text-purple-600 font-semibold"> frontend design</span>, and 
              <span className="text-emerald-600 font-semibold"> data analytics</span>. 
              I enjoy building full-stack applications and working on impactful projects.
            </motion.p>

            <motion.div variants={fadeInLeft} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-600 dark:text-slate-300">
                  Currently working on <span className="font-semibold text-slate-900 dark:text-white">NBA-Stats-Predictor</span>
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-slate-600 dark:text-slate-300">
                  Learning <span className="font-semibold text-slate-900 dark:text-white">Advanced ML & Next.js</span>
                </span>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInLeft} className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:muneerkhan992000@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </motion.a>
              
              <motion.a
                href="tel:571-639-8965"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInLeft} className="flex gap-4">
              <motion.a
                href="https://github.com/muneer-a-khan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/muneer-khan-one"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div 
            variants={fadeInRight}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <motion.div
                animate={{ 
                  rotate: [0, 1, -1, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-1"
              >
                <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-800 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3.74</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">GPA</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">2027</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Graduation</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-300"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 