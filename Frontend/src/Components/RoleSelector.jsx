import React from 'react';
import './RoleSelector.css';

function RoleSelector({ onAdminClick }) {
    const handleStudentClick = () => {
        console.log('Student selected');
    };

    return (
        <div className="role-selector">
            <button
                onClick={onAdminClick} // Navigate to the admin page
                className="role-button admin-button"
            >
                <span className="role-label">Admin</span>
            </button>
            <button
                onClick={handleStudentClick}
                className="role-button student-button"
            >
                <span className="role-label">Student</span>
            </button>
        </div>
    );
}

export default RoleSelector;