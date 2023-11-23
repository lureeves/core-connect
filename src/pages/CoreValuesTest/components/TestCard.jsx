import React, { useState, useEffect } from 'react';
import '../CoreValueTest.css';
import { ActionButton }  from './subComponents/Buttons.jsx'
import { StartTest, InitialValues, TenValues, FiveValues, ThreeValues, FinalValues } from './subComponents/ValueGridRender.jsx';

// TestCard component handles the core values test
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

    // State for storing selected values at each step
    const [testStarted, setTestStarted] = useState(false);
    const [stateOneValues, setStateOneValues] = useState([]);
    const [stateTwoValues, setStateTwoValues] = useState([]);
    const [stateThreeValues, setStateThreeValues] = useState([]);
    const [finalValues, setFinalValues] = useState([]);
    const [shownValues, setShownValues] = useState([]); // Shown for that page (selected values from the last step)
    const [selectedValues, setSelectedValues] = useState([]); // Currently selected values
    const [step, setStep] = useState(0);

    // Handles toggling value selection
    const handleValueClick = (value) => {
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter(v => v !== value));
        } else {
            setSelectedValues([...selectedValues, value]);
        }
    };

    // Handles next button click logic
    const handleStart = () => {
        setTestStarted(true);
        setStep(step + 1);
    };
    
    // Handles next button click logic
    const handleNext = () => {
        let newValues = [];
        const newStep = step + 1;
        switch (step) {
            case 1: newValues = selectedValues; setStateOneValues(newValues);break;
            case 2: newValues = selectedValues; setStateTwoValues(newValues);break;
            case 3: newValues = selectedValues; setStateThreeValues(newValues); break;
        }
        setShownValues(newValues);
        setSelectedValues([]);
        setStep(step + 1);
    };   
    
    // Handles back button click logic
    const handleBack = () => {
        const newStep = step - 1;
        switch (newStep) {
            case 1: setShownValues(coreValues); setSelectedValues(stateOneValues); break;
            case 2: setShownValues(coreValues); setSelectedValues(stateTwoValues); break;
            case 3: setShownValues(stateTwoValues); setSelectedValues(stateThreeValues); break;
        }
        setStep(newStep);
    };
    
    // Handles submit button click logic 
    const handleSubmit = () => {
        setFinalValues(selectedValues);
        setStep(5);
        localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
    };
    
    // Render the correct grid based on the current step
    const GridRender = () => {
        if (!testStarted) {
            return <StartTest onStart={handleStart} />;
        }
        switch(step) {
            case 1: return <InitialValues coreValues={coreValues} selectedValues={selectedValues} handleValueClick={handleValueClick} />;
            case 2: return <TenValues stateOneValues={stateOneValues} selectedValues={selectedValues} handleValueClick={handleValueClick} />;
            case 3: return <FiveValues stateTwoValues={stateTwoValues} selectedValues={selectedValues} handleValueClick={handleValueClick} />;
            case 4: return <ThreeValues stateThreeValues={stateThreeValues} selectedValues={selectedValues} handleValueClick={handleValueClick} />;
            case 5: return <FinalValues finalValues={selectedValues} />;
            default: return <DefaultComponent />;
        }
    }

    /**
     * Determines if the 'Next' button should be enabled based on the current step and selection.
     */
    const NextConditional = () => {
        return (step === 1 && selectedValues.length > 10) || 
               (step === 2 && selectedValues.length === 10) || 
               (step === 3 && selectedValues.length === 5) || 
               (step === 4 && selectedValues.length === 3);
    }

    // Effect hook to trigger updates on step change.
    useEffect(() => {
        // Your logic here if needed when the step or shownValues changes.
    }, [step, shownValues]);
    
    return (
        <> 
        <div className={`w-${step === 5 ? '7/12' : '9/12'} pt-[65px] pb-[50px] mx-auto text-lg border-transparent rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] clearfix`}> 
            {/* Grid of core values */}
            {GridRender()}
            {/* Back button only after first page */}
            {step != 5 && step >= 2 && <ActionButton type="back" onClick={handleBack} isEnabled={'True'} />}
            {/* Next button on every page except last */}
            {step != 0 && step <= 3 && <ActionButton type="next" onClick={handleNext} isEnabled={NextConditional()} />}
            {/* Submit button only on last page*/}
            {step === 4 && <ActionButton type="submit" onClick={handleSubmit} isEnabled={NextConditional()} />}
        </div> 
        </>
  );
};

export default TestCard;

