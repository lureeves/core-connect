import React from 'react';
import { CoreConnectLogo } from '../assets';
import '../styles/global.css';

const Footer = () => {
  return (
    <footer className="bg-[#F3F5FE] text-base-content mt-10">
        <div className="flex justify-between py-4">
            {/* Left side container */}
                <div className="flex logo justify-center items-center ml-3 whitespace-nowrap">
                    <a href="/" className='flex gap-2'>
                        <img className="logo-img" src={CoreConnectLogo} alt="Core Connect Logo" />
                        <h2 className="font-['Poppins'] font-[24px] tracking-[-1.08] text-[#1B2033]">Core Connect</h2>
                    </a> 
                </div>

            {/* Right side container */}
            <div className="right-content text-[0.875rem]">
                <nav>
                    <ul className="flex gap-x-[3.75rem] pr-[3.75rem]">
                        <li><a href="/ContactUs" className="footer-option">Contact Us</a></li>
                        <li><a href="" className="footer-option">Privacy policy</a></li>
                        <li><a href="" className="footer-option">Terms of use</a></li>
                        <li><a href="" className="footer-option">Career</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        {/* Rights reserved line */}
        <div className="footer-copyright pt-0 pb-4 text-[0.75rem] text-center">
            <p>© 2023 Core Connect Copyright</p>
        </div>
    </footer>
  );
}

export default Footer;
