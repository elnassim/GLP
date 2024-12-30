/* Frontend/src/Components/AdminDashboard.jsx */
import React, { useEffect, useState } from "react";
import { Pie, Line, Radar, PolarArea, Bar } from "react-chartjs-2"; // Importing required chart components
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
        <span className="stat-title">Total Requests </span>
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
        // Uncomment & adjust for real API call:
        // const response = await api.get("/admin/statistics");
        // if (response.data.success) {
        //   setStatistics(response.data.data);
        // } else {
        //   setError(response.data.message || "Failed to fetch statistics");
        // }

        // Dummy data for demonstration:
        setStatistics({
          demandes: { pending: 1, refused: 1, accepted: 2, total: 4 },
          reclamations: { replied: 3, pending: 1, total: 4 },
          trends: {
            demandesByDate: [
              { date: "2023-10-01", count: 2 },
              { date: "2023-10-02", count: 4 },
              { date: "2023-10-03", count: 1 },
            ],
            reclamationsByDate: [
              { date: "2023-10-01", count: 1 },
              { date: "2023-10-02", count: 2 },
              { date: "2023-10-03", count: 3 },
            ],
          },
        });
      } catch (err) {
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
        borderWidth: 1,
      },
    ],
  });
  const createRadarData = (labels, datasets) => ({ labels, datasets });
  const createPolarAreaData = (labels, data, colors) => ({
    labels,
    datasets: [{ data: data || [0, 0], backgroundColor: colors, borderWidth: 1 }],
  });
  const createBarData = (labels, datasets) => ({ labels, datasets });

  // Extract data
  const demandesData = statistics?.demandes || { pending: 0, refused: 0, accepted: 0, total: 0 };
  const reclamationsDataStats = statistics?.reclamations || { replied: 0, pending: 0, total: 0 };
  const trendsData = statistics?.trends || { demandesByDate: [], reclamationsByDate: [] };

  // Colors (darker orange degrade)
  // Let's choose some deeper oranges:
  // #FF4500 (OrangeRed), #FF7F50 (Coral), #FF8C00 (DarkOrange), #FFB347, #FFCE85, etc.

  // Pie: Validation Requests
  const validationRequestsData = createPieData(
    ["Pending", "Rejected", "Approved"],
    [demandesData.pending, demandesData.refused, demandesData.accepted],
    ['#e65c3b', '#f5b99b', '#b9450f'] 
  );

  // Pie: Reclamations Status
  const reclamationsPieData = createPieData(
    ["Resolved", "Pending"],
    [reclamationsDataStats.replied, reclamationsDataStats.pending],
    ["#e65c3b", "#f5b99b"] 
  );

  // Radar
  const radarChartData = createRadarData(
    ["Pending", "Accepted", "Refused", "Replied"],
    [
      {
        label: "Requests",
        data: [demandesData.pending, demandesData.accepted, demandesData.refused, 0],
        backgroundColor: "rgba(255, 69, 0, 0.2)", // #FF4500  alpha .2
        borderColor: "rgba(255, 69, 0, 1)",
        borderWidth: 2,
      },
      {
        label: "Reclamations",
        data: [reclamationsDataStats.pending, 0, 0, reclamationsDataStats.replied],
        backgroundColor: "rgba(180, 124, 20, 0.2)", 
        borderColor: "rgb(180, 95, 62)",
        borderWidth: 2,
      },
    ]
  );

  // Polar Area
  const polarAreaChartData = createPolarAreaData(
    ["Pending Requests", "Accepted Requests", "Refused Requests", "Pending Reclamations", "Replied Reclamations"],
    [
      demandesData.pending,
      demandesData.accepted,
      demandesData.refused,
      reclamationsDataStats.pending,
      reclamationsDataStats.replied,
    ],
    ["#FF4500", "#FF7F50", "#FF8C00", "#FFB347", "#FFCE85"] 
  );

  // Bar
  const mergedDates = [
    ...new Set([
      ...trendsData.demandesByDate.map((item) => item.date),
      ...trendsData.reclamationsByDate.map((item) => item.date),
    ]),
  ];
  const barChartData = createBarData(mergedDates, [
    {
      label: "Requests",
      data: trendsData.demandesByDate.map((item) => item.count || 0),
      backgroundColor: "rgba(255, 69, 0, 0.6)",  // #FF4500
      borderColor: "rgba(255, 69, 0, 1)",
      borderWidth: 1,
    },
    {
      label: "Reclamations",
      data: trendsData.reclamationsByDate.map((item) => item.count || 0),
      backgroundColor: "rgba(255, 127, 80, 0.6)", // #FF7F50
      borderColor: "rgba(255, 127, 80, 1)",
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

        {/* Bar Chart (First chart) */}
        <div className="first-chart-container">
          <div className="chart-card first-chart">
            <h3>Bar Chart - Requests by Date</h3>
            <Bar
              data={barChartData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" },
                },
              }}
            />
          </div>
        </div>

        {/* Next charts in 2-column layout (Radar, PolarArea, 2x Pie) */}
        <div className="charts-grid">
          {/* Radar Chart */}
          <div className="chart-card smaller-chart">
            <h3>Radar Chart - Requests & Reclamations</h3>
            <Radar
              data={radarChartData}
              options={{
                responsive: true,
                plugins: { legend: { position: "top" } },
              }}
            />
          </div>

          {/* Polar Area Chart */}
          <div className="chart-card smaller-chart">
            <h3>Polar Area Chart - Overall Status</h3>
            <PolarArea
              data={polarAreaChartData}
              options={{
                responsive: true,
                plugins: { legend: { position: "top" } },
              }}
            />
          </div>

          {/* Pie Chart: Validation Requests */}
          <div className="chart-card smaller-chart">
            <h3>Validation Requests</h3>
            <Pie
              data={validationRequestsData}
              options={{
                responsive: true,
                plugins: { legend: { position: "top" } },
              }}
            />
          </div>

          {/* Pie Chart: Reclamations Status */}
          <div className="chart-card smaller-chart">
            <h3>Reclamations Status</h3>
            <Pie
              data={reclamationsPieData}
              options={{
                responsive: true,
                plugins: { legend: { position: "top" } },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;