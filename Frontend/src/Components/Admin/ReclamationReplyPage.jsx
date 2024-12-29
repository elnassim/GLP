// filepath: Frontend/src/Components/Admin/ReclamationReplyPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api';
import Sidebar from '../Sidebar.jsx';
import './ReclamationReplyPage.css';

function ReclamationReplyPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [reclamation, setReclamation] = useState(null);
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchReclamation = async () => {
            try {
                // Fetch the specific reclamation by ID
                const res = await api.get(`/reclamations/${id}`);
                setReclamation(res.data.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching reclamation:', err);
                setError('Reclamation not found or already replied.');
                setLoading(false);
            }
        };

        fetchReclamation();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!response.trim()) {
            setError('Response cannot be empty.');
            return;
        }

        try {
            // Use backticks for proper template literal
            const res = await api.post(`/reclamations/${id}/reply`, { response });
            setSuccess(res.data.message);
            // Navigate to Reclamations Page after reply
            navigate('/admin/reclamations');
        } catch (err) {
            console.error('Error replying to reclamation:', err);
            if (err.response && err.response.data.error) {
                setError(err.response.data.error);
            } else if (err.response && err.response.data.errors) {
                // Handle validation errors
                const validationErrors = err.response.data.errors;
                setError(Object.values(validationErrors).join(' '));
            } else {
                setError('Failed to reply to reclamation.');
            }
        }
    };

    if (loading) {
        return (
            <div className="reclamation-reply-page">
                <Sidebar />
                <div>Loading reclamation...</div>
            </div>
        );
    }

    if (error && !reclamation) {
        return (
            <div className="reclamation-reply-page">
                <Sidebar />
                <div className="error-message">{error}</div>
            </div>
        );
    }

    return (
        <div className="reclamation-reply-page">
            <Sidebar />
            <div className="reply-container">
                <h2 className="title">Respond to Reclamation</h2>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                {reclamation && (
                    <>
                        <div className="reclamation-details">
                            <p><strong>Subject:</strong> {reclamation.sujet}</p>
                            <p><strong>Description:</strong> {reclamation.description}</p>
                            <p><strong>From:</strong> {reclamation.email}</p>
                            <p><strong>Date:</strong> {new Date(reclamation.created_at).toLocaleDateString()}</p>
                        </div>
                        <form onSubmit={handleSubmit} className="reply-form">
                            <label htmlFor="response">Response:</label>
                            <textarea
                                id="response"
                                name="response"
                                value={response}
                                onChange={(e) => setResponse(e.target.value)}
                                required
                                rows="5"
                            ></textarea>
                            <button type="submit" className="submit-button">Send Response</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default ReclamationReplyPage;