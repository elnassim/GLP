// Frontend/src/Components/Student/DemandeForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import './DemandeForm.css'; // Import the custom CSS

function DemandeForm() {
    const [formData, setFormData] = useState({
        email: '',
        apogee: '',
        cin: '',
        document_type: '', // Changed from 'document' to 'document_type'
        autres: '',
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccess('');

        // Define allowed document types
        const allowedDocumentTypes = [
            'Attestation de Scolarité',
            'Convention de Stage',
            'Attestation de Réussite',
        ];

        // Validate selected document type on the client-side
        if (!allowedDocumentTypes.includes(formData.document_type)) {
            setErrors({ document_type: ['Type de document invalide.'] });
            return;
        }

        try {
            const response = await api.post('/demande', formData);
            setSuccess(response.data.message);
            
            setFormData({
                email: '',
                apogee: '',
                cin: '',
                document_type: '',
                autres: '',
            });
            // Optionally navigate to a success page
            // navigate('/success');
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ general: 'Une erreur est survenue.' });
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="demande-form">
            <h2 className="demande-title">Soumettre une Demande</h2>

            {/* Email Field */}
            <div className="form-group">
                <label htmlFor="email" className="demande-label">Adresse Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    className="demande-input"
                    required
                />
                {errors.email && <p className="error-message">{errors.email[0]}</p>}
            </div>

            {/* Apogee Field */}
            <div className="form-group">
                <label htmlFor="apogee" className="demande-label">Numéro d’Apogée</label>
                <input
                    type="text"
                    name="apogee"
                    id="apogee"
                    value={formData.apogee}
                    onChange={handleChange}
                    placeholder="Votre code Apogee"
                    className="demande-input"
                    required
                />
                {errors.apogee && <p className="error-message">{errors.apogee[0]}</p>}
            </div>

            {/* CIN Field */}
            <div className="form-group">
                <label htmlFor="cin" className="demande-label">CIN</label>
                <input
                    type="text"
                    name="cin"
                    id="cin"
                    value={formData.cin}
                    onChange={handleChange}
                    placeholder="Votre CIN"
                    className="demande-input"
                    required
                />
                {errors.cin && <p className="error-message">{errors.cin[0]}</p>}
            </div>

            {/* Document Type Field */}
            <div className="form-group">
                <label htmlFor="document_type" className="demande-label">Type de Document</label>
                <select
                    name="document_type"
                    id="document_type"
                    value={formData.document_type}
                    onChange={handleChange}
                    className="demande-select"
                    required
                >
                    <option value="">Sélectionnez un type de document</option>
                    <option value="Attestation de Scolarité">Attestation de Scolarité</option>
                    <option value="Convention de Stage">Convention de Stage</option>
                    <option value="Attestation de Réussite">Attestation de Réussite</option>
                </select>
                {errors.document_type && <p className="error-message">{errors.document_type[0]}</p>}
            </div>

            {/* Additional Information Field */}
            <div className="form-group">
                <label htmlFor="autres" className="demande-label">Informations Supplémentaires</label>
                <textarea
                    name="autres"
                    id="autres"
                    value={formData.autres}
                    onChange={handleChange}
                    placeholder="Informations Supplémentaires"
                    maxLength="1000"
                    className="demande-textarea"
                ></textarea>
                {errors.autres && <p className="error-message">{errors.autres[0]}</p>}
            </div>

            {/* Buttons */}
            <div className="demande-buttons">
                <button type="submit" className="demande-submit-button">Soumettre</button>
                <button type="button" className="demande-back-button" onClick={() => navigate('/formulate')}>
                    Retour
                </button>
            </div>

            {/* Success and Error Messages */}
            {success && <p className="success-message">{success}</p>}
            {errors.general && <p className="error-message">{errors.general}</p>}
        </form>
    );
}

export default DemandeForm;
