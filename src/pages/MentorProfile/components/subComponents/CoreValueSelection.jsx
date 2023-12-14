import React from 'react';
import arrow from '../../../../assets/arrow.svg';

const CoreValueSelection = ({ dropdown, toggleDrop, selectedValues, toggleValue, options, index, defaultValue }) => {
    return (
        <>
            <button 
                onClick={() => toggleDrop(index+1)}
                className={`border flex justify-between items-center rounded-[1.25rem] 
                    py-[5px] pl-[2.56rem] pr-[1.81rem] w-[15.7rem] buttonShadow 
                    text-[0.9375rem]
                    ${dropdown==index+1?"border-[#3A2A9B]":"border-[#9EA6C5]"}`}
                    >
                    {selectedValues ? selectedValues[index] : defaultValue} 

                    {/* Dropdown Arrow */}
                    <img className={dropdown===index+1?``:'rotate-180'} src={arrow} alt="" />
            </button>
            
            {dropdown==index+1 &&  
                <div className='flex flex-col absolute overflow-y-scroll  
                    bg-white w-[15.7rem] h-[13.5rem] top-[21.8rem] border border-[#3A2A9B] rounded-[1.25rem] 
                    text-[0.9375rem] pt-[0.5rem] z-10'>
                    {options.map((option, i)=>{
                        return <>
                            <div 
                                key={i}
                                onClick={()=>{
                                    toggleValue(index,option)
                                }}
                                className={`cursor-pointer pl-[2.56rem] inline-block
                                ${selectedValues.includes(option) ? 'bg-[#3A2A9B] text-white' : ''}`}
                                >
                                    {option}
                            </div>

                            {/* Horizontal Dividing Line */}
                            {i !== options.length - 1 && <div className="ml-[2.03rem] border-b border-[#C7CBDA] w-[11.75rem] my-[0.44rem]"></div>}
                        </>
                    })}
                </div>}
        </>
    );
};

export default CoreValueSelection;