import React, { useState, useEffect, useRef } from 'react';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import { arrow } from '../../../assets';
import Calendar from 'react-calendar';
import '../components/subComponents/calendarStyling.css';
import 'react-calendar/dist/Calendar.css';

/**
 * AvailabilityFilter Component
 * 
 * This component provides a calendar-based interface for users to select a date range. It then filters mentors
 * from MentorData based on their availability matching the selected date range.
 *
 * Props:
 * - setMentorIndexes (function): A function to update the state in the parent component with filtered mentor indexes.
 * - setIsDropdownOpen (function): A function to update the state in the parent component about the dropdown's visibility.
 */
const AvailabilityFilter = ({ setMentorIndexes, setIsDropdownOpen }) => {
    const [value, setValue] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    /**
     * Converts a Date object to a corresponding day of the week.
     * 
     * @param {Date} date - The date to be converted.
     * @returns {string} - The day of the week (e.g., 'Mon', 'Tue').
     */
    const getDayOfWeek = (date) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[date.getDay()];
    };

    /**
     * Generates an array of day strings for each day between two dates.
     * 
     * @param {Date} start - The start date.
     * @param {Date} end - The end date.
     * @returns {Array} - An array of day strings (e.g., ['Mon', 'Tue']).
     */
    const getDaysArray = (start, end) => {
        let arr = [];
        for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(getDayOfWeek(new Date(dt)));
        }
        return arr;
    };

    useEffect(() => {
        // Handles closing the dropdown when clicking outside of it.
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
    }, [showDropdown]);


    const tileClassName = ({ date, view }) => {
        // Handles styling of the calendar
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
        
    /**
     * Handles changing the date range selection and filters mentors based on the new range.
     * 
     * @param {Array} nextValue - An array of two dates representing the selected range.
     */
    const onChange = (nextValue) => {
        setValue(nextValue);
        const [startDate, endDate] = nextValue;
        const daysInRange = getDaysArray(startDate, endDate);

        const availableMentors = MentorData.filter((mentor, index) => {
            return daysInRange.some(day => mentor.availability.includes(day));
        });

        const availableMentorIndexes = availableMentors.map((mentor, index) => index);
        setMentorIndexes(availableMentorIndexes);
    };


    return (
        <div 
            className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold z-10 ${value ? 'border-[2px] ' : ''}`}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
        >
            {/* Button displaying the selected date range or default text */}
            <button className={`text-[#6B6C70]`}>
                {value && value.length === 2 ? (
                    <span className="text-base text-black flex flex-nowrap">
                        {/* Start date */}
                        <span className="bg-[#E1E4EE] rounded px-[0.38rem] text-base text-black">
                            {value[0].toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })} 
                        </span>
                        
                        {/* Divider between dates */}
                        <span className="bg-white text-[#6B6C70] text-[0.9375rem] px-1"> To </span> 
                        
                        {/* End date */}
                        <span className="bg-[#E1E4EE] rounded px-[0.38rem] text-base text-black">
                            {value[1].toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
                        </span>
                    </span>
                ) : (
                    "Availability"
                )}
            </button>
    
            {/* Dropdown arrow, rotates based on dropdown state */}
            <img src={arrow} alt="Dropdown Arrow" className={showDropdown ? `` : `rotate-180`} />
    
            {/* Calendar dropdown for selecting date range */}
            {showDropdown && (
                <div 
                    className="dropdown absolute top-full right-0 w-auto filter-container text-[#6B6C70] py-[0.56rem] px-[1.41rem] h-auto text-sm"
                    onClick={(event) => event.stopPropagation()}
                >
                    <Calendar 
                        className="border-none text-black"
                        selectRange={true}
                        onChange={onChange}
                        value={value}
                        tileClassName={tileClassName} />
                </div>
            )}
        </div>
    );
};

export default AvailabilityFilter;