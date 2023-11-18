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
        if (selectedValues.length >= 10) {
            setStep(1);
        } else if (selectedValues.length === 10) {
            setStep(2);
        } else if (selectedValues.length === 5) {
            setStep(3);
        } else if (selectedValues.length === 3) {
            setStep(4);
        }
    };


    // Used when user clicks back button
    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };
    
    // Submission logic handling
    const handleSubmit = () => {
        console.log('Selected Values:', selectedValues);

        console.log('Step:', step);
        setStep(step + 1)
        console.log('Step:', step);
        // if step === 4 then redirect
    };

  return (
    // Fragmentation for multiple returns
    <>
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
                        onClick={() => handleValueClick(value)}>
                    {value}
                </button>
            ))}
        </div>
        
        {/* Back button only after first page */}
        {step >= 2 ?
            <button onClick={handleBack} 
                    className='mt-16 
                        py-2 
                        px-9 
                        rounded-3xl 
                        text-[#3A2A9B] 
                        font-semibold
                        hover:scale-105 
                        border-2
                        border-[#3A2A9B]
                        bg-white
                        bg-[#3A2A9B]'>
                Back
            </button>
        : null}

        {/* Next button */}
        {step <= 3 ?
            <button onClick={selectedValues.length > 10 ?handleSubmit : null}
                    className='mt-16 
                                py-2 
                                px-9 
                                rounded-3xl 
                                text-white 
                                hover:scale-105 
                                float-right'
                    style={{
                        // Condition if they have selected minimum number of values
                        backgroundColor: selectedValues.length > 10 ? '#3A2A9B' : '#B9BBC3'
                    }}>
                Next
            </button>
        : null}

        {/* Submit button only on last page*/}
        {step === 4 ?
        <button onClick={selectedValues.length > 10 ?handleSubmit : null}
                className='mt-16 
                            py-2 
                            px-9 
                            rounded-xl 
                            text-white 
                            hover:scale-105 
                            float-right'
                style={{
                    // Condition if they have selected minimum number of values
                    backgroundColor: selectedValues.length > 10 ? '#3A2A9B' : '#B9BBC3'
                }}>
            Submit
        </button>
    : null}
    
    </div>
    </>
  );
};

export default TestCard;
