import React from 'react'
import Logo from '/public/logo.png';
import pfp from '../assets/SeanPfp.png'
import '../styles/global.css'
const Header = () => {
  return (
    <nav className='navbar flex w-full p-5 items-center '>
        {/*Logo Container */}
        <div className='flex logo w-6/12 justify-start items-center'>
            <a href="/" className='flex gap-2'>
                <img className="logo-img" src={Logo} alt="" />
                <h2 className="font-['Poppins'] font-[24px] tracking-[-1.08] text-[#1B2033]">Core Connect</h2>
            </a>    
        </div>

        {/*Page Tags*/}
        <div className='flex justify-end w-6/12 items-center nav-links mr-8'>
            <a href="/CoreValueTest">Core Value Test</a>
            <a href="/">Find My Mentor</a>
            <a href="/MentorProfile">
                <div className='flex gap-2'>
                    <img className="pfp" src={pfp} alt="" />
                    <h2>Sean</h2>
                </div>
            </a>
            
        </div>
    </nav>
  )
}

export default Header
