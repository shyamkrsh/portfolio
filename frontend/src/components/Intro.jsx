import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { CgSoftwareDownload } from "react-icons/cg";
import { motion } from "motion/react"


function Intro() {

    const [greet, setGreet] = useState("");

    useEffect(() => {
        const date = new Date();
        let h = date.getHours();
        if (h >= 0 && h < 12) {
            setGreet("Good Morning !");
        } else if (h >= 12 && h <= 17) {
            setGreet("Good Afternoon !");
        } else {
            setGreet("Good Evening !");
        }
    }, []);

    return (
        // <video loop autoPlay playsInline muted src="./src/assets/intro-2.mp4" className='w-[100%] h-[100%] object-contain'></video>
        <div className='intro flex flex-col-reverse md:flex-row items-center justify-between w-[100%] pt-10 pb-10'>
            <div className="w-[100%] md:w-[50%] h-[100%] flex items-center mt-10">
                <div className='w-[100%] h-[70%]  md:ps-[10rem]'>
                    <h1 className='text-3xl font-bold text-yellow-600 text-center md:text-left md:text-5xl' >{greet}</h1>
                    <h2 className='text-3xl font-bold mt-1 md:text-5xl'>
                        <h2 className='text-center md:text-left ' >I am a</h2>
                        <h2 className='text-green-500 text-center md:text-left mt--1' >
                            <Typewriter
                                options={{
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString('MERN Developer')
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString("Frontend Developer")
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString("Backend Developer")
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString("Full Stack Developer")
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString("React Js Developer")
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString("Node Js Developer")
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString("Java Programmer")
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .start()
                                }}
                            />
                        </h2>
                    </h2>

                    <p className='text-xl font-semibold mt-5 px-5 md:px-0 text-center capitalize md:text-left'>
                        Hi, My name is Shyam Kr. Sharma, I am pursuing my Diploma from New Government Polytechnic Patna
                    </p>

                    <div className='mt-5 grid place-content-center md:place-content-start'>
                        <button className='dnldbtn font-semibold text-xl flex items-center justify-center gap-2 px-3 py-2 rounded-md ' onClick={() => location.href = "https://bronze-roseanna-43.tiiny.site"}>Download CV <CgSoftwareDownload className='text-2xl dnldrsmbtn' /></button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] md:w-[50%] h-[100%]  grid place-content-center relative">
                <motion.div className='w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] rounded-full relative grid place-content-center'
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                >

                    <img src="https://i.ibb.co/RHgr3xQ/20250112-212148.png" className='introImg w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] rounded-full relative' />

                </motion.div>
            </div>
        </div>

    )
}

export default Intro