import React, { useState, useEffect } from 'react';
import { CheckBox } from '../../../../assets';

const LevelFilter = ({ setSelectedLevels }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const levels = ['1-2 years', '3-5 years', '6-8 years', '9+ years'];
    const [checkedLevels, setCheckedLevels] = useState([]);

    useEffect(() => {
        // Call the setSelectedLevels function passed as prop
        setSelectedLevels(checkedLevels);
    }, [checkedLevels, setSelectedLevels]);

    // Toggle the visibility of the dropdown
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Handle checkbox change
    const handleCheckboxChange = (level) => {
        setCheckedLevels(prev => {
            if (prev.includes(level)) {
                return prev.filter(l => l !== level);
            } else {
                return [...prev, level];
            }
        });
    };

    return (
        <div className="level-filter-container">
            <button onClick={toggleDropdown} className="level-filter-button">
                Level {checkedLevels.length > 0 && `(${checkedLevels.length})`}
            </button>

            {showDropdown && (
                <div className="level-dropdown">
                    {levels.map((level, index) => (
                        <div key={index} className="checkbox-container">
                            <input
                                type="checkbox"
                                id={`level-${index}`}
                                checked={checkedLevels.includes(level)}
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
