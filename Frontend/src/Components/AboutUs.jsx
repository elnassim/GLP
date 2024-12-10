// Frontend/src/Components/AboutUs.jsx
import React from 'react';
import './AboutUs.css'; // Import the custom CSS

function AboutUs() {
    return (
        <div className="aboutus-container">
            <h1 className="aboutus-title">À Propos de Nous</h1>
            <div className="aboutus-content">
                <p>
                    Bienvenue sur notre plateforme universitaire. Nous nous engageons à fournir 
                    des services de qualité pour aider les étudiants dans leurs démarches administratives.
                </p>
                <p>
                    Notre mission est de simplifier le processus de demande et de réclamation, 
                    en offrant une interface conviviale et efficace.
                </p>
                {/* Ajoutez plus de contenu selon vos besoins */}
            </div>
        </div>
    );
}

export default AboutUs;