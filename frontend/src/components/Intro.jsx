import React from 'react'
import Typewriter from 'typewriter-effect';
import { CgSoftwareDownload } from "react-icons/cg";

function Intro() {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between w-[100%]   mt-20'>
            <div className="w-[100%] md:w-[50%] h-[100%] flex items-center">
                <div className='w-[100%] h-[70%]  md:ps-[10rem]'>
                    <h1 className='text-3xl font-bold text-yellow-600 text-center md:text-left'>Good Morning !</h1>
                    <h2 className='text-3xl font-bold mt-5'>
                        <h2 className='text-center md:text-left'>I am a</h2>
                        <h2 className='text-green-500 text-center md:text-left mt-5'>
                            <Typewriter
                                options={{
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString('MERN Stack Developer')
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

                    <p className='text-xl font-semibold mt-5 px-5 md:px-0 text-center capitalize md:text-left'>𝑴𝒚 𝒏𝒂𝒎𝒆 𝒊𝒔 𝑺𝒉𝒚𝒂𝒎 𝑲𝒖𝒎𝒂𝒓 𝑺𝒉𝒂𝒓𝒎𝒂. 𝑰'𝒎 𝑷𝒖𝒓𝒔𝒖𝒊𝒏𝒈 𝒎𝒚 𝑫𝒊𝒑𝒍𝒐𝒎𝒂 𝒊𝒏 𝑪𝒐𝒎𝒑𝒖𝒕𝒆𝒓 𝑺𝒄𝒊𝒆𝒏𝒄𝒆 𝒇𝒓𝒐𝒏 𝑵𝒆𝒘 𝑮𝒐𝒗𝒆𝒓𝒏𝒎𝒆𝒏𝒕 𝑷𝒐𝒍𝒚𝒕𝒆𝒄𝒉𝒏𝒊𝒄 𝑷𝒂𝒕𝒏𝒂-13, 𝑰 𝒔𝒌𝒊𝒍𝒍𝒆𝒅 𝒊𝒏 𝑴𝑬𝑹𝑵 𝑺𝒕𝒂𝒄𝒌 𝑾𝒆𝒃 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕, 𝒂𝒏𝒅 𝑰 𝒂𝒍𝒔𝒐 𝒉𝒂𝒗𝒆 𝒈𝒐𝒐𝒅 𝒌𝒏𝒐𝒘𝒍𝒆𝒅𝒈𝒆 𝒐𝒇 𝒋𝒂𝒗𝒂 𝒘𝒊𝒕𝒉 𝑫𝒂𝒕𝒂 𝑺𝒕𝒓𝒖𝒄𝒕𝒖𝒓𝒆 & 𝒂𝒍𝒈𝒐𝒓𝒊𝒕𝒉𝒎𝒔 𝒕𝒉𝒂𝒕 𝒆𝒏𝒉𝒂𝒏𝒄𝒆𝒔 𝒎𝒚 𝒑𝒓𝒐𝒃𝒍𝒆𝒎 𝒔𝒐𝒍𝒗𝒊𝒏𝒈 𝒂𝒏𝒅 𝒄𝒐𝒅𝒊𝒏𝒈 𝒔𝒌𝒊𝒍𝒍𝒔</p>

                    <div className='mt-5 grid place-content-center'>
                        <button className='bg-yellow-500 hover:bg-yellow-400 font-semibold flex items-center justify-center gap-2 px-3 py-2 rounded-md' onClick={() => location.href ="https://bronze-roseanna-43.tiiny.site"}>Download CV <CgSoftwareDownload className='text-2xl' /></button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] md:w-[50%] h-[100%]  grid place-content-center relative">
                <div className='w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] rounded-full relative grid place-content-center'>
                    <img src="https://i.ibb.co/8K78cqs/shyam.jpg" className='w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] rounded-full relative' />
                </div>
            </div>
        </div>
    )
}

export default Intro