// Frontend/src/Pages/ChangePasswordPage.jsx
import React, { useState } from 'react';
import './ChangePasswordPage.css';
import Sidebar from '../Sidebar.jsx';

function ChangePasswordPage() {
    // State to store password fields
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    // State to show success/error messages
    const [message, setMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form inputs
        if (formData.newPassword !== formData.confirmPassword) {
            setMessage('New password and confirmation do not match.');
            return;
        }

        // Here you can call an API to update the password
        console.log('Password changed:', formData);
        setMessage('Password changed successfully!');
    };

    return (
        <div className="change-password-page">
              {<Sidebar/>}
            <h2 className="title">Change Password</h2>
            <form onSubmit={handleSubmit} className="password-form">
                <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                        type="password"
                        id="currentPassword"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="save-button">Save Changes</button>
                    <button type="button" className="cancel-button" onClick={() => window.history.back()}>
                        Cancel
                    </button>
                </div>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default ChangePasswordPage;
