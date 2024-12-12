import React, { useState } from 'react';
import DemandeForm from './DemandeForm.jsx';
import ReclamationForm from './ReclamationForm.jsx';
import { Outlet } from 'react-router-dom';
import './Formulate.css'; // Import the custom CSS

function Formulate() {
    const [formType, setFormType] = useState(null);

    const handleFormSelection = (type) => {
        setFormType(type);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert(`Form submitted for ${formType}`);
        // Reset form selection after submission
        setFormType(null);
    };

    return (
        <div className="formulate-container">
            {!formType ? (
                <div className="formulate-selection">
                    <h1 className="formulate-title">Choose Your Option</h1>
                    <div className="formulate-buttons">
                        <button
                            className="formulate-option-button"
                            onClick={() => handleFormSelection('demande')}
                        >
                            Demande
                        </button>
                        <button
                            className="formulate-option-button"
                            onClick={() => handleFormSelection('reclamation')}
                        >
                            Reclamation
                        </button>
                    </div>
                </div>
            ) : formType === 'demande' ? (
                <DemandeForm
                    onSubmit={handleSubmit}
                    onBack={() => setFormType(null)}
                />
            ) : (
                <ReclamationForm
                    onSubmit={handleSubmit}
                    onBack={() => setFormType(null)}
                />
            )}
            <Outlet />
        </div>
    );
}

export default Formulate;