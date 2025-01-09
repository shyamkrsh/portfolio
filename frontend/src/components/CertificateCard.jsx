import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function CertificateCard({image, title, link}) {
    return (
        <div className='bg-slate-900 rounded-md w-[20rem] h-[20rem] flex items-center flex-col cursor-pointer'>
            <div className='img w-[18rem] h-[11rem] mt-3'>
                <img src={image} className='w-[100%] h-[100%] rounded-md' />
            </div>
            <div className='content'>
                <h1 className='text-xl font-semibold text-center mt-3'>{title}</h1>
            </div>
            <div className='mt-5'>
                <button className='text-white bg-green-600 hover:bg-green-500 px-3 py-2 rounded-md font-semibold flex items-center justify-center gap-2' onClick={() => location.href=link}>Go to Website <FaArrowUpRightFromSquare className='text-xl' /></button>
            </div>
        </div>
    )
}

export default CertificateCard