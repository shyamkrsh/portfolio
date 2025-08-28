import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function Projects() {

    const { theme } = useSelector((state) => state.theme);
    const projects = [
        {
            title: "Sizzle Cart",
            tags: ["MERN", "E-commerce"],
            desc: "A spice delivery e-commerce platform with seamless cart and checkout.",
            img: "/assets/images/sizzlecart.png", // replace with real screenshot
            live: "https://sizzlecart.vercel.app",
            github: "#",
        },
        {
            title: "Easy Stay",
            tags: ["MERN", "E-commerce"],
            desc: "A online Property rental platform to book and rent stays with smooth UX.",
            img: "/assets/images/easystay.png",
            live: "https://easystayngp.vercel.app",
            github: "#",
        },
        {
            title: "Chat Bot",
            tags: ["MERN", "Gemini"],
            desc: "A mobile app for medicine ordering and health management.",
            img: "/assets/images/sbtebot.png",
            live: "https://sbtebot.vercel.app",
            github: "#",
        },
        {
            title: "Attendance Management System",
            tags: ["MERN"],
            desc: "Social media app with real-time one-on-one chat and media sharing.",
            img: "/assets/images/jobPortal.png",
            live: "#",
            github: "#",
        },
        {
            title: "Job Portal",
            tags: ["MERN"],
            desc: "Social media app with real-time one-on-one chat and media sharing.",
            img: "/assets/images/jobPortal.png",
            live: "#",
            github: "#",
        },
       
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            className={`py-10 px-6 transition-colors duration-500 ${theme === "dark"
                ? "bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white"
                : "bg-gradient-to-tr from-gray-100 via-white to-gray-200 text-gray-900"
                }`}
            id="projects"
        >
            <div className="max-w-6xl mx-auto text-center mb-16">
                <motion.h2
                    className="text-4xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    My Projects
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    A collection of my top works showcasing design, development, and problem-solving skills.
                </motion.p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                {projects.map((p, index) => {
                    const { ref, inView } = useInView({
                        triggerOnce: false,
                        threshold: 0.2,
                    });

                    return (
                        <motion.div
                            key={index}
                            ref={ref}
                            className={`relative rounded-2xl overflow-hidden shadow-xl backdrop-blur-lg border ${theme === "dark"
                                ? "bg-white/5 border-white/10 hover:border-cyan-400"
                                : "bg-white/70 border-gray-200 hover:border-cyan-500"
                                } transition-all duration-500 group`}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Project Thumbnail */}
                            <div className="overflow-hidden">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-4">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">{p.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {p.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`text-xs px-3 py-1 rounded-full ${theme === "dark"
                                                ? "bg-cyan-600/20 text-cyan-400"
                                                : "bg-cyan-100 text-cyan-700"
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-400 mb-4">{p.desc}</p>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={p.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group-hover:scale-105 shadow-md
                      bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600"
                                    >
                                        <FiExternalLink /> Live Demo
                                    </a>
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group-hover:scale-105 shadow-md
                      ${theme === "dark"
                                                ? "bg-gray-800 hover:bg-gray-700 text-white"
                                                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                                            }`}
                                    >
                                        <FiGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
