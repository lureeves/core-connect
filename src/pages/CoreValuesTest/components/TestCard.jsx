import React, { useState, useEffect } from 'react';
import '../CoreValueTest.css';
import { ActionButton }  from './subComponents/Buttons.jsx'
import { StartTest, InitialValues, TenValues, FiveValues, ThreeValues } from './subComponents/ValueGridRender.jsx';

/**
 * The TestCard component is responsible for managing the core values test. 
 * It handles user interactions across different steps of the test and manages the state of selected values.
 */
const TestCard = () => {
    // List of core values available for selection.
    const coreValues = [
    "Acheivement", "Discipline", "Generosity", "Knowledge", "Respect",
    "Adaptability", "Empathy", "Hard work", "Leadership", "Responsibility",
    "Collaboration", "Excitement", "Honesty", "Loyalty", "Security",
    "Compassionate", "Excellence", "Impact", "Passion", "Skill/Mastery",
    "Courage", "Flexibility", "Innovation", "Patience", "Trust",
    "Creativity", "Fairness", "Integrity", "Persistence", "Unity",
    "Curiosity", "Freedom", "Kindness", "Recognition", "Wisdom"
    ];

    // State hooks for managing the values selected in different steps.
    const [stateOneValues, setStateOneValues] = useState([]);
    const [stateTwoValues, setStateTwoValues] = useState([]);
    const [stateThreeValues, setStateThreeValues] = useState([]);
    // State hooks for managing currently displayed (shown) and selected values.
    const [shownValues, setShownValues] = useState([]);
    const [selectedValues, setSelectedValues] = useState([]);
    // State hook to track the current step of the test.
    const [step, setStep] = useState(0);

    /**
     * Handles the logic for selecting or deselecting a value.
     * @param {string} value - The value to be selected or deselected.
     */
    const handleValueClick = (value) => {
        const isValueSelected = selectedValues.includes(value);
        setSelectedValues(isValueSelected
            ? selectedValues.filter(v => v !== value)
            : [...selectedValues, value]
        );
    };
    
    /**
     * Handles the logic for moving to the next step of the test.
     */
    const handleNext = () => {
        const newValues = selectedValues;
        switch (step) {
            case 1: setStateOneValues(newValues); break;
            case 2: setStateTwoValues(newValues); break;
            case 3: setStateThreeValues(newValues); break;
        }
        setShownValues(newValues);
        setSelectedValues([]);
        setStep(step + 1);
    };   
    
    /**
     * Handles the logic for moving back to the previous step of the test.
     */
    const handleBack = () => {
        const newStep = step - 1;
        switch (newStep) {
            case 1: setShownValues(coreValues); setSelectedValues(stateOneValues); break;
            case 2: setShownValues(coreValues); setSelectedValues(stateTwoValues); break;
            case 3: setShownValues(stateTwoValues); setSelectedValues(stateThreeValues); break;
        }
        setStep(newStep);
    };
    
    /**
     * Handles the logic for submitting the final selected values.
     */
    const handleSubmit = () => {
        const stringifiedValues = JSON.stringify(selectedValues);
        localStorage.setItem('selectedValues', stringifiedValues);
    };

    /**
     * Conditionally renders the grid of core values based on the current step.
     */
    const GridRender = () => {
        switch(step) {
            case 0: return (
                <>
                    <StartTest {...{coreValues, selectedValues, handleNext}} />
                    <ActionButton type="start" onClick={handleNext} isEnabled={true} />
                </>
            );
            case 1: return <InitialValues {...{coreValues, selectedValues, handleValueClick}} />;
            case 2: return <TenValues {...{stateOneValues, selectedValues, handleValueClick}} />;
            case 3: return <FiveValues {...{stateTwoValues, selectedValues, handleValueClick}} />;
            case 4: return <ThreeValues {...{stateThreeValues, selectedValues, handleValueClick}} />;
            default: return <DefaultComponent />;
        }
    }


    /**
     * Determines if the 'Next' button should be enabled based on the current step and selection.
     */
    const NextConditional = () => {
        return (
            (step === 1 && selectedValues.length > 10) ||
            (step === 2 && selectedValues.length === 10) ||
            (step === 3 && selectedValues.length === 5) ||
            (step === 4 && selectedValues.length === 3)
        );
    }

    // Effect hook to trigger updates on step change.
    useEffect(() => {
        // Your logic here if needed when the step or shownValues changes.
    }, [step, shownValues]);
    
    return (
        <>
            <div className='w-9/12 py-14 px-24 mx-auto text-lg border-transparent rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] clearfix'>
                {GridRender()}
                {step >= 2 && <ActionButton type="back" onClick={handleBack} isEnabled={true} />}
                {step <= 3 && <ActionButton type="next" onClick={handleNext} isEnabled={NextConditional()} />}
                {step === 4 && <ActionButton type="submit" onClick={handleSubmit} isEnabled={NextConditional()} />}
            </div>
        </>
    );
};

export default TestCard;

