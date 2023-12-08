import React, { useState, useEffect } from 'react';
import { CheckBox } from '../../../../assets';

const DisciplineFilter = ({ handleSetSelectedDisciplines }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const disciplines = ['1-2 years', '3-5 years', '6-8 years', '9+ years'];
    const [checkedDisciplines, setCheckedDisciplines] = useState([]);

    useEffect(() => {
        // Call the handleSetSelectedDisciplines function passed as prop
        handleSetSelectedDisciplines(checkedDisciplines);
    }, [checkedDisciplines, handleSetSelectedDisciplines]);

    // Toggle the visibility of the dropdown
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Handle checkbox change
    const handleCheckboxChange = (discipline) => {
        setCheckedDisciplines(discipline => {
            if (prev.includes(discipline)) {
                return prev.filter(l => l !== discipline);
            } else {
                return [...prev, discipline];
            }
        });
    };

    return (
        <div className="discipline-filter-container">
            <button onClick={toggleDropdown} className="discipline-filter-button">
                Discipline {checkedDisciplines.length > 0 && `(${checkedDisciplines.length})`}
            </button>

            {showDropdown && (
                <div className="discipline-dropdown">
                    {disciplines.map((discipline, index) => (
                        <div key={index} className="checkbox-container">
                            <input
                                type="checkbox"
                                id={`discipline-${index}`}
                                checked={checkedDisciplines.includes(discipline)}
                                onChange={() => handleCheckboxChange(discipline)}
                            />
                            <label htmlFor={`discipline-${index}`}>{discipline}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DisciplineFilter;
