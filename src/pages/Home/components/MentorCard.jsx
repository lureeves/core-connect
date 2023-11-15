import React from 'react'
import calendar from '../../../assets/calendar.svg'
import clock from '../../../assets/clock.svg'
import computer from '../../../assets/computer.svg'
import clipboard from '../../../assets/clipboard.svg'
import pfp from '../../../assets/default_profile.jpg'
import line from '../../../assets/line.svg'
import {mentors} from '../../../data/FakeMentors.jsx'
import { MentorData } from '../../../data/GoogleDriveMentors.jsx'

const MentorCard = (props) => {
  const name =MentorData[props.id].first_name + " " + MentorData[props.id].last_name
  const core_values =   [MentorData[props.id].core_value_1.toUpperCase(), 
                        MentorData[props.id].core_value_2.toUpperCase(),
                        MentorData[props.id].core_value_3.toUpperCase()];

  const help_with =MentorData[props.id].help_with.split(",");

  return (
    <div className='w-64 h-96 rounded-lg  shadow'>
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
            <h2 className='font-bold text-lg'>{name}</h2>
            <div className='flex items-center gap-1'>
                <p className='font-semibold text-sm'>{MentorData[props.id].role}</p>
                <p>at</p>
                <p className='font-semibold'>{MentorData[props.id].company}</p>
            </div>
        </div>
        {/* Helps with Categories */}
        <div className='flex flex-wrap gap-2 mt-3 mx-2'>
            {
                help_with.map((val)=>{
                    if(val){
                        return <div className='bg-purple-200 p-1 px-2 text-xs font-bold rounded-md'>{val}</div>
                    }
                    
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
                <h2 className='font-semibold'>{MentorData[props.id].years_of_experience} years</h2>
            </div>
            {/* Next Available */}
            <div className='flex gap-1'>
                <div className='flex gap-1'>
                    <img src={calendar} alt="" />
                    <p>Next Available</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold'>{MentorData[props.id].next_available_date}</h2>
            </div>
            {/* Last Active */}
            <div className='flex gap-1'>
                <div className='flex gap-1'>
                    <img src={clock} alt="" />
                    <p>Last Active</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold'>{MentorData[props.id].last_active}</h2>
            </div>
            {/* Sessions Completed */}
            <div className='flex gap-1'>
                <div className='flex gap-1'>
                    <img src={clipboard} alt="" />
                    <p>Sessions Completed</p>
                    <img src={line} alt="" />
                </div>
                <h2 className='font-semibold'>{MentorData[props.id].sessions_completed}</h2>
            </div>
        </div>

      </div>
    </div>
  )
}

export default MentorCard
