import React, { useState, useEffect } from 'react';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import { arrow } from '../../../assets';
import '../../Home/Home.css'

const IndustryFilter = (props) => {
    const [selectedIndustries, setSelectedIndustries] = useState([])
    const [showDropdown, setShowDropdown] = useState(false);

    const uniqueIndustries = [...new Set(MentorData.map((mentor) => mentor.industry))].sort();

    useEffect(() => {
        const results = MentorData.filter((mentor) => 
            selectedIndustries.includes(mentor.industry)
        );
        const indexes = results.map(mentor => MentorData.indexOf(mentor));
        props.setMentorIndexes(indexes);
    }, [selectedIndustries]);

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
        <div className='relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold'
            onClick={() => setShowDropdown(!showDropdown)}
        >
            <button className='filters-dropdown text-[#6B6C70]'>Industry {selectedIndustries.length > 0 && `(${selectedIndustries.length})`}</button>
            <img src={arrow} alt="" className={showDropdown ? `` : `rotate-180`} />

            {showDropdown && (
                <div className="dropdown absolute top-full left-0 w-[13.5rem] filter-container text-[#6B6C70] py-[0.56rem] px-[1.41rem]">
                    {uniqueIndustries.map((industry, index) => (
                    <div 
                    key={index} 
                    onClick={(event) => toggleIndustry(event, industry)}
                    className={` cursor-pointer ${selectedIndustries.includes(industry) ? 'bg-[#E1E4EE] border-green-500 p-0 m-0' : 'bg-transparent'}`}
                >
                    {industry}
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