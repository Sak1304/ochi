import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.02" className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text border-t-2 border-b-2 border-[#1B6057]  flex  overflow-hidden whitespace-nowrap uppercase '>
            <motion.h1 initial = {{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[25vw] leading-none tracking-normal font-["Japan"] font-semibold -mb-[3vw] pr-20'>We are ochi</motion.h1>
            <motion.h1 initial = {{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}}  className='text-[25vw] leading-none tracking-normal font-["japan"] font-semibold -mb-[3vw] pr-20'>We are ochi</motion.h1>   
              
        </div>
    </div>
  )
}

export default Marquee