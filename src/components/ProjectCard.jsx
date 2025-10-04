import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({
  title,
  description,
  technologies = [],
  category = "web"
}) => {
  const [isHovered, setIsHovered] = useState(false);



  const categoryIcons = {
    web: "🌐",
    mobile: "📱",
    desktop: "💻",
    ai: "🤖",
    other: "🔧"
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };



  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >






      {/* Content */}
      <div className="p-6">
        {/* Category and Title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{categoryIcons[category]}</span>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-gray-900 line-clamp-1"
          >
            {title}
          </motion.h3>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
        >
          {description}
        </motion.p>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs font-medium"
            >
              {tech}
            </motion.span>
          ))}
          {technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              +{technologies.length - 4} more
            </span>
          )}
        </motion.div>


      </div>

      {/* Hover glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none"
      />
    </motion.div>
  );
};

export default ProjectCard;