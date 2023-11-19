import React, { useState } from 'react';
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
    // Currently Values
    const [shownValues, setShownValues] = useState([]); // Shown for that page (selected values from the last step)
    const [selectedValues, setSelectedValues] = useState([]); // Currently selected values
    const [step, setStep] = useState(1);

    // Checks for duplicates selected values set and adds appropriate values
    const handleValueClick = (value) => {
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter(v => v !== value));
        } else {
            setSelectedValues([...selectedValues, value]);
        }
    };
    

    // Used when user clicks 'back' button
    const handleBack = () => {
        console.log('Step:', step);
        setStep(step - 1);
    };

    // Used when user clicks 'next' button
    const handleNext = () => {
        // Increment step
        setStep(step + 1);

        // Conditionally save old selected values
        if (selectedValues.length > 10){
            setStateOneValues(selectedValues);
        } else if (selectedValues.length === 10){
            setStateTwoValues(selectedValues);
        } else if (selectedValues.length === 5){
            setStateThreeValues(selectedValues);
        } else {
            setStateFourValues(selectedValues);
        }


        console.log('Step:', step);
        console.log('Shown Values:', shownValues);
        console.log('Selected Values:', selectedValues);
        console.log('stateOneValues:', stateOneValues);
        console.log('stateTwoValues:', stateTwoValues);
        console.log('stateThreeValues:', stateThreeValues);
        console.log('stateFourValues:', stateFourValues);
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
        return (
            <>
            <h3 className='mb-16 font-lg font-semibold'>Of the selected values below, narrow down to 3!</h3>
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
        if (selectedValues.length > 10){
            return true;
        } else if (selectedValues.length === 10 && step === 2){
            return true;
        } else if (selectedValues.length === 5 && step === 3){
            return true;
        } else if (selectedValues.length === 3 && step === 4){
            return true;
        } else {
            return false;
        }
    
    }

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
