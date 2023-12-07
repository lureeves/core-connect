import React, { useState, useEffect, useRef } from 'react';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import { coreValues } from '../../../data/CoreValues.jsx';
import { arrow, CheckBox } from '../../../assets';
import '../Home.css';

/**
 * ValueFilter Component
 *
 * This component allows users to filter mentors based on core values. It features a dropdown
 * that enables the selection of multiple core values. These values are sourced from the CoreValues data.
 * The component also incorporates outside click detection to close the dropdown.
 *
 * Props:
 * - setMentorIndexes (function): A function to update the state in the parent component with filtered mentor indexes.
 * - setIsDropdownOpen (function): A function to update the state in the parent component about the dropdown's visibility.
 */
const ValueFilter = ({ setMentorIndexes, setIsDropdownOpen }) => {
    // State for storing the selected core values, initially loaded from local storage if available
    const [selectedValues, setSelectedValues] = useState(
        () => {
        const storedValues = localStorage.getItem('selectedValues');
        return storedValues ? JSON.parse(storedValues) : [];
    });
    const [showDropdown, setShowDropdown] = useState(false); // State to control the visibility of the dropdown
    const dropdownRef = useRef(null); // Ref to the dropdown for handling outside clicks

    // List of unique and sorted core values
    const coreValueList = [...new Set(coreValues)].sort();

    useEffect(() => {

        // Effect for filtering mentors based on selected core values
        if (selectedValues.length > 0) {
            const results = MentorData.filter((mentor) =>
            [mentor.core_value_1, mentor.core_value_2, mentor.core_value_3].some(value => selectedValues.includes(value))
        );
            const indexes = results.map(mentor => MentorData.indexOf(mentor));
            setMentorIndexes(indexes);
        } else {
            // Show all mentors if no values are selected
            setMentorIndexes(MentorData.map((_, index) => index));
        }

        setIsDropdownOpen(showDropdown);

        // Function to handle outside clicks to close the dropdown
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        // Event listeners for outside click detection
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectedValues, showDropdown]);

    /**
     * Toggles the selection state of a core value.
     * 
     * @param {Object} event - The click event object.
     * @param {string} value - The core value to toggle.
     */
    const toggleValue = (event, value) => {
        event.stopPropagation(); // Prevents event from bubbling up to parent elements
        setSelectedValues(prev => {
            if (prev.includes(value)) {
                // Remove value if already selected
                return prev.filter(i => i !== value);
            } else {
                // Add value if not already selected
                return [...prev, value];
            }
        });
    };

    return (
        <div 
            className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold z-10 ${showDropdown ? `border-[#3A2A9B]` : ``}`}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
        >
            <button className={`filters-dropdown text-[#6B6C70] ${selectedValues.length > 0 ? 'text-black' : ''}`}>
                Core Values {` `}
                {selectedValues.length > 0 && <span className="bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-[0.8125rem]">{selectedValues.length}</span>}
            </button>

            {/* Arrow SVG icon, rotates based on dropdown state */}
            <img src={arrow} alt="Dropdown Arrow" className={showDropdown ? `` : `rotate-180`} />

            {/* Dropdown for selecting core values */}
            {showDropdown && (
                <div 
                    className="filter-container dropdown absolute 
                    top-[45px] right-[0rem] w-[40rem] h-[31.7rem] py-[3.25rem] px-[3.5rem] text-[#6B6C70] 
                    border-[#3A2A9B] overflow-auto grid grid-cols-3 gap-x-4 " 
                    style={{boxShadow: 'inset 0 0 0 16px #fff, inset 0 0 0 11px #C7CBDA'}}
                    >
                    {coreValueList.map((value, index) => (
                        <div 
                            key={index} 
                            onClick={(event) => toggleValue(event, value)}
                            className={`cursor-pointer`}
                        >
                            <div className="flex items-center">
                                {selectedValues.includes(value) ? (
                                    <img src={CheckBox} alt="Checkbox" className={'h-[11px] w-[12px] border-[1px] border-[#3A2A9B] rounded-[3px]'} />
                                ) : (
                                    <div className="h-[0.75rem] w-[0.75rem] border-[1px] border-[#6B6C70]rounded-[0.5px]"></div>
                                )}
                                <span className={`px-[0.56rem] ${selectedValues.includes(value) ? 'text-[#3A2A9B] ' : 'bg-transparent'}`}>
                                    {value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ValueFilter;