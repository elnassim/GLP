import React, { useState, useEffect } from "react";
import "./RequestsPage.css";
import Sidebar from '../Sidebar.jsx';
import api from '../../api'; // Import the Axios instance
import RefusalReasonModal from './RefusalReasonModal'; // Import the modal component

const RequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDemandeId, setSelectedDemandeId] = useState(null);

  // Function to translate document types
  const translateDocumentType = (type) => {
    const translations = {
      "Attestation de Scolarité": "Certificate of Enrollment",
      "Attestation de Réussite": "Certificate of Achievement",
      "Convention de Stage": "Internship Agreement",
    };
    return translations[type] || type; // Return translated type or original if not found
  };

  useEffect(() => {
    const fetchPendingDemandes = async () => {
      try {
        const response = await api.get('/demandes/pending');
        setRequests(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err);
        setError('Erreur lors de la récupération des demandes.');
        setLoading(false);
      }
    };

    fetchPendingDemandes();
  }, []);

  const handleAccept = async (id) => {
    try {
      await api.put(`/demandes/${id}/accept`);
      setRequests(requests.filter(demande => demande.id !== id));
    } catch (err) {
      console.error(`Erreur lors de l'acceptation de la demande:`, err);
      alert(`Échec de l'acceptation de la demande.`);
    }
  };

  const handleRefuse = (id) => {
    setSelectedDemandeId(id);
    setShowModal(true);
  };

  const handleRefusalReasonSubmit = async (reason) => {
    try {
      await api.put(`/demandes/${selectedDemandeId}/refuse`, { reason });
      setRequests(requests.filter(demande => demande.id !== selectedDemandeId));
      setShowModal(false);
    } catch (err) {
      console.error(`Erreur lors du refus de la demande:`, err);
      alert(`Échec du refus de la demande.`);
    }
  };

  if (loading) {
    return (
      <div className="requests-page">
        <Sidebar />
        <div>Loading requests...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="requests-page">
        <Sidebar />
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div className="requests-page">
      <Sidebar />

      <h1 className="title_req">Pending Requests</h1>

      <table className="requests-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Apogee</th>
            <th>CIN</th>
            <th>Document Type</th>
            <th>Additional Information</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((demande) => (
              <tr key={demande.id}>
                <td>{demande.id}</td>
                <td>{demande.email}</td>
                <td>{demande.apogee}</td>
                <td>{demande.cin}</td>
                <td>{translateDocumentType(demande.document_type)}</td>
                <td>{demande.autres}</td>
                <td>
                  <button 
                    className="accept-button" 
                    onClick={() => handleAccept(demande.id)}
                  >
                    Accept
                  </button>
                  <button 
                    className="refuse-button" 
                    onClick={() => handleRefuse(demande.id)}
                  >
                    Refuse
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No pending requests.</td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <RefusalReasonModal 
          onClose={() => setShowModal(false)} 
          onSubmit={handleRefusalReasonSubmit} 
        />
      )}
    </div>
  );
};

export default RequestsPage;