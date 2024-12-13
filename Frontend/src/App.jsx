import React from 'react';
import LandingPage from './Components/LandingPage.jsx';
import Formulate from './Components/Student/Formulate.jsx';
import FormulateSelection from './Components/Student/FormulateSelection.jsx';
import DemandeForm from './Components/Student/DemandeForm.jsx';
import ReclamationForm from './Components/Student/ReclamationForm.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ContactUs from './Components/ContactUs.jsx';
import AdminLogin from './Components/Admin/AdminLogin.jsx';
import AdminDashboard from './Components/Admin/AdminDashboard.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                
                <Route path="/formulate" element={<Formulate />}>
                <Route index element={<FormulateSelection />} />
                    <Route path="demande" element={<DemandeForm />} />
                    <Route path="reclamation" element={<ReclamationForm />} />
                </Route>
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                {/* Add other routes as needed */}
                <Route path="/AdminLogin" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="*" element={<LandingPage />} />

            </Routes>
        </Router>
    );
}

export default App;