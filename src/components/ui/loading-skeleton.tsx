"use client";

import { motion } from "framer-motion";

export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content Skeleton */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Title skeleton */}
              <div className="space-y-4">
                <motion.div 
                  className="h-12 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg w-3/4"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.div 
                  className="h-12 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700 rounded-lg w-1/2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                />
              </div>
              
              {/* Subtitle skeleton */}
              <motion.div 
                className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg w-2/3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
              
              {/* Location skeleton */}
              <motion.div 
                className="h-6 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg w-1/2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
              />
            </div>

            <div className="space-y-6">
              {/* Description skeleton - Critical content */}
              <div className="space-y-3">
                <motion.div 
                  className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
                />
                <motion.div 
                  className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-5/6"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1.4 }}
                />
                <motion.div 
                  className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-4/5"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1.6 }}
                />
              </div>

              {/* Status indicators skeleton */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-3"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1.8 + i * 0.1 }}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-3/4" />
                  </motion.div>
                ))}
              </div>

              {/* Button skeleton */}
              <motion.div 
                className="h-12 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700 rounded-xl w-40"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 2.2 }}
              />

              {/* Social links skeleton */}
              <div className="flex gap-4">
                {[1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    className="w-14 h-14 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-xl"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 2.4 + i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image Skeleton */}
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              className="relative w-80 h-80 rounded-3xl bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
            >
              {/* Floating stats skeleton */}
              <motion.div 
                className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-700 dark:to-cyan-700 rounded-2xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700 rounded-2xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1.8 }}
              />

              <motion.div 
                className="absolute top-16 -right-8 w-12 h-12 bg-gradient-to-r from-emerald-200 to-teal-200 dark:from-emerald-700 dark:to-teal-700 rounded-xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 2.1 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 