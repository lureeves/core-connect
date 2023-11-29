import React, { useState, useEffect } from 'react';
import MagGlassIcon from './subComponents/MagGlassIcon.jsx';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';

const RoleSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const results = MentorData.filter((mentor) => mentor.role.toLowerCase().includes(searchTerm.toLowerCase()));
    for (const filteredMentor of results) {
        console.log(filteredMentor.first_name + ' ' + filteredMentor.last_name + ' - ' + filteredMentor.role);
        break; // This will stop the loop after the first iteration
    }
    console.log('--- End of set ---');
}, [searchTerm]);

  return (
    <div className='filter-container flex justify-between items-center w-56 h-10 py-3 pr-6 pl-7 gap-3'>

        <MagGlassIcon />


        <input 
            className="w-full p-1" 
            type="text" 
            placeholder='Search Role'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  );
};

export default RoleSearch;