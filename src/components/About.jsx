import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaCode, FaChartLine } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { theme } = useSelector((state) => state.theme);

  // 👇 Detect when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // re-trigger animation on re-entry
    threshold: 0.2,     // starts animation when 20% of section is visible
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`relative w-full py-20 px-6 md:px-16 transition-colors overflow-hidden duration-500
        ${theme === "dark"
          ? "bg-gradient-to-bl from-black via-gray-800 to-gray-900"
          : "bg-gradient-to-tr from-slate-100 via-white to-slate-200"
        }`}
    >
      {/* Floating Background Glow (same as HeroSection) */}
      <div
        className={`absolute top-28 left-16 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse
        ${theme === "dark" ? "bg-purple-800" : "bg-purple-300"}`}
      ></div>
      <div
        className={`absolute bottom-20 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse
        ${theme === "dark" ? "bg-blue-800" : "bg-blue-300"}`}
      ></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <motion.img
            src="/assets/images/shyam.jpg"
            alt="Shyam Kumar Sharma"
            className={`w-[20rem] h-[20rem] object-cover rounded-2xl shadow-2xl border-4 transition-all duration-500
              ${theme === "dark" ? "border-gray-700 shadow-purple-900/50" : "border-white"}`}
            whileHover={{ rotate: 6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2
            className={`text-4xl font-extrabold relative inline-block ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}
          >
            About <span className="text-blue-900">Me</span>
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></span>
          </h2>

          <p
            className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
          >
            Hi, I’m{" "}
            <span
              className={`font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"
                }`}
            >
              Shyam Kumar Sharma
            </span>{" "}
            — a passionate{" "}
            <span className="text-purple-500 font-medium">Full Stack Developer</span>{" "}
            skilled in MERN stack and Agentic AI with strong interest in{" "}
            <span className="text-blue-500 font-medium">Data Analytics & AI</span>.
            I enjoy crafting modern, scalable, and impactful digital solutions that
            bridge technology with real-world needs.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[
              { icon: <FaUserGraduate className="text-purple-500 text-3xl mb-2" />, title: "Education", text: "Diploma in Computer Science B.Tech in Computer Science" },
              { icon: <FaCode className="text-blue-500 text-3xl mb-2" />, title: "Development", text: "MERN Stack, React Native, AI Integrated Projects" },
              { icon: <FaChartLine className="text-green-500 text-3xl mb-2" />, title: "Analytics", text: "Data Analysis & Insights" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition
                  ${theme === "dark"
                    ? "bg-gray-800/70 text-gray-200 backdrop-blur-md border border-gray-700"
                    : "bg-white text-gray-800"
                  }`}
              >
                {card.icon}
                <h4 className="text-lg font-semibold">{card.title}</h4>
                {
                  card.title === "Education" ?
                    <p className="text-sm text-center opacity-80">
                      <p className="md:hidden">
                        B.Tech in Computer Science <br />
                        Diploma in Computer science
                      </p>
                      <p className="hidden md:block">
                        B.Tech in CSE <br />
                        Diploma in CSE
                      </p>
                    </p>
                    : <p className="text-sm text-center opacity-80">{card.text}</p>
                }
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
