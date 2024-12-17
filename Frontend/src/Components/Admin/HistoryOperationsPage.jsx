import React, { useState, useEffect } from "react";
import "./HistoryOperationsPage.css";
import Sidebar from "../Sidebar";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import api from "../../api"; // Assuming you have an Axios instance set up

function HistoryOperationsPage() {
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [requestFilter, setRequestFilter] = useState("All");
  const [reclamationFilter, setReclamationFilter] = useState("All");

  useEffect(() => {
    const fetchOperations = async () => {
      try {
        const response = await api.get("/operations"); // Replace with your actual API endpoint
        setOperations(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching operations:", error);
        setLoading(false);
      }
    };

    fetchOperations();
  }, []);

  // Filters
  const requestOperations = operations.filter((op) =>
    ["Accepted Request", "Pending Request", "Rejected Request"].includes(op.type)
  );
  const reclamationOperations = operations.filter((op) =>
    ["Reclamation Treated", "Pending Reclamation"].includes(op.type)
  );

  const filteredRequests =
    requestFilter === "All"
      ? requestOperations
      : requestOperations.filter((op) => op.type === requestFilter);

  const filteredReclamations =
    reclamationFilter === "All"
      ? reclamationOperations
      : reclamationOperations.filter((op) => op.type === reclamationFilter);

  // Chart Data
  const chartData = {
    labels: ["Accepted Requests", "Pending Requests", "Rejected Requests", "Reclamations Treated", "Pending Reclamations"],
    datasets: [
      {
        label: "Operations Summary",
        data: [
          requestOperations.filter((op) => op.type === "Accepted Request").length,
          requestOperations.filter((op) => op.type === "Pending Request").length,
          requestOperations.filter((op) => op.type === "Rejected Request").length,
          reclamationOperations.filter((op) => op.type === "Reclamation Treated").length,
          reclamationOperations.filter((op) => op.type === "Pending Reclamation").length,
        ],
        backgroundColor: ["#b9450f", "#ffd699", "#ff6666", "#b9450f", "#ffd699"],
        hoverBackgroundColor: "#8e2b04",
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="history-page">
      <Sidebar />
      <div className="history-content">
        <h1 className="page-title">History of Operations</h1>

        {/* Chart Section */}
        <div className="chart-container">
          <Bar data={chartData} />
        </div>

        {/* Requests Table */}
        <div className="table-section">
          <h2>Requests Table</h2>
          <div className="filter-container">
            <label htmlFor="request-filter">Filter Requests: </label>
            <select
              id="request-filter"
              value={requestFilter}
              onChange={(e) => setRequestFilter(e.target.value)}
              className="filter-select"
            >
              <option value="All">All</option>
              <option value="Accepted Request">Accepted</option>
              <option value="Pending Request">Pending</option>
              <option value="Rejected Request">Rejected</option>
            </select>
          </div>
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
              {filteredRequests.map((operation, index) => (
                <tr key={operation.id || index}>
                  <td>{index + 1}</td>
                  <td>{operation.type}</td>
                  <td>{operation.description}</td>
                  <td>{operation.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reclamations Table */}
        <div className="table-section">
          <h2>Reclamations Table</h2>
          <div className="filter-container">
            <label htmlFor="reclamation-filter">Filter Reclamations: </label>
            <select
              id="reclamation-filter"
              value={reclamationFilter}
              onChange={(e) => setReclamationFilter(e.target.value)}
              className="filter-select"
            >
              <option value="All">All</option>
              <option value="Reclamation Treated">Treated</option>
              <option value="Pending Reclamation">Pending</option>
            </select>
          </div>
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
              {filteredReclamations.map((operation, index) => (
                <tr key={operation.id || index}>
                  <td>{index + 1}</td>
                  <td>{operation.type}</td>
                  <td>{operation.description}</td>
                  <td>{operation.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HistoryOperationsPage;
