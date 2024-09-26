import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all"

function Featured() {
  const cards = [useAnimation(),useAnimation()]; 
  const cards1 = [useAnimation(),useAnimation()]; 
     

  const handleHover1 = (index)=> {
    cards[index].start({y:"0"})
  }
  const handleHoverEnd1 = (index)=> {
    cards[index].start({y:"100%"})
  }
  const handleHover2 = (index)=> {
    cards1[index].start({y:"0"})
  }
  const handleHoverEnd2 = (index)=> {
    cards1[index].start({y:"100%"})
  }
    
  return (
    <div  className='w-full py-28 bg-zinc-800'>
        <div className='w-full px-10 border-b-[1px] border-zinc-600 pb-12'>
            <h1 className='text-5xl font-["Poppins"]'>Featured Projects</h1>
        </div>
        <div className='px-14'>
            <div className="cards1 w-full flex gap-4 mt-24">
                <motion.div onHoverStart={() =>handleHover1(0)} onHoverEnd={()=>handleHoverEnd1(0)} className='relative cardcontainer w-1/2 h-[83vh] '>
                    <h1 className='flex overflow-hidden  absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2  leading-none tracking-normal text-[#CDEA68] z-[9] font-["Japan"] text-9xl whitespace-nowrap '>
                    {"CARDBOARD SPACESHIP".split('').map((items,index) => 
                        <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1], delay:index*0.03}} className='inline-block '>{items}</motion.span>)}                        
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                    </div>
                </motion.div>

                <motion.div onHoverStart={() =>handleHover1(1)} onHoverEnd={()=>handleHoverEnd1(1)} className=' relative cardcontainer w-1/2 h-[83vh]'>
                    <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2  leading-none tracking-normal text-[#CDEA68] z-[9] font-["Japan"] text-9xl whitespace-nowrap'>
                        {"AH2 & MATTHORN".split('').map((items,index) =>
                         <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22,1,0.36,1], delay:index*0.03}} className='inline-block '>{items}</motion.span>)}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
                    </div>
                </motion.div>
            </div>
            <div className="cards2 w-full flex gap-4 mt-24">
                <motion.div onHoverStart={() =>handleHover2(0)} onHoverEnd={()=>handleHoverEnd2(0)} className='relative cardcontainer w-1/2 h-[83vh]'>
                    <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  leading-none tracking-normal text-[#CDEA68] z-[9] font-["Japan"] text-9xl whitespace-nowrap'>
                    {"FYDE".split('').map((items,index) =>
                        <motion.span initial={{y:"100%"}} animate={cards1[0]} transition={{ease:[0.22,1,0.36,1], delay:index*0.03}} className='inline-block '>{items}</motion.span>)}                        
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                    </div>
                </motion.div>

                <motion.div onHoverStart={() =>handleHover2(1)} onHoverEnd={()=>handleHoverEnd2(1)} className=' relative cardcontainer w-1/2 h-[83vh]'>
                    <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2  leading-none tracking-normal text-[#CDEA68] z-[9] font-["Japan"] text-9xl whitespace-nowrap'>
                        {"VISE".split('').map((items,index) =>
                            <motion.span initial={{y:"100%"}} animate={cards1[1]} transition={{ease:[0.22,1,0.36,1], delay:index*0.03}} className='inline-block '>{items}</motion.span>)}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Featured