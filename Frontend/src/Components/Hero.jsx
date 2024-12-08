// Hero.jsx
import React from 'react';
import Button from './Button';
import './Hero.css';

function Hero() {
    return (
        <header className="hero">
            <h1>Welcome to Our Website</h1>
            <p>Your journey to excellence starts here.</p>
            <Button>Get Started</Button>
        </header>
    );
}

export default Hero;