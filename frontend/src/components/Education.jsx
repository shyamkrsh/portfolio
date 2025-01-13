import { motion } from "motion/react"
import React, { useEffect, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

function Education() {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("animated-div");
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                setInView(true);
            } else {
                setInView(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='w-[100%] education '>
            <h1 className='text-4xl ms:text-5xl text-center font-bold pt-20'>𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻𝘀 </h1>
            <div className='flex flex-col md:flex-row items-center justify-center gap-20 mt-10'>
                <motion.div className='bg-slate-900 p-2 rounded-md w-[90%] md:w-[30%] h-[30vh] relative' id="animated-div"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                >
                    <h2 className=' text-slate-600'><ImQuotesLeft className='text-2xl' /></h2>
                    <div>
                        <h1 className='mt-3 text-2xl font-semibold text-center'>Diploma in Computer Science</h1>
                        <h2 className='text-center text-slate-200'>New Government Polytechnic Patna - 13</h2>
                        <h3 className='text-center font-semibold text-slate-400 mt-1'>CGPA : 8.60</h3>
                        <h2 className='text-center font-semibold text-xl mt-3'>Oct 2022 - Jun 2025</h2>
                    </div>
                    <h2 className='flex items-center justify-end text-slate-600 absolute bottom-2 right-2'><ImQuotesRight className='text-2xl' /></h2>
                </motion.div>
                <motion.div className='bg-slate-900 p-2 rounded-md w-[90%] md:w-[30%] h-[30vh] relative'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                        duration: 0.8,
                        scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
                    }}
                >
                    <h2 className=' text-slate-600'><ImQuotesLeft className='text-2xl' /></h2>
                    <div>
                        <h1 className='mt-3 text-2xl font-semibold text-center'>Matric</h1>
                        <h2 className='text-center text-slate-200'>B.R.R.D High School Singh Pur</h2>
                        <h3 className='text-center font-semibold text-slate-400 mt-1'>Percentage : 90.8</h3>
                        <h2 className='text-center font-semibold text-xl mt-3'>Oct 2022 - Jun 2025</h2>
                    </div>
                    <h2 className='flex items-center justify-end text-slate-600 absolute bottom-2 right-2'><ImQuotesRight className='text-2xl' /></h2>
                </motion.div>

            </div>
        </div>
    )
}

export default Education