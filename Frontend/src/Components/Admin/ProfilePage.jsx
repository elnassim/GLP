// Frontend/src/Pages/ProfilePage.jsx
import React from 'react';
import './ProfilePage.css';

import Sidebar from '../Sidebar.jsx';

function ProfilePage() {
    return (
        <div className="profile-page">
             {<Sidebar/>}
            
            {/* Profile Header */}
            <div className="profile-header">
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="User Profile" 
                    className="profile-picture" 
                />
                <h2 className="profile-name">John Doe</h2>
                <p className="profile-role">Administrator</p>
            </div>

            {/* User Information Section */}
            <div className="profile-info">
                <h3>Personal Information</h3>
                <div className="info-row">
                    <span className="info-label">Email:</span>
                    <span className="info-value">john.doe@example.com</span>
                </div>
                <div className="info-row">
                    <span className="info-label">Phone:</span>
                    <span className="info-value">+123 456 789</span>
                </div>
                <div className="info-row">
                    <span className="info-label">Address:</span>
                    <span className="info-value">123 University St, City, Country</span>
                </div>
            </div>

            {/* Actions Section */}
            <div className="profile-actions">
            <button 
    className="action-button" 
    onClick={() => window.location.href = '/modify-profile'}
>
    Edit Profile
</button>
<button
    className="action-button"
    onClick={() => window.location.href = '/change-password'}
>
    Change Password
</button>

                <button className="action-button danger">Delete Account</button>
            </div>
        </div>
    );
}

export default ProfilePage;
