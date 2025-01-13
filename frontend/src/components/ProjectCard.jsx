import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


function ProjectCard({ image, title, link }) {
    return (
        <div className='projectCard bg-slate-700 rounded-md w-[90%] py-3 flex items-center flex-col cursor-pointer  m-auto'>
            <div className='img w-[90%] h-[11rem] mt-3 rounded-md'>
                <img src={image} className='w-[100%] h-[100%] rounded-md' />
            </div>
            <div className='content'>
                <h1 className='text-xl font-semibold text-center mt-3'>{title}</h1>
            </div>
            <div className='mt-3 flex items-center gap-5'>
                <button className='menuBtn' onClick={() => location.href = link}><FaGithub className='text-3xl' /></button>
                <button className='menuBtn' onClick={() => location.href = link}><FaArrowUpRightFromSquare className='text-2xl' /></button>
            </div>
        </div>
    )
}

export default ProjectCard