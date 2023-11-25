import React, {useState} from 'react'
import pfp from '../../assets/default_profile.jpg'
import Marker from '../../assets/locationMarker.svg';
import Review from './components/Review.jsx'
import Calendar from './components/Calendar.jsx';
import RequestForm from './components/RequestForm.jsx';
const MentorProfile = () => {
  const [openForm, setOpenForm ] = useState(false);

  return (
    <>
        
        <div className={`w-screen flex flex-col items-center mt-24 mx-24 bg-opacity-20 backdrop-sm`}>
            {/* Profile Picture and header */}
            <div className='w-10/12 flex gap-6'>
                <div>
                    <img className="w-48 rounded-md" src={pfp} alt="" />
                </div>
                <div className='flex flex-col justify-end gap-2'>
                    <h2 className='font-bold text-2xl leading-none'>Name</h2>
                    <h3 className='text-xl leading-none'>Work at Company</h3>
                    <div className='flex gap-1 '>
                        <img className='w-4' src={Marker} alt="" />
                        <p>City, State</p>
                    </div>
                    <div className='flex gap-1'>
                        <p className='font-semibold bg-[#D7E0FF] px-1 rounded-md uppercase'>
                            Value 1
                        </p>
                        <p className='font-semibold bg-[#D7E0FF] px-1 rounded-md uppercase'>
                            Value 2
                        </p>
                        <p className='font-semibold bg-[#D7E0FF] px-1 rounded-md uppercase'>
                            Value 3
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid Section */}
            <div className='grid grid-cols-2 justify-center gap-3 w-10/12 mt-24'>
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
                    <div className='flex flex-col gap-3 border border-slate-200 p-3 px-5 rounded-md'>
                        <h3 className='font-bold text-lg'>What I can help with</h3>
                        <div className='mx-4 font-medium'>
                            Things that I can help with
                        </div>
                    </div>
                </div>

                {/* Right Column/ Calendar */}
                <div className='flex flex-col gap-4 w-full '>
                    <h2 className='font-bold'>My Availability</h2>
                    <div className='flex w-fulljustify-start '>
                        <Calendar />
                    </div>
                </div>
            </div>

            {/* Reviews Bottom Section */}

            <div className='mt-10 w-10/12 flex flex-col'>
                <h1 className='font-bold mb-5 text-lg w-full border-b pb-2 border-slate-200'>Reviews #</h1>
                <div className='flex flex-wrap'>
                    <Review/>
                    <Review/>
                    <Review/>
                </div>
            
            </div>
        
        </div>
        <div>
            <RequestForm />
        </div>
    </>
  )
}

export default MentorProfile
