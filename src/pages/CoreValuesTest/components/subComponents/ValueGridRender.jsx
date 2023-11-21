// StepComponents.jsx
import React from 'react';
import { CoreValueButton, ActionButton } from './Buttons.jsx';

/**
 * Component to display initial core values for selection.
 * @param {Object} props - Component props.
 * @param {Array} props.coreValues - Array of core values to be displayed totalling 35.
 * @param {Array} props.selectedValues - Array of currently selected values.
 * @param {Function} props.handleValueClick - Function to handle the selection of a value.
 */
export const StartTest = ({ _, __, handleNext }) => {
    return (
        <>
            <h3 className='mb-16 font-lg font-semibold'>Select all your core values from the list below. Be sure to choose more than 10!</h3>
            <div>
                <ActionButton 
                    type="start" 
                    onClick={handleNext} 
                    isEnabled={true} 
                />
            </div>
        </>
    );
};

/**
 * Component to display initial core values for selection.
 * @param {Object} props - Component props.
 * @param {Array} props.coreValues - Array of core values to be displayed totalling 35.
 * @param {Array} props.selectedValues - Array of currently selected values.
 * @param {Function} props.handleValueClick - Function to handle the selection of a value.
 */
export const InitialValues = ({ coreValues, selectedValues, handleValueClick }) => {
    return (
        <>
            <h3 className='mb-16 font-lg font-semibold'>Select all your core values from the list below. Be sure to choose more than 10!</h3>
            <div className='gap-5 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {coreValues.map(value => (
                    <CoreValueButton
                        key={value}
                        value={value}
                        isSelected={selectedValues.includes(value)}
                        onClick={() => handleValueClick(value)}
                    />
                ))}
            </div>
        </>
    );
};

/**
 * Component to display and allow selection from the first set of chosen values.
 * @param {Object} props - Component props.
 * @param {Array} props.stateOneValues - Array of values selected totalling the first step of selected values.
 * @param {Array} props.selectedValues - Array of currently selected values, specifically 10.
 * @param {Function} props.handleValueClick - Function to handle the selection of a value.
 */
export const TenValues = ({ stateOneValues, selectedValues, handleValueClick }) => {
    return (
        <>
            <h3 className='mb-16 font-lg font-semibold'>Of the selected values below, narrow down to 10!</h3>
            <div className='gap-5 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {stateOneValues.map(value => (
                    <CoreValueButton
                        key={value}
                        value={value}
                        isSelected={selectedValues.includes(value)}
                        onClick={() => handleValueClick(value)}
                    />
                ))}
            </div>
        </>
    );
};

/**
 * Component to display and allow selection from the second set of chosen values.
 * @param {Object} props - Component props.
 * @param {Array} props.stateTwoValues - Array of values selected totalling 10.
 * @param {Array} props.selectedValues - Array of currently selected values, specifically 5.
 * @param {Function} props.handleValueClick - Function to handle the selection of a value.
 */
export const FiveValues = ({ stateTwoValues, selectedValues, handleValueClick }) => {
    return (
        <>
            <h3 className='mb-16 font-lg font-semibold'>Of the selected values below, narrow down to 5!</h3>
            <div className='gap-5 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {stateTwoValues.map(value => (
                    <CoreValueButton
                        key={value}
                        value={value}
                        isSelected={selectedValues.includes(value)}
                        onClick={() => handleValueClick(value)}
                    />
                ))}
            </div>
        </>
    );
};

/**
 * Component to display and allow selection from the third set of chosen values.
 * @param {Object} props - Component props.
 * @param {Array} props.stateThreeValues - Array of values selected totalling 5.
 * @param {Array} props.selectedValues - Array of currently selected values, specifically 3.
 * @param {Function} props.handleValueClick - Function to handle the selection of a value.
 */
export const ThreeValues = ({ stateThreeValues, selectedValues, handleValueClick }) => {
    return (
        <>
            <h3 className='mb-16 font-lg font-semibold'>Of the selected values below, narrow down to 3!</h3>
            <div className='gap-5 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {stateThreeValues.map(value => (
                    <CoreValueButton
                        key={value}
                        value={value}
                        isSelected={selectedValues.includes(value)}
                        onClick={() => handleValueClick(value)}
                    />
                ))}
            </div>
        </>
    );
};
