import React, { useEffect, useState } from "react";
import { Pie, Line, Radar, PolarArea, Bar } from "react-chartjs-2"; // Importing required chart components
import Sidebar from "../Sidebar.jsx";
import api from "../../api"; // Axios instance for fetching data
import "./AdminDashboard.css"; // Import custom CSS

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
                setError("Error fetching statistics. Please try again.");
            }
        };

        fetchStatistics();
    }, []);

    if (!statistics && !error) return <p>Loading statistics...</p>;
    if (error) return <p className="error-message">{error}</p>;

    // Prepare chart configurations
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

    const createLineData = (labels, datasets) => ({
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
                borderWidth: 1,
            },
        ],
    });

    const createBarData = (labels, datasets) => ({
        labels,
        datasets,
    });

    // Ensure nested data exists before accessing
    const demandesData = statistics?.demandes || { pending: 0, refused: 0, accepted: 0 };
    const reclamationsDataStats = statistics?.reclamations || { replied: 0, pending: 0 };
    const trendsData = statistics?.trends || { demandesByDate: [], reclamationsByDate: [] };

    const validationRequestsData = createPieData(
        ["Pending", "Rejected", "Approved"],
        [demandesData.pending, demandesData.refused, demandesData.accepted],
        ["#b9450f", "#8e2b04", "#f2984b"]
    );

    const reclamationsData = createPieData(
        ["Resolved", "Pending"],
        [reclamationsDataStats.replied, reclamationsDataStats.pending],
        ["#e65c3b", "#f5b99b"]
    );

    const lineChartData = createLineData(
        trendsData.demandesByDate.map((item) => item.date || "N/A"), // Dates for X-axis
        [
            {
                label: "Demandes",
                data: trendsData.demandesByDate.map((item) => item.count || 0),
                borderColor: "#4caf50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                tension: 0.4,
                fill: true,
            },
            {
                label: "Reclamations",
                data: trendsData.reclamationsByDate.map((item) => item.count || 0),
                borderColor: "#f44336",
                backgroundColor: "rgba(244, 67, 54, 0.2)",
                tension: 0.4,
                fill: true,
            },
        ]
    );

    const radarChartData = createRadarData(
        ["Pending", "Accepted", "Refused", "Replied"],
        [
            {
                label: "Demandes",
                data: [demandesData.pending, demandesData.accepted, demandesData.refused, 0],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 2,
            },
            {
                label: "Reclamations",
                data: [reclamationsDataStats.pending, 0, 0, reclamationsDataStats.replied],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 2,
            },
        ]
    );

    const polarAreaChartData = createPolarAreaData(
        ["Pending Demandes", "Accepted Demandes", "Refused Demandes", "Pending Reclamations", "Replied Reclamations"],
        [
            demandesData.pending,
            demandesData.accepted,
            demandesData.refused,
            reclamationsDataStats.pending,
            reclamationsDataStats.replied,
        ],
        ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
    );

    const barChartData = createBarData(
        [...new Set([...trendsData.demandesByDate.map(item => item.date), ...trendsData.reclamationsByDate.map(item => item.date)])], // Merge dates
        [
            {
                label: "Demandes",
                data: trendsData.demandesByDate.map(item => item.count || 0),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
            {
                label: "Reclamations",
                data: trendsData.reclamationsByDate.map(item => item.count || 0),
                backgroundColor: "rgba(153, 102, 255, 0.6)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
            },
        ]
    );

    return (
        <div className="admin-dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <h1 className="dashboard-title">Admin Dashboard</h1>

                {/* Line Chart */}
                <div className="charts-container">
                    <div className="chart-card">
                        <h3>Grouped Data Over Time</h3>
                        <Line data={lineChartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="charts-container">
                    <div className="chart-card">
                        <h3>Bar Chart - Requests by Date</h3>
                        <Bar data={barChartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                    </div>
                </div>

                {/* Radar Chart */}
                <div className="charts-container">
                    <div className="chart-card">
                        <h3>Radar Chart - Demandes and Reclamations Status</h3>
                        <Radar data={radarChartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                    </div>
                </div>

                {/* Polar Area Chart */}
                <div className="charts-container">
                    <div className="chart-card">
                        <h3>Polar Area Chart - Overall Status</h3>
                        <PolarArea data={polarAreaChartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                    </div>
                </div>

                {/* Pie Charts */}
                <div className="charts-container">
                    <div className="chart-card">
                        <h3>Validation Requests</h3>
                        <Pie data={validationRequestsData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                    </div>
                    <div className="chart-card">
                        <h3>Reclamations Status</h3>
                        <Pie data={reclamationsData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
