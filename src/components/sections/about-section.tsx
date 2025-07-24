"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Wrench, Brain, GraduationCap, Trophy, BookOpen } from "lucide-react";
import { cn, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/utils";

const attributeCategories = [
  {
    id: 1,
    title: "CODING",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-600",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML/CSS", level: 92 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    id: 2,
    title: "FRAMEWORKS",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    textColor: "text-green-600",
    skills: [
      { name: "React", level: 92 },
      { name: "NextJS", level: 90 },
      { name: "Angular", level: 85 },
      { name: "NodeJS", level: 88 },
      { name: "TailwindCSS", level: 95 },
      { name: "Spring Boot", level: 80 }
    ]
  },
  {
    id: 3,
    title: "TOOLS",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-600",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Firebase", level: 88 },
      { name: "Supabase", level: 90 },
      { name: "Jenkins", level: 75 },
      { name: "JUnit", level: 80 }
    ]
  },
  {
    id: 4,
    title: "AI / ML",
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    textColor: "text-red-600",
    skills: [
      { name: "YOLOv8", level: 88 },
      { name: "PyTorch", level: 85 },
      { name: "OpenCV", level: 90 },
      { name: "NetworkX", level: 80 },
      { name: "CUDA", level: 75 }
    ]
  },
  {
    id: 5,
    title: "ACADEMICS",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    textColor: "text-yellow-600",
    skills: [
      { name: "Data Structures", level: 92 },
      { name: "Algorithms", level: 90 },
      { name: "Database Systems", level: 88 },
      { name: "Software Testing", level: 85 },
      { name: "Cybersecurity", level: 82 }
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
              <h2 className="text-2xl font-bold text-white mb-1">MK</h2>
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
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-slate-900 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white">{overallRating}</span>
                  <span className="text-xs text-slate-300 font-medium">OVR</span>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <span className="text-xs text-cyan-400 font-bold">{overallRating} MAX</span>
              </div>
            </div>

            <div className="text-right text-slate-300">
              <div className="text-sm">H: 5'6" W: 150 lbs WS: 5'11"</div>
              <div className="text-xs text-slate-400 mt-2">
                Earn MyPOINTS in order to upgrade<br />
                your overall attribute cap.
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

        {/* Attributes Grid */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {attributeCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={fadeInUp}
              custom={index}
              className={cn(
                "relative rounded-lg p-4 border-2",
                category.bgColor,
                category.borderColor
              )}
            >
              {/* Category Header */}
              <div className="text-center mb-4">
                <div className={cn(
                  "text-lg font-bold transform -rotate-90 origin-center absolute left-2 top-1/2 -translate-y-1/2",
                  category.textColor
                )}>
                  {category.title}
                </div>
                
                {/* Skill Bars */}
                <div className="ml-8 space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="text-xs text-slate-300 mb-1">{skill.name}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-4 bg-slate-700 rounded overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + skillIndex * 0.05 }}
                          />
                        </div>
                        <span className="text-xs font-bold text-white min-w-[20px]">
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">15+</div>
              <div className="text-xs text-slate-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">4</div>
              <div className="text-xs text-slate-300">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">2</div>
              <div className="text-xs text-slate-300">Research</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">1</div>
              <div className="text-xs text-slate-300">Startup</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 