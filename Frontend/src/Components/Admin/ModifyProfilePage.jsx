// Frontend/src/Pages/ModifyProfilePage.jsx
import React, { useState } from 'react';
import './ModifyProfilePage.css';

import Sidebar from '../Sidebar.jsx';

function ModifyProfilePage() {
    // State to store the user's information
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+123 456 789',
        address: '123 University St, City, Country',
    });

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
        console.log('Updated Profile:', formData);
        alert('Profile updated successfully!');
        // Redirect or perform additional actions here
    };

    return (
        <div className="modify-profile-page">
             {<Sidebar/>}
           
            <h2 className="title">Modify Profile</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label  htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="save-button">Save Changes</button>
                    <button type="button" className="cancel-button" onClick={() => window.history.back()}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default ModifyProfilePage;
