import React, { useState, useEffect, useRef } from 'react';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import { arrow } from '../../../assets';
import '../../Home/Home.css';

const AvailabilityFilter = ({ setMentorIndexes, setIsDropdownOpen }) => {
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const uniqueAvailability = [...new Set(MentorData.map((mentor) => mentor.availability))].sort();

    useEffect(() => {
        const results = MentorData.filter((mentor) => 
            selectedAvailability.includes(mentor.availability)
        );

        const indexes = results.map(mentor => MentorData.indexOf(mentor));

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        setMentorIndexes(indexes);
        setIsDropdownOpen(showDropdown);

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectedAvailability, showDropdown]);

    const toggleAvailability = (event, availability) => {
        event.stopPropagation();
        setSelectedAvailability(prev => {
            if (prev.includes(availability)) {
                return prev.filter(i => i !== availability);
            } else {
                return [...prev, availability];
            }
        });
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
                <div className="dropdown absolute top-full left-0 w-[13.5rem] filter-container text-[#6B6C70] py-[0.56rem] px-[1.41rem] h-[17.7rem] overflow-auto">
                    {uniqueAvailability.map((availability, index) => (
                        <div 
                            key={index} 
                            onClick={(event) => toggleAvailability(event, availability)}
                            className={`cursor-pointer`}
                        >
                            <span className={`${selectedAvailability.includes(availability) ? 'bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-black' : 'bg-transparent'}`}>
                                {availability}
                            </span>
                            
                            {index !== uniqueAvailability.length - 1 && <div className="border-b border-[#C7CBDA] w-full my-[0.44rem]"></div>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvailabilityFilter;