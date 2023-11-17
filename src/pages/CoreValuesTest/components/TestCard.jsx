import React, { useState } from 'react';
import '../CoreValueTest.css';

const TestCard = () => {
  const coreValues = [
    "Acheivement", "Discipline", "Generosity", "Knowledge", "Respect",
    "Adaptability", "Empathy", "Hard work", "Leadership", "Responsibility",
    "Collaboration", "Excitement", "Honesty", "Loyalty", "Security",
    "Compassionate", "Excellence", "Impact", "Passion", "Skill/Mastery",
    "Courage", "Flexibility", "Innovation", "Patience", "Trust",
    "Creativity", "Fairness", "Integrity", "Persistence", "Unity",
    "Curiosity", "Freedom", "Kindness", "Recognition", "Wisdom"
  ];

  const [selectedValues, setSelectedValues] = useState([]);

  const handleValueClick = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter(v => v !== value));
    } else if (selectedValues.length < 10) {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const handleSubmit = () => {
    console.log('Selected Values:', selectedValues);
    // Handle the submission logic here (e.g., saving the data or navigating to the next page)
  };

  return (
    <div className='w-9/12 py-14 px-24 mx-auto text-lg border-transparent rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] clearfix'>
        {/* Card title */}
        <h3 className='mb-16 font-lg font-semibold'>Select all your core values from the list below. Be sure to choose at least 10!</h3>
        
        {/* Card buttons */}
        <div className='gap-5 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {coreValues.map(value => (
            <button
                key={value}
                className='my-3
                           p-1 
                           g-white 
                           border-2 
                           border-[#D7E0FF] `
                           shadow-[#D7E0FF_0px_0px_4px]
                           hover:scale-105'
                style={{ 
                    borderRadius: '15px',
                    backgroundColor: selectedValues.includes(value) ? '#D7E0FF' : 'white' 
                    }}
                onClick={() => handleValueClick(value)}
            >
                {value}
            </button>
            ))}
        </div>
        
        {/* Next button */}
        <button onClick={handleSubmit} className='mt-16 py-2 px-9 bg-[#3A2A9B] rounded-3xl text-white hover:scale-105 float-right'>Next</button>
    
    </div>
  );
};

export default TestCard;
