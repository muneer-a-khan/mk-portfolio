"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ZapOff } from 'lucide-react';

export default function PerformanceToggle() {
  const [isPerformanceMode, setIsPerformanceMode] = useState(false);

  useEffect(() => {
    // Check if user has previously set performance mode
    const savedMode = localStorage.getItem('performance-mode');
    if (savedMode) {
      setIsPerformanceMode(savedMode === 'true');
    }
  }, []);

  const togglePerformanceMode = () => {
    const newMode = !isPerformanceMode;
    setIsPerformanceMode(newMode);
    localStorage.setItem('performance-mode', newMode.toString());
    
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('performanceModeChanged', { 
      detail: { isPerformanceMode: newMode } 
    }));
  };

  return (
    <motion.button
      onClick={togglePerformanceMode}
      className={`fixed top-20 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
        isPerformanceMode 
          ? 'bg-red-500 hover:bg-red-600 text-white' 
          : 'bg-green-500 hover:bg-green-600 text-white'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isPerformanceMode ? 'Disable Performance Mode' : 'Enable Performance Mode'}
    >
      {isPerformanceMode ? (
        <ZapOff className="w-5 h-5" />
      ) : (
        <Zap className="w-5 h-5" />
      )}
    </motion.button>
  );
} 