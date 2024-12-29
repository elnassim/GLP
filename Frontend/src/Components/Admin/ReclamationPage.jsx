// Frontend/src/Components/Admin/ReclamationPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api'; // Ensure this is correctly set up as your Axios instance
import Sidebar from '../Sidebar.jsx';
import './ReclamationPage.css'; // Ensure correct path

function ReclamationPage() {
    const navigate = useNavigate();
    const [reclamations, setReclamations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReclamations = async () => {
            try {
                const response = await api.get('/reclamations', {
                    params: { status: 'pending' },
                });
                setReclamations(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching reclamations:', err);
                setError('Failed to load reclamations.');
                setLoading(false);
            }
        };

        fetchReclamations();
    }, []);

    const handleConsultClick = (id) => {
        // Navigate to the reply page for the selected reclamation
        navigate(`/reclamation/${id}/reply`);
    };

    if (loading) {
        return (
            <div className="reclamation-list-page">
                <Sidebar />
                <div>Loading reclamations...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="reclamation-list-page">
                <Sidebar />
                <div className="error-message">{error}</div>
            </div>
        );
    }

    return (
        <div className="reclamation-list-page">
            <Sidebar />
            <h2 className="title">Pending Reclamations</h2>
            <div className="reclamation-list">
                {reclamations.length > 0 ? (
                    reclamations.map((reclamation) => (
                        <div key={reclamation.id} className="reclamation-card">
                            <h3 className="reclamation-subject">{reclamation.sujet}</h3>
                            <p className="reclamation-description">
                                {reclamation.description.slice(0, 100)}...
                            </p>
                            <p className="reclamation-meta">
                                <span>By: {reclamation.email}</span> |{' '}
                                <span>
                                    {new Date(reclamation.created_at).toLocaleDateString()}
                                </span>
                            </p>
                            <button
                                className="consult-button"
                                onClick={() => navigate(`/admin/reclamation/${reclamation.id}/reply`)}
                            >
                                Consult
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No pending reclamations.</p>
                )}
            </div>
        </div>
    );
}

export default ReclamationPage;