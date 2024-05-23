import React from 'react'
import { useState , useEffect } from 'react';
import Header from './components/Header';
import Index from './Index';
const App = () => {
  
  return (
    // 
    <div className='  '>

       <div className="  flex flex-row  h-screen w-screen fixed mt-0 bg-[#0a1627]">
        <div className='  w-[600px]'>
       <Header/>
        </div>

        
        <div className=' grow '>
          
          <Index/>
          
        </div>

    </div>
    </div>

  )
}

export default App