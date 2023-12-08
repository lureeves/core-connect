import React, { useState, useEffect, useRef } from 'react';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import DisciplineFilter from './subComponents/DisciplineFilter.jsx';
import LevelFilter from './subComponents/LevelFilter.jsx';
import { arrow, CheckBox } from '../../../assets';

const MultiFilter = ({ setMentorIndexes, setIsDropdownOpen }) => {
    const [selectedDisciplines, setSelectedDisciplines] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedCompanySizes, setSelectedCompanySizes] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Function to handle outside clicks to close the dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    // Function to set selected levels
    const handleSetSelectedLevels = (levels) => {
        setSelectedLevels(levels);
        // Add any additional logic if needed
    };
    
    // Function to set selected disciplines
    const handleSetSelectedDisciplines = (disciplines) => {
        setSelectedDisciplines(disciplines);
        // Add any additional logic if needed
    };

    // Event listeners for outside click detection
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Function to toggle selection state of a filter value
    const toggleFilter = (event, value, setter, currentValues) => {
        event.stopPropagation();
        setter(prev => {
            if (prev.includes(value)) {
                return prev.filter(i => i !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    // Function to filter mentors
    useEffect(() => {
        // Implement filtering logic here based on selected disciplines, levels, and company sizes
        // Update setMentorIndexes based on the filtered results
    }, [selectedDisciplines, selectedLevels, selectedCompanySizes]);

    return (
        <div 
            className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold z-10 ${showDropdown ? `border-[#3A2A9B]` : ``}`}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
        >
            {/* Dropdown trigger button */}
            {/* ... */}

            {/* Dropdown for selecting filter values */}
            {showDropdown && (
                <div className="filter-container absolute border-[#3A2A9B] top-[3rem] right-0 p-[1rem] w-[15.5rem] h-[23.25rem]">
                    {/* Discipline Dropdown */}
                    <DisciplineFilter handleSetSelectedDisciplines={handleSetSelectedDisciplines} />

                    {/* Level Dropdown */}
                    <LevelFilter setSelectedLevels={handleSetSelectedLevels} />

                    {/* Company Size Filter */}

                </div>
            )}
        </div>
    );
};

export default MultiFilter;
