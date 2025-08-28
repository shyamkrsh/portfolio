import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer({ theme }) {
  const isDark = theme === "dark";

  return (
    <footer
      className={`relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300"
          : "bg-gradient-to-b from-gray-100 via-white to-gray-200 text-gray-800"
      } py-10`}
    >
      

      {/* Main Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        
        {/* Tagline */}
        <motion.p
          className={`italic mb-2 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Designed & Developed with ❤️ using React & Tailwind
        </motion.p>

        {/* Copyright */}
        <motion.p
          className={`text-sm ${
            isDark ? "text-gray-500" : "text-gray-500"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          © 2025 Shyam Kumar Sharma. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
}
