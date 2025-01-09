import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer footer-center bg-slate-950 text-base-content rounded p-10 mt-20">
            <nav className="grid grid-flow-col gap-4">

            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <FaLinkedin  className='text-white text-3xl'/>
                    </a>
                    <a>
                        <FaFacebookSquare  className='text-white text-3xl'/>
                    </a>
                    <a>
                        <FaSquareInstagram  className='text-white text-3xl'/>
                    </a>
                    <a>
                        <FaSquareTwitter  className='text-white text-3xl'/>
                    </a>
                </div>
            </nav>
            <aside>
                <p className='text-slate-200'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    )
}

export default Footer