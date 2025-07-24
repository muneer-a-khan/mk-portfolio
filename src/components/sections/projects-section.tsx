"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Zap, Brain, Database, Bot, ChevronRight, Star } from "lucide-react";
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
      improvement: "70% → 16%"
    },
    gradient: "from-blue-600 to-purple-600",
    icon: Bot
  },
  {
    id: 2,
    title: "AdmitifyAI",
    subtitle: "College Admissions Assistant Platform",
    period: "Dec 2024 - Present",
    type: "Startup",
    featured: true,
    description: "Co-founded and developed a college admissions assistant platform using a custom-trained LLM that generates college match predictions, application feedback, and score reports.",
    longDescription: "Built comprehensive platform with onboarding experience, dashboard UI, user authentication flows, and content pages.",
    achievements: [
      "Successfully launched with 60+ active users in first week",
      "Connected backend APIs to display personalized matches",
      "Led hiring and onboarding of UI/UX and marketing interns",
      "Actively marketing on several platforms"
    ],
    technologies: ["LLMs", "NextJS", "TailwindCSS", "Authentication", "APIs", "Product Development"],
    metrics: {
      users: "60+",
      launch: "1 week",
      team: "5 members"
    },
    gradient: "from-emerald-600 to-teal-600",
    icon: Brain,
    link: "https://admitifyai.com"
  },
  {
    id: 3,
    title: "VADM Volunteer System",
    subtitle: "Volunteer Management Platform",
    period: "Jan 2025 - May 2025",
    type: "Client Project",
    featured: true,
    description: "Designed and built a comprehensive volunteer management platform for the Virginia Discovery Museum with team collaboration.",
    longDescription: "Developed user-facing features including shift calendars, application forms, cancellation workflows, volunteer dashboards, and admin features.",
    achievements: [
      "Successfully launched on April 26, 2025",
      "Showcased at UVA Engineering Expo",
      "Streamlined volunteer management for museum operations",
      "Collaborated with client meetings and technical documentation"
    ],
    technologies: ["NextJS", "TailwindCSS", "Team Development", "Client Management"],
    metrics: {
      launch: "Apr 2025",
      expo: "UVA Showcase",
      team: "Collaborative"
    },
    gradient: "from-orange-600 to-red-600",
    icon: Users
  },
  {
    id: 4,
    title: "NBA Stats Predictor",
    subtitle: "Sports Analytics & Prediction System",
    period: "Current Project",
    type: "Personal",
    featured: false,
    description: "Currently developing a comprehensive NBA statistics predictor using machine learning algorithms to forecast player performance and game outcomes.",
    longDescription: "Building data pipeline for NBA statistics with predictive modeling and interactive dashboards.",
    achievements: [
      "In active development",
      "Implementing ML prediction algorithms",
      "Building data visualization dashboards",
      "Creating interactive user interface"
    ],
    technologies: ["Python", "Machine Learning", "Data Analytics", "NBA API", "Visualization"],
    metrics: {
      status: "In Progress",
      focus: "ML/Analytics",
      data: "NBA Stats"
    },
    gradient: "from-purple-600 to-pink-600",
    icon: Database
  },
  {
    id: 5,
    title: "QuranKi",
    subtitle: "Spaced Repetition Memorization App",
    period: "Contribution",
    type: "Open Source",
    featured: false,
    description: "Contributed to a spaced repetition Quran memorization web app with full-stack development contributions.",
    longDescription: "Worked on both frontend and backend components to enhance the memorization experience through spaced repetition algorithms.",
    achievements: [
      "Full-stack contributions to memorization platform",
      "Implemented spaced repetition algorithms",
      "Enhanced user experience and functionality",
      "Contributed to open-source project"
    ],
    technologies: ["Full Stack", "Spaced Repetition", "Web App", "Open Source"],
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
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 h-full">
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
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        )}
                      </div>
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
                        : project.type === "Startup"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                        : project.type === "Client Project"
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                        : "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                  
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Site</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={cn(
                    "w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center text-white flex-shrink-0",
                    project.gradient
                  )}>
                    <project.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full flex-shrink-0",
                    project.type === "Personal" 
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                      : "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300"
                  )}>
                    {project.type}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {project.period}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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