// Frontend/src/Components/Formulate.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Formulate.css'; // Import the custom CSS

function Formulate() {
    return (
        <div className="formulate-container">
            {/* Render Nested Route Components */}
            <Outlet />
        </div>
    );
}

export default Formulate;