import React, { useState, useEffect, useRef } from 'react';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';
import DisciplineFilter from './subComponents/DisciplineFilter.jsx';
import LevelFilter from './subComponents/LevelFilter.jsx';
import { CheckBox, filter, arrow } from '../../../assets';

const MultiFilter = ({ setMentorIndexes, setIsDropdownOpen }) => {
    const [isDisciplineDropdownOpen, setIsDisciplineDropdownOpen] = useState(false); // Used in opacity of background for dropdown
    const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);
    const [selectedDisciplines, setSelectedDisciplines] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedCompanySizes, setSelectedCompanySizes] = useState([]);
    const [totalSelected, setTotalSelected] = useState([]);
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
    };
    // Function to set selected disciplines
    const handleSetSelectedDisciplines = (disciplines) => {
        setSelectedDisciplines(disciplines);
    };


    // Helper function to check if a mentor's experience level is within 1-2, 3-5, 6-8, or 9
    const formatLevelsData = (mentorExperience) => {
        if (mentorExperience == (1 || 2)) {
            return '1-2 years';
        } else if (mentorExperience == (3 || 5)) {
            return '3-5 years';
        } else if (mentorExperience == (6 || 8)) {
            return '6-8 years';
        } else  {
            return '9 years';
        }
    };

    // Helper function to map a company size to one of the predefined categories
    const formatCompanyData = (size) => {
        if (size < 50) {
            return '< 50';
        } else if (size >= 50 && size <= 500) {
            return '50-500';
        } else if (size > 500 && size <= 10000) {
            return '501-10,000';
        } else {
            return '10,000+';
        }
    };

    // Main filter function
    const filterMentors = () => {
        const filteredMentorIndexes = 
            MentorData.map((mentor, index) => {
            // Disciplines - split mentor disciplines into an array and trim whitespace
            const mentorDisciplineArray = mentor.disciplines.split(',').map(discipline => discipline.trim());
            // Check if any of the selected disciplines are included in the mentor's disciplines
            const meetsDisciplineCriteria = selectedDisciplines.some(selectedDiscipline => 
                mentorDisciplineArray.includes(selectedDiscipline)
            );

            // Levels
            const levelCategory = formatLevelsData(mentor.years_experience);
            const meetsLevelCriteria = selectedLevels.includes(levelCategory);
           
            // Company Size
            const companySizeCategory = formatCompanyData(mentor.company_size);
            const meetsCompanySizeCriteria = selectedCompanySizes.includes(companySizeCategory);

            return meetsDisciplineCriteria || meetsLevelCriteria || meetsCompanySizeCriteria ? index : null;
            })
            .filter(index => index !== null);

        // console.log("filteredMentorIndexes: ", filteredMentorIndexes);
        setMentorIndexes(filteredMentorIndexes);
    };

        
    useEffect(() => {
        // Event listeners for outside click detection
        setIsDropdownOpen(showDropdown)
        document.addEventListener('mousedown', handleClickOutside);

        setTotalSelected(selectedDisciplines.length + selectedLevels.length + selectedCompanySizes.length);
    
        filterMentors();

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDropdown, selectedDisciplines, selectedLevels, selectedCompanySizes]);

    // console.log('selectedDisciplines: ' + selectedDisciplines + '\n]');
    // console.log('selectedLevels: ' +  selectedLevels + '\n]');
    // console.log('selectedCompanySizes: ' + selectedCompanySizes + '\n]');
    // console.log('totalSelected: ' + totalSelected);

    // Function to toggle selection state of a filter value
    const toggleCompanySize = (event, size) => {
        setSelectedCompanySizes(prev => {
            if (prev.includes(size)) {
                return prev.filter(i => i !== size);
            } else {
                return [...prev, size];
            }
        });
    };

    return (
        <div 
            className={`relative filter-container flex justify-between items-center w-[10rem] h-10 pr-6 pl-7 font-semibold  
                        ${showDropdown ? `border-[#3A2A9B]` : ``}`}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
            >
            {/* Dropdown trigger button */}
            <span className='flex flex-nowrap'>
                <img src={filter} alt="Filter Icon" className="pr-3" />

                <button 
                    className={`filters-dropdown text-[#6B6C70] 
                    ${totalSelected > 0 ? 'text-black' : ''}`}>
                    Filter {` `}
                    {totalSelected > 0 && 
                        <span className="bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-[0.8125rem]">
                            {totalSelected}
                        </span>}
                </button>
            </span>

            {/* Dropdown for selecting filter values */}
            {showDropdown && (
                <div 
                className={`filter-container absolute border-[#3A2A9B] top-[3rem] right-0 p-[1rem] w-[15.5rem] h-[23.25rem] z-10`}
                // {Prevents dropdown from closing when clicked inside}
                onClick={(event) => event.stopPropagation()}> 

                    {/* Discipline Dropdown */}
                    <div className={`pb-[1.06rem] ${isLevelDropdownOpen ? `border-[#3A2A9B] opacity-20` : ``}`}>
                        <DisciplineFilter handleSetSelectedDisciplines={handleSetSelectedDisciplines} setIsDisciplineDropdownOpen={setIsDisciplineDropdownOpen} />
                    </div>

                    {/* Level Dropdown */}
                    <div className={`pb-[1.06rem]${isDisciplineDropdownOpen ? `border-[#3A2A9B] opacity-20` : ``}`}>
                        <LevelFilter handleSetSelectedLevels={handleSetSelectedLevels} setIsLevelDropdownOpen={setIsLevelDropdownOpen} />
                    </div>

                    {/* Company Size Filter */}
                    <div className={`border-[#C7CBDA] border-[1px] rounded-[1.25rem] w-[13.5rem] h-[14rem] pt-[0.94rem] text-center text-[0.9375rem] text-semibold
                                    ${isDisciplineDropdownOpen || isLevelDropdownOpen ? `border-[#3A2A9B] opacity-20` : ``}`}>
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
                                            className={`h-[11px] w-[12px] border-[#3A2A9B] border-[1px] rounded-[0.1rem] ${selectedCompanySizes.includes(size) ? 'h-[12px] border-white p-[0.07rem]' : 'bg-transparent'}`} 
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
