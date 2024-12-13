import React from 'react';
import StatsCard from './Card-dash.jsx'; // Import the StatsCard component
import './AdminDashboard.css'; // Import the custom CSS

function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <div className="stats-cards">
                <StatsCard
                    title="Total Demande"
                    value="1500"
                    subValue="Active Demandes: 1200"
                    icon="📄"
                    color="blue"
                />
                <StatsCard
                    title="Type of Demandes"
                    value="300"
                    subValue="Pending: 50"
                    icon="📑"
                    color="green"
                />
                <StatsCard
                    title="Validation of Demandes"
                    value="200"
                    subValue="Validated: 180"
                    icon="✅"
                    color="yellow"
                />
                <StatsCard
                    title="Total Reclamation"
                    value="100"
                    subValue="Resolved: 80"
                    icon="⚠️"
                    color="red"
                />
            </div>
        </div>
    );
}

export default AdminDashboard;