import { motion } from "framer-motion";
import { useState } from "react";

const CertificateCard = ({
  title,
  issuer,
  issueDate,
  credentialId,
  skills = [],
  verificationUrl,
  certificateUrl,
  featured = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);



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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <>
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
        className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer ${
          featured ? "ring-2 ring-yellow-400 ring-opacity-50" : ""
        }`}
        onClick={() => setShowModal(true)}
      >
        {/* Featured Badge */}
        





        {/* Content */}
        <div className="p-6">
          {/* Title and Issuer */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-gray-900 mb-2 line-clamp-2"
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-600 font-semibold mb-3"
          >
            {issuer}
          </motion.p>

          {/* Date and Credential ID */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-600 mb-4 space-y-1"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-400">📅</span>
              <span>Issued: {formatDate(issueDate)}</span>
            </div>
            {credentialId && (
              <div className="flex items-center gap-2">
                <span className="text-gray-400">🆔</span>
                <span className="font-mono text-xs">ID: {credentialId}</span>
              </div>
            )}
          </motion.div>

          {/* Skills */}
          {skills.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-4"
            >
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 3).map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
                {skills.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                    +{skills.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-2"
          >
            {verificationUrl && (
              <motion.a
                href={verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 text-center py-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200 border border-green-200 rounded-lg hover:bg-green-50"
              >
                ✅ Verify
              </motion.a>
            )}
            {certificateUrl && (
              <motion.a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 text-center py-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 border border-blue-200 rounded-lg hover:bg-blue-50"
              >
                📄 View
              </motion.a>
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

      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
                  <p className="text-blue-600 font-semibold text-lg">{issuer}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">


              {/* Certificate Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Certificate Details</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Issue Date:</span>
                      <span className="ml-2">{formatDate(issueDate)}</span>
                    </div>
                    {credentialId && (
                      <div>
                        <span className="font-medium text-gray-600">Credential ID:</span>
                        <span className="ml-2 font-mono text-xs">{credentialId}</span>
                      </div>
                    )}

                  </div>
                </div>

                {/* Skills Covered */}
                {skills.length > 0 && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Skills Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                {verificationUrl && (
                  <a
                    href={verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors duration-200"
                  >
                    ✅ Verify Certificate
                  </a>
                )}
                {certificateUrl && (
                  <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    📄 View Certificate
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CertificateCard;