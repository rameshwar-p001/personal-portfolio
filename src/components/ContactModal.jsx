import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { saveContactForm } from '../firebase/firestore';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
    projectType: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const projectTypes = [
    "Android App Development",
    "Mobile App UI/UX",
    "Other"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "Let's discuss"
  ];

  const timelines = [
    "ASAP",
    "1-2 weeks",
    "1 month",
    "Flexible"
  ];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // EmailJS configuration
      const serviceId = 'service_zi8rh8s';
      const templateId = 'template_u6f5ctl';
      const publicKey = 'BbHwlQ4GampI1ZaIc';

      // Initialize EmailJS
      emailjs.init(publicKey);

      console.log('Sending email with data:', formData);

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message,
        project_type: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        to_email: 'workwith.rameshwar@gmail.com'
      });

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        // Email sent successfully, now save to Firebase
        try {
          await saveContactForm(formData);
          console.log('Contact form data saved to Firebase successfully!');
        } catch (firebaseError) {
          console.error('Firebase save error:', firebaseError);
          // Don't fail the whole process if Firebase fails
        }

        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          subject: '',
          projectType: '',
          budget: '',
          timeline: ''
        });
      } else {
        throw new Error('Email sending failed');
      }

    } catch (error) {
      console.error('EmailJS Error Details:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      budget: "",
      timeline: "",
      projectType: ""
    });
    setErrors({});
    setSubmitStatus(null);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      resetForm();
    }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={handleClose}
        >
          <motion.div
            variants={contentVariants}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-8 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Let's Work Together! 🚀</h2>
                  <p className="text-blue-100">
                    I'd love to hear about your project and discuss how we can bring your ideas to life.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="text-blue-200 hover:text-white text-3xl font-bold transition-colors disabled:opacity-50"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(95vh-120px)]">
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 text-lg">
                    Thank you for reaching out! I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : submitStatus === "error" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-6">❌</div>
                  <h3 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Please try again or contact me directly at workwith.rameshwar@gmail.com
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                          errors.name 
                            ? "border-red-500 focus:ring-2 focus:ring-red-200" 
                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        } focus:outline-none`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                          errors.email 
                            ? "border-red-500 focus:ring-2 focus:ring-red-200" 
                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        } focus:outline-none`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map(budget => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map(timeline => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                        errors.subject 
                          ? "border-red-500 focus:ring-2 focus:ring-red-200" 
                          : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      } focus:outline-none`}
                      placeholder="Brief description of your project"
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                        errors.message 
                          ? "border-red-500 focus:ring-2 focus:ring-red-200" 
                          : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      } focus:outline-none`}
                      placeholder="Please describe your project requirements, goals, and any specific features you have in mind..."
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm"
                        >
                          {errors.message}
                        </motion.p>
                      ) : (
                        <p className="text-gray-500 text-sm">
                          Minimum 10 characters
                        </p>
                      )}
                      <p className="text-gray-400 text-sm">
                        {formData.message.length}/500
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        "Send Message 🚀"
                      )}
                    </motion.button>
                  </div>

                  {/* Alternative Contact */}
                  <div className="text-center pt-6 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">
                      Prefer to contact me directly?
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href="mailto:workwith.rameshwar@gmail.com"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        ✉️ workwith.rameshwar@gmail.com
                      </a>
                      <a
                        href="tel:+917385614859"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        📞 +91 7385614859
                      </a>
                      <a
                        href="https://www.linkedin.com/in/rameshwar-p001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        💼 LinkedIn
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;