import { motion } from "motion/react"
import React, { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function CertificateCard({ image, title, link }) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("animated-div");
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight && rect.bottom >= -300) {
                setInView(true);
            } else {
                setInView(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <motion.div className='bg-slate-900 rounded-md w-[20rem] h-[20rem] flex items-center flex-col cursor-pointer'
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: {  type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        >
            <div className='img w-[18rem] h-[11rem] mt-3'>
                <img src={image} className='w-[100%] h-[100%] rounded-md' />
            </div>
            <div className='content'>
                <h1 className='text-xl font-semibold text-center mt-3'>{title}</h1>
            </div>
            <div className='mt-5'>
                <button className='text-white bg-green-600 hover:bg-green-500 px-3 py-2 rounded-md font-semibold flex items-center justify-center gap-2' onClick={() => location.href = link}>View Certificate<FaArrowUpRightFromSquare className='text-xl' /></button>
            </div>
        </motion.div>
    )
}

export default CertificateCard