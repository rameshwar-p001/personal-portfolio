// import { motion } from "framer-motion";
import { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("about");

  const experience = [
    {
      year: "2025 - Present",
      title: "Content Creator & Social Media Manager",
      company: "Evantr",
      description: "Currently contributing as a Content Creator & Social Media Manager, creating engaging content and managing social media presence. Developing marketing strategies and building brand awareness.",
      skills: ["Content Creation", "Social Media Management", "Brand Strategy"]
    },
    
  ];

  const personalInfo = {
    name: "Rameshwar Digambar Patil",
    role: "App Developer & CS Student",
    location: "Pune, Maharashtra, India",
    email: "workwith.rameshwar@gmail.com",
    phone: "+91 7385614859",
    languages: ["English", "Hindi", "Marathi"],
    interests: ["App Development", "Content Creation", "Social Media"]
  };

  const technologies = {
    "Programming": ["React Native", "Java", "Python", "JavaScript", "C++"],
    "App Development": ["Android Studio", "Mobile SDK", "Material Design"],
    "Web Technologies": ["Node.js", "HTML", "CSS"],
    "Tools & Platforms": ["VS Code", "Postman", "Git", "GitHub", "Android Studio"],
    "AI/ML": ["Ollama", "Python"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer and lifelong learner, dedicated to creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            {["about", "experience", "skills"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-medium capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div key={activeTab}>
          {activeTab === "about" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Personal Info */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Personal Information
                </h3>
                
                <div className="space-y-4">
                  {Object.entries(personalInfo).slice(0, 6).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio & Interests */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    My Story
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I'm a Computer Science Engineering student at Pimpri Chinchwad University, Pune, with a strong passion for app development and modern technologies. After completing my diploma in Computer Engineering, I'm now pursuing my B.Tech while gaining practical experience in content creation and social media management.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Currently working at Evantr as a Content Creator & Social Media Manager, I'm actively seeking opportunities in app development to apply my technical skills in real-world projects. I specialize in creating mobile applications with clean UI and exceptional user experiences.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {personalInfo.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:scale-105 transition-transform duration-300">
                        <div className="text-sm font-medium text-blue-600 mb-2">
                          {exp.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <div className="text-purple-600 font-medium mb-4">
                          {exp.company}
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {Object.entries(technologies).map(([category, techs]) => (
                <div
                  key={category}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {techs.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                      >
                        <span className="font-medium text-gray-800 items-center">{tech}</span>
                        {/* <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                          />
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default About;
