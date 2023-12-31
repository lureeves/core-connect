import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Marker from '../../assets/locationMarker.svg';
import Review from './components/Review.jsx'
import Calendar from './components/Calendar.jsx';
import RequestForm from './components/RequestForm.jsx';
import linkedIn from '../../assets/linkedIn.svg';
import website from '../../assets/website.svg';
import { MentorData } from '../../data/GoogleDriveMentors.jsx';
import { MentorAboutMes } from '../../data/GoogleDriveAboutMes.jsx';
import { FakeReviews } from '../../data/FakeAvailability.jsx';

/**
 * MentorProfile Component
 * 
 * A React component that displays the profile of a mentor. This component is part of a larger application
 * focused on connecting mentees with mentors. It includes detailed information about a mentor, such as their
 * personal and professional details, availability, and reviews.
 *
 * Props:
 *   - None
 *
 * State:
 *   - openForm (boolean): Controls the visibility of the request form modal.
 *   - reviews (Array): Stores the list of review identifiers.
 *
 * External Data:
 *   - MentorData (Object): Contains information about mentors fetched from an external source.
 *   - MentorAboutMes (Object): Contains detailed 'About Me' information for each mentor.
 *   - FakeReviews (Array): A mock array of reviews for demonstration purposes.
 *
 * Child Components:
 *   - Review: Displays individual reviews.
 *   - Calendar: Shows the mentor's availability calendar.
 *   - RequestForm: A form to request a meeting with the mentor.
 *
 * Features:
 *   - Dynamic profile information rendering based on the mentor's ID retrieved from URL parameters.
 *   - Display of a mentor's personal information, experience, values, and what they can help with.
 *   - Integration of LinkedIn and personal website links.
 *   - Availability calendar with functionality to open a request form.
 *   - Display of a limited number of reviews with a summary count.
 *   - Responsive layout for various screen sizes.
 *
 * Usage:
 *   <MentorProfile />
 */
