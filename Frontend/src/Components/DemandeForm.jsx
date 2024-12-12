// Frontend/src/Components/DemandeForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './DemandeForm.css'; // Import the custom CSS

function DemandeForm() {
    const [formData, setFormData] = useState({
        email: '',
        apogee: '',
        cin: '',
        document: '',
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

        try {
            const response = await api.post('/demande', formData);
            setSuccess(response.data.message);
            setFormData({
                email: '',
                apogee: '',
                cin: '',
                document: '',
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
            {/* Form Fields */}
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="text"
                name="apogee"
                value={formData.apogee}
                onChange={handleChange}
                placeholder="Numéro d’Apogée"
                required
            />
            <input
                type="text"
                name="cin"
                value={formData.cin}
                onChange={handleChange}
                placeholder="CIN"
                required
            />
            <input
                type="text"
                name="document"
                value={formData.document}
                onChange={handleChange}
                placeholder="Type de Document"
                required
            />
            <textarea
                name="autres"
                value={formData.autres}
                onChange={handleChange}
                placeholder="Informations Supplémentaires"
                maxLength="1000"
            ></textarea>
            {/* Buttons */}
            <div className="demande-buttons">
                <button type="submit" className="demande-submit-button">Soumettre</button>
                <button type="button" className="demande-back-button" onClick={() => navigate('/formulate')}>
                    Retour
                </button>
            </div>
            {/* Success and Error Messages */}
            {success && <p className="success-message">{success}</p>}
            {Object.keys(errors).length > 0 && (
                <div className="error-messages">
                    {Object.keys(errors).map((key) => (
                        <p key={key} className="error-message">{errors[key][0]}</p>
                    ))}
                </div>
            )}
        </form>
    );
}

export default DemandeForm;