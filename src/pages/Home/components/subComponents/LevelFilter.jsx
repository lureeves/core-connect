import React, { useState, useEffect, useRef } from 'react';
import { CheckBox, arrow } from '../../../../assets';

/**
 * LevelFilter Component
 *
 * This component allows users to filter mentors based on their experience levels. It features a dropdown
 * that enables the selection of multiple experience levels, predefined in an array. 
 * This component also handles outside click detection to close the dropdown.
 *
 * Props:
 * - selectedLevels (array): An array of currently selected levels.
 * - handleSetSelectedLevels (function): A function to update the selected levels in the parent component.
 * - setIsLevelDropdownOpen (function): A function to update the state in the parent component about the dropdown's visibility.
 */
const LevelFilter = ({ selectedLevels, handleSetSelectedLevels, setIsLevelDropdownOpen }) => {
    const [showLevelDropdown, setShowLevelDropdown] = useState(false);
    const levels = ['1-2 years', '3-5 years', '6-8 years', '9 years'];
    const dropdownRef = useRef(null); // Ref to the dropdown for handling outside clicks

    useEffect(() => {
        // Closes dropdown when clicked outside of dropdown
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowLevelDropdown(false);
            }
        };

        setIsLevelDropdownOpen(showLevelDropdown);
        handleSetSelectedLevels(selectedLevels);

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedLevels, showLevelDropdown]);


    /**
     * Handles the selection of an experience level.
     * 
     * @param {Object} event - The click event object.
     * @param {string} level - The experience level to toggle in the selection.
     */
    const handleLevelSelection = (event, level) => {
        event.stopPropagation(); // Prevents dropdown from closing
        let updatedLevels;
        if (selectedLevels.includes(level)) {
            updatedLevels = selectedLevels.filter(l => l !== level);
        } else {
            updatedLevels = [...selectedLevels, level];
        }

        handleSetSelectedLevels(updatedLevels);
    };

    return (
        <div 
            className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold opacity-100 z-20 
            ${showLevelDropdown ? `border-[#3A2A9B]` : ``}`}
            onClick={() => setShowLevelDropdown(!showLevelDropdown)}
            ref={dropdownRef}
        >
            <button 
                className={`filters-dropdown text-[#6B6C70] 
                ${selectedLevels.length > 0 ? 'text-black' : ''}`}>
                Level {` `}
                {selectedLevels.length > 0 && 
                    <span className="bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-[0.8125rem]">
                        {selectedLevels.length}
                    </span>}
            </button>

            {showLevelDropdown && (
                <div className="absolute border-[#3A2A9B] border-[1px] top-[2.4rem] right-0 w-[13.5rem] h-[9.375rem] px-[1.41rem] pt-[0.18rem] rounded-[1.25rem] bg-white ">
                    {levels.map((level, index) => (
                        <div 
                            key={index} // Unique key for each level
                            onClick={(event) => handleLevelSelection(event, level)}
                            className="flex items-center whitespace-nowrap h-[1.1875rem] my-[0.88rem]">
                            {/* Checkbox for each level */}
                            {selectedLevels.includes(level) ? (
                                <img 
                                src={CheckBox} 
                                alt="Checkbox" 
                                onClick={e => e.stopPropagation()}
                                className={'h-[11px] w-[12px] border-[#3A2A9B] border-[1px] rounded-[0.1rem]'} 
                                style={{ boxShadow: 'inset 0 0 0 3px #3A2A9B' }}
                                />                                
                            ) : (
                                <div className="h-[0.75rem] min-w-[12px] border-[1px] border-[#6B6C70] rounded-[0.1rem]"></div>
                            )}
                        
                        {/* Level */}
                        <span 
                        className={`px-[0.56rem] font-medium text-[0.9375rem] text-ellipsis overflow-hidden 
                        ${selectedLevels.includes(level) ? 'text-[#3A2A9B] ' : 'text-[#6B6C70]'}`}>
                            {level}
                        </span>
                        
                        {/* Dividing Line */}
                        {index !== levels.length - 1 && <div className="absolute border-b border-[#C7CBDA] w-[10.563rem] py-[1rem]"></div>}
                    </div>
                    ))}
                </div>
            )}
            {/* Dropdown arrow, rotates based on dropdown state */}
            <img src={arrow} alt="Dropdown Arrow" className={showLevelDropdown ? `` : `rotate-180`} />
        </div>
    );
};

export default LevelFilter;
