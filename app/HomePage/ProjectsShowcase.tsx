"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  category: string[];
  githubUrl?: string;
  liveUrl?: string;
};

type ProjectShowcaseProps = {
  projects: Project[];
};

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Fullstack" },
  { key: "mobile", label: "Mobile" },
  { key: "design", label: "Design" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 40, scale: 0.95 },
};

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category.includes(activeCategory));
  }, [activeCategory, projects]);

  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-black translate-y-[10em] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>
        <motion.p
          className="text-lg text-center text-zinc-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore my recent work and creative solutions
        </motion.p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400
                ${
                  activeCategory === cat.key
                    ? "bg-cyan-400 text-black shadow-md"
                    : "bg-neutral-900 text-zinc-200 hover:bg-neutral-800"
                }`}
              aria-pressed={activeCategory === cat.key}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <LayoutGroup>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-800/30 transition-shadow duration-300 flex flex-col border border-neutral-800"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  transition={{ duration: 0.2, delay: idx * 0.07 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-zinc-900 text-cyan-400 p-3 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300"
                            aria-label="GitHub Repository"
                          >
                            <FaGithub size={20} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-zinc-900 text-cyan-400 p-3 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300"
                            aria-label="Live Site"
                          >
                            <FaExternalLinkAlt size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-zinc-300 mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-900/40 text-cyan-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
};

// Example usage with static data (remove below in your actual app)
const sampleProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    imageUrl: "/images/projects/ecommerce.jpg",
    category: ["fullstack", "frontend"],
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website with modern animations and dark mode.",
    imageUrl: "/images/projects/portfolio.jpg",
    category: ["frontend", "design"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A drag-and-drop task management application with team collaboration features.",
    imageUrl: "/images/projects/taskapp.jpg",
    category: ["fullstack", "mobile"],
    techStack: ["React Native", "Firebase", "Redux"],
    githubUrl: "https://github.com/yourusername/taskapp",
    liveUrl: "https://taskapp-demo.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting with interactive maps and data visualization.",
    imageUrl: "/images/projects/weather.jpg",
    category: ["frontend"],
    techStack: ["Vue.js", "D3.js", "OpenWeather API"],
    githubUrl: "https://github.com/yourusername/weather",
    liveUrl: "https://weather-dashboard-demo.com",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media performance across platforms.",
    imageUrl: "/images/projects/social.jpg",
    category: ["frontend", "design"],
    techStack: ["React", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://social-dashboard-demo.com",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and fitness progress.",
    imageUrl: "/images/projects/fitness.jpg",
    category: ["mobile", "fullstack"],
    techStack: ["React Native", "GraphQL", "Node.js"],
    githubUrl: "https://github.com/yourusername/fitness-app",
    liveUrl: "https://fitness-app-demo.com",
  },
];

// Remove below export in your app, just use <ProjectShowcase projects={yourProjects} />
export default function DemoProjectShowcase() {
  return <ProjectShowcase projects={sampleProjects} />;
}