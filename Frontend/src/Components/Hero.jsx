// Frontend/src/Components/Hero.jsx
import React from 'react';
import './Hero.css';

function Hero() {
    return (
        // The main hero section of the page
        <header className="hero">
            {/* Overlay to darken the background and enhance text visibility */}
            <div className="overlay"></div>

            {/* Content */}
            <div className="relative z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Welcome to University
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
                Empowering you with information, anytime, anywhere.
                </p>
                {/* Optional: Add a Call-to-Action Button */}
                {/* 
                <button className="cta-button">Get Started</button>
                */}
            </div>
        </header>
    );
}

export default Hero;
