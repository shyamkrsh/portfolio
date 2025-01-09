import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { FaHome } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
import { MdLibraryBooks } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoMdContacts } from "react-icons/io";

function Navbar() {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const navigate = useNavigate();

    const DrawerList = (
        <Box sx={{ width: 250, height: '100vh', backgroundColor: '#000' }} bgcolor={"#000"} onClick={toggleDrawer(false)}>
            <h2 className='text-white text-2xl font-semibold text-center py-3 w-[100%] '>𝑴𝒚 𝑷𝒐𝒓𝒕𝒇𝒐𝒍𝒊𝒐</h2>
            <ul className='text-slate-300 ps-5 mt-5'>
                <li className='text-xl font-semibold py-3 flex items-center justify-start '><Link to={"/"}> <FaHome className='inline me-2 text-3xl'/> Home</Link></li>
                <li className='text-xl font-semibold py-3 flex items-center justify-start '><Link to={"/about"}> <GrStatusInfo className='inline me-2 text-3xl'/> About</Link></li>
                <li className='text-xl font-semibold py-3 flex items-center justify-start '><Link to={"/educations"}> <MdLibraryBooks className='inline me-2 text-3xl'/> Education</Link></li>
                <li className='text-xl font-semibold py-3 flex items-center justify-start '><Link to={"/projects"}> <GrProjects className='inline me-3 text-2xl'/> Projects</Link></li>
                <li className='text-xl font-semibold py-3 flex items-center justify-start '><Link to={"/certificates"}> <LiaCertificateSolid className='inline me-2 text-3xl'/> Certificates</Link></li>
                <li className='text-xl font-semibold py-3 flex items-center justify-start '><Link to={"/contacts"}> <IoMdContacts className='inline me-2 text-3xl'/> Contact</Link></li>
            </ul>
        </Box>
    );


    return (
        <header className='flex items-center justify-between px-5 py-2 bg-slate-950 shadow-lg sticky top-0 z-50'>
            <div className="logo flex items-center justify-center gap-3 md:gap-5 cursor-pointer" onClick={() => navigate("/")}>
                <div className='w-[50px] h-[50px] rounded-full'>
                    <img src="./src/assets/logo.png" alt="" className='w-[50px] h-[50px] rounded-full' />
                </div>
                <h1 className='text-3xl font-bold'>𝑺𝒉𝒚𝒂𝒎</h1>
            </div>
            <div className='flex items-center justify-between gap-10'>
                <div className=' hidden md:block'>
                    <ul className='flex items-center justify-center gap-5'>
                        <li className='font-semibold'><Link to={"/"}>Home</Link></li>
                        <li className='font-semibold'><Link to={"/about"}>About</Link></li>
                        <li className='font-semibold'><Link to={"/skills"}>Skills</Link></li>
                        <li className='font-semibold'><Link to={"/projects"}>Projects</Link></li>
                        <li className='font-semibold'><Link to={"/educations"}>Education</Link></li>
                        <li className='font-semibold'><Link to={"/certificates"}>Certificates</Link></li>
                        <li className='font-semibold'><Link to={"/contacts"}>Contact</Link></li>
                    </ul>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleDrawer(true)}>
                        <RiMenu3Fill className='text-3xl font-semibold' />
                    </button>
                    <div>
                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar