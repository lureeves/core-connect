import React from 'react'
import close from '../../../assets/close.svg'

const RequestForm = (props) => {
  return (
    <div className=' absolute w-[51.5rem] border h-[61.9rem] left-[20%] top-[15%] z-10 bg-white shadow-xl px-[3rem] py-[2.5rem] rounded-[0.625rem]'>
        <div className='flex justify-end'>
          <img onClick={()=>props.onClosed()} className='cursor-pointer' src={close} alt="" />
        </div>
        <div className='flex justify-center font-bold text-[1.5rem] font-sans mb-[1.875rem]'>
          <h1>Mentor Request Form</h1>
        </div>
        <div className='flex bg-[#E1E4EE] w-fit px-[0.75rem] py-[0.375rem] gap-[.4375rem] rounded-md mb-[2.0625rem]'>
          <h2 className='font-semibold text-[#393939] pr-2 border-r border-[#CECECE]'>Selected Date</h2>
          <h2 className='font-semibold text-[#393939] pr-2 border-r border-[#CECECE]'>11/14/2023</h2>
          <h2 className='font-semibold text-[#393939] pr-2 border-r border-[#CECECE]'>3:00 PM</h2>
          <h2 className='font-semibold text-[#393939]'>PST</h2>
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='flex flex-col border rounded-lg border-[#C7CBDA] mr-[1.31rem] min-w-[15rem] py-[2.12rem] px-[1.75rem]'>
              <h2 className='font-semibold flex justify-center text-center w-[120%] ml-[-15px]'>What are your Core Values <em className='text-red-500'>*</em></h2>
              <div className='flex flex-col h-full justify-around mt-3'>
                <button className='border rounded-3xl py-[5px] border-[#9EA6C5]'>Compassionate</button>
                <button className='border rounded-3xl py-[5px] border-[#9EA6C5]'>Loyalty</button>
                <button className='border rounded-3xl py-[5px] border-[#9EA6C5]'>Responsibility</button>
              </div>
              
            </div>
            <div className='border rounded-lg border-[#C7CBDA] w-[30rem] justify-center py-[1.8125rem] px-[1.25rem]'>
              <h2 className='w-full flex justify-center mb-[1.875rem] font-semibold '>What is your working style?<em className='text-red-500'>*</em></h2>
              <div className='flex flex-wrap justify-center items-center'>
                <h2 className='border cursor-pointer rounded-lg border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center mr-[12px] mb-[12px]'>IDEA-ORIENTED</h2>
                <h2 className='border cursor-pointer rounded-lg border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center mb-[12px]'>DETAIL-ORIENTED</h2>
                <h2 className='border cursor-pointer rounded-lg border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center mr-[12px]'>SUPPORT-ORIENTED</h2>
                <h2 className='border cursor-pointer rounded-lg border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center'>LOGIC-ORIENTED</h2>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col items-start mt-[1.31rem] border border-[#C7CBDA] rounded-lg p-5 gap-5 mb-10'>
            <div className='w-full flex flex-col gap-3'>
              <h2 className='font-semibold'>Tell me a little bit about your professional background?<em className='text-red-500'>*</em></h2>
              <textarea type="textarea" className='border flex justify-start w-full h-[5.5rem] rounded-lg border-[#C7CBDA] ' />
            </div>
            <div className='w-full flex flex-col gap-3'>
              <h2 className='font-semibold'>What do you need help with? List the top 3 things you would like to focus on during this session.<em className='text-red-500'>*</em></h2>
              <textarea type="textarea" className='border w-full h-[5.5rem] rounded-lg  border-[#C7CBDA]' />
            </div>
          </div>
          <div className='flex justify-center'>
            <button onClick={()=>props.onClosed()} className='font-semibold text-white bg-[#6f789A] px-[1.6875rem] py-[0.5625rem] w-[12.375rem] rounded '>Submit</button>
          </div>

        </div>
    </div>
  )
}

export default RequestForm