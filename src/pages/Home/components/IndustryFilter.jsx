    import React, { useState, useEffect, useRef } from 'react';
    import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
    import { arrow } from '../../../assets';
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
            console.log("MentorData:", MentorData);
            console.log("Selected Values for Filtering:", selectedIndustries);
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
                className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold z-10 ${selectedIndustries.length > 0 ? 'border-[2px]' : ''}`}
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
                    <div className="dropdown absolute top-full left-0 w-[13.5rem] filter-container text-[#6B6C70] py-[0.56rem] px-[1.41rem] h-[17.7rem] overflow-auto">
                        {uniqueIndustries.map((industry, index) => (
                            <div 
                                key={index} 
                                onClick={(event) => toggleIndustry(event, industry)}
                                className={`cursor-pointer`}
                            >
                                <span className={`${selectedIndustries.includes(industry) ? 'bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-black' : 'bg-transparent'}`}>
                                    {industry}
                                </span>
                                
                                {/* Horizontal divider for all except the last item in dropdown */}
                                {index !== uniqueIndustries.length - 1 && <div className="border-b border-[#C7CBDA] w-full my-[0.44rem]"></div>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    export default IndustryFilter;
