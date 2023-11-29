import React, {useState} from 'react'
import MagGlass from '../../assets/vector.svg'
import arrow from '../../assets/arrow.svg'
import filter from '../../assets/filter-icon.svg'
import MentorCard from './components/MentorCard.jsx'
import '../Home/Home.css'

const Home = () => {
  const [flip, setFlip] = useState(0);

  const Flipping = (num)=>{
     if (num==flip){
      setFlip(0);
     }
     else{
      setFlip(num);
     }
  }
  return (
    <div className='text-black flex flex-col items-center mb-[6rem] w-screen'>
        {/* Intro Section */}
        <div className='flex flex-col items-center w-9/12'>
            {/* Welcome Section */}
            <div className="flex flex-col text-[2.5rem] font-bold mt-[4.96rem] mb-[3.1875rem]">
                <h1 className="text-[2.5rem] font-['Poppins'] mb-[0.75rem]">Welcome!</h1>
                <h3 className='text-[1.875rem]'>Gain certainty and confidence in your career journey through the guidance and support of mentorship.</h3>
            </div>

            {/* Questions Section */}
            <div className='flex'>
                <div className='border border-t-[1px] border-[#C7CBDA] rounded-[0.625rem] py-[2.5rem] px-[2.12rem] mr-[1.25rem]'>
                    <h3 className="text-[1.25rem] font-semibold mb-[3.75rem]">What are Core Values?</h3>
                    <p className="text-[1.125rem]">Core values are fundamental beliefs and priorities that guide a person's or organization's behavior. They can be thought of as an internal compass of principles that drive decisions and help to standout from others. Not only do they help you develop and achieve personal goals, they can help you with professional goals.</p>
                </div>
                <div className='border border-t-[1px] border-[#C7CBDA] rounded-[0.625rem] py-[2.5rem] px-[2.12rem]'>
                    <h3 className="text-[1.25rem] font-semibold mb-[3.75rem]">How can I use Core Values when finding a mentor?</h3>
                    <p className="text-[1.125rem]">By matching with a mentor that understands what matters most to you, they can provide advice in a way that could be more clear to you. Both you and the mentor can also experience more engagement and  reciprocal learning. Even if your mentor doesn’t match your core values, you can go into the session with an expectation of the mentorship dynamic.</p>
                </div>  
            </div>

            {/* Take Test Section */}
            <div className='test flex flex-col items-center mt-[3.19rem] gap-6'>
                <h3>Do you know your Core Values? Take a simple test to find out!</h3>
                <a href="/CoreValueTest"><button className="bg-[#2C4193] text-white text-[0.9375rem] font-semibold rounded-[4px] w-40 h-11">Take My Test</button></a>
            </div>
        </div>
        {/* End Intro Section */}

        {/* Filter Mentor Section */}
        <div className='flex flex-col items-center mt-[7.5rem] w-9/12'>
            {/* Search Buttons and Title */}
            <div className='flex flex-col items-start '>
                <h2 className='text-[1.5rem] font-semibold '>Find your mentor today!</h2>

                {/* Filtering Input Field */}
                <div className='search-input flex gap-x-[0.44rem] my-[2.19rem]'>

                    <div className='filter-container flex justify-between items-center w-[16rem] h-10 py-3 pr-6 pl-7 gap-3'
                        onClick={()=>Flipping(1)}
                        >
                        <img src={MagGlass} alt="" />
                        <input className="w-full p-1" type="text" placeholder='Search Role'/>
                    </div>

                    <div className='filter-container flex justify-between items-center w-[13.5rem] h-10 py-3 pr-6 pl-7 gap-3'
                        onClick={()=>Flipping(2)}
                        >
                        <button className='filters-dropdown'>Industry</button>
                        <img src={arrow} alt="" className={flip==2?``:`rotate-180`}  />
                    </div>

                    <div className='filter-container flex justify-between items-center w-[12.25rem] h-10 py-3 pr-6 pl-7 gap-3'
                        onClick={()=>Flipping(3)}
                        >
                        <button className='filters-dropdown'>Core Values</button>
                        <img src={arrow} alt="" className={flip==3?``:`rotate-180`} />
                    </div>

                    <div className='filter-container flex justify-between items-center w-[15.5rem] h-10 py-3 pr-6 pl-7 gap-3'
                        onClick={()=>Flipping(4)}
                        >
                        <button className='filters-dropdown'>Availability</button>
                        <img src={arrow} alt="" className={flip==4?``:`rotate-180`} />
                    </div>

                    <div className='filter-container filter-box flex justify-center items-center w-[8.5rem] h-10 py-3 pr-6 pl-7 gap-3'
                        onClick={()=>Flipping(5)}
                        >
                        <img src={filter} alt="" />
                        <button className='filters-dropdown'>Filters</button>
                    </div>
                </div>
            </div>
        </div>
        {/* End Filtering Mentor Section */}

        {/* Mentor Cards Section*/}
        <div className='flex flex-col items-center gap-4'>
            <h2 className='text-[1.1875rem] font-semibold self-start'>Featuring New Mentors</h2>
            {/* Design mentors */}
            <div className='flex flex-col gap-4'>
                <h2 className='text-[base] font-semibold'></h2>
                <div className='grid grid-cols-4 gap-x-[1.25rem] gap-y-[5.94rem]'>
                    <MentorCard id={0}/>
                    <MentorCard id={1}/>
                    <MentorCard id={2}/>
                    <MentorCard id={3}/>
                    <MentorCard id={4}/>
                    <MentorCard id={5}/>
                    <MentorCard id={6}/>
                    <MentorCard id={7}/>
                    <MentorCard id={8}/>
                    <MentorCard id={9}/>
                    <MentorCard id={10}/>
                    <MentorCard id={11}/>
                </div>
            </div>
        </div>
        {/* End Mentor Card Section */}

    </div>
  )
}

export default Home
