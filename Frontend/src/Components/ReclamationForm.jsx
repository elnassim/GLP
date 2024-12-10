// Frontend/src/Components/ReclamationForm.jsx
import React, { useState } from 'react';
import './ReclamationForm.css'; // Import the custom CSS

function ReclamationForm({ onSubmit, onBack }) {
    const [formData, setFormData] = useState({
        email: '',
        numeroApogee: '',
        cin: '',
        sujet: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data Submitted:', formData);
        alert('Votre réclamation a été soumise avec succès.');
        // Reset form or navigate as needed
        onSubmit();
    };

    return (
        <form className="reclamation-form" onSubmit={handleSubmit}>
            <h2 className="reclamation-title">Formulaire de Réclamation</h2>

            <label htmlFor="email" className="reclamation-label">
                Adresse Email:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                className="reclamation-input"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="numeroApogee" className="reclamation-label">
                Numéro d’apogée:
            </label>
            <input
                type="text"
                id="numeroApogee"
                name="numeroApogee"
                className="reclamation-input"
                value={formData.numeroApogee}
                onChange={handleChange}
                required
            />

            <label htmlFor="cin" className="reclamation-label">
                CIN (Carte d’Identité Nationale):
            </label>
            <input
                type="text"
                id="cin"
                name="cin"
                className="reclamation-input"
                value={formData.cin}
                onChange={handleChange}
                required
            />

            <label htmlFor="sujet" className="reclamation-label">
                Sujet:
            </label>
            <input
                type="text"
                id="sujet"
                name="sujet"
                className="reclamation-input"
                value={formData.sujet}
                onChange={handleChange}
                required
            />

            <label htmlFor="description" className="reclamation-label">
                Description de la Réclamation:
            </label>
            <textarea
                id="description"
                name="description"
                className="reclamation-textarea"
                value={formData.description}
                onChange={handleChange}
                placeholder="Veuillez décrire votre réclamation en détail..."
                required
            ></textarea>

            <div className="reclamation-buttons">
                <button type="submit" className="reclamation-submit-button">
                    Soumettre
                </button>
                <button
                    type="button"
                    className="reclamation-back-button"
                    onClick={onBack}
                >
                    Retour
                </button>
            </div>
        </form>
    );
}

export default ReclamationForm;