import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ReclamationReplyPage.css';
import Sidebar from '../Sidebar.jsx';
import axios from 'axios';

function ReclamationReplyPage() {
    const { id } = useParams(); // Get the reclamation ID from the URL
    const [reclamation, setReclamation] = useState(null);
    const [reply, setReply] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Fetch reclamation details when the component mounts
    useEffect(() => {
        const fetchReclamation = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/reclamations/${id}`);
                setReclamation(response.data.data);
            } catch (err) {
                setError('Error fetching reclamation details. Please try again.');
            }
        };

        fetchReclamation();
    }, [id]);

    const handleReplyChange = (e) => {
        setReply(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            await axios.post(`http://127.0.0.1:8000/api/reclamation/${id}/reply`, { reply });
            setMessage('Your reply has been sent successfully!');
            setReply('');
        } catch (err) {
            setError('Error sending reply. Please try again.');
        }
    };

    return (
        <div className="reclamation-reply-page">
            <Sidebar />
            <h2 className="title">Reclamation Details</h2>

            {/* Display Error Message */}
            {error && <p className="error-message">{error}</p>}

            {/* Reclamation Details Section */}
            {reclamation ? (
                <div className="reclamation-details">
                    <p><strong>Subject:</strong> {reclamation.sujet}</p>
                    <p><strong>Description:</strong> {reclamation.description}</p>
                    <p><strong>Submitted By:</strong> {reclamation.email}</p>
                    <p><strong>Date:</strong> {new Date(reclamation.created_at).toLocaleDateString()}</p>
                </div>
            ) : (
                <p>Loading reclamation details...</p>
            )}

            {/* Reply Form */}
            <form onSubmit={handleSubmit} className="reply-form">
                <div className="form-group">
                    <label htmlFor="reply">Your Reply</label>
                    <textarea
                        id="reply"
                        name="reply"
                        value={reply}
                        onChange={handleReplyChange}
                        rows="5"
                        required
                    ></textarea>
                </div>
                <div className="form-actions">
                    <button type="submit" className="submit-button">Send Reply</button>
                    <button type="button" className="back-button" onClick={() => navigate('/reclamations')}>Back to List</button>
                </div>
            </form>

            {/* Success Message */}
            {message && <p className="success-message">{message}</p>}
        </div>
    );
}

export default ReclamationReplyPage;
