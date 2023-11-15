import React from 'react'
import calendar from '../../../assets/calendar.svg'
import clock from '../../../assets/clock.svg'
import computer from '../../../assets/computer.svg'
import clipboard from '../../../assets/clipboard.svg'
import pfp from '../../../assets/default_profile.jpg'
import line from '../../../assets/line.svg'

const MentorCard = () => {
  const core_values =['COLLBAROATION', 'PASSION','SKILL/MASTERY'];
  const help_with =['Advice','Strategy','Validation','Work-Life Balance'];

  return (
    <div className='w-64 h-96 rounded-lg bg-gray-100'>
      <div className=' p-1'>
        {/* Picture and Core Values */}
        <div className='flex gap-3 mx-1 mt-1'>
            <img className="w-20 rounded-md" src={pfp} alt="" />
            <div className='flex flex-col gap-2'>
                {
                    core_values.map((value)=>{
                        return <div className='rounded-md bg-blue-200 w-fit px-2 font-semibold text-sm'>{value}</div>
                    })
                }
            </div>
        </div>
        {/* Name And Company */}
        <div className='mt-2 mx-2'>
            <h2 className='font-bold text-lg'>Liam Brown</h2>
            <div className='flex gap-1'>
                <p className='font-semibold'>Graphic Designer</p>
                <p>at</p>
                <p className='font-semibold'>CreateCo</p>
            </div>
        </div>
        {/* Helps with Categories */}
        <div className='flex flex-wrap gap-2 mt-3 mx-2'>
            {
                help_with.map((val)=>{
                    return <div className='bg-purple-200 p-1 px-2 text-xs font-bold rounded-md'>{val}</div>
                })
            }
        </div>
        {/* Bottom Category */}
        <div className='flex flex-col mt-6 mx-3 gap-3'>
            {/* Experience */}
            <div className='flex gap-1'>
                <div className='flex gap-1'>
                    <img src={computer} alt="" />
                    <p>Experience</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold'>8 years</h2>
            </div>
            {/* Next Available */}
            <div className='flex gap-1'>
                <div className='flex gap-1'>
                    <img src={calendar} alt="" />
                    <p>Next Available</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold'>12/20</h2>
            </div>
            {/* Last Active */}
            <div className='flex gap-1'>
                <div className='flex gap-1'>
                    <img src={clock} alt="" />
                    <p>Last Active</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold'>5 hrs ago</h2>
            </div>
            {/* Sessions Completed */}
            <div className='flex gap-1'>
                <div className='flex gap-1'>
                    <img src={clipboard} alt="" />
                    <p>Sessions Completed</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold'>2</h2>
            </div>
        </div>

      </div>
    </div>
  )
}

export default MentorCard
