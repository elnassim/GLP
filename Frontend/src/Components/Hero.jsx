import React from 'react';
import './Hero.css';

function Hero() {
    return (
        // The main hero section of the page
        <header className="hero">
            {/* Overlay to darken the background and enhance text visibility */}
            <div className="overlay"></div>

            {/* The main content of the hero section */}
            <div className="content">
                {/* Title of the hero section */}
                <h1 className="title">
                    Welcome to <span className="highlight">University</span>
                </h1>
                {/* Subtitle providing additional context */}
                <p className="subtitle">Empowering you with information, anytime, anywhere.</p>
                {/* Optional: A button for call-to-action, commented out for now */}
                {/* 
                <button className="cta-button">Get Started</button>
                */}
            </div>
        </header>
    );
}

export default Hero;
