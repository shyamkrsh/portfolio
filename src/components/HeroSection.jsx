import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const { theme } = useSelector((state) => state.theme);

  // 👇 detect when HeroSection is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // allow re-trigger when scrolling back
    threshold: 0.2,     // 20% visible to start animation
  });

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={ref}
      className={`relative w-full  pt-20 min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            : "bg-gradient-to-br from-slate-100 via-white to-slate-200"
        }`}
    >
      {/* Floating Background Glow */}
      <div
        className={`absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse
        ${theme === "dark" ? "bg-purple-800" : "bg-purple-300"}`}
      ></div>
      <div
        className={`absolute bottom-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse
        ${theme === "dark" ? "bg-blue-800" : "bg-blue-300"}`}
      ></div>

      <div className="flex flex-col md:flex-row items-center justify-between w-11/12 max-w-6xl mx-auto relative z-10">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 h-full p-4 text-center md:text-left"
          initial={{ x: -80, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-extrabold leading-snug transition-colors duration-500
              ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            I&apos;m a{" "}
            <span className="text-purple-500">
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Software Engineer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Full Stack Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("MERN Stack Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("React.js Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Node.js Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </h2>

          <motion.p
            className={`mt-6 w-full pr-2 md:pr-8 text-[1.1rem] leading-relaxed transition-colors duration-500
              ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I’m{" "}
            <span
              className={`font-semibold transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Shyam Kumar Sharma
            </span>
            , a passionate developer skilled in{" "}
            <span className="text-purple-500 font-medium">MERN stack</span> &nbsp;
            and{" "}
            <span className="text-blue-500 font-medium">AI/ML</span>, crafting
            scalable and impactful digital solutions.
          </motion.p>

          {/* Buttons */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05}}
              whileTap={{ scale: 0.95 }}
              className={`mt-6 inline-flex items-center text-sm md:text-base px-4 md:px-5 py-2 rounded-md shadow-lg cursor-pointer
                transition-all duration-300 ease-in-out
                ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-indigo-500/30"
                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-2xl"
                }`}
                onClick={() => handleScroll("Projects")}
            >
              View My Work
            </motion.a>
            <motion.a
              href="/assets/cv/shyam_cv.pdf"
              download
              whileHover={{ scale: 1.05}}
              whileTap={{ scale: 0.95 }}
              className={`mt-6 inline-flex items-center gap-2 text-sm md:text-base px-4 md:px-5 py-2 rounded-md shadow-lg cursor-pointer
                transition-all duration-300 ease-in-out
                ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-indigo-500/30"
                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-2xl"
                }`}
            >
              <IoMdDownload className="w-5 h-5" />
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0"
          initial={{ x: 80, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/assets/images/shyam.jpg"
            alt="Shyam Kumar Sharma"
            className={`w-72 h-72 md:w-[25rem] md:h-[25rem] hidden md:block object-cover rounded-full shadow-2xl border-4
              transition-all duration-500
              ${
                theme === "dark"
                  ? "border-gray-700 shadow-purple-900/50"
                  : "border-white"
              }`}
            whileHover={{ rotate: 6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          />


          <motion.img
            src="/assets/images/shyam.jpg"
            alt="Shyam Kumar Sharma"
            className={`w-[20rem] h-[20rem] object-cover md:hidden rounded-2xl shadow-2xl border-4 transition-all duration-500
              ${theme === "dark" ? "border-gray-700 shadow-purple-900/50" : "border-white"}`}
            whileHover={{ rotate: 6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          />




        </motion.div>
      </div>
    </div>
  );
}
