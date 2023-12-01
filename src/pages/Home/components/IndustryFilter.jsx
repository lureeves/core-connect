import React, { useState, useEffect, useRef } from 'react';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import { arrow } from '../../../assets';
import '../../Home/Home.css'

const IndustryFilter = ({setMentorIndexes, setIsDropdownOpen}) => {
    const [selectedIndustries, setSelectedIndustries] = useState([])
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null); // When user clicks outside of dropdown

    const uniqueIndustries = [...new Set(MentorData.map((mentor) => mentor.industry))].sort();

    useEffect(() => {
        const results = MentorData.filter((mentor) => 
            selectedIndustries.includes(mentor.industry)
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
    }, [selectedIndustries, showDropdown]);

    const toggleIndustry = (event, industry) => {
        event.stopPropagation(); // Prevents click event from reaching the parent div
        setSelectedIndustries(prev => {
            if (prev.includes(industry)) {
                return prev.filter(i => i !== industry);
            } else {
                return [...prev, industry];
            }
        });
    };
    

    return (
        <div className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold z-10 ${selectedIndustries.length > 0 ? 'border-[2px]' : ''}`}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
        >
            <button className={`filters-dropdown text-[#6B6C70] ${selectedIndustries.length > 0 ? 'text-black' : ''}`}>
                Industry {` `}
                {selectedIndustries.length > 0 && <span className="bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-[0.8125rem]">{selectedIndustries.length}</span>}
            </button>

            {/* Arrow SVG (rotates on dropdown) */}
            <img src={arrow} alt="" className={showDropdown ? `` : `rotate-180`} />

            {showDropdown && (
                <div className="dropdown absolute top-full left-0 w-[13.5rem] filter-container text-[#6B6C70] py-[0.56rem] px-[1.41rem] h-[17.7rem] overflow-auto">
                    {uniqueIndustries.map((industry, index) => (
                    <div 
                    key={index} 
                    onClick={(event) => toggleIndustry(event, industry)}
                    className={` `}
                >
                    <span className={`${selectedIndustries.includes(industry) ? 'bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-black' : 'bg-transparent'}`}>
                        {industry}
                    </span>
                    
                    {/* Horizontal divider for all except last drop down */}
                    {index !== uniqueIndustries.length - 1 && <div className="border-b border-[#C7CBDA] w-full my-[0.44rem]"></div>}
                </div>
                
                    ))}
                </div>
            )}
        </div>
    );
};

export default IndustryFilter;