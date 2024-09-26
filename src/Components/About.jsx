import { motion, useAnimation } from 'framer-motion'
import { h1 } from 'framer-motion/client'
import React from 'react'
import {Power4} from "gsap/all"

function About() {
    const buttonanim = useAnimation()

    const handleHover =()=>{
        buttonanim.start({scale:"0.9"})
    }
    const handleHoverEnd =()=>{
        buttonanim.start({scale:"1"})
    }

    
  return (
    <div  className='w-full py-28 px-12 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Poppins"] text-[4vw] leading-[4vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className=' flex gap-32 w-full border-t-[1px] border-[#99AD53] mt-12 py-5'>
            {["What you can expect:","We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating."].map((items,index) =>(
                <p className={`w-72 ${index === 0 && "mr-52"}`}>{items}</p>
            ))}
            <div className='w-[3vw] mt-[5vw] '>
                {["S:","Instagram","Behance","Facebook","Linkedin"].map((items,index) => (
                    <p className={`cursor-pointer underline ${index ===0 && "no-underline"}`}>{items}</p>
                ))}
            </div>
        </div>
        <div className='flex w-full border-t-[1px] border-[#99AD53] mt-12'>
           <div className='w-1/2'>
            <h1 className='text-[4vw] tracking-tight'>Our approach:</h1>
            <motion.button onHoverStart={() =>handleHover()} onHoverEnd={()=>handleHoverEnd()} whileHover={{backgroundColor: "#ffffff",color: "#000000"}} transition={{ duration: 0.3 }}  className='flex gap-8 items-center  px-5 py-4 bg-zinc-900 mt-3 rounded-full text-white'>READ MORE
                <motion.div  className="w-2 h-2 bg-zinc-100 rounded-full "></motion.div>
            </motion.button>
           </div> 
           <motion.div initial={{scale:"1"}} animate={buttonanim} transition={{ease:[0.5, 1, 0.89, 1],type: 'spring',stiffness: 200,damping: 20, mass: 0.5,duration: 0.5}} className='w-1/2 h-[70vh]  pt-2'>
                <img className='rounded-xl ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
           </motion.div>
        </div>
    </div>
  )
}

export default About