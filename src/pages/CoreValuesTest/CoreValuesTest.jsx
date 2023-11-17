
import React from 'react';
import TestCard from './components/TestCard.jsx';

const CoreValuesTest = () => {

    // Redirect to home
    const handleButtonClick = () => {
        window.location.href = '/';
    };

    return (
        <div>
            {/* Heading */}
            <div className='py-20 w-9/12 mx-auto'>
                <h1 className="text-3xl font-semibold pb-5">Grow your confidence by aligning with yourself.</h1>
                <h1 className='text-lg'>Studies show that knowing your core values allows ~~~~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
            </div>
            
            {/* Test card */}
            <TestCard ></TestCard>

            {/* Find a mentor card */}
            <div className="my-24 w-7/12 mx-auto text-center">
                {/* Title */}
                <h1 className="pb-8 text-xl font-medium">How can I use my Core Values when finding a mentor?</h1>
            
                {/* Description */}
                <p className='text-lg font-light text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
                {/* Button */}
                <button onClick={handleButtonClick} className='my-11 py-2 px-4 text-lg bg-[#2C4193] rounded text-white hover:scale-105'>Find my mentor</button>
            </div>
        </div>
    )


}

export default CoreValuesTest