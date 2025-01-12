import React from 'react'
import CertificateCard from './CertificateCard'

function Certificates() {
    return (
        <div className='w-[100%] h-[100%]'>
            <h1 className='text-4xl md:text-5xl text-center font-bold mt-20'>ℂ𝕖𝕣𝕥𝕚𝕗𝕚𝕔𝕒𝕥𝕖𝕤</h1>

            <div className='mt-20 px-10 w-[100%] h-[100%] flex items-center justify-center gap-10 flex-wrap'>
                <CertificateCard image={"https://i.ibb.co/9N20PbC/nptel.png"} title={"DBMS - NPTEL"}  link={"./src/assets/nptel-result.pdf"}/>
                <CertificateCard image={"https://i.ibb.co/9N20PbC/nptel.png"} title={"Database Management System"} link={"/"}/>      
            </div>
        </div>
    )
}

export default Certificates