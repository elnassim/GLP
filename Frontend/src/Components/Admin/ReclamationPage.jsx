// Frontend/src/Pages/ReclamationPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReclamationPage.css';
import Sidebar from '../Sidebar.jsx';

function ReclamationPage() {
    const navigate = useNavigate();

    // Example reclamation data (Replace with API data later)
    const reclamations = [
        {
            id: 1,
            subject: 'Access Issues',
            description: 'I am unable to access my student dashboard for the past week.',
            date: 'December 12, 2024',
            submittedBy: 'John Doe',
        },
        {
            id: 2,
            subject: 'Payment Issues',
            description: 'My payment status shows unpaid despite successful transaction.',
            date: 'December 10, 2024',
            submittedBy: 'Jane Smith',
        },
        {
            id: 3,
            subject: 'Course Enrollment',
            description: 'Unable to enroll in the mandatory courses for the semester.',
            date: 'December 8, 2024',
            submittedBy: 'Alex Johnson',
        },
    ];

    const handleConsultClick = (id) => {
        // Navigate to the reply page for the selected reclamation
        navigate(`/reclamation/${id}`);
    };

    return (
        <div className="reclamation-list-page">
             {<Sidebar/>}
            <h2 className="title">Reclamations</h2>
            <div className="reclamation-list">
                {reclamations.map((reclamation) => (
                    <div key={reclamation.id} className="reclamation-card">
                        <h3 className="reclamation-subject">{reclamation.subject}</h3>
                        <p className="reclamation-description">
                            {reclamation.description.slice(0, 100)}...
                        </p>
                        <p className="reclamation-meta">
                            <span>By: {reclamation.submittedBy}</span> | <span>{reclamation.date}</span>
                        </p>
                        <button
                            className="consult-button"
                            onClick={() => handleConsultClick(reclamation.id)}
                        >
                            Consult
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReclamationPage;
