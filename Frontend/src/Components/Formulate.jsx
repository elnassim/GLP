// Frontend/src/Components/Formulate.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Formulate.css';
import Navbar from './Navbar.jsx';

function Formulate() {

    return (
        
        <div className="formulate-page" >
            {<Navbar />}
            {/* Background */}
            <div className="formul-background"></div>
            
            {/* Main Content */}
            <div className="formulate-container">
                
                <Outlet />
            </div>
        </div>
    );
}

export default Formulate;
