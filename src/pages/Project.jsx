import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "AI Chat Assistant - VS Code Extension",
    description: "Developed a VS Code extension that integrates a local AI chatbot using Ollama. Features offline functionality, multi-turn conversations, and can explain code and errors directly within the IDE.",
    image: "/api/placeholder/400/300",
    technologies: ["JavaScript", "HTML", "CSS", "Ollama", "VS Code API", "Node.js"],
    demoUrl: "https://marketplace.visualstudio.com/",
    codeUrl: "https://github.com/rameshwar-p001/VS-Code-Extension",
    status: "completed",
    featured: true,
    category: "desktop"
  },
  {
    id: 2,
    title: "Shopping List App",
    description: "Created a mobile application for managing shopping lists with functions to add, edit, and delete items. The project focused on a clean UI and user-friendly experience with Material Design principles.",
    image: "/api/placeholder/400/300",
    technologies: ["Kotlin", "App Studio", "Material Design", "XML", "SQLite"],
    demoUrl: null,
    codeUrl: "https://github.com/rameshwar-p001/Android-My_Shoping_list_App",
    // status: "completed",
    featured: true,
    // category: "mobile"
  },
  {
    id: 3,
    title: "AgriAI - Smart Farming Assistant (Prototype)",
    description: "Designed a concept for an AI-powered assistant for agriculture to help with crop prediction, fertilizer suggestions, and irrigation guidance. Built the initial UI and backend structure for the prototype.",
    image: "/api/placeholder/400/300",
    technologies: ["Node.js", "TailwindCSS", "Python", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://agriai-prototype.com",
    codeUrl: "https://github.com/rameshwar-p001/AgriAi",
    status: "completed",
    featured: true,
    category: "ai"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and TailwindCSS. Features smooth animations with Framer Motion, contact form, and showcases projects, certificates, and skills.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Vite", "JavaScript"],
    demoUrl: "https://rameshwar-portfolio.vercel.app",
    codeUrl: "https://github.com/rameshwar-p001/my-portfolio",
    status: "completed",
    featured: false,
    category: "web"
  }
];

function Project() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </motion.p>
        </motion.div>



        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
