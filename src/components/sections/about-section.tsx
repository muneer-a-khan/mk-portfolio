"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Wrench, Brain, GraduationCap, Trophy, BookOpen } from "lucide-react";
import { cn, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/utils";

const attributeCategories = [
  {
    id: 1,
    title: "LANGUAGES",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-slate-800",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    skills: [
      { name: "Java", level: 94 },
      { name: "Python", level: 97 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 91 },
      { name: "HTML/CSS", level: 87 },
      { name: "SQL", level: 84 }
    ]
  },
  {
    id: 2,
    title: "FRAMEWORKS",
    color: "from-green-400 to-green-600",
    bgColor: "bg-slate-800",
    borderColor: "border-green-500/30",
    textColor: "text-green-400",
    skills: [
      { name: "React", level: 82 },
      { name: "NextJS", level: 80 },
      { name: "Angular", level: 75 },
      { name: "NodeJS", level: 78 },
      { name: "Spring Boot", level: 73 },
      { name: "Express", level: 76 },
      { name: "TailwindCSS", level: 84 },
      { name: "AuthJS", level: 71 },
      { name: "Prisma ORM", level: 77 }
    ]
  },
  {
    id: 3,
    title: "TOOLS",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-slate-800",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-400",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 70 },
      { name: "JUnit", level: 78 },
      { name: "Jenkins", level: 76 },
      { name: "Firebase", level: 81 },
      { name: "Supabase", level: 94 },
      { name: "Google Analytics", level: 93 }
    ]
  },
  {
    id: 4,
    title: "ML/DATA",
    color: "from-red-400 to-red-600",
    bgColor: "bg-slate-800",
    borderColor: "border-red-500/30",
    textColor: "text-red-400",
    skills: [
      { name: "YOLOv8", level: 81 },
      { name: "PyTorch", level: 74 },
      { name: "OpenCV", level: 72 },
      { name: "NetworkX", level: 69 },
      { name: "Open OnDemand", level: 67 }
    ]
  }
];

// Calculate overall rating based on all skills
const calculateOverallRating = () => {
  const allSkills = attributeCategories.flatMap(cat => cat.skills);
  const average = allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length;
  return Math.round(average);
};

const SkillBar = ({ skill, color }: { skill: { name: string; level: number }, color: string }) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 min-w-[100px] text-left">
      {skill.name}
    </span>
    <div className="flex items-center gap-3 flex-1 justify-end">
      <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
      <span className="text-sm font-bold text-slate-900 dark:text-white min-w-[20px] text-center">
        {skill.level}
      </span>
    </div>
  </div>
);

export default function AboutSection() {
  const overallRating = calculateOverallRating();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Header with Overall Rating */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          {/* Player Info Header */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white mb-1">Muneer Khan</h2>
              <div className="flex items-center gap-2 text-slate-300">
                <Code className="w-4 h-4" />
                <span className="text-sm">Computer Science Student</span>
              </div>
              <div className="text-sm text-slate-400">
                Full Stack Developer
              </div>
            </div>
            
            {/* Overall Rating Circle */}
            <div className="relative">
              <div className="w-24 h-24 relative">
                {/* Background Circle */}
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
                  <circle
                    cx="48"
                    cy="48"
                    r="44"
                    fill="none"
                    stroke="rgb(51, 65, 85)"
                    strokeWidth="8"
                  />
                  {/* Progress Circle (88% filled) */}
                  <circle
                    cx="48"
                    cy="48"
                    r="44"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 44}`}
                    strokeDashoffset={`${2 * Math.PI * 44 * (1 - 0.88)}`}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                      <stop offset="100%" stopColor="rgb(34, 211, 238)" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-white">{overallRating+6}</span>
                    <div className="text-xs text-slate-300 font-medium">OVR</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <span className="text-xs text-cyan-400 font-bold">{overallRating+18} MAX</span>
              </div>
            </div>

            
          </div>

          {/* GPA Display */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300">UVA Computer Science</span>
            <span className="text-blue-400 font-bold">GPA: 3.74/4.00</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">Class of 2027</span>
          </div>
        </motion.div>

        {/* NBA 2K Style Attributes */}
        <div className="grid grid-cols-4 gap-12 max-w-8xl mx-auto px-4">
          {attributeCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={fadeInUp}
              custom={index}
              className="flex flex-col items-center"
            >
              {/* Attribute Bars Container */}
              <div className={cn(
                "relative rounded-lg p-4 border-2 min-h-[400px] w-full",
                category.bgColor,
                category.borderColor
              )}>
                {/* Vertical Skill Bars Container */}
                <div className="h-full flex items-end justify-between gap-2 pt-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: "auto", opacity: 1 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                      className="flex flex-col items-center flex-1"
                    >
                      {/* Vertical Bar with Internal Text */}
                      <div className="w-full h-64 bg-slate-700 rounded-t-sm relative overflow-hidden mb-2">
                        <motion.div
                          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${category.color} rounded-t-sm`}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${skill.level}%` }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.1, duration: 1.2, ease: "easeOut" }}
                        />
                        
                        {/* Vertical Skill Name Inside Bar */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.1 + 0.5 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div 
                            className="transform -rotate-90 text-xs font-medium text-white whitespace-nowrap"
                            style={{
                              textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
                            }}
                          >
                            {skill.name}
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Skill Level Number */}
                      <div className="text-sm font-bold text-white">
                        {skill.level}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Category Title at Bottom */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className={cn(
                  "mt-4 text-2xl font-bold text-center",
                  category.textColor
                )}
              >
                {category.title}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Code className="w-3 h-3 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-400">5</div>
              </div>
              <div className="text-xs text-slate-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-3 h-3 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-400">2</div>
              </div>
              <div className="text-xs text-slate-300">Internships</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-3 h-3 text-white" />
                </div>
                <div className="text-2xl font-bold text-orange-400">1</div>
              </div>
              <div className="text-xs text-slate-300">Research</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-white" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">1</div>
              </div>
              <div className="text-xs text-slate-300">Startup</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 