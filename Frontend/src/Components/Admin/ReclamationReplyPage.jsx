// Frontend/src/Pages/ReclamationReplyPage.jsx
import React, { useState } from 'react';
import './ReclamationReplyPage.css';
import Sidebar from '../Sidebar.jsx';

function ReclamationReplyPage() {
    const [reply, setReply] = useState('');
    const [message, setMessage] = useState('');

    const handleReplyChange = (e) => {
        setReply(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Example: API call to submit reply
        console.log('Reclamation reply submitted:', reply);
        setMessage('Your reply has been sent successfully!');
    };

    return (
        <div className="reclamation-reply-page">
             {<Sidebar/>}
            <h2 className="title">Reclamation Details</h2>

            {/* Reclamation Details Section */}
            <div className="reclamation-details">
                <p><strong>Subject:</strong> Access Issues</p>
                <p><strong>Description:</strong> I am unable to access my student dashboard for the past week. Please resolve this issue as soon as possible.</p>
                <p><strong>Submitted By:</strong> John Doe</p>
                <p><strong>Date:</strong> December 12, 2024</p>
            </div>

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
                </div>
            </form>

            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default ReclamationReplyPage;
