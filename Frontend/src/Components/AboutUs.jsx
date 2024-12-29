// Frontend/src/Components/AboutUs.jsx
import React from 'react';
import './AboutUs.css'; // Import the custom CSS
import Navbar from './Navbar.jsx';
function AboutUs() {
    return (
        <div className="aboutus-page">
            
            {/* Background section */}
            <div className="aboutus-background"></div>

            {<Navbar />}
            <div className="aboutus-container">
           
                <div className="aboutus-header">
                
                    <h1 className="aboutus-title">About Us</h1>
                </div>
                <div className="aboutus-content">
                    <p>
                    Nasym is the official platform specifically designed to facilitate and streamline administrative procedures for students. This service, accessible to all students, whether at the beginning or the end of their studies, allows you to track the status of your requests in real time.                    </p>
                    <p>
                    Created to meet the unique needs of students, Nasym particularly simplifies requests for certificates and other essential administrative documents required for your academic journey. Our primary goal is to make your administrative processes faster, more accessible, and entirely digital.                    </p>
                    
                    <p>
                    At Nasym, we also prioritize the security of your information. All your data is handled with the utmost confidentiality and in compliance with strict security standards, ensuring you a seamless and reliable experience.                    </p>
                     
                </div>
                <div className="aboutus-footer">
                    <p>Contact-Us : <a href="mailto:contact@universite.com">support@nasym.com</a></p>
                    <p>© 2024 Nasym. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;
