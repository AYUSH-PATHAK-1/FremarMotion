import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Squer from './Components/Squer'

const App = () => {
  const [move,setMove]=useState(false);
  return (
    <>
    <div className=' bg-gradient-to-r from-purple-500 to-pink-500'>
        <div className=' flex justify-center items-center h-screen  '>
    <motion.div animate={{x:move ? 200: -200}} 
    whileHover={{scale:2}}
    drag
    whileDrag={{scale:1}}
    transition={{type:"spring",bounce:0.7}}
    onClick={()=>{
      setMove(!move);
    }}><Squer/></motion.div>    
    </div>
    </div>
    </>
    
  )
}

export default App