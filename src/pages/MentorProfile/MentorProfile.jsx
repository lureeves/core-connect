import React, {useState, useEffect} from 'react'
import Marker from '../../assets/locationMarker.svg';
import Review from './components/Review.jsx'
import Calendar from './components/Calendar.jsx';
import RequestForm from './components/RequestForm.jsx';
import { MentorData } from '../../data/GoogleDriveMentors.jsx';
import { MentorAboutMes } from '../../data/GoogleDriveAboutMes.jsx';
import { FakeReviews } from '../../data/FakeAvailability.jsx';

/** */

const randomLocations = ["Chicago, IL","Los Angeles, CA","New York, NY","Dallas, TX","Minneapolis, MN"]
const MentorProfile = (props) => {
//   temp selector
  const [temp,setTemp] = useState(0);


  const [openForm, setOpenForm ] = useState(false);
  const [reviews, setReviews] = useState([1,2,3]);
  const randomUserUrl = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`;
  const name = MentorData[temp]?.first_name + " " + MentorData[temp]?.last_name;
  const help_with =MentorData[temp].help_with.split(",");
  const closeForm = () => setOpenForm(false)
  const openedForm = () => {
    setOpenForm(true);
    console.log("opening");

  }

  const tempProfileChanger = (num) =>{
    setTemp(num);
  }

  
  return (
    <>
        <div className='w-full flex justify-center'>
            <div className={`w-[90rem]  flex flex-col items-center justify-center mt-24 ml-[15rem] z-0 ${openForm?'filter blur-md':''} `}>
                {/* Profile Picture and header */}
                <h1>Test Buttons</h1>
                <div className='flex gap-3'>
                    <button onClick={()=>tempProfileChanger(0)} className='bg-slate-200 p-3 rounded-2xl'>1</button>
                    <button onClick={()=>tempProfileChanger(1)} className='bg-slate-200 p-3 rounded-2xl'>2</button>
                    <button onClick={()=>tempProfileChanger(2)} className='bg-slate-200 p-3 rounded-2xl'>3</button>
                    <button onClick={()=>tempProfileChanger(3)} className='bg-slate-200 p-3 rounded-2xl'>4</button>
                    <button onClick={()=>tempProfileChanger(4)} className='bg-slate-200 p-3 rounded-2xl'>5</button>
                </div>
                <div className='w-[90rem] flex gap-6'>
                    
                    <div>
                        <img className="w-48 rounded-md" src={randomUserUrl} alt="" />
                    </div>
                    <div className='flex flex-col justify-end gap-2'>
                        <h2 className='font-bold text-[1.5625rem] leading-none'>{name=="undefined undefined"? "Name": name}</h2>
                        <div className='flex gap-1 font-sans text-[1.3125rem]'>
                            <h3 className='font-semibold'>{MentorData[temp].role}</h3>
                            <h3>at</h3>
                            <h3 className='font-semibold'>{MentorData[temp].company}</h3>
                        </div>
                        
                        <div className='flex gap-1 '>
                            <img className='w-4' src={Marker} alt="" />
                            <p className='font-semibold '>{randomLocations[temp]}</p>
                        </div>
                        <div className='flex gap-[.625rem]'>
                            <p className='font-semibold text-[0.9375rem] bg-[#D7E0FF] py-[0.3125rem] px-[0.5rem] rounded-md uppercase'>
                                {MentorData[temp].core_value_1}
                            </p>
                            <p className='font-semibold text-[0.9375rem] bg-[#D7E0FF] py-[0.3125rem] px-[0.5rem] rounded-md uppercase'>
                                {MentorData[temp].core_value_2}
                            </p>
                            <p className='font-semibold text-[0.9375rem] bg-[#D7E0FF] py-[0.3125rem] px-[0.5rem] rounded-md uppercase'>
                                {MentorData[temp].core_value_3}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mid Section */}
                <div className='grid grid-cols-2 justify-center gap-[7rem] w-[90rem] mt-24'>
                    {/* Left column  */}
                    <div className='mr-20'>

                        {/* About me Section */}
                        <div className='flex flex-col w-[31.8125rem] gap-4 mb-10 p-3 px-5'>
                            <h3 className='font-bold'>About Me</h3>
                            <p>
                               {MentorAboutMes[temp]['About Me ']}
                            </p>
                        </div>
                        <div className='mb-10 flex flex-col border border-slate-200 p-3 px-5 rounded-md w-[33.25rem]'>
                            <div className='flex w-full justify-between font-bold mb-5 text-lg'>
                                <h3>Experience</h3>
                                <h3>{MentorData[temp].years_of_experience} Years</h3>
                            </div>
                            <div className='flex flex-col gap-2 mx-2'>
                                <div className='flex w-full justify-between m-2 '>
                                    <p className='font-semibold '>{MentorAboutMes[temp].experience_1}</p>
                                    <p className='font-semibold uppercase text-[0.8125rem]'>{MentorAboutMes[temp].period_1}</p>
                                </div>
                                <div className='flex w-full justify-between m-2'>
                                    <p className='font-semibold'>{MentorAboutMes[temp].experience_2}</p>
                                    <p className='font-semibold uppercase text-[0.8125rem]'>{MentorAboutMes[temp].period_2}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-[33.25rem] h-[8.375rem] gap-[1.69rem] border border-slate-200 py-[1.69rem] px-[1.44rem] rounded-md'>
                            <h3 className='font-bold text-lg'>What I can help with</h3>
                            <div className='flex mx-4 gap-[0.625rem] font-medium'>
                                {help_with.map((val)=>{
                                    return <div className='font-sans text-[0.9375rem] font-semibold'>{val}</div>
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column/ Calendar */}
                    <div className='flex flex-col gap-4 w-full '>
                        <h2 className='font-bold'>My Availability</h2>
                        <div className='flex w-fulljustify-start '>
                            <Calendar open={openForm} onOpen={openedForm}/>
                        </div>
                    </div>
                </div>

                {/* Reviews Bottom Section */}

                <div className='mt-10 w-[90rem] flex flex-col'>
                    <h1 className='font-bold mb-5 ml-3 text-lg w-full border-b pb-2 border-slate-200 flex gap-[0.625rem] items-center'>
                        Reviews 
                    <em className='bg-black text-white normal-case p-1 text-[0.75rem] rounded-full px-2 not-italic font-semibold w-[1.1875rem] h-[1.1875rem] flex justify-center items-center'>3</em>
                    </h1>
                    <div className='flex flex-wrap gap-[2.69rem]'>
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
                openForm && <RequestForm open={openForm} onClosed={closeForm} />
            }
            
        
    </>
  )
}

export default MentorProfile
