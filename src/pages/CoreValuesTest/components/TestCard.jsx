import React, { useState, useEffect } from 'react';
import '../CoreValueTest.css';
import { ActionButton, CoreValueButton }  from './Buttons.jsx'

// Card handles everything from when the user clicks on the "Start Test" button to 
// saving the user's core values to the browser

const TestCard = () => {
    // Core values to choose from
    const coreValues = [
    "Acheivement", "Discipline", "Generosity", "Knowledge", "Respect",
    "Adaptability", "Empathy", "Hard work", "Leadership", "Responsibility",
    "Collaboration", "Excitement", "Honesty", "Loyalty", "Security",
    "Compassionate", "Excellence", "Impact", "Passion", "Skill/Mastery",
    "Courage", "Flexibility", "Innovation", "Patience", "Trust",
    "Creativity", "Fairness", "Integrity", "Persistence", "Unity",
    "Curiosity", "Freedom", "Kindness", "Recognition", "Wisdom"
    ];

    // Variable declarations
    // Past Chosen Values
    const [stateOneValues, setStateOneValues] = useState([]);
    const [stateTwoValues, setStateTwoValues] = useState([]);
    const [stateThreeValues, setStateThreeValues] = useState([]);
    const [stateFourValues, setStateFourValues] = useState([]);
    // Current Values
    const [shownValues, setShownValues] = useState([]); // Shown for that page (selected values from the last step)
    const [selectedValues, setSelectedValues] = useState([]); // Currently selected values
    const [step, setStep] = useState(1);

    // Updates shownValues based on the current step
    const updateShownValues = (newStep) => {
        switch (newStep) {
            case 1:
                setShownValues(coreValues);
                break;
            case 2:
                setShownValues(stateOneValues);
                break;
            case 3:
                setShownValues(stateTwoValues);
                break;
            case 4:
                setShownValues(stateThreeValues);
                break;
            default:
                setShownValues([]);
        }
    };

    // Handles value selection and deselection
    const handleValueClick = (value) => {
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter(v => v !== value));
        } else {
            setSelectedValues([...selectedValues, value]);
        }
    };
    

    const handleNext = () => {
        let newValues = [];
        const newStep = step + 1;
    
        switch (step) {
            case 1:
                newValues = selectedValues;
                setStateOneValues(newValues);
                break;
            case 2:
                newValues = selectedValues;
                setStateTwoValues(newValues);
                break;
            case 3:
                newValues = selectedValues;
                setStateThreeValues(newValues); // Ensure this is correctly capturing the 5 selected values
                break;
        }
    
        setShownValues(newValues);
        setSelectedValues([]);
        setStep(newStep);
    };    
    
    
    const handleBack = () => {
        const newStep = step - 1;
    
        switch (newStep) {
            case 1:
                setShownValues(coreValues); // Show all core values for reselection
                setSelectedValues(stateOneValues); // Reset to previously selected values in step 1
                break;
            case 2:
                setShownValues(coreValues); // Show all core values for reselection
                setSelectedValues(stateTwoValues); // Reset to previously selected values in step 2
                break;
            case 3:
                setShownValues(stateTwoValues); // Show the values from step 2
                setSelectedValues(stateThreeValues); // Reset selected values to step 3
                break;
        }
    
        setStep(newStep);
    };
    
    
    
    
    
    
    
    
    // Submission logic handling
    const handleSubmit = () => {
        console.log('Step:', step);
        console.log('Submit selected:')
        console.log('Shown Values:', shownValues);
        console.log('Selected Values:', selectedValues);
    };


    // Core Value grid
    const InitialValues = () => {
        return (
            // {/* Card title */}
            <>
            <h3 className='mb-16 font-lg font-semibold'>Select all your core values from the list below. Be sure to choose more than 10!</h3>

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
            </>
        );
    };
    const TenValues = () => {
        return (
            <>
            <h3 className='mb-16 font-lg font-semibold'>Of the selected values below, narrow down to 10!</h3>
            <div className='gap-5 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {stateOneValues.map(value => (
                    <CoreValueButton
                        key={value}
                        value={value}
                        isSelected={selectedValues.includes(value)}
                        onClick={handleValueClick}
                    />
                ))}
            </div>
            </>
        );
    };
    const FiveValues = () => {
        console.log('Rendering FiveValues with:', shownValues);
        return (
            <>
                <h3 className='mb-16 font-lg font-semibold'>Of the selected values below, narrow down to 5!</h3>
                <div className='gap-5 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                    {shownValues.map(value => (
                        <CoreValueButton
                            key={value}
                            value={value}
                            isSelected={selectedValues.includes(value)}
                            onClick={handleValueClick}
                        />
                    ))}
                </div>
            </>
        );
    };
    const ThreeValues = () => {
        console.log('Rendering ThreeValues with:', stateThreeValues);
        return (
            <>
                <h3 className='mb-16 font-lg font-semibold'>Of the selected values below, narrow down to 3!</h3>
                <div className='gap-5 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                    {stateThreeValues.map(value => (
                        <CoreValueButton
                            key={value}
                            value={value}
                            isSelected={selectedValues.includes(value)}
                            onClick={handleValueClick}
                        />
                    ))}
                </div>
            </>
        );
    };
    


    // Conditionally rending of Core Value grid
    const GridRender = () => {
        switch(step) {
            case 1:
                return <InitialValues />;
            case 2:
                return <TenValues />;
            case 3:
                return <FiveValues />;
            case 4:
                return <ThreeValues />;
            default:
                return <DefaultComponent />;
        }
    }

    // Contionally enable 'Next' Button when correct number of values are displayed
    const NextConditional = () => {
        if (step === 1 && selectedValues.length > 10) {
            return true;
        } else if (step === 2 && selectedValues.length === 10) {
            return true;
        } else if (step === 3 && selectedValues.length === 5) {
            return true;
        } else if (step === 4 && selectedValues.length === 3) {
            return true;
        } else {
            return false;
        }
    }
    
    // Updates the shownValues when the component mounts or step changes
    useEffect(() => {
        console.log('Effect - Step:', step);
        console.log('Effect - Shown Values:', shownValues);
    }, [step, shownValues]);
    
    
    

    return (
        // Fragmentation for multiple returns
        <>
        <div className='w-9/12 py-14 px-24 mx-auto text-lg border-transparent rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] clearfix'>
            
            {/* Grid of core values */}
            {GridRender()}
            
            {/* Back button only after first page */}
            {step >= 2 ? 
                <ActionButton type="back" onClick={handleBack} isEnabled={'True'} /> 
                : null }

            {/* Next button on every page except last */}
            {step <= 3 ? 
                <ActionButton type="next" onClick={handleNext} isEnabled={NextConditional()} /> 
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
