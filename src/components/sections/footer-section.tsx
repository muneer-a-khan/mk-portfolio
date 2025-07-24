"use client";

import { motion } from "framer-motion";
import ShinyText from "@/components/ui/shiny-text";
import { fadeInUp } from "@/lib/utils";

export default function FooterSection() {
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center"
      >
        <div className="space-y-2">
          <div>
            <ShinyText 
              text="Built by Muneer Khan" 
              disabled={false} 
              speed={10} 
              className="text-lg font-medium"
            />
          </div>
          <div>
            <ShinyText 
              text="© 2025 Muneer Khan. All rights reserved." 
              disabled={false} 
              speed={4} 
              className="text-sm text-slate-400"
            />
          </div>
        </div>
      </motion.div>
    </footer>
  );
} 