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
                const res = await api.get(`/reclamations`, {
                    params: { status: 'pending' }
                });
                const found = res.data.data.find(rec => rec.id === parseInt(id));
                if (found) {
                    setReclamation(found);
                } else {
                    setError('Reclamation not found or already replied.');
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching reclamation:', err);
                setError('Failed to load reclamation.');
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
            const res = await api.post(`/reclamations/${id}/reply`, { response });
            setSuccess(res.data.message);
            // Optionally, navigate back after a delay
            setTimeout(() => navigate('/admin/reclamations'), 2000);
        } catch (err) {
            console.error('Error replying to reclamation:', err);
            if (err.response && err.response.data.error) {
                setError(err.response.data.error);
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

    if (error) {
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
                {success && <p className="success-message">{success}</p>}
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
}

export default ReclamationReplyPage;