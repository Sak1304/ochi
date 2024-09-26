import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
   
   
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textstructure mt-32 px-10'>
            {["We create", "Eye Opening", "Presentations"].map((items,index) =>{
                return  <div className='masker'>
                            <div className='w-fit flex  items-end'>
                                {index === 1 && (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='w-[8vw] h-[5.4vw] rounded-md bg-cover -top-[.1vw] relative mr-[1vw]'>
                                    <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                </motion.div>)}
                                <h1 className="uppercase text-[7.5vw]  leading-[6.5vw] tracking-[-0.07em] font-semibold ">{items}</h1>
                            </div>
            </div>
            })}
           
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-1 capitalize px-10'>
            {["for public and private companies", "from the first pitch to IPO"].map((item,index) => (
                <p className={`text-md font-normal tracking-tight leading-none ${index === 0 && "mr-44"}`}>{item}</p>
            ))}
            <div className='start flex items-center gap-5 py-1'>
                <motion.div whileHover={{backgroundColor: "#ffffff",color: "#000000"}} className='px-5 py-[1px] border-[2px] border-zinc-600 font-normal text-md capitalize rounded-full'>Start the project</ motion.div>
                <motion.div whileHover={{backgroundColor: "#ffffff",color: "#000000"}} className='w-8 h-8 rounded-full border-[2px] border-zinc-600 flex justify-center items-center'>
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                    </span>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage