import React, { useState, useEffect, useRef } from 'react';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import { coreValues } from '../../../data/CoreValues.jsx'
import { arrow } from '../../../assets';
import '../../Home/Home.css'

const ValueFilter = ({ setMentorIndexes, setIsDropdownOpen }) => {
    const [selectedValues, setSelectedValues] = useState(() => {
        // Retrieve selected values from local storage
        const storedValues = localStorage.getItem('selectedValues');
        return storedValues ? JSON.parse(storedValues) : [];
    });
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const coreValueList = [...new Set(coreValues)].sort();

    useEffect(() => {
        if (selectedValues.length > 0) {
            const results = MentorData.filter((mentor) =>
                mentor.coreValues.some(value => selectedValues.includes(value))
            );
    
            const indexes = results.map(mentor => MentorData.indexOf(mentor));
            setMentorIndexes(indexes);
        } else {
            // If no values are selected, show all mentors
            setMentorIndexes(MentorData.map((_, index) => index));
        }
    
        setIsDropdownOpen(showDropdown);
    
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectedValues, showDropdown]);

    const toggleValue = (event, value) => {
        event.stopPropagation();
        setSelectedValues(prev => {
            if (prev.includes(value)) {
                return prev.filter(i => i !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    return (
        <div 
            className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold z-10 ${selectedValues.length > 0 ? 'border-[2px]' : ''}`}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
        >
            <button className={`filters-dropdown text-[#6B6C70] ${selectedValues.length > 0 ? 'text-black' : ''}`}>
                Core Values {` `}
                {selectedValues.length > 0 && <span className="bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-[0.8125rem]">{selectedValues.length}</span>}
            </button>

            <img src={arrow} alt="Dropdown Arrow" className={showDropdown ? `` : `rotate-180`} />

            {showDropdown && (
                <div className="dropdown absolute top-full left-0 w-[13.5rem] filter-container text-[#6B6C70] py-[0.56rem] px-[1.41rem] h-[17.7rem] overflow-auto">
                    {coreValueList.map((value, index) => (
                        <div 
                            key={index} 
                            onClick={(event) => toggleValue(event, value)}
                            className={`cursor-pointer`}
                        >
                            <span className={`${selectedValues.includes(value) ? 'bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-black' : 'bg-transparent'}`}>
                                {value}
                            </span>
                            
                            {index !== coreValueList.length - 1 && <div className="border-b border-[#C7CBDA] w-full my-[0.44rem]"></div>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ValueFilter;