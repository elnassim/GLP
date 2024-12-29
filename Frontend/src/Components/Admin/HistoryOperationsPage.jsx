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
  const [filterReclamations, setFilterReclamations] = useState("All");
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

    const fetchReclamations = async (status = 'all') => {
      try {
        const response = await api.get("/reclamations", { params: { status } });
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

  

  // Prepare Chart Data
  const chartData = {
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
          "#4caf50", // Accepted
          "#f44336", // Refused
          "#ffeb3b", // Pending
          "#2196f3", // Replied Claims
          "#ff9800", // Pending Claims
        ],
        hoverBackgroundColor: [
          "#388e3c",
          "#d32f2f",
          "#fdd835",
          "#1976d2",
          "#fb8c00",
        ],
      },
    ],
  };

  // Handle Filters
  const handleFilterRequestsChange = (e) => {
    setFilterRequests(e.target.value);
  };

  const handleFilterReclamationsChange = (e) => {
    setFilterReclamations(e.target.value);
  };

  // Filtered Data
  const filteredOperations =
    filterRequests === "All"
      ? operations
      : operations.filter((op) => op.status === filterRequests.toLowerCase());

  const filteredReclamations =
    filterReclamations === "All"
      ? reclamations
      : reclamations.filter((rec) => rec.status === filterReclamations.toLowerCase());

  return (
    <div className="history-page">
      <Sidebar />
      <div className="history-content">
        <h1 className="page-title">History of Operations</h1>

        {/* Chart Section */}
        <div className="chart-container">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => {
                      return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                  },
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>

        {/* Filters Section */}
        <div className="filters-container">
          <div className="filter-section">
            <h3>Filter Requests</h3>
            <select
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
            <h3>Filter Reclamations</h3>
            <select
              value={filterReclamations}
              onChange={handleFilterReclamationsChange}
              className="filter-select"
            >
              <option value="All">All</option>
              <option value="replied">Replied</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Operations History Table */}
        <div className="table-section">
          <h2>Operations History</h2>
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
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredOperations.length > 0 ? (
                  filteredOperations.map((operation, index) => (
                    <tr key={operation.id || index}>
                      <td>{index + 1}</td>
                      <td>
                        {operation.status.charAt(0).toUpperCase() +
                          operation.status.slice(1)}
                      </td>
                      <td>
                        {operation.description ||
                          operation.autres ||
                          "N/A"}
                      </td>
                      <td>
                        {operation.date
                          ? new Date(operation.date).toLocaleDateString()
                          : operation.created_at
                          ? new Date(operation.created_at).toLocaleDateString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No operations found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Reclamations Table */}
        <div className="table-section">
          <h2>Reclamations</h2>
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
                  <th>Description</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredReclamations.length > 0 ? (
                  filteredReclamations.map((rec, index) => (
                    <tr key={rec.id || index}>
                      <td>{index + 1}</td>
                      <td>{rec.sujet}</td>
                      <td>{rec.description.slice(0, 100)}...</td>
                      <td>
                        {rec.status.charAt(0).toUpperCase() +
                          rec.status.slice(1)}
                      </td>
                      <td>
                        {rec.created_at
                          ? new Date(rec.created_at).toLocaleDateString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No reclamations found.</td>
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