const randomLocations = ["Chicago, IL","Los Angeles, CA","New York, NY","Dallas, TX","Minneapolis, MN", "Honolulu, HI", "Denver, CO", "Tuscon, AZ"]
const MentorProfile = (props) => {
    const { id } =useParams();
    const [openForm, setOpenForm ] = useState(false);
    const [reviews, setReviews] = useState([1,2,3]);
    const name = MentorData[id]?.first_name + " " + MentorData[id]?.last_name;
    const help_with =MentorData[id].help_with.split(",");
    const closeForm = () => setOpenForm(false)
    const openedForm = () => {
    setOpenForm(true);
    }
  
    const getBackgroundColor = (index) => {
        const colors = ["6BD4B1", "B1A6D4", "D4B16B", "D46BB1", "B1D46B", "6BB1D4"];
        return colors[index % colors.length];
    };

    const profilePicture = `https://ui-avatars.com/api/?background=${getBackgroundColor(id)}&size=128&name=${encodeURIComponent(name)}`;

    return (
        <>
        <div className='w-full flex justify-center'>
            <div className={`w-[90rem]  flex flex-col items-center justify-center mt-24 ml-[15rem] z-0 ${openForm?'opacity-30':''} `}>
                {/* Profile Picture and header */}
                
                <div className='w-[90rem] flex gap-6'>
                    
                    <div>
                        <img className="w-48 rounded-md" src={profilePicture} alt="" />
                    </div>
                    <div className='flex flex-col justify-end gap-2'>
                        <h2 className='font-bold text-[1.5625rem] leading-none'>{name=="undefined undefined"? "Name": name}</h2>
                        <div className='flex gap-1 font-sans text-[1.3125rem]'>
                            <h3 className='font-semibold'>{MentorData[id].role? MentorData[id].role: "Role"}</h3>
                            <h3>at</h3>
                            <h3 className='font-semibold'>{MentorData[id].company? MentorData[id].company: "Company"}</h3>
                        </div>
                        
                        <div className='flex gap-1 '>
                            <img className='w-4' src={Marker} alt="" />
                            <p className='font-semibold '>{randomLocations[id%randomLocations.length]}</p>
                        </div>
                        <div className='flex gap-[.625rem]'>
                            <p className='font-semibold text-[0.9375rem] bg-[#D7E0FF] py-[0.3125rem] px-[0.5rem] rounded-md uppercase'>
                                {MentorData[id].core_value_1? MentorData[id].core_value_1: "Compassionate"}
                            </p>
                            <p className='font-semibold text-[0.9375rem] bg-[#D7E0FF] py-[0.3125rem] px-[0.5rem] rounded-md uppercase'>
                                {MentorData[id].core_value_2? MentorData[id].core_value_2: "Respect"}
                            </p>
                            <p className='font-semibold text-[0.9375rem] bg-[#D7E0FF] py-[0.3125rem] px-[0.5rem] rounded-md uppercase'>
                                {MentorData[id].core_value_3? MentorData[id].core_value_3: "Responsible"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mid Section */}
                <div className='grid grid-cols-2 justify-center gap-[7rem] w-[90rem] mt-24'>
                    {/* Left column  */}
                    <div className=''>

                        {/* About me Section */}
                        <div className='flex flex-col w-[33.25rem]  mb-10 '>
                            <div className='flex flex-col items-end w-full '>
                                <div className='flex w-[33.25rem] justify-center border-b pb-1 border-b-[#C7CBDA] mb-[1.25rem]'>
                                    <div className='flex w-[31.8125rem] justify-between '>
                                        <h3 className='font-bold text-[1.0625rem] ml-[10px]'>About Me</h3>
                                        <div className='flex gap-2'>
                                            <a href="https://www.linkedin.com/" target='_blank'><img src={linkedIn} alt="linked in link" /></a>
                                            <a href="https://www.joincolab.io/" target='_blank'><img src={website} alt="website link" /></a>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <p className='w-[31.8125rem]'>
                                    {MentorAboutMes[id]? MentorAboutMes[id]['About Me ']:"This category is not filled out yet"}
                                </p>
                            </div>
                            
                        </div>
                        {/* Experience Section */}
                        <div className='mb-10 flex flex-col text-black border  border-[#C7CBDA] py-[1.69rem] px-[0.81rem] rounded-[0.625rem] w-[33.25rem]'>
                            <div className='w-[31.625rem]'>
                                <div className='flex w-full justify-between font-bold mb-[1.69rem] '>
                                    <h3 className='text-[1.0625rem] ml-[10px]'>Experience</h3>
                                    <h3 className='text-[1rem] mr-[10px]'>{MentorData[id]? MentorData[id].years_of_experience: "0"} Years</h3>
                                </div>
                                <div className='flex flex-col '>
                                    <div className='flex w-full justify-between items-center  bg-[#F6F6F6] py-[0.75rem] px-[1.5rem] rounded-[0.4375rem]'>
                                        <p className='font-semibold w-[20.125rem] '>{MentorAboutMes[id]?MentorAboutMes[id].experience_1: "Nothing"}</p>
                                        <p className='font-semibold uppercase text-[0.8125rem]'>{MentorAboutMes[id]?MentorAboutMes[id].period_1: "Mon XXXX - Mon XXXX"}</p>
                                    </div>
                                    <div className='flex w-full justify-between py-[0.75rem] px-[1.5rem] rounded-[0.4375rem]'>
                                        <p className='font-semibold w-[20.125rem] overflow-ellipsis'>{MentorAboutMes[id]?MentorAboutMes[id].experience_2: "Nothing"}</p>
                                        <p className='font-semibold uppercase text-[0.8125rem]'>{MentorAboutMes[id]?MentorAboutMes[id].period_2: "Mon XXXX - Mon XXXX"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Help With Section */}
                        <div className='flex flex-col w-[33.25rem] h-[8.375rem]  border border-[#C7CBDA] py-[1.69rem] px-[1.44rem] rounded-[0.625rem]'>
                            <h3 className='font-bold text-[1.065rem] mb-[1.69rem]'>What I can help with</h3>
                            <div className='flex gap-[0.5rem]'>
                            {help_with.filter(val => val.trim() !== "").map((val, index)=>{
                                return <div key={index} 
                                            className='font-sans w-fit text-[0.9375rem] font-semibold bg-[#F3F3F3] rounded-[0.25rem] py-[0.3125rem] px-[0.5rem] capitalize'>
                                                {val}
                                        </div>
                            })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column / Calendar */}
                    <div className='flex flex-col gap-4 w-full '>
                        <h2 className='font-bold'>My Availability</h2>
                        <div className='flex w-fulljustify-start '>
                            <Calendar open={openForm} onOpen={openedForm} id={id}/>
                        </div>
                    </div>
                </div>

                {/* Reviews Bottom Section */}
                <div className='mt-10 w-[90rem] flex flex-col'>
                    <div className='w-[75rem] border-b  border-[#C7CBDA]'>
                        <h1 className='font-bold mb-5 ml-5 text-[1.0625rem]  flex gap-[0.625rem] items-center'>
                            Reviews 
                        <em className='bg-black text-white normal-case text-[0.75rem] rounded-full px-2 not-italic font-semibold w-[1.1875rem] h-[1.1875rem] flex justify-center items-center'>3</em>
                        </h1>
                    </div>
                    
                    <div className='flex flex-wrap gap-[2.69rem] mb-[22.5rem]'>
                        <Review 
                        name={FakeReviews[1].name} 
                        date={FakeReviews[1].date}
                        review={FakeReviews[1].review}
                        />
                        <Review 
                        name={FakeReviews[2].name} 
                        date={FakeReviews[2].date}
                        review={FakeReviews[2].review}
                        />
                        <Review 
                        name={FakeReviews[3].name} 
                        date={FakeReviews[3].date}
                        review={FakeReviews[3].review}
                        />
                    </div>
                </div>
            </div>
        </div>
        {/* Request form section */}
        {
            openForm && <RequestForm open={openForm} onClosed={closeForm} id={id} />
        }
        </>
        )
}

export default MentorProfile