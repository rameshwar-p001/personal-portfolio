import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ContactModal from "./components/ContactModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Global contact modal handler
  useEffect(() => {
    const handleContactClick = (e) => {
      if (e.target.textContent === "Contact" || 
          e.target.textContent === "Contact Me" || 
          e.target.textContent === "Get In Touch") {
        e.preventDefault();
        setIsContactModalOpen(true);
      }
    };

    document.addEventListener('click', handleContactClick);
    return () => document.removeEventListener('click', handleContactClick);
  }, []);

  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
          className="w-20 h-20 border-4 border-blue-400/30 border-t-blue-400 rounded-full mx-auto mb-8"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Rameshwar Patil
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-blue-300"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );

  const PageWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <main className="relative">
            <Routes>
              <Route 
                path="/" 
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/projects" 
                element={
                  <PageWrapper>
                    <Project />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/certificates" 
                element={
                  <PageWrapper>
                    <Certificate />
                  </PageWrapper>
                } 
              />
            </Routes>
          </main>
        </AnimatePresence>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Rameshwar Digambar Patil
                </h3>
                <p className="text-gray-400 mb-4 max-w-md">
                  Android Developer & Computer Science Student passionate about creating innovative mobile applications 
                  and exploring cutting-edge technologies.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/rameshwar-p001" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    📱 GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/rameshwar-p001" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    💼 LinkedIn
                  </a>
                  <a href="mailto:workwith.rameshwar@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    ✉️ Email
                  </a>
                  <a href="tel:+917385614859" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    📞 Phone
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                  <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
                  <li><a href="/certificates" className="text-gray-400 hover:text-white transition-colors duration-300">Certificates</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📧 workwith.rameshwar@gmail.com</li>
                  <li>📞 +91 7385614859</li>
                  <li>📍 Pune, Maharashtra</li>
                  <li>
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      Send Message →
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 Rameshwar Digambar Patil. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Contact Modal */}
        <ContactModal 
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        >
          ↑
        </motion.button>
      </div>
    </Router>
  );
}

export default App;
