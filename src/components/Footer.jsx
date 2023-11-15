import React from 'react';
import Logo from '../assets/Logo.png';
import '../styles/global.css';

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content mt-10">
        <div className="flex justify-between py-4">
            {/* Left side container */}
            <div className="left-content">
                <div className='flex logo justify-center items-center'>
                    <a href="/" className='flex gap-2'>
                        <img className="logo-img" src={Logo} alt="Core Connect Logo" />
                        <h2>Core Connect</h2>
                    </a> 
                </div>
            </div>

            {/* Right side container */}
            <div className="right-content">
                <nav>
                    <ul className="flex">
                        <li><a href="/contact" className="footer-option">Contact Us</a></li>
                        <li><a href="/privacy-policy" className="footer-option">Privacy policy</a></li>
                        <li><a href="/terms-of-use" className="footer-option">Terms of use</a></li>
                        <li><a href="/career" className="footer-option">Career</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        {/* Rights reserved line */}
        <div className="footer-copyright pt-0 pb-4 text-xs text-center">
            <p>© 2023 Core Connect Copyright</p>
        </div>
    </footer>
  );
}

export default Footer;
