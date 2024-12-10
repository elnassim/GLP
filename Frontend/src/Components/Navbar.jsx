// Frontend/src/Components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css'; // Import the custom CSS

function Navbar() {
    return (
        <header className="navbar">
            {/* Main navbar */}
            <nav className="navbar-container">
                <div className="navbar-content">
                    {/* Logo */}
                    <a href="/" className="logo">
                        <img src={logo} alt="Logo" className="logo-image" />
                    </a>

                    {/* Navigation links */}
                    <ul className="nav-links">
                        <li>
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Contact Us</a>
                        </li>
                    </ul>

                    {/* Mobile menu button */}
                    <button
                        className="mobile-menu-button"
                        aria-label="Open Menu"
                        onClick={() => {/* Add your mobile menu toggle logic here */}}
                    >
                        <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;