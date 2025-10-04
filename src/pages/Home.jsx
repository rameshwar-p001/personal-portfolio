// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

function Home() {
  const skills = [
    { name: "React Native", icon: "🤖", level: 90 },
    { name: "Java", icon: "☕", level: 85 },
    { name: "Python", icon: "🐍", level: 82 },
    { name: "Node.js", icon: "🟨", level: 75 },
  ];

  // const achievements = [
  //   { number: "3+", label: "Projects Completed" },
  //   { number: "1+", label: "Years Experience" },
  //   { number: "11+", label: "Certificates" },
  //   { number: "100%", label: "Learning Commitment" },
  // ];

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.3,
  //       staggerChildren: 0.2
  //     }
  //   }
  // };

  // const itemVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100
  //     }
  //   }
  // };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Hi, I'm Rameshwar Digambar Patil"
        subtitle="App Developer & Computer Science Student"
        description="I'm a Computer Science Engineering student passionate about app development and modern technologies. Currently working as Content Creator & Social Media Manager at Evantr while building innovative mobile applications."
        backgroundVariant="gradient1"
      />

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            // variants={containerVariants}
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              // variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              My Skills
            </h2>
            <p
              // variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Here are the technologies I work with to bring ideas to life
            </p>
          </div>

          <div
            // variants={containerVariants}
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                // variants={itemVariants}
                // whileHover={{ 
                //   scale: 1.05,
                //   boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                // }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4 text-center">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    // initial={{ width: 0 }}
                    // whileInView={{ width: `${skill.level}%` }}
                    // transition={{ duration: 1, delay: index * 0.1 }}
                    style={{ width: `${skill.level}%` }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {skill.level}% Proficiency
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    delay: index * 0.1 
                  }}
                  className="text-4xl lg:text-5xl font-bold text-white mb-2"
                >
                  {achievement.number}
                </motion.div>
                <div className="text-blue-300 text-lg font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm always excited to take on new challenges and bring innovative ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div /* whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} */>
                <Link
                  to="/projects"
                  className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View My Projects
                </Link>
              </div>
              <button
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
