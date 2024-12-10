// Frontend/src/Components/DemandeForm.jsx
import React, { useState } from 'react';
import './DemandeForm.css'; // Import the custom CSS

function DemandeForm({ onSubmit, onBack }) {
    const [formData, setFormData] = useState({
        email: '',
        numeroApogee: '',
        cin: '',
        document: '',
        autres: '',
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
        alert('Votre demande a été soumise avec succès.');
        // Reset form or navigate as needed
        onSubmit();
    };

    return (
        <form className="demande-form" onSubmit={handleSubmit}>
            <h2 className="demande-title">Formulaire de Demande</h2>

            <label htmlFor="email" className="demande-label">
                Adresse Email:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                className="demande-input"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="numeroApogee" className="demande-label">
                Numéro d’apogée:
            </label>
            <input
                type="text"
                id="numeroApogee"
                name="numeroApogee"
                className="demande-input"
                value={formData.numeroApogee}
                onChange={handleChange}
                required
            />

            <label htmlFor="cin" className="demande-label">
                CIN (Carte d’Identité Nationale):
            </label>
            <input
                type="text"
                id="cin"
                name="cin"
                className="demande-input"
                value={formData.cin}
                onChange={handleChange}
                required
            />

            <label htmlFor="document" className="demande-label">
                Choix du Document Demandé:
            </label>
            <select
                id="document"
                name="document"
                className="demande-select"
                value={formData.document}
                onChange={handleChange}
                required
            >
                <option value="" disabled>
                    Sélectionnez un document
                </option>
                <option value="attestationScolarite">Attestation de Scolarité</option>
                <option value="releveNotes">Relevé de Notes</option>
                <option value="autre">Autre</option>
            </select>

            {formData.document === 'autre' && (
                <>
                    <label htmlFor="autres" className="demande-label">
                        Autres Informations:
                    </label>
                    <textarea
                        id="autres"
                        name="autres"
                        className="demande-textarea"
                        value={formData.autres}
                        onChange={handleChange}
                        placeholder="Veuillez préciser..."
                    ></textarea>
                </>
            )}

            <div className="demande-buttons">
                <button type="submit" className="demande-submit-button">
                    Soumettre
                </button>
                <button
                    type="button"
                    className="demande-back-button"
                    onClick={onBack}
                >
                    Retour
                </button>
            </div>
        </form>
    );
}

export default DemandeForm;