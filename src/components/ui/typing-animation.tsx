"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingAnimation({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = "",
  onComplete 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, delay, speed, text, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-0.5 h-full bg-current ml-1"
        />
      )}
    </span>
  );
}

interface RotatingTextProps {
  texts: string[];
  className?: string;
  prefix?: string;
  speed?: number;
  delay?: number;
}

export function RotatingText({ 
  texts, 
  className = "",
  prefix = "",
  speed = 100,
  delay = 2000
}: RotatingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && displayedText === currentFullText) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, currentTextIndex, texts, speed, delay]);

  return (
    <span className={className}>
      {prefix}{displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  );
} 