// Achievements.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAward, FaCertificate, FaTrophy } from "react-icons/fa";
import { useSelector } from "react-redux";

const Achievements = () => {
  const { theme } = useSelector((state) => state.theme);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const achievements = [
    // {
    //   icon: <FaTrophy className="text-yellow-500 text-3xl" />,
    //   title: "🏆 Hackathon Finalist",
    //   description: "Reached the finals of XYZ Hackathon among 500+ teams.",
    // },
    {
      icon: <FaCertificate className="text-blue-500 text-3xl" />,
      title: "MERN Stack Certification",
      description: "Certified in MongoDB, Express.js, React, and Node.js with hands-on project experience.",
    },
    {
      icon: <FaAward className="text-purple-500 text-3xl" />,
      title: "Open Source Contributor",
      description: "Actively contributed to open-source projects, fixing issues and enhancing features on GitHub.",
    },
    {
      icon: <FaCertificate className="text-green-500 text-3xl" />,
      title: "DSA with Java Certification",
      description: "Certified in Data Structures & Algorithms using Java, with a focus on problem-solving and coding efficiency.",
    },
  ];

  return (
    <section
      ref={ref}
      id="achievements"
      className={`py-16 px-6 md:px-20 transition-colors duration-300
        ${theme === "dark"
          ? "bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-bl  from-gray-50 via-white to-gray-100 text-gray-900"
        }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Achievements & Certifications
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 ${theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm opacity-80">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
