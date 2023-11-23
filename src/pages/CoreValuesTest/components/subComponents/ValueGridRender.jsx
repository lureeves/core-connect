import React from 'react';
import { CoreValueButton, ActionButton } from './Buttons.jsx'

/**
 * StartTest component renders the page before inital test to see if user wants to enter the page or not.
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onStart - The function to handle click events on the values.
 */
export const StartTest = ({ onStart }) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-lg w-[33.1875rem] text-center leading-[normal] pb-[3.025rem]">
                    Use this simple test to understand yourself better and learn how you can bring your Core Values into mentorship! 
                </p>
                <ActionButton type="start" onClick={onStart} isEnabled={'True'} />
            </div>
        </>
    );
};


/**
 * InitialValues component renders the initial set of core values for the user to select from.
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.coreValues - The list of all core values.
 * @param {Array} props.selectedValues - The list of currently selected values.
 * @param {Function} props.handleValueClick - The function to handle click events on the values.
 */
export const InitialValues = ({ coreValues, selectedValues, handleValueClick }) => {
    return (
        <>
            <h3 className='mb-16 font-lg font-semibold mx-[92px]'>Select all your core values from the list below. Be sure to choose more than 10!</h3>
            <div className='gap-x-[20px] gap-y-[38px] mx-[92px] my-[75px]'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
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
            <h3 className='mb-16 font-lg font-semibold mx-[92px]'>Of the selected values below, narrow down to 10!</h3>
            <div className='gap-x-[20px] gap-y-[38px] mx-[92px] my-[75px] 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
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
            <h3 className='mb-16 font-lg font-semibold mx-[92px]'>Of the selected values below, narrow down to 5!</h3>
            <div className='gap-x-[20px] gap-y-[38px] mx-[92px] my-[75px] 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {stateTwoValues.map(value => (
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
            <h3 className='mb-16 font-lg font-semibold mx-[92px]'>Of the selected values below, narrow down to 3!</h3>
            <div className='gap-x-[20px] gap-y-[38px] mx-[92px] my-[75px] 'style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
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


/**
 * FinalValues component displays the top 3 selected core values with dynamically calculated widths.
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.finalValues - An array of the final three selected core values.
 */
export const FinalValues = ({ finalValues }) => {
    // Calculates the width for a core value based on its character length.
    const calculateWidth = (value) => {
        const baseWidth = 20; // Base width
        const widthPerCharacter = 10; // Additional width per character
        return `${baseWidth + (value.length * widthPerCharacter)}px`;
    };

    return (
        <div className=''>
            <div className="flex flex-col justify-center items-center">
                <h3 className='mb-[47px] font-lg font-bold'>Congratulations on taking the time to learn more about yourself!</h3>
                <h4 className="mb-[40px] text-xl font-semibold">Here are your top 3 Core Values!</h4>
                <div className='flex'>
                    <img src="https://via.placeholder.com/150" alt="Placeholder" className="mr-[25px] rounded-[10px]" />
                    <div className='flex flex-col'>
                        {finalValues.map(value => (
                            <div 
                                key={value} 
                                className="core-value mb-[16px] py-[6px] px-[11px] rounded-[4px] bg-[#D7E0FF] text-center"
                                style={{ width: calculateWidth(value) }}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
