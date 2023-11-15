import React from 'react'
import Logo from '../assets/Logo.png'
import pfp from '../assets/default_profile.jpg'
import '../styles/global.css'
const Header = () => {
  return (
    <nav className='navbar flex w-screen justify-between p-5 items-center '>
        {/*Logo Container */}
        <div className='flex logo justify-center items-center'>
            <a href="/" className='flex gap-2'>
                <img className="logo-img" src={Logo} alt="" />
                <h2>Core Connect</h2>
            </a> 
            
        </div>

        {/*Page Tags*/}
        <div className='flex justify-around items-center nav-links mr-4'>
            <a href="/CoreValueTest">Core Value Test</a>
            <a href="/">Find My Mentor</a>
            <div className='flex gap-2'>
                <img className="pfp" src={pfp} alt="" />
                <h2>Profile</h2>
            </div>
        </div>
    </nav>
  )
}

export default Header
