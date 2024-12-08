// InfoSection.jsx
import React from 'react';
import './InfoSection.css';

function InfoSection({ id, title, children }) {
    return (
        <section id={id} className="info-section">
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    );
}

export default InfoSection;