// Frontend/src/Components/LandingPage.jsx
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import RoleSelector from './RoleSelector';
import './LandingPage.css';
import backgroundLanding from '../assets/background-landing.jpg';

function LandingPage() {
    return (
        <div
            className="landing-page"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundLanding})`,
            }}
        >
            <Navbar />
            <Hero />
            <div className="role-selector-container">
                <RoleSelector />
            </div>
            
        </div>
    );
}

export default LandingPage;