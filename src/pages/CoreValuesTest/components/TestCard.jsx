import React, { useState } from 'react';
import '../CoreValueTest.css';

// Card handles everything from when the user clicks on the "Start Test" button to 
// returning the user's core values

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
    const [step, setStep] = useState(1);

    // Checks for duplicates selected values set and adds appropriate values
    const handleValueClick = (value) => {
    if (selectedValues.includes(value)) {
        setSelectedValues(selectedValues.filter(v => v !== value));
    } else {
        setSelectedValues([...selectedValues, value]);
    }};


    // Logic for states of test
    const handleNext = () => {
        if (step === 1) {
            setStep(2);
        } else if (step === 2 && selectedValues.length >= 10) {
            setStep(3);
        } else if (step === 3 && selectedValues.length === 10) {
            setStep(4);
        } else if (step === 4 && selectedValues.length === 5) {
            setStep(5);
        } else if (step === 5 && selectedValues.length === 3) {
            // Goto different page
        }
    };


    // Used when user clicks back button
    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };
    

    const handleSubmit = () => {
    console.log('Selected Values:', selectedValues);
    // Handles the submission logic here (e.g., saving the data or navigating to the next page)
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
