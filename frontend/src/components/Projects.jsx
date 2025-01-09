import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className='w-[100%] h-[100%]'>
        <h1 className='text-2xl text-center font-bold mt-20'>─═✧✧═─ ℙ𝕣𝕠𝕛𝕖𝕔𝕥𝕤 ─═✧✧═─</h1>

        <div className='mt-20 px-10 w-[100%] h-[100%] flex items-center justify-center gap-10 flex-wrap'>

            <ProjectCard image={"./src/assets/easystay.png"} title={"Property Rental Application"} link={"https://easystayngp.vercel.app"}/>
            <ProjectCard image={"./src/assets/easystay.png"}/>
            <ProjectCard image={"./src/assets/easystay.png"}/>
            <ProjectCard image={"./src/assets/easystay.png"}/>
            <ProjectCard image={"./src/assets/easystay.png"}/>
            <ProjectCard image={"./src/assets/easystay.png"}/>
            

        </div>
    </div>
  )
}

export default Projects