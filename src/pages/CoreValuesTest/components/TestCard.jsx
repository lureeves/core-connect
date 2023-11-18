import React, { useState } from 'react';
import '../CoreValueTest.css';
import { ActionButton, CoreValueButton }  from './Buttons.jsx'

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


    // // Logic for states of test
    // const handleNext = () => {
    //     if (selectedValues.length >= 10) {
    //         setStep(1);
    //     } else if (selectedValues.length === 10) {
    //         setStep(2);
    //     } else if (selectedValues.length === 5) {
    //         setStep(3);
    //     } else if (selectedValues.length === 3) {
    //         setStep(4);
    //     }
    // };


    // Used when user clicks 'back' button
    const handleBack = () => {
        if (step > 1) {
            console.log('Step:', step);
            setStep(step - 1);
        }
    };

    // Used when user clicks 'next' button
    const handleNext = () => {
        console.log('Step:', step);
        setStep(step + 1);
        console.log('Selected Values:', selectedValues);
    };
    
    // Submission logic handling
    const handleSubmit = () => {

        console.log('Step:', step);

        // if step === 4 then redirect
    };

  return (
    // Fragmentation for multiple returns
    <>
    <div className='w-9/12 py-14 px-24 mx-auto text-lg border-transparent rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] clearfix'>
        
        {/* Set up large multiway if statement */}
        {/* each step should be each should determine based upon step then choose the appropriate output*/}
        
        
        
        {/* Card title */}
        <h3 className='mb-16 font-lg font-semibold'>Select all your core values from the list below. Be sure to choose more than 10!</h3>
        
        {/* Core Value buttons */}
        <div className='gap-5 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {coreValues.map(value => (
                <CoreValueButton
                    key={value}
                    value={value}
                    isSelected={selectedValues.includes(value)}
                    onClick={handleValueClick}
                />
            ))}
        </div>
        
        {/* Back button only after first page */}
        {step >= 2 ? 
            <ActionButton type="back" onClick={handleBack} isEnabled={step >= 2} /> 
            : null }

        {/* Next button on every page except last */}
        {step <= 3 ? 
            <ActionButton type="next" onClick={handleNext} isEnabled={selectedValues.length > 10} /> 
            : null}

        {/* Submit button only on last page*/}
        {step === 4 ? 
            <ActionButton type="submit" onClick={handleSubmit} isEnabled={step === 4} /> 
            : null }
    
    </div>
    </>
  );
};

export default TestCard;
