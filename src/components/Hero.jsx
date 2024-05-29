import React from 'react'
import patcircle from '../assets/pattern-circles.svg'


const Hero = ({isDarkMode}) => {
  return (
    <>
        <div className='w-screen '>
            <div className={`${isDarkMode?'bg-[#4B5978]':'bg-[#F1F5FE]'} w-screen h-96 rounded-bl-[9rem]`}></div>
            <div className='w-full flex justify-center '>
            <img src={patcircle} className=' absolute top-12 ' alt="" />
            </div>
            <div className='w-full flex flex-col items-center top-20 absolute'>
                <div className='text-[#293356] font-extrabold text-xl manrope text  md:text-4xl'>Simple, traffic-based pricing</div>
                <div className='flex flex-col md:flex-row items-center p-2 text-xs md:text-sm font-semibold manrope text-[#858FAD] '>
                <div className='   pt-2 pb-1 md:p-0'>Sign-up for our 30-day trial.</div>
                <div className=' '>No credit card required.</div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Hero