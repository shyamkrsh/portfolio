import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const testimonials = [
    {
        name: "Sonu Kumar",
        role: "Teammate - Easy Stay",
        feedback:
            "Working with Shyam was an amazing experience. He handled the backend and authentication flawlessly, making the project stable and scalable.",
        image: "https://i.pravatar.cc/100?img=3",
    },
    {
        name: "Dr. Shakti Nath Singh",
        role: "HOD - College",
        feedback:
            "Shyam’s dedication and creativity in building real-world projects like Smart Virtual Mouse using hand gesture and EasyStay make him stand out from his peers.",
        image: "https://i.pravatar.cc/100?img=5",
    },
    {
        name: "Rohit Mehta",
        role: "Freelance Client",
        feedback:
            "Delivered a fully functional e-commerce app ahead of schedule. Great communication and problem-solving skills.",
        image: "https://i.pravatar.cc/100?img=7",
    },
];

export default function Testimonials() {
    const { theme } = useSelector((state) => state.theme);
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <section
            id="testimonials"
            ref={ref}
            className={`py-16 px-6 sm:px-12 transition-colors duration-300  ${theme === "dark"
                ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
                : "bg-gradient-to-tl  from-gray-50 via-white to-gray-100 text-gray-900"
                }`}
        >
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold mb-10"
                >
                    Testimonials
                </motion.h2>

                {/* Testimonials Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                                    : {}
                            }
                            className={`rounded-2xl p-6 shadow-lg ${theme === "dark"
                                ? "bg-gray-800 border border-gray-700"
                                : "bg-white border border-gray-200"
                                }`}
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Avatar */}
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mb-4 shadow-md"
                                />
                                {/* Feedback */}
                                <p className="text-sm italic mb-4">
                                    “{testimonial.feedback}”
                                </p>
                                {/* Name & Role */}
                                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {testimonial.role}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
