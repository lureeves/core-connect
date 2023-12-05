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

        const currentDate = new Date();
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const [value, setValue] = useState(null);


        // const uniqueAvailability = [...new Set(MentorData.map((mentor) => mentor.availability))].sort();

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
                if (date >= startDate && date <= endDate) {
                    let className = 'bg-[#F0F2FA]';
                    if (date.getTime() === startDate.getTime()) {
                        className += ' rounded-l-full'; // Rounded left for the start date
                        // console.log("Start Date:" + startDate.getTime() + "\nEnd Date:" + endDate.getTime() + "\nDate: " + date.getTime());
                    } 

                    if ((date.getTime() + 259199999) === endDate.getTime()) {
                        className += ' rounded-r-full bg-black'; // Rounded right for the end date
                    }
                    return className;
                }
            }
        };
        

          
        const onChange = (nextValue) => {
            // Check if the value is an array (range selected)
            setValue(nextValue);
            if (Array.isArray(nextValue)) {
                const [startDate, endDate] = nextValue;
                // Do something with startDate and endDate
                console.log("Start Date:", startDate, "End Date:", endDate);
            } else {
                // Single date selected
                console.log("Selected Date:", nextValue);
            }
        };
        

        return (
            <div 
                className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold z-10 ${selectedAvailability.length > 0 ? 'border-[2px]' : ''}`}
                onClick={() => setShowDropdown(!showDropdown)}
                ref={dropdownRef}
            >
                <button className={`filters-dropdown text-[#6B6C70] ${selectedAvailability.length > 0 ? 'text-black' : ''}`}>
                    Availability {` `}
                    {selectedAvailability.length > 0 && <span className="bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-[0.8125rem]">{selectedAvailability.length}</span>}
                </button>

                <img src={arrow} alt="Dropdown Arrow" className={showDropdown ? `` : `rotate-180`} />

                {showDropdown && (
                    <div 
                        className="dropdown absolute top-full right-0 w-auto filter-container text-[#6B6C70] py-[0.56rem] px-[1.41rem] h-auto"
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