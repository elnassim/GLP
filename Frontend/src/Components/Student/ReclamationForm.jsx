// Frontend/src/Components/ReclamationForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import './ReclamationForm.css'; // Import the custom CSS

function ReclamationForm() {
    const [formData, setFormData] = useState({
        email: '',
        sujet: '',
        description: '',
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
            const response = await api.post('/reclamation', formData);
            setSuccess(response.data.message);
            setFormData({
                email: '',
                sujet: '',
                description: '',
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
        <div className="reclamation-form-container">
            <form onSubmit={handleSubmit} className="reclamation-form">
                {/* Form Fields */}
                <h2 className="title">reclamation</h2>
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
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    placeholder="Sujet"
                    required
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                ></textarea>
                {/* Buttons */}
                <div className="reclamation-buttons">
                    <button type="submit" className="reclamation-submit-button">Soumettre</button>
                    <button type="button" className="reclamation-back-button" onClick={() => navigate('/formulate')}>
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
        </div>
    );
}

export default ReclamationForm;
