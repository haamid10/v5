import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className='flex justify-between items-center mt-4 h-16 text-slate-100 relative shadow-sm ' role='navigation'>
            <a href='/' className=' text-3xl font-bold  font-calibre border-2 border-[#64ffda] rounded-3xl p-1'>H</a>
            <div className='pr-8 md:block hidden font-mono'>
            <a href='/' className='p-4 hover:text-[#64ffda]'>  <span className='text-[#64ffda]'>01.</span>  Home</a>
            <a href='/' className='p-4 hover:text-[#64ffda]'> <span className='text-[#64ffda]'>02.</span>  About</a>
            <a href='/' className='p-4 hover:text-[#64ffda]'> <span className='text-[#64ffda]'>03.</span>  work</a>
            <a href='/' className='p-4 hover:text-[#64ffda] mr-12'> <span className='text-[#64ffda] '>04.</span>  Contact</a>
             <a  className='relative text-[#64ffda] text-center border border-[#64ffda] rounded p-2 mr-12    '>Resume</a>
            </div>
            
        </nav>
    </div>
  )
}

export default Nav