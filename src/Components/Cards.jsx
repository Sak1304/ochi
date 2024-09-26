import { motion } from 'framer-motion'
import React from 'react'

function Cards() {
  return (
    <div  data-scroll data-scroll-speed = "-0.01" className='w-full h-screen bg-zinc-100 flex gap-5 px-12 items-center'>
        <div className='cardcontainer h-[65vh] w-[50vw]'>
            <div className='relative rounded-xl card w-full h-full bg-[#004D43] flex justify-center items-center'>            
                <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-3 rounded-full py-1 border-2 text-[#CDEA68] border-[#CDEA68] text-sm'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='flex cardcontainer h-[65vh] gap-5 w-[50vw]'>
            <div whileHover={{backgroundColor: "#ffffff",color: "#000000"}} className='relative rounded-xl card w-full h-full bg-[#212121] flex justify-center items-center'>
                <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /> 
                <motion.button whileHover={{backgroundColor: "#ffffff",color: "#000000"}} className='absolute left-8 bottom-10 px-3 rounded-full py-1 border-2 text-[#F4F4F4] border-[#F4F4F4] text-sm'>RATING 5.0 ON CLUTCH</motion.button>   
            </div>
            <div className='relative rounded-xl card w-full h-full bg-[#212121] flex justify-center items-center'>
                <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <motion.button whileHover={{backgroundColor: "#ffffff",color: "#000000"}} className='absolute left-8 bottom-10 px-3 rounded-full py-1 border-2 text-[#F4F4F4] border-[#F4F4F4] text-sm'>BUSINESS BOOTCAMP ALUMINI</motion.button> 
            </div>
        </div>
    </div>
  )
}

export default Cards