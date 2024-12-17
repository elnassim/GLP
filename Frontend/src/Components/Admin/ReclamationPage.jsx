import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReclamationPage.css';
import Sidebar from '../Sidebar.jsx';
import axios from 'axios';

function ReclamationPage() {
    const navigate = useNavigate();
    const [reclamations, setReclamations] = useState([]);
    const [error, setError] = useState('');

    // Fetch reclamations from the backend API
    useEffect(() => {
        const fetchReclamations = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/reclamation');
                setReclamations(response.data);
            } catch (err) {
                setError('Error fetching reclamations. Please try again.');
            }
        };

        fetchReclamations();
    }, []);

    const handleConsultClick = (id) => {
        // Navigate to the reply page for the selected reclamation
        navigate(`/reclamation/${id}`);
    };

    return (
        <div className="reclamation-list-page">
            <Sidebar />
            <h2 className="title">Reclamations</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="reclamation-list">
                {reclamations.length > 0 ? (
                    reclamations.map((reclamation) => (
                        <div key={reclamation.id} className="reclamation-card">
                            <h3 className="reclamation-subject">{reclamation.subject}</h3>
                            <p className="reclamation-description">
                                {reclamation.description.slice(0, 100)}...
                            </p>
                            <p className="reclamation-meta">
                                <span>By: {reclamation.submittedBy}</span> |{' '}
                                <span>{new Date(reclamation.date).toLocaleDateString()}</span>
                            </p>
                            <button
                                className="consult-button"
                                onClick={() => handleConsultClick(reclamation.id)}
                            >
                                Consult
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No reclamations found.</p>
                )}
            </div>
        </div>
    );
}

export default ReclamationPage;
