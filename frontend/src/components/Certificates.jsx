import React from 'react'
import CertificateCard from './CertificateCard'

function Certificates() {
    return (
        <div className='w-[100%] h-[100%]'>
            <h1 className='text-2xl text-center font-bold mt-20'>─═✧✧═─ ℂ𝕖𝕣𝕥𝕚𝕗𝕚𝕔𝕒𝕥𝕖𝕤 ─═✧✧═─</h1>

            <div className='mt-20 px-10 w-[100%] h-[100%] flex items-center justify-center gap-10 flex-wrap'>

                <CertificateCard image={"./src/assets/nptel.png"} title={"DBMS - NPTEL"}  link={"/"}/>
                <CertificateCard image={"./src/assets/nptel.png"} title={"Database Management System"} link={"/"}/>
                <CertificateCard image={"./src/assets/nptel.png"} title={"Database Management System"} link={"/"}/>
                <CertificateCard image={"./src/assets/nptel.png"} title={"Database Management System"} link={"/"}/>
                <CertificateCard image={"./src/assets/nptel.png"} title={"Database Management System"} link={"/"}/>
                <CertificateCard image={"./src/assets/nptel.png"} title={"Database Management System"} link={"/"}/>
            

            </div>
        </div>
    )
}

export default Certificates