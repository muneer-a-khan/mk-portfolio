"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Zap, Database, Bot } from "lucide-react";
import { cn, staggerContainer, fadeInUp, scaleIn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "UVA Collaborative Robotics Lab",
    subtitle: "Research Assistant (ML & Human-Robot Interaction)",
    period: "May 2025 - Present",
    type: "Research",
    featured: true,
    description: "Trained multiple YOLOv8 object detection models using PyTorch to identify Snap Circuit components, connections, and electrical states on physical circuit boards.",
    longDescription: "Built a real-time camera-based system that outputs a dynamic graph of the circuit, enabling a robot to assist humans in collaborative circuit building.",
    achievements: [
      "Achieved 83.8% precision and 96.7% recall in component detection",
      "Reduced false positive rate from 70% to 16%",
      "Built live inference system processing frames in ~5.17 seconds",
      "Integrated OpenCV-based electrical connectivity analysis"
    ],
    technologies: ["YOLOv8", "PyTorch", "OpenCV", "NetworkX", "Python", "Computer Vision"],
    metrics: {
      precision: "83.8%",
      recall: "96.7%",
      "False Positive Rate": "70% → 16%"
    },
    gradient: "from-blue-600 to-purple-600",
    icon: Bot
  },
  {
    id: 2,
    title: "NBA Stats Predictor",
    subtitle: "Sports Analytics & Prediction System",
    period: "Current Project",
    type: "Personal",
    featured: true,
    description: "Currently developing a comprehensive NBA statistics predictor using machine learning algorithms to forecast player performance and game outcomes.",
    longDescription: "Building data pipeline for NBA statistics with predictive modeling and interactive dashboards for real-time analysis.",
    achievements: [
      "Implementing advanced ML prediction algorithms",
      "Building comprehensive data visualization dashboards",
      "Creating interactive user interface with real-time updates",
      "Integrating multiple NBA API data sources"
    ],
    technologies: ["Python", "Machine Learning", "Data Analytics", "NBA API", "Visualization", "Pandas"],
    metrics: {
      status: "In Progress",
      focus: "ML/Analytics",
      data: "NBA Stats"
    },
    gradient: "from-purple-600 to-pink-600",
    icon: Database
  },
  {
    id: 3,
    title: "QuranKi",
    subtitle: "Spaced Repetition Memorization App",
    period: "Contribution",
    type: "Open Source",
    featured: true,
    description: "Contributed to a spaced repetition Quran memorization web app with full-stack development contributions.",
    longDescription: "Worked on both frontend and backend components to enhance the memorization experience through spaced repetition algorithms.",
    achievements: [
      "Full-stack contributions to memorization platform",
      "Implemented spaced repetition algorithms",
      "Enhanced user experience and functionality",
      "Contributed to open-source educational project"
    ],
    technologies: ["Full Stack", "Spaced Repetition", "Web App", "Open Source", "NextJS", "React"],
    metrics: {
      type: "Open Source",
      focus: "Education",
      contribution: "Full Stack"
    },
    gradient: "from-teal-600 to-cyan-600",
    icon: Zap
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/40 to-emerald-50/40 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl" />
      
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
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From AI research to full-stack applications, here are some of my notable projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 h-full">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-12 h-12 rounded-xl bg-gradient-to-r flex items-center justify-center text-white",
                      project.gradient
                    )}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full",
                      project.type === "Research" 
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        : project.type === "Personal"
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                        : "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300"
                    )}>
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  {project.longDescription}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  {Object.entries(project.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech, i) => {
                    // Assign a color based on index for variety
                    const colors = [
                      'bg-blue-100 text-blue-800',
                      'bg-purple-100 text-purple-800',
                      'bg-emerald-100 text-emerald-800',
                      'bg-pink-100 text-pink-800',
                      'bg-yellow-100 text-yellow-800',
                      'bg-cyan-100 text-cyan-800',
                      'bg-orange-100 text-orange-800',
                      'bg-slate-100 text-slate-800',
                    ];
                    const color = colors[i % colors.length];
                    return (
                      <span
                        key={i}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${color}`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* QuranKi Link */}
                {project.title === "QuranKi" && (
                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                    <motion.a
                      href="https://quranki.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit quranki.com
                    </motion.a>
                  </div>
                )}

                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={fadeInUp} className="text-center mt-16">
          <motion.a
            href="https://github.com/muneer-a-khan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 font-medium"
          >
            <Github className="w-5 h-5" />
            <span>View All on GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
} 