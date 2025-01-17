import React, { useState } from 'react';
import './RefusalReasonModal.css'; // Import the custom CSS

const RefusalReasonModal = ({ onClose, onSubmit }) => {
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reason);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Refusal Reason</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter the reason for refusal"
            required
          ></textarea>
          <div className="modal-actions">
            <button type="submit" className="submit-button">Submit</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RefusalReasonModal;