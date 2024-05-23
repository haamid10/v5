import React from 'react'
import '../index.css'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='fixed  bg-[#0a1627] mt-32 mx-32  flex flex-col items-center justify-start'>
        <div className=' flex flex-col items-start  '>
            <h1 className='text-[#e3e6f0] font-calibre  text-6xl font-bold mb-3'>Abdihamid Abdi.<br/></h1>
            <span  className='text-[#ccd6f6] font-calibre text-2xl  font-medium mb-4'>Full-stack developer</span>
             <p className='text-[#ccd6f6] font-calibre w-[420px] text-md'>I’m a Full-stack developer specializing in building (and occasionally web apps)
             exceptional digital experiences. Currently, I’m focused on building accessible</p>
             {/* human-centered products at <span className='text-[#64ffda]'><a href="https://hudorganics.com/">hudorganics</a></span></p>
             
             */}


        <div className='text-[#e3e6f0] text-3xl flex mt-12 gap-4'>
         <a href='https://github.com/haamid10'> <FaGithub /></a>
         <a href='https://www.instagram.com/hdcodespassion/'> <FaInstagram /></a>
        <a href='https://www.linkedin.com/in/haamid-abdi-66213325b/'><IoLogoLinkedin /></a>
        </div>
        </div>

       

    </div>
  )
}

export default Header