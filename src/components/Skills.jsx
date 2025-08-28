import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaTools } from "react-icons/fa";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiMui,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiExpo,
    SiGit,
    SiGithub,
    SiDocker,
    SiPostman,
    SiCloudinary,
    SiVercel,
    SiRender,
    SiMysql,
} from "react-icons/si";
import { useSelector } from "react-redux";

export default function Skills() {
    const { theme } = useSelector((state) => state.theme);
    const skills = [
        { name: "React.js", icon: <SiReact className="text-sky-500" />, level: 95 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 90 },
        { name: "Material UI", icon: <SiMui className="text-blue-500" />, level: 85 },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, level: 95 },
        { name: "Express.js", icon: <SiExpress className={theme === "dark" ? "text-gray-200" : "text-gray-800"} />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 90 },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 85 },
        { name: "React Native", icon: <FaReact className="text-sky-400" />, level: 80 },
        { name: "Expo", icon: <SiExpo className={theme === "dark" ? "text-white" : "text-black"} />, level: 70 },
        { name: "Git", icon: <SiGit className="text-orange-500" />, level: 90 },
        { name: "GitHub", icon: <SiGithub className={theme === "dark" ? "text-white" : "text-black"} />, level: 85 },
        { name: "Postman", icon: <SiPostman className="text-orange-400" />, level: 80 },
        { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" />, level: 85 },
        { name: "Vercel", icon: <SiVercel className={theme === "dark" ? "text-white" : "text-black"} />, level: 90 },
        { name: "Render", icon: <SiRender className="text-purple-500" />, level: 70 },
        {
            name: "Other Frameworks",
            icon: <FaTools className={theme === "dark" ? "text-gray-200" : "text-gray-700"} />,
            level: 75
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section
            id="skills"
            ref={ref}
            className={`py-16 px-6 md:px-20 transition-colors overflow-hidden duration-500 ${theme === "dark"
                ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
                : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"
                }`}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2
                    className={`text-4xl font-bold mb-10 ${theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                >
                    Skills & Tools
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-4 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all ${theme === "dark"
                                ? "bg-gray-800/70 backdrop-blur-md border border-gray-700"
                                : "bg-white/90 border border-gray-200"
                                }`}
                        >
                            <span className="text-3xl">{skill.icon}</span>
                            <div className="w-full">
                                <div
                                    className={`flex justify-between text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div
                                    className={`w-full h-3 rounded-full mt-2 ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                                        }`}
                                >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: inView ? `${skill.level}%` : 0 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className={`h-3 rounded-full ${theme === "dark"
                                            ? "bg-gradient-to-r from-purple-500 to-blue-500"
                                            : "bg-gradient-to-r from-blue-500 to-purple-500"
                                            }`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
