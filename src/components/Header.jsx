import React from 'react'
import '../index.css'


const Header = () => {
  return (
    <div className=' mt-24 ml-24 fixed mb-12'>
        <div className=' flex flex-col items-start gap-4'>
            <h3 className='text-md font-mono text-[#64ffda] '>Hi, my name is </h3>
            <h1 className='text-[#ccd6f6] font-poppins text-[60px] font-bold leading-tight'>Abdihamid Abdi.<br/></h1>
            <span  className='text-[#a8b2d1] font-poppins text-[60px]  font-bold '>I build things for the web.</span>
             <p className='text-[#a8b2d1] font-calibre w-[520px] text-lg'>I’m a software developer specializing in building (and occasionally web apps)
             exceptional digital experiences. Currently, I’m focused on building accessible, 
             human-centered products at <span className='text-[#64ffda]'><a href="https://hudorganics.com/">hudorganics</a></span></p>
        </div>
    </div>
  )
}

export default Header