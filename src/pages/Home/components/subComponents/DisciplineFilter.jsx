import React, { useState, useEffect, useRef } from 'react';
import { CheckBox } from '../../../../assets';
import MagGlassIcon from '../subComponents/MagGlassIcon.jsx';
import { MentorData } from '../../../../data/GoogleDriveMentors';

const DisciplineFilter = ({ handleSetSelectedDisciplines, setIsDisciplineDropdownOpen }) => {
    const [showDisciplineDropdown, setShowDisciplineDropdown] = useState(false);
    const disciplines = [...new Set(MentorData.map(mentor => mentor.disciplines))];
    const [selectedDisciplines, setSelectedDisciplines] = useState([]);
    const dropdownRef = useRef(null); // Ref to the dropdown for handling outside clicks
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Call the handleSetSelectedDisciplines function passed as prop
        setIsDisciplineDropdownOpen(showDisciplineDropdown);
        handleSetSelectedDisciplines(selectedDisciplines);
    }, [selectedDisciplines, showDisciplineDropdown]);

    // Handle checkbox change
    const handleCheckboxClick = (discipline) => {
        setSelectedDisciplines(prev => {
            if (prev.includes(discipline)) {
                return prev.filter(l => l !== discipline);
            } else {
                return [...prev, discipline];
            }
        });
    };

    // Function to handle outside clicks to close the dropdown
    // const handleClickOutside = (event) => {
    //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //         setShowDisciplineDropdown(false);
    //     }
    // }

    const toggleDiscipline = (event, discipline) => {
        event.stopPropagation(); // Prevents event from bubbling up to parent elements
        setSelectedDisciplines(prev => {
            if (prev.includes(discipline)) {
                // Remove discipline if already selected
                return prev.filter(i => i !== discipline);
            } else {
                // Add discipline if not already selected
                setSearchTerm(''); // Clear the search box
                return [...prev, discipline];
            }
        });
    };

    return (
        <div 
            className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold opacity-100 z-20 ${showDisciplineDropdown ? `border-[#3A2A9B]` : ``}`}
            onClick={() => setShowDisciplineDropdown(!showDisciplineDropdown)}
            ref={dropdownRef}
        >
            <button className={`filters-dropdown text-[#6B6C70] ${selectedDisciplines.length > 0 ? 'text-black' : ''}`}>
                Discipline {` `}
                {selectedDisciplines.length > 0 && <span className="bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-[0.8125rem]">{selectedDisciplines.length}</span>}
            </button>

            {showDisciplineDropdown && (
                <div className={`filter-container absolute border-[#3A2A9B] top-[2.4rem] right-0 p-[1rem] w-[13.5rem] h-[18.4rem] overflow-auto`}>
                    <div className="search-input relative">
                        <MagGlassIcon className="absolute top-1/2 left-2 transform -translate-y-1/2" />
                        <input 
                            type="text" 
                            value={searchTerm} 
                            onChange={e => setSearchTerm(e.target.value)} 
                            onClick={e => e.stopPropagation()}
                            placeholder="Search disciplines" 
                            className={`border-[1px] border-[#C7CBDA] rounded-[0.3125rem] h-[2.25rem] w-[11.625rem]`}
                        />
                    </div>
                    {disciplines.filter(discipline => discipline.toLowerCase().includes(searchTerm.toLowerCase())).map((discipline, index) => (
                        <div 
                            key={index} 
                            onClick={(event) => toggleDiscipline(event, discipline)}
                        >
                            <div className="flex items-center whitespace-nowrap">
                                {selectedDisciplines.includes(discipline) ? (
                                    <img 
                                    src={CheckBox} 
                                    alt="Checkbox" 
                                    className={'h-[11px] w-[12px] border-[#3A2A9B] border-[1px] rounded-[0.1rem]'} 
                                    style={{ boxShadow: 'inset 0 0 0 3px #3A2A9B' }}
                                    />                                
                                ) : (
                                    <div className=" h-[0.75rem] min-w-[12px] border-[1px] border-[#6B6C70] rounded-[0.1rem]"></div>
                                )}
                                <span className={`px-[0.56rem] py-[0.44rem] font-semibold text-ellipsis overflow-hidden ${selectedDisciplines.includes(discipline) ? 'text-[#3A2A9B] ' : 'text-[#6B6C70]'}`}>
                                    {discipline}
                                </span>

                                {index !== disciplines.length - 1 && <div className="absolute border-b border-[#C7CBDA] w-[10.563rem] py-[1.25rem]"></div>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DisciplineFilter;
