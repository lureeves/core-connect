// StepComponents.jsx
import React from 'react';
import { CoreValueButton } from './Buttons.jsx';

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
    