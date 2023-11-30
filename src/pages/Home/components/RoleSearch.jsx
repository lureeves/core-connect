import React, { useState, useEffect } from 'react';
import MagGlassIcon from './subComponents/MagGlassIcon.jsx';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import '../../Home/Home.css'

/**
 * RoleSearch Component
 * 
 * This component allows users to search for mentors by role.
 * It features a search input field and a dropdown that displays
 * matching roles based on the user's input.
 */
const RoleSearch = (props) => {
    // State to hold the current search term
    const [searchTerm, setSearchTerm] = useState('');

    // State to control the visibility of the dropdown
    const [showDropdown, setShowDropdown] = useState(false);

    // Extract unique roles from MentorData
    const uniqueRoles = [...new Set(MentorData.map((mentor) => mentor.role))];

    // Filter roles based on search term
    const filteredRoles = uniqueRoles.filter(role => 
      role.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    // Effect to log the filtered mentors based on the search term
    useEffect(() => {
        const results = MentorData.filter((mentor) => 
            mentor.role.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const indexes = results.map(mentor => MentorData.indexOf(mentor));
        props.setMentorIndexes(indexes);
    }, [searchTerm]);

    return (
        <div className='relative filter-container flex justify-between items-center w-56 h-10 py-3 pr-6 pl-7 gap-3'>
          {/* Search icon */}
          <MagGlassIcon />
          
          {/* Search input field */}
          <input 
            className="w-full p-1 outline-none" 
            type="text" 
            placeholder='Search Role'
            value={searchTerm}
            onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowDropdown(true);
            }}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          />

          {/* Dropdown menu for search suggestions */}
          {showDropdown && (
            <div className="dropdown absolute top-full left-0 w-56 filter-container bg-white text-[#6B6C70] font-semibold">
                {filteredRoles.map((role, index) => (
                <div 
                    key={index} 
                    onClick={() => {
                        setSearchTerm(role);
                        setShowDropdown(false);
                    }}
                    className="py-[0.44rem] px-[1.81rem] cursor-pointer hover:text-black"
                >
                    {role}
                    {/* Horizontal divider between dropdown items */}
                    <div className="border-b border-[#C7CBDA] absolute bottom-0 left-[1.44rem] right-[1.44rem]"></div> 
                </div>
                ))}
            </div>
          )}
        </div>
    );
};

export default RoleSearch;
