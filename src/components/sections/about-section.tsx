"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Wrench, Brain, GraduationCap, Trophy, BookOpen, Users } from "lucide-react";
import { cn, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/utils";

const skillCategories = [
  {
    id: 1,
    title: "Languages",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML/CSS", level: 92 },
      { name: "SQL (PostgreSQL, SQLite)", level: 85 }
    ]
  },
  {
    id: 2,
    title: "Frameworks & Libraries",
    icon: Globe,
    gradient: "from-emerald-500 to-teal-500",
    skills: [
      { name: "React", level: 92 },
      { name: "NextJS", level: 90 },
      { name: "Angular", level: 85 },
      { name: "NodeJS", level: 88 },
      { name: "Spring Boot", level: 80 },
      { name: "Express", level: 85 },
      { name: "TailwindCSS", level: 95 },
      { name: "AuthJS", level: 82 },
      { name: "Prisma ORM", level: 88 }
    ]
  },
  {
    id: 3,
    title: "Developer Tools",
    icon: Wrench,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "JUnit", level: 80 },
      { name: "Jenkins", level: 75 },
      { name: "Firebase", level: 88 },
      { name: "Supabase", level: 90 },
      { name: "Google Analytics", level: 82 }
    ]
  },
  {
    id: 4,
    title: "ML & Data Tools",
    icon: Brain,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "YOLOv8 (Ultralytics)", level: 88 },
      { name: "PyTorch (CUDA)", level: 85 },
      { name: "OpenCV", level: 90 },
      { name: "NetworkX", level: 80 },
      { name: "Open OnDemand", level: 75 }
    ]
  }
];

const coursework = [
  "Data Structures & Algorithms",
  "Computer Systems and Organization",
  "Discrete Math and Theory",
  "Software Development Essentials",
  "Intro to Cybersecurity",
  "Software Testing",
  "Database Systems"
];

const achievements = [
  {
    icon: Trophy,
    title: "3.74/4.00 GPA",
    description: "Consistent academic excellence in Computer Science"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Led hiring and onboarding at AdmitifyAI"
  },
  {
    icon: BookOpen,
    title: "Research Experience",
    description: "ML & Human-Robot Interaction at UVA"
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm passionate about creating impactful solutions through code, from AI research to full-stack development. 
            Here's a look at my technical skills and educational background.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Skills */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div variants={fadeInLeft}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <Code className="w-7 h-7 text-blue-600" />
                Technical Skills
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn(
                        "w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center text-white",
                        category.gradient
                      )}>
                        <category.icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h4>
                    </div>
                    
                    <div className="space-y-3">
                      {category.skills.map((skill, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {skill.name}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className={cn(
                                "h-2 rounded-full bg-gradient-to-r",
                                category.gradient
                              )}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Education & Achievements */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div variants={fadeInRight}>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border border-blue-200 dark:border-slate-600">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Education
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      University of Virginia
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">
                      B.S. in Computer Science
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      School of Engineering and Applied Sciences
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Expected Graduation: May 2027
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-600">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      GPA: <span className="text-blue-600 font-bold">3.74/4.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={fadeInRight}>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Key Achievements
              </h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <achievement.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-white text-sm">
                        {achievement.title}
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Fact */}
            <motion.div variants={fadeInRight}>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-700">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Fun Fact 🏀
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  I'm currently working on dunking by doing plyometrics twice a week! 
                  Combining physical fitness with mental coding challenges keeps me balanced.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Relevant Coursework */}
        <motion.div variants={fadeInUp} className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Relevant Coursework
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {coursework.map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {course}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-blue-200 dark:border-slate-600">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Leadership & Activities
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Muslim Student Association @ UVA
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  First Year Events Representative • Aug 2024 - Present
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Organizing events and activities for first-year students, fostering community engagement and cultural awareness.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 