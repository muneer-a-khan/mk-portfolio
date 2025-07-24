"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";
import { cn, staggerContainer, fadeInUp } from "@/lib/utils";

const experiences = [
  {
    id: 1,
    company: "UVA Research Computing Team",
    role: "Summer Intern",
    period: "Jun 2025 - Present",
    location: "Charlottesville, VA",
    type: "Current",
    description: "Building a web portal enabling UVA research teams to rapidly generate and deploy mobile survey apps automatically using a customizable JSON-based templating system.",
    achievements: [
      "Developing an interactive app template builder with live previews and GitHub OAuth integration",
      "Designed Angular components including navbars, mobile preview phones, and routing logic",
      "Dockerized multiple services using docker-compose for seamless local deployment",
      "Supporting development of a RAG-based chatbot assistant trained on JIRA tickets"
    ],
    skills: ["Angular", "Docker", "GitHub OAuth", "RAG", "JSON"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    company: "Zyglio",
    role: "Full Stack Software Development Intern",
    period: "May 2025 - Present",
    location: "Remote",
    type: "Current",
    description: "Designed and implemented an end-to-end voice interview system, integrating LLMs, text-to-speech, and speech-to-text to simulate real-time scenario-based conversations.",
    achievements: [
      "Reduced API latency by 45% via parallel processing of asynchronous LLM calls",
      "Developed user authentication, dynamic voice workflows, and frontend features",
      "Adapted system from domain-specific training to topic-agnostic use for 3 industries",
      "Scaled system for enterprise-level use training several hundred employees"
    ],
    skills: ["NextJS", "TailwindCSS", "LLMs", "Voice AI", "Authentication"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    company: "VADM Volunteer System",
    role: "Frontend Software Developer Intern",
    period: "Jan 2025 - May 2025",
    location: "Virginia Discovery Museum",
    type: "Completed",
    description: "Worked within a team to design and build a volunteer management platform for the Virginia Discovery Museum.",
    achievements: [
      "Developed user-facing features: shift calendars, application forms, cancellation workflows",
      "Built volunteer dashboards and admin dashboard features using NextJS and TailwindCSS",
      "Assisted with client meetings and documentation of technical requirements",
      "Successfully launched on April 26, 2025, with showcase at UVA Engineering Expo"
    ],
    skills: ["NextJS", "TailwindCSS", "Team Collaboration", "Client Management"],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    company: "AdmitifyAI",
    role: "Founder & Full Stack Developer",
    period: "Dec 2024 - Present",
    location: "admitifyai.com",
    type: "Entrepreneurship",
    description: "Co-founded and developed a college admissions assistant platform using a custom-trained LLM that generates college match predictions and application feedback.",
    achievements: [
      "Implemented onboarding experience, dashboard UI, and user authentication flows",
      "Connected backend APIs to display personalized matches and acceptance probabilities",
      "Achieved 60+ active users in the first week post-launch",
      "Led hiring and onboarding of interns in UI/UX design and marketing"
    ],
    skills: ["LLMs", "Full Stack", "Leadership", "Product Development", "Marketing"],
    gradient: "from-orange-500 to-red-500"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From research to full-stack development, here&apos;s my journey in building impactful solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={fadeInUp}
                className={cn(
                  "relative flex items-center",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-blue-500 rounded-full transform md:-translate-x-1/2 z-10" />
                
                {/* Content Card */}
                <div className={cn(
                  "ml-20 md:ml-0 w-full md:w-5/12",
                  index % 2 === 0 ? "md:pr-6" : "md:pl-6"
                )}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={cn(
                            "w-3 h-3 rounded-full bg-gradient-to-r",
                            experience.gradient
                          )} />
                          <span className={cn(
                            "text-xs font-medium px-2 py-1 rounded-full",
                            experience.type === "Current" 
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : experience.type === "Entrepreneurship"
                              ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          )}>
                            {experience.type}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {experience.role}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mb-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div variants={fadeInUp} className="text-center mt-16">
          <motion.a
            href="mailto:muneerkhan992000@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
          >
            <span>Let&apos;s Work Together</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
} 