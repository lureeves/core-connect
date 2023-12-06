import React, { useState, useEffect, useRef } from 'react';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import { arrow } from '../../../assets';
import Calendar from 'react-calendar';
import '../components/subComponents/calendarStyling.css';
import 'react-calendar/dist/Calendar.css';

const AvailabilityFilter = ({ setMentorIndexes, setIsDropdownOpen }) => {
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const [value, setValue] = useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        setIsDropdownOpen(showDropdown);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectedAvailability, showDropdown]);

    const tileClassName = ({ date, view }) => {
        if (view === 'month' && Array.isArray(value) && value.length === 2) {
            const [startDate, endDate] = value;
            let className = '';
            if (date.getTime() === startDate.getTime()) {
                className = ' rounded-l-full start-date-circle'; // Class for the start date
            } else if (date.getTime() === endDate.getTime()) {
                className = 'end-date-circle'; // Class for the end date
            }
            return className;
        }
    };
        
    const onChange = (nextValue) => {
        setValue(nextValue);
        const [startDate, endDate] = nextValue;
    };


    return (
        <div 
            className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold z-10 ${value ? 'border-[2px] ' : ''}`}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
        >
            <button className={`text-[#6B6C70]`}>
                {value && value.length === 2 ? (
                    <span className="text-base text-black flex flex-nowrap">
                        <span className="bg-[#E1E4EE] rounded px-[0.38rem] text-base text-black">
                            {value[0].toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })} 
                        </span>
                        
                        <span className="bg-white text-[#6B6C70] text-[0.9375rem] px-1"> To </span> 
                        
                        <span className="bg-[#E1E4EE] rounded px-[0.38rem] text-base text-black">
                            {value[1].toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
                        </span>
                    </span>
                ) : (
                    "Availability"
                )}
            </button>

            <img src={arrow} alt="Dropdown Arrow" className={showDropdown ? `` : `rotate-180`} />

            {showDropdown && (
                <div 
                    className="dropdown absolute top-full right-0 w-auto filter-container text-[#6B6C70] py-[0.56rem] px-[1.41rem] h-auto text-sm"
                    onClick={(event) => event.stopPropagation()} // Add this line
                >
                    <Calendar 
                        className="border-none text-black"
                        selectRange={true}
                        onChange={onChange}
                        value={value}
                        tileClassName={tileClassName}  />
                </div>
            )}
        </div>
    );
};

export default AvailabilityFilter;