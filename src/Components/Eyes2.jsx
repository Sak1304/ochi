import React, { useEffect, useState } from 'react'

function Eyes2() {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove",(e) =>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
            setRotate(angle-180)
        })
    })
  return (
    <div  data-scroll data-scroll-speed = "-0.2" className='relative w-full h-screen overflow-hidden rounded-tl-xl rounded-tr-xl bg-[#CDEA68]'>
        <div className='absolute top-1/2 left-1/2 text-[15vw] h-full font-["Japan"] w-full leading-none -translate-x-[50%] -translate-y-[50%] text-black'>
            <h1 className='ml-[35vw]'>READY</h1>
            <h1 className='ml-[27vw]'>TO START</h1>
            <h1 className='ml-[19vw]'>THE PROJECT?</h1>
        </div>
        <div className='relative w-full h-full bg-transparent z-[9]'>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-8'>
                <div data-scroll data-scroll-speed = "0.3" className='flex items-center justify-center w-[16vw] h-[16vw] rounded-full bg-zinc-100'>
                    <div className='relative w-[10vw] h-[10vw] rounded-full bg-zinc-900'>
                       <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line h-10 w-full'>
                            <div className='w-[1.4vw] h-[1.4vw] rounded-full bg-zinc-100'></div>
                       </div>
                    </div>
                </div>
                <div data-scroll data-scroll-speed = "0.3" className='flex items-center justify-center w-[16vw] h-[16vw] rounded-full bg-zinc-100'>
                    <div className='relative w-[10vw] h-[10vw] rounded-full bg-zinc-900'>
                       <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line h-10 w-full'>
                            <div className='w-[1.4vw] h-[1.4vw] rounded-full bg-zinc-100'></div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes2