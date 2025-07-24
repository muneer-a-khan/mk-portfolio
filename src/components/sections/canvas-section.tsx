"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, PanInfo, AnimatePresence } from "framer-motion";
import { X, Maximize2, Move, Palette, RotateCcw } from "lucide-react";
import Image from "next/image";
import { cn, staggerContainer, fadeInUp } from "@/lib/utils";

interface CanvasImage {
  src: string;
  id: string;
  alt: string;
}

const canvasImages: CanvasImage[] = [
  { src: "/canvas/05202D30-16E4-4585-81DD-4074A6CD4C6D_1_105_c.jpeg", id: "img1", alt: "Canvas artwork 1" },
  { src: "/canvas/15A92C7A-6B8E-429E-B0FD-B0D53892BD27_1_105_c.jpeg", id: "img2", alt: "Canvas artwork 2" },
  { src: "/canvas/20A48DA0-22BD-401C-AE78-D821FCD09C35_1_105_c.jpeg", id: "img3", alt: "Canvas artwork 3" },
  { src: "/canvas/2576325B-0FE9-49D4-8C1C-6DEFB40B67E5_1_201_a.jpeg", id: "img4", alt: "Canvas artwork 4" },
  { src: "/canvas/432F6EEA-AA5B-4DD8-AF2E-57E8166AB4DD_1_105_c.jpeg", id: "img5", alt: "Canvas artwork 5" },
  { src: "/canvas/83335F47-D134-4D8C-8FC4-BBD5365767F3_1_102_o.jpeg", id: "img6", alt: "Canvas artwork 6" },
  { src: "/canvas/CC02FA76-7369-4602-8EFA-FFD6F7037BDF_1_105_c.jpeg", id: "img7", alt: "Canvas artwork 7" },
  { src: "/canvas/E52D6DF4-B242-4C19-8818-CCB69F54F490_1_105_c.jpeg", id: "img8", alt: "Canvas artwork 8" },
  { src: "/canvas/EB5B8244-0642-4F6F-9F2D-85DF9584BC86_1_105_c.jpeg", id: "img9", alt: "Canvas artwork 9" },
];

interface DraggableImageProps {
  image: CanvasImage;
  onBringToFront: (id: string) => void;
  zIndex: number;
}

function DraggableImage({ image, onBringToFront, zIndex }: DraggableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(Math.random() * 300);
  const y = useMotionValue(Math.random() * 700);
  
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const container = containerRef.current?.parentElement;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const imageRect = containerRef.current?.getBoundingClientRect();
    
    if (!imageRect) return;
    
    // Keep image within bounds
    const maxX = containerRect.width - imageRect.width;
    const maxY = containerRect.height - imageRect.height;
    
    const currentX = x.get();
    const currentY = y.get();
    
    if (currentX < 0) x.set(0);
    if (currentX > maxX) x.set(maxX);
    if (currentY < 0) y.set(0);
    if (currentY > maxY) y.set(maxY);
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        className="absolute cursor-grab active:cursor-grabbing"
        style={{ 
          x, 
          y, 
          zIndex: zIndex + 10
        }}
        drag
        dragMomentum={false}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        onMouseDown={() => onBringToFront(image.id)}
        whileDrag={{ scale: 1.05, rotate: 2 }}
        initial={{ scale: 0, rotate: Math.random() * 20 - 10 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative group bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
          {/* Controls */}
          <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
              className="w-6 h-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center text-xs"
            >
              <Maximize2 className="w-3 h-3" />
            </button>

          </div>
          
          {/* Drag handle */}
          <div className="absolute top-1 left-1 w-6 h-6 bg-slate-600 hover:bg-slate-700 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing">
            <Move className="w-3 h-3" />
          </div>

          {/* Image */}
          <div className="w-48 h-48 relative overflow-hidden rounded">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover pointer-events-none"
              sizes="192px"
            />
          </div>
        </div>
      </motion.div>

      {/* Expanded View Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="object-contain w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function CanvasSection() {
  // Initialize with all images
  const [activeImages, setActiveImages] = useState<string[]>(canvasImages.map(img => img.id));
  const [imageZIndexes, setImageZIndexes] = useState<{ [key: string]: number }>(() => {
    const initialZIndexes: { [key: string]: number } = {};
    canvasImages.forEach((img, index) => {
      initialZIndexes[img.id] = index;
    });
    return initialZIndexes;
  });

  const bringToFront = (id: string) => {
    setImageZIndexes(prev => {
      const maxZ = Math.max(...Object.values(prev), 0);
      return { ...prev, [id]: maxZ + 1 };
    });
  };

  return (
    <section id="canvas" className="py-20 bg-gradient-to-br from-purple-50/40 via-pink-50/40 to-orange-50/40 dark:from-slate-800 dark:via-purple-900/20 dark:to-pink-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-100/20 rounded-full blur-3xl" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Canvas
            </span>
          </h2>
        </motion.div>

        {/* Canvas Area - 2.5x larger vertically */}
        <motion.div 
          variants={fadeInUp}
          className="relative w-full h-[60rem] bg-white/50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600 backdrop-blur-sm overflow-hidden mt-8"
        >
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-slate-400/90 dark:text-slate-600/90 mb-2">
                🔥 Take a peek at my life!
              </div>
              <div className="text-xl md:text-2xl text-slate-400/90 dark:text-slate-600/90">
                psst, you can grab them
              </div>
            </div>
          </div>

          {/* Draggable Images */}
          <AnimatePresence>
            {activeImages.map(imageId => {
              const image = canvasImages.find(img => img.id === imageId);
              if (!image) return null;
              
              return (
                <DraggableImage
                  key={image.id}
                  image={image}
                  onBringToFront={bringToFront}
                  zIndex={imageZIndexes[image.id] || 0}
                />
              );
            })}
          </AnimatePresence>

          {/* Instructions */}
          <div className="absolute bottom-4 left-4 text-slate-500 dark:text-slate-400 text-sm">
            <p>🖱️ Drag to move • 🔍 Click expand to view full size</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 