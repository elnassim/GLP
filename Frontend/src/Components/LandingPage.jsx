import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import RoleSelector from './RoleSelector';
import './LandingPage.css';
import backgroundLanding from '../assets/background-landing.jpg';

function LandingPage() {
    const navigate = useNavigate(); // Hook for navigation

    const handleAdminClick = () => {
        navigate('/admin'); // Redirect to the admin page
    };

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
                <RoleSelector onAdminClick={handleAdminClick} />
            </div>
        </div>
    );
}

export default LandingPage;
