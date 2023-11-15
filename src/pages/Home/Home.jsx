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
    <div className='text-black  mt-24 flex flex-col items-center w-screen '>
      {/* Top Section */}
      <div className='flex flex-col items-center w-9/12'>
            {/* Welcome Section */}
            <div className='welcome flex flex-col mb-16 w-9/12'>
                <h1>Welcome!</h1>
                <h3>Find yourself & mentors that can guide you towards your goal.</h3>
            </div>

            {/* Questions Section */}
            <div className='question-section mb-20 flex gap-3'>
                <div className='question h-48'>
                    <h3>What are Core Values?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='question h-48'>
                    <h3>How can I use Core Values when finding a mentor?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            {/* Take Test Section */}
            <div className='test flex flex-col items-center'>
                <h3>Do you know your Core Values? Take a simple test to find out!</h3>
                <a href="/CoreValueTest"><button>Take My Test</button></a>
            </div>
      </div>
      {/* Filter Mentor Section */}
      <div className='mentor-section flex flex-col items-center  mb-10'>
        {/* Search Buttons and title */}
        <div className='flex flex-col items-start gap-6 '>
          <div><h2 className='text-2xl font-semibold leading-normal'>Find Your Mentor today!</h2></div>
          {/* Search Inputs */}
          <div className='search-input flex gap-2'>

            <div className='filter-container flex justify-between items-center w-56 h-10 py-3 pr-6 pl-7 gap-3'
              onClick={()=>Flipping(1)}
            >
              <img src={MagGlass} alt="" />
              <input className="w-full p-1" type="text" placeholder='Search Role'/>
            </div>

            <div className='filter-container flex justify-between items-center w-56 h-10 py-3 pr-6 pl-7 gap-3'
              onClick={()=>Flipping(2)}
            >
              <button className='filters-dropdown'>Industry</button>
              <img src={arrow} alt="" className={flip==2?``:`rotate-180`}  />
            </div>

            <div className='filter-container flex justify-between items-center w-56 h-10 py-3 pr-6 pl-7 gap-3'
              onClick={()=>Flipping(3)}
            >
              <button className='filters-dropdown'>Core Values</button>
              <img src={arrow} alt="" className={flip==3?``:`rotate-180`} />
            </div>

            <div className='filter-container flex justify-between items-center w-56 h-10 py-3 pr-6 pl-7 gap-3'
              onClick={()=>Flipping(4)}
            >
              <button className='filters-dropdown'>Availability</button>
              <img src={arrow} alt="" className={flip==4?``:`rotate-180`} />
            </div>

            <div className='filter-container filter-box flex justify-center items-center w-32 h-10 py-3 pr-6 pl-7 gap-3'
              onClick={()=>Flipping(5)}
            >
              <img src={filter} alt="" />
              <button className='filters-dropdown'>Filters</button>
            </div>

          </div>

        </div>
      </div>

      {/* Mentor Cards Section*/}
      <div className='flex flex-col items-center gap-4 '>
        <h2 className='text-lg font-semibold w-full'>Featuring New Mentors</h2>
        {/* Design mentors */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-base font-semibold' >DESIGN</h2>
          <div className='grid grid-cols-4 gap-5 '>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
           
          </div>
        </div>

        {/* PM Mentors */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-base font-semibold'>PRODUCT MANAGEMENT</h2>
          <div className='grid grid-cols-4 gap-5 '>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
          </div>
        </div>

        {/* Engineering Mentors */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-base font-semibold'> ENGINEERING</h2>
          <div className='grid grid-cols-4 gap-5 '>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
