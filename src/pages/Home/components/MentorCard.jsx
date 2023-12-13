import React from 'react';
import calendar from '../../../assets/calendar.svg';
import clock from '../../../assets/clock.svg';
import computer from '../../../assets/computer.svg';
import clipboard from '../../../assets/clipboard.svg';
import line from '../../../assets/line.svg';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import { Availability } from '../../../data/FakeAvailability.jsx';
/**
 * MentorCard Component
 * 
 * This component is used to display the detailed information of a mentor.
 * It includes the mentor's profile picture, name, company, core values,
 * areas they can help with, experience, next available date, last active
 * status, and number of sessions completed.
 * 
 * Props:
 * - id (number): The index of the mentor in the MentorData array.
 */
const MentorCard = (props) => {
    // Constructs the full name of the mentor
    const name = MentorData[props.id].first_name + " " + MentorData[props.id].last_name;
    

    /**
     * Generates a background color for the mentor's profile picture.
     * The color is selected from a predefined set based on the mentor's index.
     * 
     * @param {number} index - The index of the mentor.
     * @returns {string} The hex code of the background color.
     */

    const getAvailability = (index) =>{
        return Availability[index % Availability.length];
    }
    const getBackgroundColor = (index) => {
        const colors = ["6BD4B1", "B1A6D4", "D4B16B", "D46BB1", "B1D46B", "6BB1D4"];
        return colors[index % colors.length];
    };

    // URL for the mentor's profile picture with dynamic background color
    const profilePicture = `https://ui-avatars.com/api/?background=${getBackgroundColor(props.id)}&size=128&name=${encodeURIComponent(name)}`;

    // Extracts and converts the mentor's core values to uppercase
    const core_values = [
        MentorData[props.id].core_value_1.toUpperCase(), 
        MentorData[props.id].core_value_2.toUpperCase(),
        MentorData[props.id].core_value_3.toUpperCase()
    ];
    

    // Splits the string of areas the mentor can help with into an array
    const help_with = MentorData[props.id].help_with.split(",");

    return (
        <div className='w-[16rem] h-[25.28rem] rounded-[0.5rem] pt-[0.81rem] bg-[#FBFCFF] shadow-[1px_1px_15px_1px_rgba(0,0,0,0.1)]'
            onClick={()=>window.open(`/MentorProfile/${props.id}`,'_blank')}
        >
            {/* Section for profile picture and core values */}
            <div className='flex gap-3 pl-[0.81rem] pb-[0.28rem]'>
                <img className="w-20 rounded-md" src={profilePicture} alt="Profile" />
                <div className='flex flex-col gap-2'>
                    {core_values.map((value, index) => (
                        <div key={index} className='rounded-[0.25rem] bg-[#D7E0FF] w-fit px-2 font-semibold text-sm'>{value}</div>
                    ))}  
                </div>
            </div>

            {/* Section for name and company */}
            <div>
                <h2 className='font-bold text-[1rem] pl-[0.81rem]'>{name}</h2>
                <div className='flex items-center gap-1 pl-[0.81rem] w-[15.58rem] whitespace-nowrap'>
                    <p className='font-semibold text-[0.875rem]'>{MentorData[props.id].role}</p>
                    <p>at</p>
                    <p className='font-semibold text-[0.875rem] truncate'>{MentorData[props.id].company}</p>
                </div>
            </div>

            {/* Section for areas the mentor can help with */}
            <div className='flex flex-wrap gap-[0.25rem] mt-[0.63rem] mx-[0.44rem] bg-[#FFF] border-[1px] border-[#F3F3F3] rounded-[0.25rem] px-[0.37rem] py-[0.44rem]'>
                {help_with.map((val, index) => val && (
                    <div key={index} className='bg-[#F3F3F3] p-1 px-2 text-[0.75rem] font-semibold rounded-[0.25rem]'>{val}</div>
                ))}
            </div>

            {/* Section for additional mentor information (experience, availability, etc.) */}
            <div className='flex flex-col bg-[#FFF] border-[1px] border-[#F3F3F3] rounded-[0.25rem] mt-[0.63rem] mx-[0.44rem] px-[0.37rem] py-[0.44rem]'>
                {/* Experience */}
                <div className='flex bg-[#F6F8FD] text-[0.8125rem] rounded-[0.25rem] px-[0.5rem] py-[0.38rem] w-max-content'>
                    <div className='flex gap-[0.44rem]'>
                        <img src={computer} alt="Computer Icon" />
                        <p>Experience</p>
                        <img src={line} alt="Line Separator" />
                    </div>
                    <h2 className='font-semibold pl-[0.44rem]'>{MentorData[props.id].years_of_experience} years</h2>
                </div>
                {/* Next Available */}
                <div className='flex bg-[#F6F8FD] text-[0.8125rem] rounded-[0.25rem] my-[0.31rem] px-[0.5rem] py-[0.38rem] w-max-content'>
                    <div className='flex gap-[0.44rem]'>
                        <img src={calendar} alt="Calendar Icon" />
                        <p>Next Available</p>
                        <img src={line} alt="Line Separator" />
                    </div>
                    <h2 className='font-semibold pl-[0.44rem]'>{MentorData[props.id].next_available_date}</h2>
                </div>
                {/* Last Active */}
                <div className='flex bg-[#F6F8FD] text-[0.8125rem] rounded-[0.25rem] px-[0.5rem] py-[0.38rem] w-max-content'>
                    <div className='flex gap-[0.44rem]'>
                        <img src={clock} alt="Clock Icon" />
                        <p>Last Active</p>
                        <img src={line} alt="Line Separator" />
                    </div>
                    <h2 className='font-semibold pl-[0.44rem]'>{MentorData[props.id].last_active}</h2>
                </div>
                {/* Sessions Completed */}
                <div className='flex bg-[#F6F8FD] text-[0.8125rem] rounded-[0.25rem] mt-[0.31rem] px-[0.5rem] py-[0.38rem] w-max-content'>
                    <div className='flex gap-[0.44rem]'>
                        <img src={clipboard} alt="Clipboard Icon" />
                        <p>Sessions Completed</p>
                        <img src={line} alt="Line Separator" />
                    </div>
                    <h2 className='font-semibold pl-[0.44rem]'>{MentorData[props.id].sessions_completed}</h2>
                </div>
            </div>
        </div>
    );
}

export default MentorCard;
