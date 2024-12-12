// Frontend/src/Components/ReclamationForm.jsx
import React, { useState } from 'react';
import api from '../api';
import './ReclamationForm.css'; // Import the custom CSS

function ReclamationForm({ onBack }) {
    const [formData, setFormData] = useState({
        email: '',
        sujet: '',
        description: '',
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

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
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            {/* Other fields */}
            <button type="submit">Soumettre</button>
            <button type="button" onClick={onBack}>Retour</button>
            {success && <p>{success}</p>}
            {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key][0]}</p>
            ))}
        </form>
    );
}

export default ReclamationForm;