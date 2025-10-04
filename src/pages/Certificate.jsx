import React from "react";
import { motion } from "framer-motion";
import CertificateCard from "../components/CertificateCard";

const certificatesData = [
  {
    id: 1,
    title: "Agile Project Management",
    issuer: "Coursera",
    issueDate: "2024-02-15",
    credentialId: "APM-2024-001",
    skills: ["Agile", "Scrum", "Project Management", "Team Leadership", "Sprint Planning"],
    image: "/api/placeholder/600/400",
    
    certificateUrl: "/src/Certificate/Agile Project Management.pdf",
    featured: true,
    
  },
  {
    id: 2,  
    title: "Agile with Atlassian Jira",
    issuer: "Atlassian",
    issueDate: "2024-01-20",
    credentialId: "JIRA-2024-002",
    skills: ["Jira", "Agile", "Issue Tracking", "Project Tracking", "Workflow Management"],
    image: "/api/placeholder/600/400",
    
    certificateUrl: "/src/Certificate/Agile with Atlassian Jira.pdf",
    featured: false,
    
  },
  {
    id: 3,
    title: "Blockchain Complete Specialization",
    issuer: "University at Buffalo",
    issueDate: "2023-12-10",
    credentialId: "BC-ALL-2023-003",
    skills: ["Blockchain", "Cryptocurrency", "Smart Contracts", "DeFi", "Web3"],
    image: "/api/placeholder/600/400",
    certificateUrl: "/src/Certificate/Blockchain all 4.pdf",
    featured: true,
    
  },
  {
    id: 4,
    title: "Blockchain Basics",
    issuer: "University at Buffalo",
    issueDate: "2023-11-15",
    credentialId: "BC-BASICS-2023-004",
    skills: ["Blockchain Fundamentals", "Distributed Ledger", "Cryptography", "Bitcoin"],
    image: "/api/placeholder/600/400",
    certificateUrl: "/src/Certificate/Blockchain Basics.pdf",
    featured: false,
   
  },
  {
    id: 5,
    title: "Blockchain Platforms",
    issuer: "University at Buffalo",
    issueDate: "2023-11-25",
    credentialId: "BC-PLATFORMS-2023-005",
    skills: ["Ethereum", "Hyperledger", "Blockchain Platforms", "Consensus Algorithms"],
    image: "/api/placeholder/600/400",
    certificateUrl: "/src/Certificate/Blockchain Platforms.pdf",
    featured: false,
    
  },
  {
    id: 6,
    title: "Decentralized Applications (DApps)",
    issuer: "University at Buffalo",
    issueDate: "2023-12-05",
    credentialId: "DAPPS-2023-006",
    skills: ["DApp Development", "Web3", "Solidity", "Smart Contracts", "Frontend Integration"],
    image: "/api/placeholder/600/400",
    certificateUrl: "/src/Certificate/Decentralized Applications (Dapps).pdf",
    featured: true,
    
  },
  {
    id: 7,
    title: "Smart Contracts",
    issuer: "University at Buffalo",
    issueDate: "2023-11-30",
    credentialId: "SC-2023-007",
    skills: ["Smart Contracts", "Solidity", "Ethereum", "Gas Optimization", "Security"],
    image: "/api/placeholder/600/400",
    certificateUrl: "/src/Certificate/Smart Contracts.pdf",
    featured: false,
    
  },
  {
    id: 8,
    title: "Software Engineering Complete Specialization",
    issuer: "University of Alberta",
    issueDate: "2024-03-10",
    credentialId: "SE-ALL-2024-008",
    skills: ["Software Architecture", "Design Patterns", "Testing", "UML", "SDLC"],
    image: "/api/placeholder/600/400",
    certificateUrl: "/src/Certificate/Software Engineering all.pdf",
    featured: true,
    
  },
  {
    id: 9,
    title: "Software Engineering: Implementation and Testing",
    issuer: "University of Alberta",
    issueDate: "2024-02-25",
    credentialId: "SE-IMPL-2024-009",
    skills: ["Unit Testing", "Integration Testing", "Code Quality", "Debugging", "TDD"],
    image: "/api/placeholder/600/400",
    certificateUrl: "/src/Certificate/Software Engineering Implementation and Testing.pdf",
    featured: false,

  },
  {
    id: 10,
    title: "Software Engineering: Modeling Software Systems using UML",
    issuer: "University of Alberta",
    issueDate: "2024-02-10",
    credentialId: "SE-UML-2024-010",
    skills: ["UML Diagrams", "System Modeling", "Requirements Analysis", "Design Documentation"],
    image: "/api/placeholder/600/400",
    certificateUrl: "/src/Certificate/Software Engineering Modeling Software Systems using UML.pdf",
    featured: false,
   
  },
  {
    id: 11,
    title: "Software Engineering: Software Design and Project Management",
    issuer: "University of Alberta", 
    issueDate: "2024-01-30",
    credentialId: "SE-DESIGN-2024-011",
    skills: ["Software Design", "Architecture Patterns", "Project Management", "Risk Management"],
    image: "/api/placeholder/600/400",
    certificateUrl: "/src/Certificate/Software Engineering Software Design and Project.pdf",
    featured: false,
 
  }
];

function Certificate() {

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
            My <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Certificates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Professional certifications in Blockchain, Software Engineering, and Agile Project Management that demonstrate my expertise in cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificatesData.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
            >
              <CertificateCard {...certificate} />
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </div>
  );
}

export default Certificate;
