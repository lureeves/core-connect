import React, {useState} from 'react'
import pfp from '../../assets/default_profile.jpg'
import Marker from '../../assets/locationMarker.svg';
import Review from './components/Review.jsx'
import Calendar from './components/Calendar.jsx';
import RequestForm from './components/RequestForm.jsx';
import { MentorData } from '../../data/GoogleDriveMentors.jsx';

/** */

const randomLocations = ["Chicago, IL","Los Angeles, CA","New York, NY","Dallas, TX","Minneapolis, MN"]
const MentorProfile = (props) => {
//   temp selector
  const [temp,setTemp] = useState(0);


  const [openForm, setOpenForm ] = useState(false);
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
            <div className={`w-fit flex flex-col items-center mt-24 mx-24 z-0 ${openForm?'filter blur-md':''} `}>
                {/* Profile Picture and header */}
                <h1>Test Buttons</h1>
                <div className='flex gap-3'>
                    <button onClick={()=>tempProfileChanger(0)} className='bg-slate-200 p-3 rounded-2xl'>1</button>
                    <button onClick={()=>tempProfileChanger(1)} className='bg-slate-200 p-3 rounded-2xl'>2</button>
                    <button onClick={()=>tempProfileChanger(2)} className='bg-slate-200 p-3 rounded-2xl'>3</button>
                    <button onClick={()=>tempProfileChanger(3)} className='bg-slate-200 p-3 rounded-2xl'>4</button>
                    <button onClick={()=>tempProfileChanger(4)} className='bg-slate-200 p-3 rounded-2xl'>5</button>
                </div>
                <div className='w-9/12 flex gap-6'>
                    
                    <div>
                        <img className="w-48 rounded-md" src={pfp} alt="" />
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
                <div className='grid grid-cols-2 justify-center gap-3 w-9/12 mt-24'>
                    {/* Left column  */}
                    <div className='mr-20'>
                        <div className='flex flex-col gap-4 mb-10 p-3 px-5'>
                            <h3 className='font-bold'>About Me</h3>
                            <p>
                                Life Background- Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Obcaecati pariatur voluptates suscipit, repellat ex vitae hic? 
                                Aliquam quibusdam iusto, at sunt odit quo architecto nemo!
                            </p>
                            <p>
                                What brought them to mentoring: Lorem ipsum dolor, sit amet 
                                consectetur adipisicing elit. Libero placeat dolores suscipit
                                sint sequi debitis, pariatur blanditiis, eum tempore quaerat 
                                expedita veritatis dicta, nihil autem.
                            </p>
                            <p>
                                Working Style-
                            </p>
                            <p>
                                Interests-
                            </p>
                        </div>
                        <div className='mb-10 flex flex-col border border-slate-200 p-3 px-5 rounded-md'>
                            <div className='flex w-full justify-between font-bold mb-5 text-lg'>
                                <h3>Experience</h3>
                                <h3>14 Years</h3>
                            </div>
                            <div className='flex flex-col gap-2 mx-2'>
                                <div className='flex w-full justify-between m-2 '>
                                    <p className='font-semibold'>Working at Company</p>
                                    <p className='font-medium'>Month XXXX - PRESENT</p>
                                </div>
                                <div className='flex w-full justify-between m-2'>
                                    <p className='font-semibold'>Working at Company</p>
                                    <p className='font-medium'>Month XXXX- Mon XXXX</p>
                                </div>
                                <div className='flex w-full justify-between m-2'>
                                    <p className='font-semibold'>Working at Company</p>
                                    <p className='font-medium'>Month XXXX- Mon XXXX</p>
                                </div>
                                <div className='flex w-full justify-between m-2'>
                                    <p className='font-semibold'>Working at Company</p>
                                    <p className='font-medium'>Month XXXX- Mon XXXX</p>
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

                <div className='mt-10 w-9/12 flex flex-col'>
                    <h1 className='font-bold mb-5 text-lg w-full border-b pb-2 border-slate-200'>Reviews #</h1>
                    <div className='flex flex-wrap'>
                        <Review/>
                        <Review/>
                        <Review/>
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
