import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  showSocialLinks = true,
  backgroundVariant = "gradient1",
  height = "screen"
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const backgroundVariants = {
    gradient1: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    gradient2: "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900",
    gradient3: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
    solid: "bg-gray-900"
  };

  const socialLinks = [
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <div className={`relative min-h-${height} ${backgroundVariants[backgroundVariant]} flex items-center justify-center overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x / 5,
            y: mousePosition.y / 5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{
            left: "10%",
            top: "20%",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x / 8,
            y: mousePosition.y / 8,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
          style={{
            right: "10%",
            bottom: "20%",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          {title.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className={`inline-block mr-4 ${
                index % 2 === 0 
                  ? "bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-blue-300 mb-6"
          >
            {subtitle}
          </motion.h2>
        )}

        {/* Description */}
        {description && (
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {primaryButton && (
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={primaryButton.onClick}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-lg"
            >
              {primaryButton.text}
            </motion.button>
          )}
          
          {secondaryButton && (
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={secondaryButton.onClick}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:border-white/50 transition-all duration-300 text-lg"
            >
              {secondaryButton.text}
            </motion.button>
          )}
        </motion.div>

        {/* Social Links */}
        {showSocialLinks && (
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  y: -5,
                }}
                className={`text-2xl text-gray-400 transition-all duration-300 ${social.color}`}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>

     
    </div>
  );
};

export default HeroSection;