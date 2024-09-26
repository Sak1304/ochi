import { use } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        
        window.addEventListener("mousemove",(e) =>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-0.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div  className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-8'>
                <div data-scroll data-scroll-speed = "0.3" className='flex justify-center items-center w-[16vw] h-[16vw] bg-zinc-100 rounded-full'>
                    <div className=' relative w-[10vw] h-[10vw] bg-zinc-900 rounded-full'>
                         <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10'>
                            <div className='w-[1.4vw] h-[1.4vw] bg-zinc-100 rounded-full'></div>
                         </div>
                    </div>
                </div>
                <div data-scroll data-scroll-speed = "0.3" className='flex justify-center items-center w-[16vw] h-[16vw] bg-zinc-100 rounded-full'>
                    <div className=' relative w-[10vw] h-[10vw] bg-zinc-900 rounded-full'>
                         <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10'>
                            <div className='w-[1.4vw] h-[1.4vw] bg-zinc-100 rounded-full'></div>
                         </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Eyes