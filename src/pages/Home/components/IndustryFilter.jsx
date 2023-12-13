    import React, { useState, useEffect, useRef } from 'react';
    import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
    import { arrow,  CheckBox } from '../../../assets';
    import '../../Home/Home.css'

/**
 * IndustryFilter Component
 *
 * This component provides a filter interface for selecting mentors based on their industry.
 * It features a dropdown that allows users to select multiple industries. The list of industries
 * is dynamically generated from the MentorData. The component also handles outside click detection
 * to close the dropdown.
 *
 * Props:
 * - setMentorIndexes (function): Function to update the state in the parent component with the filtered mentor indexes.
 * - setIsDropdownOpen (function): Function to update the state in the parent component about the dropdown's open status.
 */
const IndustryFilter = ({ setMentorIndexes, setIsDropdownOpen }) => {
    const [selectedIndustries, setSelectedIndustries] = useState([]); // Stores the selected industries
    const [showDropdown, setShowDropdown] = useState(false); // Controls the visibility of the dropdown
    const dropdownRef = useRef(null); // Reference to the dropdown for outside click detection

    // Extracts and sorts unique industries from MentorData
    const uniqueIndustries = [...new Set(MentorData.map((mentor) => mentor.industry))].sort();

    useEffect(() => {
        // Filter mentors based on selected industries
        const results = MentorData.filter((mentor) => 
            selectedIndustries.includes(mentor.industry)
        );

        // Map filtered mentors to their indexes
        const indexes = results.map(mentor => MentorData.indexOf(mentor));

        // Handler for outside click detection to close dropdown
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

            setMentorIndexes(indexes);
            setIsDropdownOpen(showDropdown);

        // Event listeners for outside click detection
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectedIndustries, showDropdown]);

    /**
     * Toggles the selection state of an industry.
     * 
     * @param {Object} event - The click event object.
     * @param {string} industry - The industry to toggle.
     */
    const toggleIndustry = (event, industry) => {
        event.stopPropagation(); // Prevents click event from bubbling up to parent elements
        setSelectedIndustries(prev => {
            if (prev.includes(industry)) {
                return prev.filter(i => i !== industry); // Remove industry if already selected
            } else {
                return [...prev, industry]; // Add industry if not selected
            }
        });
    };

    return (
        <div 
            className={`relative filter-styling flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold z-10 
                ${showDropdown > 0 ? 'seleted-filter-button' : 'filter-styling'}`}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
        >
            <button className={`filters-dropdown text-[#6B6C70] ${selectedIndustries.length > 0 ? 'text-black' : ''}`}>
                Industry {` `}
                {selectedIndustries.length > 0 && <span className="bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-[0.8125rem]">{selectedIndustries.length}</span>}
            </button>

            {/* Arrow SVG icon, rotates based on dropdown state */}
            <img src={arrow} alt="Dropdown Arrow" className={showDropdown ? `` : `rotate-180`} />

            {/* Dropdown for selecting industries */}
            {showDropdown && (
                <div className="filter-styling absolute border-[#3A2A9B] top-[3.065rem] right-0 p-[1rem] w-[28.1875rem] h-[28.8175rem]">
                    <div className="
                        filter-styling absolute text-[#6B6C70] 
                        py-[1.88rem] px-[2.19rem] 
                        grid grid-cols-2 w-[26.1rem] h-[26.7rem] gap-x-[0.7rem]">
                        {uniqueIndustries.map((industry, index) => (
                            <div 
                            key={index} 
                            onClick={(event) => toggleIndustry(event, industry)}
                            className="cursor-pointer "
                        >
                            <div className="flex items-center">
                                {selectedIndustries.includes(industry) ? (
                                    <img 
                                    src={CheckBox} 
                                    alt="Checkbox" 
                                    className={'h-[11px] w-[12px] border-[#3A2A9B] border-[1px] rounded-[0.1rem]'} 
                                    style={{ boxShadow: 'inset 0 0 0 3px #3A2A9B' }}
                                    />                                
                                ) : (
                                    <div className=" h-[0.75rem] w-[12px] border-[1px] border-[#6B6C70] rounded-[0.1rem]"></div>
                                )}
                                <span className={`px-[0.56rem] ${selectedIndustries.includes(industry) ? 'text-[#3A2A9B] ' : 'bg-transparent'}`}>
                                    {industry}
                                </span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default IndustryFilter;
