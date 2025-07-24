"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, MessageCircle, Send, Heart } from "lucide-react";
import { cn, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/utils";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "muneerkhan992000@gmail.com",
    href: "mailto:muneerkhan992000@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
    description: "Best way to reach me for professional inquiries"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "571-639-8965",
    href: "tel:571-639-8965",
    gradient: "from-emerald-500 to-teal-500",
    description: "Available for urgent matters"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ashburn, VA",
    href: "#",
    gradient: "from-purple-500 to-pink-500",
    description: "Based in Northern Virginia"
  }
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/muneer-a-khan",
    gradient: "from-slate-700 to-slate-900",
    description: "View my code and projects"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/muneer-khan-one",
    gradient: "from-blue-600 to-blue-700",
    description: "Connect professionally"
  },
  {
    name: "AdmitifyAI",
    icon: ExternalLink,
    href: "https://admitifyai.com",
    gradient: "from-emerald-600 to-teal-600",
    description: "My startup project"
  }
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl" />
      
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
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations about technology. 
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <MessageCircle className="w-7 h-7 text-blue-600" />
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="block p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl bg-gradient-to-r flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300",
                        method.gradient
                      )}>
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                          {method.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">
                          {method.value}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {method.description}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Social Links
              </h4>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "flex items-center gap-3 px-6 py-3 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r",
                      social.gradient
                    )}
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 space-y-2">
                {socialLinks.map((social, index) => (
                  <p key={index} className="text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {social.name}:
                    </span>{" "}
                    {social.description}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quick Contact Form */}
          <motion.div variants={fadeInRight}>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Send className="w-7 h-7 text-blue-600" />
                Quick Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                  <strong>Note:</strong> For the best response time, please email me directly at{" "}
                  <a 
                    href="mailto:muneerkhan992000@gmail.com" 
                    className="underline hover:no-underline"
                  >
                    muneerkhan992000@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Call to Action */}
        <motion.div variants={fadeInUp} className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether it's a full-stack application, machine learning project, or research collaboration, 
              I'm excited to discuss how we can work together to create impactful solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:muneerkhan992000@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/muneer-khan-one"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={fadeInUp} className="text-center mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Muneer Khan using Next.js & Framer Motion
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
            © 2025 Muneer Khan. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
} 