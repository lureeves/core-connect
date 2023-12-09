import React from 'react';
import TestCard from './components/TestCard.jsx';
import Left from '../../assets/LeftTest.png';
import Right from '../../assets/RightTest.png';

const CoreValuesTest = () => {
    // Redirect to home
    const handleButtonClick = () => {
        window.location.href = '/';
    };

    return (
        <div>
            {/* Heading */}
            <div className='py-20 w-9/12 mx-auto m-0 p-0'>
                <h1 className="text-[30px] font-semibold pb-5">Grow your confidence by aligning with yourself.</h1>
                <h1 className='text-lg '>Focusing on your values reminds you of what’s really important and puts the stressors like uncertainty and overwhelm that lead to issues like imposter syndrome and employee dissatisfaction into perspective. Research studies have shown that those who think about their highest values before a stressful event actually experience less stress and show a substantial decrease in the stress hormone, cortisol, compared to control groups.</h1>
            </div>
            
            {/* Test card */}
            <TestCard ></TestCard>

            {/* Find a mentor card */}
            <div className="my-24 w-7/12 mx-auto text-center">
                {/* Title */}
                <h1 className="pb-8 text-[1.75rem] font-bold">Ways to use Core Values when finding a mentor</h1>
            
                {/* Description */}
                <div className='flex justify-center gap-[1.25rem]'>
                    <div className='flex flex-col  px-[2.87rem] py-[2.12rem] justify-between items-center border border-[#C7CBDA] rounded-[0.625rem] w-[33.25rem] h-[31.44rem]'>
                        <h2 className='font-semibold text-center text-[1.25rem]'>Sharing values with your mentor</h2>
                        <div>
                            <img className='w-[8.68rem] h-[8.68rem] my-[1.38rem]' src={Left} alt="" />
                        </div>
                        <p className='w-[27.5rem] text-left text-[1.125rem]'>A mentor that understands what matters most to you could provide more suitable guidance than a mentor matched based on professional background alone. Most of our mentees have reported that working with those that share aligned core values have helped increase their sense of belonging, personal growth, and motivation! We encourage you to find mentors that share similar values as you for a smoother connection.</p>
                    </div>
                    <div className='flex flex-col  px-[2.87rem] py-[2.12rem] pb-[2.56rem] justify-between items-center border border-[#C7CBDA] rounded-[0.625rem] w-[33.25rem] h-[31.44rem]'>
                        <h2 className='font-semibold text-center text-[1.25rem]'>Mentor with differing values</h2>
                        <div>
                            <img className='w-[8.68rem] h-[8.68rem]' src={Right} alt="" />
                        </div>
                        <p className='w-[27.5rem] text-left text-[1.125rem]'>A mentor that has different values from you could provide new perspectives that you may not have thought of before. Some of our mentees reported that they can grow professionally by learning new ways to view a situation they are in. If you are looking for a new approach to a career-related concern, we encourage you to find mentors that have differing values from you.</p>

                    </div>
                </div>
            
                {/* Button */}
                <button onClick={handleButtonClick} className='my-11 py-2 px-4 text-lg bg-[#2C4193] rounded text-white hover:scale-105'>Find my mentor</button>
            </div>
        </div>
    )
}

export default CoreValuesTest