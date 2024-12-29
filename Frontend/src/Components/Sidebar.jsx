import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-white.png';

// Import Material Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HistoryIcon from '@mui/icons-material/History';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon />, link: '/admin-dashboard' },
       
        { id: 'demandes', label: 'Requests', icon: <FileCopyIcon />, link: '/demandes' },
        { id: 'history', label: 'History', icon: <HistoryIcon />, link: '/history' },
        { id: 'reclamations', label: 'Reclamations', icon: <ReportProblemIcon />, link: '/reclamation' },
        { id: 'logout', label: 'Logout', icon: <LogoutIcon />, link: '/logout' },
    ];

    return (
        <div className="sidebar">
            {/* Logo Section */}
            <div className="sidebar-logo">
                <Link to="/" className="log">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            {/* User Profile Section */}
            <div className="profile-section">
                <img
                    src="https://via.placeholder.com/80"
                    alt="User Profile"
                    className="profile-pic"
                />
                <h3 className="profile-name">John Doe</h3>
                <p className="profile-rol">Administrator</p>
            </div>

            {/* Divider Line */}
            <div className="divider"></div>

            {/* Menu Items */}
            <ul className="sidebar-menu">
                {menuItems.map((item) => (
                    <li key={item.id} className="menu-item">
                        <Link to={item.link} className="menu-link">
                            {item.icon}
                            <span className="menu-label">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
