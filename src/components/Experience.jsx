import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";
import { useSelector } from "react-redux";

const experiences = [
  {
    role: "Software Developer",
    company: "iCare Infosystems Pvt Ltd.",
    duration: "Jun 2025 – Present",
    description:
      "Currently working on healthcare related applications",
  },
  {
    role: "Software Developer Intern",
    company: "iCare Infosystems Pvt Ltd.",
    duration: "Mar 2025 - Apr 2025",
    description:
      "Built an Application for Tele-radiology for Doctors",
  },
  {
    role: "TPO Student Coordinator",
    company: "NGP Patna - 13",
    duration: "2022-25",
    description:
      "Acted as a bridge between students and recruiters, coordinated placement activities, and facilitated smooth communication to support successful campus drives.",
  }

];

const Experience = () => {

  const { theme } = useSelector((state) => state.theme)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      id="experience"
      className={`py-16 px-6 md:px-12 lg:px-20 ${theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100"
          : "bg-gradient-to-tl from-gray-50 via-white to-gray-100 text-gray-900"
        }`}
    >
      {/* Heading */}
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        <span className="inline-flex items-center gap-2">
          <Briefcase className="w-8 h-8 text-indigo-500" />
          Experience
        </span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-4 border-indigo-500 pl-6 space-y-12 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`p-6 rounded-2xl shadow-lg ${theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
              }`}
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-indigo-500 font-medium">
              {exp.company} • {exp.duration}
            </p>
            <p className="mt-3 text-base leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
