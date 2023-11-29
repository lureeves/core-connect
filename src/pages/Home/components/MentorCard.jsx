import React from 'react'
import calendar from '../../../assets/calendar.svg'
import clock from '../../../assets/clock.svg'
import computer from '../../../assets/computer.svg'
import clipboard from '../../../assets/clipboard.svg'
import pfp from '../../../assets/default_profile.jpg'
import line from '../../../assets/line.svg'
import { MentorData } from '../../../data/GoogleDriveMentors.jsx'

const MentorCard = (props) => {
  const name =MentorData[props.id].first_name + " " + MentorData[props.id].last_name
  const randomUserUrl = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`;
  const core_values =   [MentorData[props.id].core_value_1.toUpperCase(), 
                        MentorData[props.id].core_value_2.toUpperCase(),
                        MentorData[props.id].core_value_3.toUpperCase()];

  const help_with =MentorData[props.id].help_with.split(",");

  return (
    <div className='w-[16rem] h-[25rem] rounded-[0.5rem] pt-[0.81rem] bg-[#FBFCFF] shadow-[1px_1px_15px_1px_rgba(0,0,0,0.1)]'>
        {/* Picture and Core Values */}
        <div className='flex gap-3 pl-[0.81rem]'>
            <img className="w-20 rounded-md" src={randomUserUrl} alt="" />
            <div className='flex flex-col gap-2'>
                {
                    core_values.map((value, index) => {
                        return <div key={index} className='rounded-[0.25rem] bg-[#D7E0FF] w-fit px-2 font-semibold text-sm'>{value}</div>
                    })  
                }
            </div>
        </div>
        {/* Name And Company */}
        <div className=''>
            <h2 className='font-bold text-[1rem] pl-[0.81rem]'>{name}</h2>
            <div className='flex items-center gap-1 pl-[0.81rem]'>
                <p className='font-semibold text-[0.875rem]'>{MentorData[props.id].role}</p>
                <p>at</p>
                <p className='font-semibold text-[0.875rem]'>{MentorData[props.id].company}</p>
            </div>
        </div>
        {/* Helps with Categories */}
        <div className='flex flex-wrap gap-[0.25rem] mt-[0.63rem] mx-[0.44rem] bg-[#FFF] border-[1px] border-[#F3F3F3] rounded-[0.25rem] px-[0.37rem] py-[0.44rem]'>
            {
                help_with.map((val, index) => {
                    if(val){
                        return <div key={index} className='bg-[#F3F3F3] p-1 px-2 text-[0.75rem] font-semibold rounded-[0.25rem]'>{val}</div>
                    }
                })
            }
        </div>
        {/* Bottom Category */}
        <div className='flex flex-col bg-[#FFF] border-[1px] border-[#F3F3F3] rounded-[0.25rem] mt-[0.63rem] mx-[0.44rem] px-[0.37rem] py-[0.44rem]'>
            {/* Experience */}
            <div className='flex bg-[#F6F8FD] text-[0.8125rem] rounded-[0.25rem] px-[0.5rem] py-[0.38rem] w-max-content'>
                <div className='flex gap-[0.44rem]'>
                    <img src={computer} alt="" />
                    <p>Experience</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold pl-[0.44rem]'>{MentorData[props.id].years_of_experience} years</h2>
            </div>
            {/* Next Available */}
            <div className='flex bg-[#F6F8FD] text-[0.8125rem] rounded-[0.25rem] my-[0.31rem] px-[0.5rem] py-[0.38rem] w-max-content'>
                <div className='flex gap-[0.44rem]'>
                    <img src={calendar} alt="" />
                    <p>Next Available</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold pl-[0.44rem]'>{MentorData[props.id].next_available_date}</h2>
            </div>
            {/* Last Active */}
            <div className='flex bg-[#F6F8FD] text-[0.8125rem] rounded-[0.25rem] px-[0.5rem] py-[0.38rem] w-max-content'>
                <div className='flex gap-[0.44rem]'>
                    <img src={clock} alt="" />
                    <p>Last Active</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold pl-[0.44rem]'>{MentorData[props.id].last_active}</h2>
            </div>
            {/* Sessions Completed */}
            <div className='flex bg-[#F6F8FD] text-[0.8125rem] rounded-[0.25rem] mt-[0.31rem] px-[0.5rem] py-[0.38rem] w-max-content'>
                <div className='flex gap-[0.44rem]'>
                    <img src={clipboard} alt="" />
                    <p>Sessions Completed</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold pl-[0.44rem]'>{MentorData[props.id].sessions_completed}</h2>
            </div>
        </div>

    </div>
  )
}

export default MentorCard
