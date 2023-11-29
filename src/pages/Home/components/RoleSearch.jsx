import React, { useState } from 'react';
import { MagGlass, arrow, filter } from '../../../assets';
import { MentorData } from '../../../data/GoogleDriveMentors.jsx';


const RoleSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='filter-container flex justify-between items-center w-56 h-10 py-3 pr-6 pl-7 gap-3'>
      <img src={MagGlass} alt="" />
      <input 
        className="w-full p-1" 
        type="text" 
        placeholder='Search Role'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {MentorData.filter((mentor) => mentor.role.toLowerCase().includes(searchTerm.toLowerCase())).map((filteredMentor, index) => {
        console.log(filteredMentor.first_name + ' ' + filteredMentor.last_name + ' - ' + filteredMentor.role);
      })}
    </div>
  );
};

export default RoleSearch;