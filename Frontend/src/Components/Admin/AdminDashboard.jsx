import React, { useEffect, useState } from "react";
import { Pie, Bar, Radar, PolarArea } from "react-chartjs-2";
import Sidebar from "../Sidebar.jsx";
import api from "../../api"; // Axios instance for fetching data
import "./AdminDashboard.css"; // Import custom CSS

/***
 * Box-based Statistics Summary Subcomponent
 ***/
function StatisticsSummary({ demandesData, reclamationsDataStats }) {
  return (
    <div className="statistics-summary">
      <h3>Statistics Summary</h3>

      {/* Each statistic as a box with consistent background theme */}
      <div className="stat-box">
        <span className="stat-title">Total Requests</span>
        <span className="stat-value">{demandesData.total}</span>
      </div>

      <div className="stat-box">
        <span className="stat-title">Pending Requests</span>
        <span className="stat-value">{demandesData.pending}</span>
      </div>

      <div className="stat-box">
        <span className="stat-title">Accepted Requests</span>
        <span className="stat-value">{demandesData.accepted}</span>
      </div>

      <div className="stat-box">
        <span className="stat-title">Refused Requests</span>
        <span className="stat-value">{demandesData.refused}</span>
      </div>

      <div className="stat-box">
        <span className="stat-title">Total Reclamations</span>
        <span className="stat-value">{reclamationsDataStats.total}</span>
      </div>

      <div className="stat-box">
        <span className="stat-title">Pending Reclamations</span>
        <span className="stat-value">{reclamationsDataStats.pending}</span>
      </div>

      <div className="stat-box">
        <span className="stat-title">Replied Reclamations</span>
        <span className="stat-value">{reclamationsDataStats.replied}</span>
      </div>
    </div>
  );
}

/***
 *          Main AdminDashboard
 ***/
function AdminDashboard() {
  const [statistics, setStatistics] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await api.get("/admin/statistics");
        if (response.data.success) {
          setStatistics(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch statistics");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching statistics. Please try again.");
      }
    };

    fetchStatistics();
  }, []);

  if (!statistics && !error) return <p>Loading statistics...</p>;
  if (error) return <p className="error-message">{error}</p>;

  // Helpers to build chart data
  const createPieData = (labels, data, colors) => ({
    labels,
    datasets: [
      {
        data: data || [0, 0],
        backgroundColor: colors,
        hoverOffset: 10,
      },
    ],
  });

  const createBarData = (labels, datasets) => ({
    labels,
    datasets,
  });

  const createRadarData = (labels, datasets) => ({
    labels,
    datasets,
  });

  const createPolarAreaData = (labels, data, colors) => ({
    labels,
    datasets: [
      {
        data: data || [0, 0],
        backgroundColor: colors,
      },
    ],
  });

  // Extract data
  const demandesData = statistics?.demandes || { pending: 0, refused: 0, accepted: 0, total: 0 };
  const reclamationsDataStats = statistics?.reclamations || { replied: 0, pending: 0, total: 0 };
  const trendsData = statistics?.trends || { demandesByDate: [], reclamationsByDate: [] };

  // Pie Chart: Validation Requests
  const validationRequestsData = createPieData(
    ["Pending", "Rejected", "Approved"],
    [demandesData.pending, demandesData.refused, demandesData.accepted],
    ["#e65c3b", "#f5b99b", "#b9450f"]
  );

  // Pie Chart: Reclamations Status
  const reclamationsPieData = createPieData(
    ["Resolved", "Pending"],
    [reclamationsDataStats.replied, reclamationsDataStats.pending],
    ["#4caf50", "#ff9800"]
  );

  // Polar Area Chart
  const polarAreaChartData = createPolarAreaData(
    ["Pending Requests", "Accepted Requests", "Refused Requests", "Replied Reclamations", "Pending Reclamations"],
    [
      demandesData.pending,
      demandesData.accepted,
      demandesData.refused,
      reclamationsDataStats.replied,
      reclamationsDataStats.pending,
    ],
    ["#ff9800", "#4caf50", "#f44336", "#2196f3", "#ffeb3b"]
  );

  // Bar Chart Data
  const mergedDates = [
    ...new Set([
      ...trendsData.demandesByDate.map((item) => item.date),
      ...trendsData.reclamationsByDate.map((item) => item.date),
    ]),
  ];
  const barChartData = createBarData(mergedDates, [
    {
      label: "Requests",
      data: mergedDates.map((date) => {
        const demande = trendsData.demandesByDate.find((d) => d.date === date);
        return demande ? demande.count : 0;
      }),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Reclamations",
      data: mergedDates.map((date) => {
        const reclamation = trendsData.reclamationsByDate.find((r) => r.date === date);
        return reclamation ? reclamation.count : 0;
      }),
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
  ]);

  // Radar Chart Data
  const radarChartData = createRadarData(["Requests", "Reclamations"], [
    {
      label: "Pending",
      data: [demandesData.pending, reclamationsDataStats.pending],
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
    {
      label: "Completed",
      data: [demandesData.accepted, reclamationsDataStats.replied],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ]);

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Admin Dashboard</h1>

        <StatisticsSummary
          demandesData={demandesData}
          reclamationsDataStats={reclamationsDataStats}
        />

        {/* Charts Section */}
        <div className="charts-section">
          {/* Pie Chart: Validation Requests */}
          <div className="chart-card">
            <h3>Validation Requests</h3>
            <Pie data={validationRequestsData} />
          </div>

          {/* Pie Chart: Reclamations Status */}
          <div className="chart-card">
            <h3>Reclamations Status</h3>
            <Pie data={reclamationsPieData} />
          </div>

          {/* Polar Area Chart */}
          <div className="chart-card">
            <h3>Overall Status</h3>
            <PolarArea data={polarAreaChartData} />
          </div>

          {/* Bar Chart */}
          <div className="chart-card">
            <h3>Requests & Reclamations Over Time</h3>
            <Bar data={barChartData} />
          </div>

          {/* Radar Chart */}
          <div className="chart-card">
            <h3>Status Comparison</h3>
            <Radar data={radarChartData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;