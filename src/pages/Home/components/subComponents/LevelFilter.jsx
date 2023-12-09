import React, { useState, useEffect, useRef } from 'react';
import { CheckBox } from '../../../../assets';

const LevelFilter = ({ handleSetSelectedLevels, setIsLevelDropdownOpen }) => {
    const [showLevelDropdown, setShowLevelDropdown] = useState(false);
    const levels = ['1-2 years', '3-5 years', '6-8 years', '9+ years'];
    const [selectedLevels, setSelectedLevels] = useState([]);
    const dropdownRef = useRef(null); // Ref to the dropdown for handling outside clicks

    useEffect(() => {
        setIsLevelDropdownOpen(showLevelDropdown);
        handleSetSelectedLevels(selectedLevels);
    }, [selectedLevels, showLevelDropdown]);

    // Toggle the visibility of the dropdown
    const toggleDropdown = () => {
        setShowLevelDropdown(!showLevelDropdown);
    };

    // Handle checkbox change
    const handleCheckboxChange = (level) => {
        setSelectedLevels(prev => {
            if (prev.includes(level)) {
                return prev.filter(l => l !== level);
            } else {
                return [...prev, level];
            }
        });
    };

    return (
        <div 
            className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold opacity-100 z-20 ${showLevelDropdown ? `border-[#3A2A9B]` : ``}`}
            onClick={() => setShowLevelDropdown(!showLevelDropdown)}
            ref={dropdownRef}
        >
            <button onClick={toggleDropdown} className="level-filter-button">
                Level {selectedLevels.length > 0 && `(${selectedLevels.length})`}
            </button>

            {showLevelDropdown && (
                <div className="level-dropdown">
                    {levels.map((level, index) => (
                        <div key={index} className="checkbox-container">
                            <input
                                type="checkbox"
                                id={`level-${index}`}
                                checked={selectedLevels.includes(level)}
                                onChange={() => handleCheckboxChange(level)}
                            />
                            <label htmlFor={`level-${index}`}>{level}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LevelFilter;
