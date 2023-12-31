import React, { useState, useEffect } from 'react'
import MentorCard from './components/MentorCard.jsx'
import RoleSearch from './components/RoleSearch.jsx'
import IndustryFilter from './components/IndustryFilter.jsx';
import ValueFilter from './components/ValueFilter.jsx';
import AvailabilityFilter from './components/AvailabilityFilter.jsx';
import MultiFilter from './components/MultiFilter.jsx';
import { MentorData } from '../../data/GoogleDriveMentors.jsx'
import '../Home/Home.css'

/**
 * Home Component
 *
 * The main page of the application where users can find mentors. It integrates various
 * components to filter and search for mentors based on different criteria such as role, industry,
 * core values, availability, and more. It also displays mentors in a grid of cards.
 */
const Home = () => {
    const [flip, setFlip] = useState(0);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Used in opacity of background for dropdown

    const [mentorIndexes, setMentorIndexes] = useState([]); // Indexes of mentors being searched for

    const [roleSearchResults, setRoleSearchResults] = useState([]);
    const [industryFilterResults, setIndustryFilterResults] = useState([]);
    const [valueFilterResults, setValueFilterResults] = useState([]);
    const [availabilityFilterResults, setAvailabilityFilterResults] = useState([]);
    const [multiFilterResults, setMultiFilterResults] = useState([]);
    
    // Flips arrow on search filter
    const Flipping = (num)=>{
        if (num==flip){
        setFlip(0);
        }
        else{
        setFlip(num);
        }
    };

    /**
     * Combines the results from different filters to determine the final list of mentors to display.
     * 
     * @param {Array<Array<number>>} filters - An array of arrays, each containing the indexes of mentors
     *                                         filtered by different criteria.
     * @returns {Array<number>} - An array of mentor indexes after combining all filters.
     */
    useEffect(() => {
        const combineFilters = (filters) => {
            if (filters.every(filter => filter.length === 0)) {
                return MentorData.map((_, index) => index);
            }
            const activeFilters = filters.filter(filter => filter.length > 0);
            return activeFilters.reduce((accumulator, current) => 
                accumulator.filter(index => current.includes(index))
            );
        };

        const combinedIndexes = combineFilters([roleSearchResults, industryFilterResults, valueFilterResults, availabilityFilterResults, multiFilterResults]);
        // Include additional filter results in the combineFilters call as needed

        setMentorIndexes(combinedIndexes);
    }, [roleSearchResults, industryFilterResults, valueFilterResults, availabilityFilterResults, multiFilterResults]); 
    

    return (
        <div className='text-black flex flex-col items-center mb-[6rem] w-screen'>
            {/* Intro Section */}
            <div className='flex flex-col items-center w-[67.75rem]'>
                {/* Welcome Section */}
                <div className="flex flex-col text-[2.5rem] font-bold mt-[4.96rem] mb-[3.1875rem]">
                    <h1 className="text-[2.5rem] font-['Poppins'] mb-[0.75rem]">Welcome!</h1>
                    <h3 className='text-[1.875rem]'>Gain certainty and confidence in your career journey through the guidance and support of mentorship.</h3>
                </div>

                {/* Questions Section */}
                <div className='w-[67.75rem] grid grid-cols-2 gap-x-[1.25rem] text-[1.25rem]'>
                    <div className='border border-t-[1px] border-[#C7CBDA] rounded-[0.625rem] py-[2.5rem] px-[2.12rem]'>
                        <h3 className="text-[1.25rem] font-semibold mb-[3.75rem]">
                            What are Core Values?</h3>
                        <p className="text-[1.125rem]">
                            Core values are fundamental beliefs and priorities that guide a person's or organization's behavior. They can be thought of as an internal compass of principles that drive decisions and help to standout from others. Not only do they help you develop and achieve personal goals, they can help you with professional goals.</p>
                    </div>
                    <div className='border border-t-[1px] border-[#C7CBDA] rounded-[0.625rem] py-[2.5rem] px-[2.12rem]'>
                        <h3 className="text-[1.25rem] font-semibold mb-[1.81rem]">
                            How can I use Core Values when finding a mentor?</h3>
                        <p className="text-[1.125rem]">
                            By matching with a mentor that understands what matters most to you, they can provide advice in a way that could be more clear to you. Both you and the mentor can also experience more engagement and  reciprocal learning. Even if your mentor doesn’t match your core values, you can go into the session with an expectation of the mentorship dynamic.</p>
                    </div>  
                </div>

                {/* Take Test Section */}
                <div className='test flex flex-col items-center mt-[3.19rem] gap-6'>
                    <h3>Do you know your Core Values? Take a simple test to find out!</h3>
                    <a href="/CoreValueTest"><button className="bg-[#2C4193] text-white text-[0.9375rem] font-semibold rounded-[4px] w-40 h-11">Take my test</button></a>
                </div>
            </div>
            {/* End Intro Section */}

            {/* Filter Mentor Section */}
            <div className='mt-[7.5rem] mx-auto w-[68rem]'>
                <h2 className='text-[1.5rem] font-semibold text-left'>Find your mentor today!</h2>
                {/* Filtering Input Field */}
                <div className='flex  gap-x-[0.44rem] my-[2.19rem]'>

                    <RoleSearch setMentorIndexes={setRoleSearchResults} setIsDropdownOpen={setIsDropdownOpen} />
                    
                    <IndustryFilter setMentorIndexes={setIndustryFilterResults} setIsDropdownOpen={setIsDropdownOpen} />

                    <ValueFilter setMentorIndexes={setValueFilterResults} setIsDropdownOpen={setIsDropdownOpen} />

                    <AvailabilityFilter setMentorIndexes={setAvailabilityFilterResults} setIsDropdownOpen={setIsDropdownOpen} />

                    <MultiFilter setMentorIndexes={setMultiFilterResults} setIsDropdownOpen={setIsDropdownOpen} />
                    
                </div>
            </div>
            {/* End Filtering Mentor Section */}

            {/* Mentor Cards Section*/}
            {mentorIndexes.length > 0 ? (
                <div className={`flex flex-col items-center ${isDropdownOpen ? 'opacity-20' : ''} z-0`}>                    
                    {MentorData.length - 1 <= mentorIndexes.length ? (
                            // Featured Mentors Display
                            <>
                            <h2 className='text-[1.1875rem] font-semibold self-start pb-[1rem]'>Featured Mentors</h2>
                            <h3 className='text-[1rem] font-semibold self-start pb-[2.19rem]'>DESIGN</h3>
                            <div className='grid grid-cols-4 gap-x-[1.25rem]'>
                                {mentorIndexes.slice(0, 4).map((index) => <MentorCard key={index} id={index} />)}
                            </div>
                            <h3 className='text-[1rem] font-semibold self-start py-[2.19rem]'>PRODUCT</h3>
                            <div className='grid grid-cols-4 gap-x-[1.25rem]'>
                                {mentorIndexes.slice(4, 8).map((index) => <MentorCard key={index} id={index} />)}
                            </div>
                            <h3 className='text-[1rem] font-semibold self-start py-[2.19rem]'>DEVELOPER</h3>
                            <div className='grid grid-cols-4 gap-x-[1.25rem]'>
                                {mentorIndexes.slice(8, 12).map((index) => <MentorCard key={index} id={index} />)}
                            </div>
                            </>
                        ) : (
                            // Filtered Mentors Display
                            <div className='grid grid-cols-4 gap-x-[1.25rem] gap-y-[5.94rem]'>  
                                {mentorIndexes.slice(0, 16).map((index) => <MentorCard key={index} id={index} />)}
                            </div>
                        )}
                    
                </div>
            ) : (
                <p>No mentors found.</p>
            )}
            
            {/* End Mentor Card Section */}

        </div>
    )
}

export default Home
