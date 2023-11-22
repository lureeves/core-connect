import React, { useState, useEffect } from 'react';
import '../CoreValueTest.css';
import { ActionButton }  from './subComponents/Buttons.jsx'
<<<<<<< HEAD
import { StartTest, InitialValues, TenValues, FiveValues, ThreeValues } from './subComponents/ValueGridRender.jsx';

/**
 * The TestCard component is responsible for managing the core values test. 
 * It handles user interactions across different steps of the test and manages the state of selected values.
 */
const TestCard = () => {
    // List of core values available for selection.
=======
import { InitialValues, TenValues, FiveValues, ThreeValues } from './subComponents/ValueGridRender.jsx';

// TestCard component handles the core values test
const TestCard = () => {
>>>>>>> b525b17 (added documentation to TestCard.jsx)
    const coreValues = [
    "Acheivement", "Discipline", "Generosity", "Knowledge", "Respect",
    "Adaptability", "Empathy", "Hard work", "Leadership", "Responsibility",
    "Collaboration", "Excitement", "Honesty", "Loyalty", "Security",
    "Compassionate", "Excellence", "Impact", "Passion", "Skill/Mastery",
    "Courage", "Flexibility", "Innovation", "Patience", "Trust",
    "Creativity", "Fairness", "Integrity", "Persistence", "Unity",
    "Curiosity", "Freedom", "Kindness", "Recognition", "Wisdom"
    ];

<<<<<<< HEAD
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
=======
    // State for storing selected values at each step
    const [stateOneValues, setStateOneValues] = useState([]);
    const [stateTwoValues, setStateTwoValues] = useState([]);
    const [stateThreeValues, setStateThreeValues] = useState([]);
    const [shownValues, setShownValues] = useState([]); // Shown for that page (selected values from the last step)
    const [selectedValues, setSelectedValues] = useState([]); // Currently selected values
    const [step, setStep] = useState(1);

    // Handles toggling value selection
    const handleValueClick = (value) => {
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter(v => v !== value));
        } else {
            setSelectedValues([...selectedValues, value]);
        }
    };
    
    // Handles next button click logic
    const handleNext = () => {
        let newValues = [];
        const newStep = step + 1;
        switch (step) {
            case 1: newValues = selectedValues; setStateOneValues(newValues);break;
            case 2: newValues = selectedValues; setStateTwoValues(newValues);break;
            case 3: newValues = selectedValues; setStateThreeValues(newValues); break;
>>>>>>> b525b17 (added documentation to TestCard.jsx)
        }
        setShownValues(newValues);
        setSelectedValues([]);
        setStep(step + 1);
    };   
    
<<<<<<< HEAD
    /**
     * Handles the logic for moving back to the previous step of the test.
     */
=======
    // Handles back button click logic
>>>>>>> b525b17 (added documentation to TestCard.jsx)
    const handleBack = () => {
        const newStep = step - 1;
        switch (newStep) {
            case 1: setShownValues(coreValues); setSelectedValues(stateOneValues); break;
            case 2: setShownValues(coreValues); setSelectedValues(stateTwoValues); break;
            case 3: setShownValues(stateTwoValues); setSelectedValues(stateThreeValues); break;
        }
        setStep(newStep);
    };
    
<<<<<<< HEAD
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
=======
    // Handles submit button click logic 
    const handleSubmit = () => {
        localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
    };
    
    // Render the correct grid based on the current step
    const GridRender = () => {
        switch(step) {
            case 1: return <InitialValues coreValues={coreValues} selectedValues={selectedValues} handleValueClick={handleValueClick} />;
            case 2: return <TenValues stateOneValues={stateOneValues} selectedValues={selectedValues} handleValueClick={handleValueClick} />;
            case 3: return <FiveValues stateTwoValues={stateTwoValues} selectedValues={selectedValues} handleValueClick={handleValueClick} />;
            case 4: return <ThreeValues stateThreeValues={stateThreeValues} selectedValues={selectedValues} handleValueClick={handleValueClick} />;
>>>>>>> b525b17 (added documentation to TestCard.jsx)
            default: return <DefaultComponent />;
        }
    }


    /**
     * Determines if the 'Next' button should be enabled based on the current step and selection.
     */
    const NextConditional = () => {
<<<<<<< HEAD
        return (
            (step === 1 && selectedValues.length > 10) ||
            (step === 2 && selectedValues.length === 10) ||
            (step === 3 && selectedValues.length === 5) ||
            (step === 4 && selectedValues.length === 3)
        );
=======
        return (step === 1 && selectedValues.length > 10) || 
               (step === 2 && selectedValues.length === 10) || 
               (step === 3 && selectedValues.length === 5) || 
               (step === 4 && selectedValues.length === 3);
>>>>>>> b525b17 (added documentation to TestCard.jsx)
    }

    // Effect hook to trigger updates on step change.
    useEffect(() => {
        // Your logic here if needed when the step or shownValues changes.
    }, [step, shownValues]);
    
    return (
<<<<<<< HEAD
        <>
            <div className='w-9/12 py-14 px-24 mx-auto text-lg border-transparent rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] clearfix'>
                {GridRender()}
                {step >= 2 && <ActionButton type="back" onClick={handleBack} isEnabled={true} />}
                {step <= 3 && <ActionButton type="next" onClick={handleNext} isEnabled={NextConditional()} />}
                {step === 4 && <ActionButton type="submit" onClick={handleSubmit} isEnabled={NextConditional()} />}
            </div>
        </>
    );
=======
        <> <div className='w-9/12 py-14 px-24 mx-auto text-lg border-transparent rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] clearfix'>
            {/* Grid of core values */}
            {GridRender()}

            {/* Back button only after first page */}
            {step >= 2 && <ActionButton type="back" onClick={handleBack} isEnabled={'True'} />}
            {/* Next button on every page except last */}
            {step <= 3 && <ActionButton type="next" onClick={handleNext} isEnabled={NextConditional()} />}
            {/* Submit button only on last page*/}
            {step === 4 && <ActionButton type="submit" onClick={handleSubmit} isEnabled={NextConditional()} />}
        </div> </>
  );
>>>>>>> b525b17 (added documentation to TestCard.jsx)
};

export default TestCard;

