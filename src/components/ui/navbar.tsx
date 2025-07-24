"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              MK
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              Muneer Khan
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
                  activeSection === item.href.substring(1)
                    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden bg-white dark:bg-slate-800 rounded-b-xl border-t border-slate-200 dark:border-slate-700"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ x: 10 }}
                className={cn(
                  "flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 text-left",
                  activeSection === item.href.substring(1)
                    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
} 