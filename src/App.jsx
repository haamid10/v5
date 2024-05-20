import React from 'react'
import Index from './Index'
import Nav from './components/Nav';
import HexagonAnimation from './HexagonAnimation';
import { useState , useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='relative bg-[#16193f] w-screen h-screen'>
       <div className="absolute w-screen h-screen ">
      {isLoading ? <HexagonAnimation /> :  <Index/>}  
      {/* <HexagonAnimation/> */}

    </div>
    {/* <Nav/> */}

    <div className=' '>
    </div>


    </div>

  )
}

export default App