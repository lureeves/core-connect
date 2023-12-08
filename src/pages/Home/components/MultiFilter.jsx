import React, { useState, useEffect, useRef } from 'react';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import DisciplineFilter from './subComponents/DisciplineFilter.jsx';
import LevelFilter from './subComponents/LevelFilter.jsx';
import { CheckBox, filter } from '../../../assets';

const MultiFilter = ({ setMentorIndexes, setIsDropdownOpen }) => {
    const [selectedDisciplines, setSelectedDisciplines] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedCompanySizes, setSelectedCompanySizes] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const companySizes = ['< 50', '50-500', '501-10,000', '10,000+'];
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
    const toggleCompanySize = (event, size) => {
        event.stopPropagation(); // Prevents event from bubbling up to parent elements
        setSelectedCompanySizes(prev => {
            if (prev.includes(size)) {
                return prev.filter(i => i !== size);
            } else {
                return [...prev, size];
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
            className={`relative filter-container flex justify-between items-center w-[10rem] h-10 pr-6 pl-7 font-semibold z-10 ${showDropdown ? `border-[#3A2A9B]` : ``}`}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
            >
            {/* Dropdown trigger button */}
            <span className='flex flex-nowrap'>
                <img src={filter} alt="Filter Icon" className="pr-3" />

                <button className="text-[#6B6C70]">
                    Filter
                </button>
            </span>

            {/* Dropdown for selecting filter values */}
            {showDropdown && (
                <div className="filter-container absolute border-[#3A2A9B] top-[3rem] right-0 p-[1rem] w-[15.5rem] h-[23.25rem]">
                    {/* Discipline Dropdown */}
                    <DisciplineFilter handleSetSelectedDisciplines={handleSetSelectedDisciplines} />

                    {/* Level Dropdown */}
                    <LevelFilter setSelectedLevels={handleSetSelectedLevels} />

                    {/* Company Size Filter */}
                    <div className="border-[#C7CBDA] border-[1px] rounded-[1.25rem] w-[13.5rem] h-[14rem] pt-[0.94rem] text-center text-[0.9375rem] text-semibold">
                        Company Size
                        <div className="flex flex-col justify-around">
                            {companySizes.map((size) => (
                                <button 
                                    key={size} 
                                    className={`text-[0.875rem] border-[#3A2A9B] border-[1px] rounded-[0.3125rem] mx-[3.02rem] mt-[0.75rem] pl-[0.75rem] h-[1.8125rem] flex items-center 
                                                ${selectedCompanySizes.includes(size) ? 'bg-[#3A2A9B]' : 'bg-transparent'}`}
                                    onClick={(event) => toggleCompanySize(event, size)}>
                                    {selectedCompanySizes.includes(size) ? (
                                        // Checkbox (selected)
                                        <img 
                                            src={CheckBox} 
                                            alt="Checkbox" 
                                            className={'h-[11px] w-[12px] border-[#3A2A9B] border-[1px] rounded-[0.1rem] '} 
                                            style={{ boxShadow: 'inset 0 0 0 3px #3A2A9B' }}
                                        />
                                    ) : (
                                        // Grey box (unselected)
                                        <div className="h-[0.75rem] w-[12px] border-[1px] border-[#6B6C70] rounded-[0.1rem]"></div>
                                    )}
                                    {/* Company size */}
                                    <span className={`px-[0.56rem] text-clip overflow-hidden ${selectedCompanySizes.includes(size) ? 'text-white' : 'bg-transparent'}`} >
                                        {size}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiFilter;
