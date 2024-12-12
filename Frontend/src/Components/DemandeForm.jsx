// Frontend/src/Components/DemandeForm.jsx
import React, { useState } from 'react';
import api from '../api';
import './DemandeForm.css'; // Import the custom CSS

function DemandeForm({ onBack }) {
    const [formData, setFormData] = useState({
        email: '',
        apogee: '',
        cin: '',
        document: '',
        autres: '',
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
            const response = await api.post('/demande', formData);
            setSuccess(response.data.message);
            setFormData({
                email: '',
                apogee: '',
                cin: '',
                document: '',
                autres: '',
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

export default DemandeForm;