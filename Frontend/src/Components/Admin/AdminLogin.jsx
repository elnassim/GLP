// Frontend/src/Components/Admin/AdminLogin.jsx

import React, { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar.jsx';
import api from '../../api'; // Ensure this path is correct

function AdminLogin() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccess('');

        try {
            const response = await api.post('/login', credentials); // Ensure '/login' is correct
            setSuccess(response.data.message);
            // Remove token storage since it's not implemented
            // localStorage.setItem('authToken', response.data.token);
            navigate('/admin-dashboard');
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else if (error.response && error.response.data.error) {
                setErrors({ general: error.response.data.error });
            } else {
                setErrors({ general: 'Une erreur est survenue. Veuillez réessayer.' });
            }
        }
    };

    return (
        <div className="admin-login-page">
            <Navbar />
            <div className="adminlogin-background"></div>
            <div className="login-container">
                <h2 className="login-title">Admin Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                {/* Success and Error Messages */}
                {success && <p className="success-message">{success}</p>}
                {Object.keys(errors).length > 0 && (
                    <div className="error-messages">
                        {Object.keys(errors).map((key) => (
                            <p key={key} className="error-message">{errors[key]}</p>
                        ))}
                        
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminLogin;