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
const RoleSearch = ({ setMentorIndexes, setIsDropdownOpen }) => {

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
        setMentorIndexes(indexes);
        setIsDropdownOpen(showDropdown);
    }, [searchTerm, showDropdown]);
    
    return (
        <div 
            className={`relative flex items-center w-[16rem] h-10 pr-6 pl-7 gap-3 
            ${!showDropdown && searchTerm ? 'filter-styling' : `${showDropdown ? `seleted-filter-button` : `unselected-role-button`}`}`}>
          {/* Search icon */}
          <MagGlassIcon />
          
          {/* Search input field */}
          <input 
            className="w-full p-1 outline-none font-semibold placeholder-[#6B6C70]" 
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
            <div className="dropdown absolute top-full left-0 w-[16rem] filter-styling bg-white text-[#6B6C70] border-[#3A2A9B] font-semibold mt-[0.44rem] py-[0.56rem] z-10 max-h-[17.7rem] overflow-auto">
                {filteredRoles.length > 0 ? (
                    filteredRoles.map((role, index) => (
                        <div 
                            key={index} 
                            onClick={() => {
                                setSearchTerm(role);
                                setShowDropdown(false);
                            }}
                            className="px-[1.81rem] cursor-pointer hover:text-black"
                        >
                            {role}
                            {/* Horizontal divider for all except last drop down */}
                            {index !== filteredRoles.length - 1 && <div className="border-b border-[#C7CBDA] w-full my-[0.44rem]"></div>}
                        </div>
                    ))
                ) : (
                    <div className="px-[1.81rem]">No roles found...</div>
                )}
            </div>
          )}
        </div>
    );
};

export default RoleSearch;
