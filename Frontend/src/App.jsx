import React from 'react';
import { Navigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';
import Formulate from './Components/Student/Formulate.jsx';
import FormulateSelection from './Components/Student/FormulateSelection.jsx';
import DemandeForm from './Components/Student/DemandeForm.jsx';
import ReclamationForm from './Components/Student/ReclamationForm.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ContactUs from './Components/ContactUs.jsx';
import AdminLogin from './Components/Admin/AdminLogin.jsx';
import AdminDashboard from './Components/Admin/AdminDashboard.jsx';
import Sidebar from './Components/Sidebar.jsx';
import ProfilePage from './Components/Admin/ProfilePage.jsx';
import ModifyProfilePage from './Components/Admin/ModifyProfilePage.jsx';
import RequestsPage from './Components/Admin/RequestsPage.jsx';
import ChangePasswordPage from './Components/Admin/ChangePasswordPage.jsx';
import ReclamationPage from './Components/Admin/ReclamationPage.jsx';
import ReclamationReplyPage from './Components/Admin/ReclamationReplyPage.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const isAuthenticated = !!localStorage.getItem('authToken');

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Sidebar" element={<Sidebar />} />
                <Route path="/formulate" element={<Formulate />}>
                    {/* ...existing nested routes... */}
                </Route>
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                {/* Admin Routes */}
                <Route path="/AdminLogin" element={<AdminLogin />} />
                <Route 
                    path="/admin-dashboard" 
                    element={
                        isAuthenticated ? <AdminDashboard /> : <Navigate to="/AdminLogin" replace />
                    } 
                />
                <Route 
                    path="/modify-profile" 
                    element={
                        isAuthenticated ? <ModifyProfilePage /> : <Navigate to="/AdminLogin" replace />
                    }
                />
                <Route 
                    path="/change-password" 
                    element={
                        isAuthenticated ? <ChangePasswordPage /> : <Navigate to="/AdminLogin" replace />
                    }
                />
                <Route 
                    path="/demandes" 
                    element={
                        isAuthenticated ? <RequestsPage /> : <Navigate to="/AdminLogin" replace />
                    }
                />
                <Route 
                    path="/reclamation" 
                    element={
                        isAuthenticated ? <ReclamationPage /> : <Navigate to="/AdminLogin" replace />
                    }
                />
                <Route 
                    path="/reclamation/:id" 
                    element={
                        isAuthenticated ? <ReclamationReplyPage /> : <Navigate to="/AdminLogin" replace />
                    }
                />
                <Route 
                    path="/profile" 
                    element={
                        isAuthenticated ? <ProfilePage /> : <Navigate to="/AdminLogin" replace />
                    }
                />
                {/* Fallback Route */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;