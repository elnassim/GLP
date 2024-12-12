import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelector.css';

function RoleSelector({ onAdminClick }) {
    const navigate = useNavigate(); // Hook for navigation
    const handleAdminClick = () => {
        navigate('/AdminLogin'); // Redirect to the student page
    };
    const handleStudentClick = () => {
        navigate('/formulate'); // Redirect to the student page
    };

    return (
        <div className="role-selector">
            <button
                onClick={handleAdminClick} // Navigate to the admin page
                className="role-button admin-button"
            >
                <span className="role-label">Admin</span>
            </button>
            <button
                onClick={handleStudentClick} // Navigate to the student page
                className="role-button student-button"
            >
                <span className="role-label">Student</span>
            </button>
        </div>
    );
}

export default RoleSelector;
