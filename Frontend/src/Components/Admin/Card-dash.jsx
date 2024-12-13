import React from 'react';
import './Card-dash.css';

// StatsCard component for displaying individual stats like Today's Money, Users, Sales
const StatsCard = ({ title, value, subValue, icon, color }) => (
  <div className={`stats-card ${color}`}>
    <div className="card-header">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
    </div>
    <div className="card-body">
      <h4>{value}</h4>
      <p>{subValue}</p>
    </div>
  </div>
);

export default StatsCard;
