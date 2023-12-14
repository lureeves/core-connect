import React from 'react';
import arrow from '../../../../assets/arrow.svg';

const CoreValueSelection = ({ dropdown, toggleDrop, selectedValues, toggleValue, options, index, defaultValue }) => {
    return (
        <>
            <button 
                onClick={()=>toggleDrop(index+1)}
                className='border flex justify-between items-center rounded-3xl py-[5px] pl-[2.56rem] pr-[1.81rem] border-[#9EA6C5] buttonShadow'>
                    {selectedValues? selectedValues[index]: defaultValue} 
                    <img className={dropdown===index+1?``:'rotate-180'} src={arrow} alt="" />
            </button>
            {dropdown==index+1 &&  <div className='flex flex-col  max-h-[10.8rem] overflow-y-scroll absolute bg-white w-[16rem] top-[21.8rem] border border-[#9EA6C5] rounded-lg items-center z-10'>
                    {options.map((option)=>{
                    return <div 
                    onClick={()=>{
                        toggleValue(index,option)
                    }}
                    className='border-b hover:bg-slate-200 cursor-pointer border-b-slate-300 w-full flex justify-center py-1'>{option}</div>
                    })}
                </div>}
        </>
    );
};

export default CoreValueSelection;