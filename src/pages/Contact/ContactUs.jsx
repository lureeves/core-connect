import React from 'react'
import { Lukas,Jayden,Anisa,Katie } from '../../assets'
const ContactUs = () => {
  return (
    <div className='flex w-full  justify-center mb-[8rem]'>
        <div className='flex flex-col items-center gap-[3rem] '>
            <div className='mt-10'>
                <h2 className='text-[5rem] font-bold font-[poppins]'>Meet the Team</h2>
            </div>
            <div className='flex w-[80vw] justify-between '>
                <div className='flex flex-col items-center gap-2 shadow-lg m-3 p-10'>
                    <img  className="w-[13rem] h-[13rem] mb-[2rem] rounded-md" src={Anisa} alt="" />
                    <h2>Product Manager: <em className='not-italic font-semibold '>Anisa</em>  </h2>
                    
                    <h2>LinkedIn:<a href="https://www.linkedin.com/in/anisa-charucksiri-1a404b43/" target="_blank" className='cursor-pointer italic font-semibold'> anisa-charucksiri-1a404b43 </a></h2>
                </div>
                <div className='flex flex-col items-center gap-2 shadow-lg m-3 p-10'>
                    <img  className="w-[13rem] h-[13rem] mb-[2rem] rounded-md" src={Katie} alt="" />
                    <h2>Designer: <em className='not-italic font-semibold '>Katie</em></h2>
                    <h2>LinkedIn:<a href="https://www.linkedin.com/in/katie-da-eun-kim/" target="_blank" className='cursor-pointer italic font-semibold'> katie-da-eun-kim </a></h2>
                </div>
                <div className='flex flex-col items-center gap-2 shadow-lg m-3 p-10'>
                    <img  className="w-[13rem] h-[13rem] mb-[2rem] rounded-md" src={Jayden} alt="" />
                    <h2>Developer: <em className='not-italic font-semibold '>Jayden</em></h2>
                    <h2>LinkedIn:<a href="https://www.linkedin.com/in/jayden-evans-tejuan/" target="_blank" className='cursor-pointer italic font-semibold'> jayden-evans-tejuan </a></h2>
                    <h2>Github:<a href="https://github.com/Joymink" target="_blank" className='cursor-pointer italic font-semibold'> Joymink </a></h2>
                </div>
                <div className='flex flex-col items-center gap-2 shadow-lg m-3 p-10'>
                    <img  className="w-[13rem] h-[13rem] mb-[2rem] rounded-md" src={Lukas} alt="" />
                    <h2>Developer: <em className='not-italic font-semibold '>Lukas</em></h2>
                    <h2>LinkedIn:<a href="https://www.linkedin.com/in/lukasreeves/" target="_blank" className='cursor-pointer italic font-semibold'> lukasreeves</a></h2>
                    <h2>Github:<a href="https://github.com/lureeves" target="_blank" className='cursor-pointer italic font-semibold'> Lureeves </a></h2>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default ContactUs
