import React, { useState, useEffect } from "react";
import "./HistoryOperationsPage.css";
import Sidebar from "../Sidebar";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import api from "../../api"; // Axios instance

function HistoryOperationsPage() {
  const [operations, setOperations] = useState([]);
  const [reclamations, setReclamations] = useState([]);
  const [loadingOperations, setLoadingOperations] = useState(true);
  const [loadingReclamations, setLoadingReclamations] = useState(true);
  const [filterRequests, setFilterRequests] = useState("All");
  const [filterDocumentType, setFilterDocumentType] = useState("All");
  const [filterReclamationsStatus, setFilterReclamationsStatus] = useState("All");
  const [filterReclamationsType, setFilterReclamationsType] = useState("All");
  const [errorOperations, setErrorOperations] = useState(null);
  const [errorReclamations, setErrorReclamations] = useState(null);

  useEffect(() => {
    const fetchOperations = async () => {
      try {
        const response = await api.get("/operations");
        setOperations(response.data.data);
        setLoadingOperations(false);
      } catch (error) {
        console.error("Error fetching operations:", error);
        setErrorOperations("Failed to fetch operations.");
        setLoadingOperations(false);
      }
    };

    const fetchReclamations = async () => {
      try {
        const response = await api.get("/reclamations");
        setReclamations(response.data.data);
        setLoadingReclamations(false);
      } catch (error) {
        console.error("Error fetching reclamations:", error);
        setErrorReclamations("Failed to fetch reclamations.");
        setLoadingReclamations(false);
      }
    };

    fetchOperations();
    fetchReclamations();
  }, []);

  // Function to translate document types
  const translateDocumentType = (type) => {
    const translations = {
      "Attestation de Scolarité": "Certificate of Enrollment",
      "Attestation de Réussite": "Certificate of Achievement",
    };
    return translations[type] || type; // Return translated type or original if not found
  };

  // Handle Filters
  const handleFilterRequestsChange = (e) => {
    setFilterRequests(e.target.value);
  };

  const handleFilterDocumentTypeChange = (e) => {
    setFilterDocumentType(e.target.value);
  };

  const handleFilterReclamationsStatusChange = (e) => {
    setFilterReclamationsStatus(e.target.value);
  };

  const handleFilterReclamationsTypeChange = (e) => {
    setFilterReclamationsType(e.target.value);
  };

  // Filtered Data
  const filteredOperations =
    filterRequests === "All"
      ? operations
      : operations.filter((op) => op.status === filterRequests.toLowerCase());

  const filteredOperationsByDocument =
    filterDocumentType === "All"
      ? filteredOperations
      : filteredOperations.filter(
          (op) => translateDocumentType(op.document_type) === filterDocumentType
        );

  const filteredReclamationsByStatus =
    filterReclamationsStatus === "All"
      ? reclamations
      : reclamations.filter(
          (rec) => rec.status === filterReclamationsStatus.toLowerCase()
        );

  const filteredReclamationsByType =
    filterReclamationsType === "All"
      ? filteredReclamationsByStatus
      : filteredReclamationsByStatus.filter(
          (rec) => rec.type && rec.type.toLowerCase() === filterReclamationsType.toLowerCase()
        );

  return (
    <div className="history-page">
      <Sidebar />
      <div className="history-content">
        <h1 className="page-title">History of Operations</h1>

        {/* Chart Section */}
        <div className="chart-container">
          <Bar
            data={{
              labels: [
                "Accepted Requests",
                "Refused Requests",
                "Pending Requests",
                "Replied Claims",
                "Pending Claims",
              ],
              datasets: [
                {
                  label: "Counts",
                  data: [
                    operations.filter((op) => op.status === "accepted").length,
                    operations.filter((op) => op.status === "refused").length,
                    operations.filter((op) => op.status === "pending").length,
                    reclamations.filter((rec) => rec.status === "replied").length,
                    reclamations.filter((rec) => rec.status === "pending").length,
                  ],
                  backgroundColor: [
                    "#b9450f", // Accepted
                    "#8e2b04", // Refused
                    "#e65c3b", // Pending
                    "#f2984b", // Replied Claims
                    "#f5b99b", // Pending Claims
                  ],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>

        {/* Operations History Section */}
        <div className="table-section">
          <h2>Operations History</h2>

          {/* Filters */}
          <div className="filters-container">
            <div className="filter-section">
              <label htmlFor="filter-requests">Filter Requests:</label>
              <select
                id="filter-requests"
                value={filterRequests}
                onChange={handleFilterRequestsChange}
                className="filter-select"
              >
                <option value="All">All</option>
                <option value="accepted">Accepted</option>
                <option value="refused">Refused</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div className="filter-section">
              <label htmlFor="filter-document-type">Filter Document Type:</label>
              <select
                id="filter-document-type"
                value={filterDocumentType}
                onChange={handleFilterDocumentTypeChange}
                className="filter-select"
              >
                <option value="All">All</option>
                <option value="Certificate of Enrollment">
                  Certificate of Enrollment
                </option>
                <option value="Certificate of Achievement">
                  Certificate of Achievement
                </option>
              </select>
            </div>
          </div>

          {loadingOperations ? (
            <p>Loading operations...</p>
          ) : errorOperations ? (
            <p className="error-message">{errorOperations}</p>
          ) : (
            <table className="history-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Operation Type</th>
                  <th>Document Type</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredOperationsByDocument.length > 0 ? (
                  filteredOperationsByDocument.map((operation, index) => (
                    <tr key={operation.id || index}>
                      <td>{index + 1}</td>
                      <td>
                        {operation.status.charAt(0).toUpperCase() +
                          operation.status.slice(1)}
                      </td>
                      <td>
                        {translateDocumentType(operation.document_type) || "N/A"}
                      </td>
                      <td>{operation.description || "N/A"}</td>
                      <td>
                        {operation.date
                          ? new Date(operation.date).toLocaleDateString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No operations found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Reclamations History Section */}
        <div className="table-section">
          <h2>Reclamations History</h2>

          {/* Filters */}
          <div className="filters-container">
            <div className="filter-section">
              <label htmlFor="filter-reclamations-status">Filter Status:</label>
              <select
                id="filter-reclamations-status"
                value={filterReclamationsStatus}
                onChange={handleFilterReclamationsStatusChange}
                className="filter-select"
              >
                <option value="All">All</option>
                <option value="replied">Replied</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            
          </div>

          {loadingReclamations ? (
            <p>Loading reclamations...</p>
          ) : errorReclamations ? (
            <p className="error-message">{errorReclamations}</p>
          ) : (
            <table className="history-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Subject</th>
                  
                  <th>Status</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredReclamationsByType.length > 0 ? (
                  filteredReclamationsByType.map((rec, index) => (
                    <tr key={rec.id || index}>
                      <td>{index + 1}</td>
                      <td>{rec.sujet || "N/A"}</td>
                     
                      <td>
                        {rec.status.charAt(0).toUpperCase() +
                          rec.status.slice(1)}
                      </td>
                      <td>{rec.description || "N/A"}</td>
                      <td>
                        {rec.created_at
                          ? new Date(rec.created_at).toLocaleDateString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No reclamations found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryOperationsPage;
