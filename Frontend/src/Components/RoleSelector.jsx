// RoleSelector.jsx
import React from 'react';
import adminImage from '../assets/logo.jpg'; // Ensure the path is correct
import studentImage from '../assets/logo.jpg'; // Ensure the path is correct

function RoleSelector() {
    const handleAdminClick = () => {
        // Handle admin selection, e.g., navigate to admin dashboard
        console.log('Admin selected');
    };

    const handleStudentClick = () => {
        // Handle student selection, e.g., navigate to student dashboard
        console.log('Student selected');
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-8 md:space-y-0 md:space-x-12">
            {/* Admin Selection */}
            <button
                onClick={handleAdminClick}
                className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md overflow-hidden w-80 h-80 hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <img src={adminImage} alt="Admin" className="w-full h-48 object-cover" />
                <div className="flex items-center justify-center h-32 w-full">
                    <span className="text-2xl font-semibold text-gray-800">Admin</span>
                </div>
            </button>

            {/* Student Selection */}
            <button
                onClick={handleStudentClick}
                className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md overflow-hidden w-80 h-80 hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <img src={studentImage} alt="Student" className="w-full h-48 object-cover" />
                <div className="flex items-center justify-center h-32 w-full">
                    <span className="text-2xl font-semibold text-gray-800">Student</span>
                </div>
            </button>
        </div>
    );
}

export default RoleSelector;