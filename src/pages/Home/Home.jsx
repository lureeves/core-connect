import React from 'react'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className='text-black mx-44 mt-24 flex flex-col items-center '>
      <div className='flex flex-col items-center '>
            {/* Welcome Section */}
            <div className='welcome flex flex-col mb-16'>
                <h1>Welcome!</h1>
                <h3>Find yourself & mentors that can guide you towards your goal.</h3>
            </div>

            {/* Questions Section */}
            <div className='question-section flex gap-3'>
                <div className='question'>
                    <h3>What are Core Values?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='question'>
                    <h3>How can I use Core Values when finding a mentor?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            {/* Take Test Section */}
            <div className='test flex flex-col items-center'>
                <h3>Do you know your Core Values? Take a simple test to find out!</h3>
                <button>Take My Test</button>
            </div>
      </div>
     

    </div>
  )
}

export default Home
