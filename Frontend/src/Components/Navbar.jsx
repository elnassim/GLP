import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <header className="bg-blue-900 text-white">
            {/* Main navbar */}
            <nav className="w-full px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2">
                        <img src={logo} className="h-16" alt="Logo" />
                    </a>

                    {/* Navigation links */}
                    <ul className="hidden md:flex space-x-8 ml-2"> {/* Increased space-x-8 */}
                        <li>
                            <a href="#" className="hover:text-orange-400">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-400">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-400">Contact Us</a>
                        </li>
                    </ul>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 text-white hover:bg-blue-700"
                        aria-label="Open Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
