// Frontend/src/Components/Hero.jsx
import React from 'react';
import './Hero.css'; // Keep if you have additional custom styles

function Hero() {
    return (
        <header className="hero bg-cover bg-center flex items-center justify-center text-center relative">
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

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
                <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300">
                    Get Started
                </button> 
                */}
            </div>
        </header>
    );
}

export default Hero;