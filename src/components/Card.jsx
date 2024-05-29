import React from 'react'
import { useState,useEffect } from 'react'
import Pricing from './Data'
import check from '../assets/icon-check.svg'
const Card = () => {

    const [pageviews, setPageviews] = useState(2);
    const [isYearly, setIsYearly] = useState(false);
    

    const handleBillingChange = () => {
    setIsYearly(!isYearly);
  };

  useEffect(() => {
    const slider = document.querySelector('.range-slider');

    const percentage = ((pageviews / 4
    ) * 100)*2.2;
    
    slider.style.setProperty('--fill-percentage', `${percentage}%`);
  }, [pageviews]);

  const getPrice = () => {
    let price = Pricing[pageviews].monthly;
    if (isYearly) {
      price = Pricing[pageviews].yearly 
    }
    return price.toFixed(2); 
  };

  return (
    <>
      
        <div className='card bg-white   md:w-[32rem] w-[19rem] md:h-96 h-[34rem] rounded-lg shadow mb-4'>
           <div className='flex md:justify-between justify-center items-center manrope p-10 flex-wrap'>
                <div className='text-[#858FAD]  text-sm font-semibold '>{`${Pricing[pageviews].pageviews} PAGEVIEWS`}</div>
                <div className='md:flex items-center hidden '>
                <div className='text-[#293356] text-4xl text font-extrabold '> {`$${getPrice()}`}</div>
                <div className='text-[#858FAD]  text-sm font-semibold'>{`/ ${isYearly?`year`: `month` }`}</div>
                </div>
           </div>
           <div className='flex justify-center'>
            <input type="range" 
            min="0"
            max="4"
            value={pageviews}
            onChange={(e) => setPageviews(Number(e.target.value))}
            className='w-3/4 range-slider '
            />
           </div>

           <div className='flex items-center justify-center mt-8 gap-2 md:hidden'>
                <div className='text-[#293356] text text-4xl font-bold '>{`$${getPrice()}`}</div>
                <div className='text-[#858FAD]  text-sm font-semibold'>{`/ ${isYearly?`year`:`month`}`}</div>
            </div>
           <div className='flex justify-evenly mt-11 mb-10 md:ml-20 md:mr-14  manrope items-center'>
            <div className='text-[#858FAD]  text-xs font-semibold'>
                Monthly Billing
            </div>
            
           <label className="switch w-5 h-5">
            <input 
            type='checkbox'
            checked={isYearly}
            onChange={handleBillingChange}
            className='w-5 h-5'
            />
            <span className="slider round "></span>
            </label>

            
            <div className='text-[#858FAD]  text-xs font-semibold'>Yearly Billing </div>
            <div className='text-xs font-bold bg-[#FEECE7] text-[#FF8C66] hidden md:block rounded-xl px-1'>25% discount</div>
            <div className='text-xs font-bold bg-[#FEECE7] text-[#FF8C66] md:hidden rounded-xl px-1'>-25%</div>
           </div>

           

           <div className='w-full h-[2px] bg-black opacity-5'></div>

           <div className='flex md:justify-between  justify-center items-center h-56 md:h-36 manrope mx-9 flex-wrap '>
            <div className='flex flex-col gap-2'>
                <div className='flex  items-center'><img src={check} className=' ' alt="" /><div className='manrope text-[#858FAD] text-sm font-semibold ml-5'>Unlimited websites</div></div>
                <div className='flex  items-center'><img src={check} className=' ' alt="" /><div className='manrope text-[#858FAD] text-sm font-semibold ml-5'>100% data ownership</div></div>
                <div className='flex  items-center  '><img src={check} className=' ' alt="" /><div className='manrope text-[#858FAD] text-sm font-semibold ml-5'>Email reports</div></div>
            </div>
            <div>
                <button className='bg-[#293356] text-[#858FAD] text  py-3 rounded-3xl w-44 text-sm font-bold '>
                    Start my trial
                </button>
            </div>
           </div>
        </div>
        
    </>
  )
}

export default Card