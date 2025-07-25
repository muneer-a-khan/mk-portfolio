// Performance utilities for optimizing animations and loading

export const createIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = {}
) => {
  if (typeof window === 'undefined') return null;
  
  const observer = new IntersectionObserver(
    ([entry]) => callback(entry.isIntersecting),
    {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    }
  );
  
  return observer;
};

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload critical resources
export const preloadResource = (href: string, as: string) => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize animations based on device performance
export const shouldReduceAnimations = () => {
  if (typeof window === 'undefined') return false;
  
  // Check for low-end devices
  const isLowEndDevice = 
    navigator.hardwareConcurrency <= 4 || 
    ('deviceMemory' in navigator && (navigator as Navigator & { deviceMemory: number }).deviceMemory <= 4);
  
  return isLowEndDevice || prefersReducedMotion();
};

// Lazy load images with intersection observer
export const lazyLoadImage = (
  img: HTMLImageElement,
  src: string,
  onLoad?: () => void
) => {
  const observer = createIntersectionObserver((isIntersecting) => {
    if (isIntersecting) {
      img.src = src;
      if (onLoad) {
        img.onload = onLoad;
      }
      observer?.disconnect();
    }
  });
  
  if (observer) {
    observer.observe(img);
  }
};

// Performance monitoring utilities
export const measurePerformance = () => {
  if (typeof window === 'undefined') return;

  // Monitor INP (Interaction to Next Paint)
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'interaction') {
        // Log interaction performance for debugging
        console.log('Interaction detected:', entry.duration, 'ms');
      }
    }
  });

  try {
    observer.observe({ entryTypes: ['interaction'] });
  } catch {
    // Fallback for browsers that don't support interaction entries
  }

  // Monitor FPS
  let frameCount = 0;
  let lastTime = performance.now();

  const measureFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      console.log(`FPS: ${fps}`);
      
      // Log performance warnings
      if (fps < 30) {
        console.warn('Low FPS detected. Consider reducing animations.');
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(measureFPS);
  };

  requestAnimationFrame(measureFPS);

  // Monitor memory usage
  if ('memory' in performance) {
    setInterval(() => {
      const memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
      const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      const totalMB = Math.round(memory.totalJSHeapSize / 1024 / 1024);
      
      if (usedMB > totalMB * 0.8) {
        console.warn('High memory usage detected:', `${usedMB}MB / ${totalMB}MB`);
      }
    }, 5000);
  }
};

// Optimize scroll performance
export const optimizeScroll = () => {
  if (typeof window === 'undefined') return;

  let ticking = false;
  
  const updateScroll = () => {
    // Handle scroll updates here
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Reduce layout thrashing
export const batchDOMUpdates = (updates: (() => void)[]) => {
  if (typeof window === 'undefined') return;

  // Use requestAnimationFrame to batch DOM updates
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
};

// Monitor long tasks
export const monitorLongTasks = () => {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 50) { // Tasks longer than 50ms
        console.warn('Long task detected:', entry.duration, 'ms');
      }
    }
  });

  try {
    observer.observe({ entryTypes: ['longtask'] });
  } catch {
    // Fallback for browsers that don't support longtask entries
  }
}; 