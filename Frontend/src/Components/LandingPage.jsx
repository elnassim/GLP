import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import RoleSelector from './RoleSelector';
import './LandingPage.css';
import backgroundLanding from '../assets/background-landing.jpg';

function LandingPage() {
    return (
        <div
            className="landing-page flex flex-col min-h-screen w-full bg-cover bg-center relative"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundLanding})`,
            }}
        >
            <Navbar />
            <Hero />
            <div className="flex-grow flex items-center justify-center">
                <RoleSelector />
            </div>
        </div>
    );
}

export default LandingPage;