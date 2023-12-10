import React, { useState, useEffect, useRef } from 'react';
import { CheckBox, arrow } from '../../../../assets';
import MagGlassIcon from '../subComponents/MagGlassIcon.jsx';
import { MentorData } from '../../../../data/GoogleDriveMentors';

const DisciplineFilter = ({ handleSetSelectedDisciplines, setIsDisciplineDropdownOpen }) => {
    const [showDisciplineDropdown, setShowDisciplineDropdown] = useState(false);
    const disciplines = [...new Set(MentorData.map(mentor => mentor.disciplines))];
    const [selectedDisciplines, setSelectedDisciplines] = useState([]);
    const dropdownRef = useRef(null); // Ref to the dropdown for handling outside clicks
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Closes dropdown when clicked outside of dropdown
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDisciplineDropdown(false);
            }
        };
        
        setIsDisciplineDropdownOpen(showDisciplineDropdown);

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedDisciplines, showDisciplineDropdown]);
 

    const handleDisciplineSelection = (event, discipline) => {
        event.stopPropagation(); // Prevents dropdown from closing
        setSelectedDisciplines(prev => {
            let updatedDisciplines;
            if (prev.includes(discipline)) {
                updatedDisciplines = prev.filter(i => i !== discipline);
            } else {
                updatedDisciplines = [...prev, discipline];
            }
    
            // Update parent's state immediately after updating local state
            handleSetSelectedDisciplines(updatedDisciplines);
    
            setSearchTerm(''); // Clear the search box
            return updatedDisciplines;
        });
    };

    

    return (
        <div 
            className={`relative filter-container flex justify-between items-center w-[13.5rem] h-10 pr-6 pl-7 font-semibold opacity-100 z-20 
            ${showDisciplineDropdown ? `border-[#3A2A9B]` : ``}`}
            onClick={() => setShowDisciplineDropdown(!showDisciplineDropdown)}
            ref={dropdownRef}
        >
            <button 
                className={`filters-dropdown text-[#6B6C70] 
                ${selectedDisciplines.length > 0 ? 'text-black' : ''}`}>
                Discipline {` `}
                {selectedDisciplines.length > 0 && 
                    <span className="bg-[#E1E4EE] rounded-[0.25rem] px-[0.38rem] text-[0.8125rem]">
                        {selectedDisciplines.length}
                    </span>}
            </button>

            {showDisciplineDropdown && (
                <div className={`filter-container absolute border-[#3A2A9B] top-[2.4rem] right-0 p-[1rem] w-[13.5rem] h-[18.65rem] overflow-auto`}>
                    {/* Search Box */}
                    <div className="absolute left-[1.6rem] top-[2.15rem] transform -translate-y-1/2 z-10 text-[1rem]"><MagGlassIcon /></div>
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={e => setSearchTerm(e.target.value)} 
                        onClick={e => e.stopPropagation()}
                        placeholder="Search disciplines" 
                        className=" bg-transparent pl-8 border-[1px] border-[#C7CBDA] rounded-[0.3125rem] text-[#6B6C70] w-[11.625rem] h-[2.25rem]"
                    />
                    {disciplines.filter(discipline => discipline.toLowerCase().includes(searchTerm.toLowerCase())).map((discipline, index) => (
                        <div 
                            key={discipline} 
                            onClick={(event) => handleDisciplineSelection(event, discipline)}
                            >
                            <div className="flex items-center whitespace-nowrap">
                                {/* Checkbox for each discipline */}
                                {selectedDisciplines.includes(discipline) ? (
                                    <img 
                                    src={CheckBox} 
                                    alt="Checkbox" 
                                    className={'h-[11px] w-[12px] border-[#3A2A9B] border-[1px] rounded-[0.1rem]'} 
                                    style={{ boxShadow: 'inset 0 0 0 3px #3A2A9B' }}
                                    />                                
                                ) : (
                                    <div className="h-[0.75rem] min-w-[12px] border-[1px] border-[#6B6C70] rounded-[0.1rem]"></div>
                                )}
                                
                                {/* Discipline */}
                                <span 
                                className={`px-[0.56rem] py-[0.44rem] font-medium text-[0.9375rem] text-ellipsis overflow-hidden 
                                ${selectedDisciplines.includes(discipline) ? 'text-[#3A2A9B] ' : 'text-[#6B6C70]'}`}>
                                    {discipline}
                                </span>
                                
                                {/* Dividing Line */}
                                {index !== disciplines.length - 1 && <div className="absolute border-b border-[#C7CBDA] w-[10.563rem] py-[1.25rem]"></div>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {/* Dropdown arrow, rotates based on dropdown state */}
            <img src={arrow} alt="Dropdown Arrow" className={showDisciplineDropdown ? `` : `rotate-180`} />
        </div>
    );
};

export default DisciplineFilter;
