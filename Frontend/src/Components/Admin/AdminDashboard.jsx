import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2'; // Import Pie, Bar, and Line chart from react-chartjs-2
import { Chart as ChartJS } from 'chart.js/auto';
import './AdminDashboard.css'; // Import the custom CSS

import Sidebar from '../Sidebar.jsx';

function AdminDashboard() {
    // Data for Pie Charts (Requests and Reclamations)
    const totalRequestData = {
        labels: ['Active', 'Completed'],
        datasets: [
            {
                data: [1200, 300], // Active and Completed Requests
                backgroundColor: ['#e65c3b', '#f5b99b'], // Gradient-like effect with similar shades
                hoverOffset: 4,
                borderWidth: 1,
            },
        ],
    };

    const validationRequestData = {
        labels: ['Pending', 'Rejected', 'Approved'],
        datasets: [
            {
                data: [50, 30, 200],
                backgroundColor: ['#b9450f', '#8e2b04', '#f2984b'], // Using shades of your main color
                hoverOffset: 4,
                borderWidth: 1,
            },
        ],
    };

    const reclamationData = {
        labels: ['Resolved', 'Pending'],
        datasets: [
            {
                data: [80, 20],
                backgroundColor: ['#e65c3b', '#f5b99b'], // Similar gradient effect
                hoverOffset: 4,
                borderWidth: 1,
            },
        ],
    };

    const studentsData = {
        labels: ['Enrolled', 'Graduated', 'Dropped'],
        datasets: [
            {
                data: [500, 100, 50],
                backgroundColor: ['#e65c3b', '#f5b99b', '#b9450f'],
                hoverOffset: 4,
                borderWidth: 1,
            },
        ],
    };

    // Data for the Bar Chart (Document Type Requests)
    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Attestation de Scolarité',
                data: [12, 19, 3, 5, 2],
                backgroundColor: '#e65c3b',
                borderColor: '#b9450f',
                borderWidth: 1,
            },
            {
                label: 'Convention de Stage',
                data: [7, 3, 2, 6, 4],
                backgroundColor: '#f5b99b',
                borderColor: '#e65c3b',
                borderWidth: 1,
            },
            {
                label: 'Attestation de Réussite',
                data: [5, 8, 6, 4, 7],
                backgroundColor: '#b9450f',
                borderColor: '#8e2b04',
                borderWidth: 1,
            },
        ],
    };

    // Data for the Line Chart (Trends over Time)
    const lineChartData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], // Updated to days of the week
        datasets: [
            {
                label: 'Total Requests',
                data: [150, 170, 180, 160, 200],
                borderColor: '#b9450f',
                backgroundColor: 'rgba(185, 69, 15, 0.2)',
                tension: 0.4,
                fill: true,
            },
            {
                label: 'Reclamations',
                data: [50, 60, 70, 90, 110],
                borderColor: '#e65c3b',
                backgroundColor: 'rgba(230, 92, 59, 0.2)',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    return (
        <div className="admin-dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <h1 className="dashboard-title">Admin Dashboard</h1>

                {/* Container for Bar and Line charts - Placing them at the top */}
                <div className="charts-container">
                    <div className="bar-chart-card">
                    <h3 className="chart-title">Document Requests Monthly</h3>

                        <Bar data={barChartData} options={{
                            responsive: true,
                            plugins: {
                                legend: { position: 'top' },
                                tooltip: {
                                    callbacks: {
                                        label: (tooltipItem) => {
                                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                                        },
                                    },
                                },
                            },
                        }} />
                    </div>

                    <div className="line-chart-card">
                        <h3 className="chart-title">Trends Over Time</h3>
                        <Line data={lineChartData} options={{
                            responsive: true,
                            plugins: {
                                legend: { position: 'top' },
                                tooltip: {
                                    callbacks: {
                                        label: (tooltipItem) => {
                                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                                        },
                                    },
                                },
                            },
                        }} />
                    </div>
                </div>

                {/* Adding space between the first set of charts and the Pie charts */}
                <div className="space-between-charts"></div>

                <div className="stats-cards">
                    <div className="chart-card">
                        <h3>Total Requests</h3>
                        <Pie data={totalRequestData} options={{
                            responsive: true,
                            plugins: {
                                legend: { position: 'top' },
                                tooltip: {
                                    callbacks: {
                                        label: (tooltipItem) => {
                                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                                        },
                                    },
                                },
                            },
                        }} />
                    </div>

                    <div className="chart-card">
                        <h3>Validation Requests</h3>
                        <Pie data={validationRequestData} options={{
                            responsive: true,
                            plugins: {
                                legend: { position: 'top' },
                                tooltip: {
                                    callbacks: {
                                        label: (tooltipItem) => {
                                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                                        },
                                    },
                                },
                            },
                        }} />
                    </div>

                    <div className="chart-card">
                        <h3>Total Reclamations</h3>
                        <Pie data={reclamationData} options={{
                            responsive: true,
                            plugins: {
                                legend: { position: 'top' },
                                tooltip: {
                                    callbacks: {
                                        label: (tooltipItem) => {
                                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                                        },
                                    },
                                },
                            },
                        }} />
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
