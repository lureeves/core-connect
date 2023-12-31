import React, { useState } from 'react';
import { CoreValueButton, ActionButton } from './Buttons.jsx'
import ClipLoader from "react-spinners/ClipLoader";
import { DashedBorder } from '../../../../assets'

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
// const api = import.meta.env.VITE_AI_API_KEY;
const apiKey = import.meta.env.VITE_CHATGPT_API_KEY;

export const FinalValues = ({ finalValues }) => {
    let coreValues = finalValues.join(', ');
    const [image, setImage] = useState('/');
    const [loading, setLoading] =useState(false);
  
    const imageGenerator = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.openai.com/v1/images/generations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `Art that expresses ${coreValues} in a creative way`,
                    n: 1,
                    size: "512x512",
                }),
            });
    
            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }
    
            let data = await response.json();
            if (data && data.data && data.data.length > 0) {
                const imageUrl = data.data[0].url;
                setImage(imageUrl);
            } else {
                console.error("No image data received");
            }
        } catch (error) {
            console.error(`Error occurred: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };
    
    
    return (
        <div className="flex flex-col justify-center items-center">
            {/* Card Heading Texts */}
            <h3 className='mb-[47px] font-lg font-bold'>
                Congratulations on taking the time to learn more about yourself!
            </h3>
            <h4 className="mb-[40px] text-xl font-semibold">
                Here are your top 3 Core Values!
            </h4>

            <div className='flex flex-col'> 
                <div className='flex'>
                    {/* Image Generation */}
                    <div className='flex flex-col items-center'>
                        {
                            loading? (
                                <div className='mr-[2rem] h-full w-[11.6rem] flex justify-center items-center'>
                                    <ClipLoader
                                    color={"#2C4193"}
                                    loading={loading}
                                    size={50}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                    />
                                </div>
                            ) : (
                                image === '/' ? (
                                    <div className={`
                                    flex items-center justify-center 
                                    h-[12rem] mr-[1.56rem]`}> 
                                        {/* Border Around Button */}
                                        <img src={DashedBorder} alt="Dashed Border " />

                                        <button className='
                                            absolute flex items-center justify-center
                                            text-[0.8125rem] text-white font-medium
                                            bg-[#3A2A9B] rounded-[0.25rem] 
                                            h-[1.125rem] py-[0.85rem] px-[0.5rem]'
                                            onClick={()=>imageGenerator()}>
                                                Generate Custom Image
                                        </button>
                                    </div>
                                ) : (
                                    // Display the generated image
                                    <img 
                                        src={image} 
                                        alt="Generated Image" 
                                        className='h-[12rem] rounded-[0.25rem] mr-[1.56rem]'/>
                                )
                            )
                        }
                    </div> 

                    {/* Core Values */}
                    <div className='flex flex-col'>
                        {finalValues.map(value => (
                            <div key={value} 
                                className="core-value mb-[16px] py-[6px] px-[11px] rounded-[4px] w-fit bg-[#D7E0FF] text-center">
                                {value}
                            </div>
                        ))}
                    </div>
                </div>  
            </div>
        </div>
    );
};
