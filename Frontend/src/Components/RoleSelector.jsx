// Frontend/src/Components/RoleSelector.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import adminImage from '../assets/admin.jpg'; // Ensure the path is correct
import studentImage from '../assets/student.jpg';
import './RoleSelector.css'; // Import the custom CSS

function RoleSelector() {
    const navigate = useNavigate();
    const handleAdminClick = () => {
        // Handle admin selection, e.g., navigate to admin dashboard
        console.log('Admin selected');
        // Example: window.location.href = '/admin-dashboard';
    };

    const handleStudentClick = () => {
        // Handle student selection, e.g., navigate to student dashboard
        navigate('/formulate');
        // Example: window.location.href = '/student-dashboard';
    };

    return (
        <div className="role-selector">
            {/* Admin Selection */}
            <button
                type="button"
                onClick={handleStudentClick}
                className="role-button student-button"
            >
                <img
                    src={studentImage}
                    alt="Student"
                    className="student-image"
                />
                <span className="student-label">Admin</span>
            </button>

            {/* Student Selection */}
            <button
                onClick={handleStudentClick}
                className="role-button student-button"
            >
                <img
                    src={studentImage}
                    alt="Student"
                    className="student-image"
                />
                <span className="student-label">Student</span>
            </button>
        </div>
    );
}

export default RoleSelector;