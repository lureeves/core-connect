import React, { useState, useEffect, useRef } from 'react';
import { CheckBox } from '../../../../assets';

const DisciplineFilter = ({ handleSetSelectedDisciplines, setIsDisciplineDropdownOpen }) => {
    const [showDisciplineDropdown, setShowDisciplineDropdown] = useState(false);
    const disciplines = ['1-2 years', '3-5 years', '6-8 years', '9+ years'];
    const [selectedDisciplines, setSelectedDisciplines] = useState([]);
    const dropdownRef = useRef(null); // Ref to the dropdown for handling outside clicks

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
                <div className={`filter-container absolute border-[#3A2A9B] top-[2.4rem] right-0 p-[1rem] w-[13.5rem] h-[18.4rem]`}>
                    {disciplines.map((discipline, index) => (
                        <div 
                            key={index} 
                            onClick={(event) => toggleDiscipline(event, discipline)}
                            style={{
                                gridColumn: Math.floor(index / 12) + 1, // Determine the column based on index
                                gridRow: (index % 12) + 1 // Determine the row in that column
                            }}
                            className="cursor-pointer "
                        >
                            <div className="flex items-center">
                                {selectedDisciplines.includes(discipline) ? (
                                    <img 
                                    src={CheckBox} 
                                    alt="Checkbox" 
                                    className={'h-[11px] w-[12px] border-[#3A2A9B] border-[1px] rounded-[0.1rem]'} 
                                    style={{ boxShadow: 'inset 0 0 0 3px #3A2A9B' }}
                                    />                                
                                ) : (
                                    <div className=" h-[0.75rem] w-[12px] border-[1px] border-[#6B6C70] rounded-[0.1rem]"></div>
                                )}
                                <span className={`px-[0.56rem] ${selectedDisciplines.includes(discipline) ? 'text-[#3A2A9B] ' : ''}`}>
                                    {discipline}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DisciplineFilter;
