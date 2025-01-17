// Frontend/src/Components/FormulateSelection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Formulate.css'; // Import the custom CSS

function FormulateSelection() {
    return (
        <div className="formulate-selection">
            <h1 className="formulate-title">Choose Your Option</h1>
            <div className="formulate-buttons">
                <Link to="demande" className="formulate-link">
                    <button className="formulate-option-button">Request</button>
                </Link>
                <Link to="reclamation" className="formulate-link">
                    <button className="formulate-option-button">Reclamation</button>
                </Link>
            </div>
        </div>
    );
}

export default FormulateSelection;