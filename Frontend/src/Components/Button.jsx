// Frontend/src/Components/Button.jsx
import React from 'react';
import './Button.css'; // Import the custom CSS

function Button({ children, onClick }) {
    return (
        <button
            className="custom-button"
            onClick={onClick}
        >
            <span className="button-content">
                {children}
            </span>
        </button>
    );
}

export default Button;