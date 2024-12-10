// Frontend/src/Components/InfoSection.jsx
import React from 'react';
import './InfoSection.css'; // Import the custom CSS

function InfoSection({ id, title, children }) {
    return (
        <section id={id} className="info-section">
            <h2 className="info-title">{title}</h2>
            <p className="info-content">{children}</p>
        </section>
    );
}

export default InfoSection;