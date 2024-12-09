// LandingPage.jsx
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import InfoSection from './InfoSection';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-page min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <main className="flex-grow">
                <InfoSection id="about" title="About Us">
                    We are committed to providing the best services to our customers.
                </InfoSection>
                <InfoSection id="services" title="Services">
                    Explore the wide range of services we offer.
                </InfoSection>
            </main>
            <footer className="footer">
                <p>&copy; 2023 Our Website. All rights reserved.</p>
                <div className="social-media">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;