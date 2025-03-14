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
import Sidebar from './Components/Sidebar.jsx';
import RequestsPage from './Components/Admin/RequestsPage.jsx';
import ReclamationPage from './Components/Admin/ReclamationPage.jsx'
import ReclamationReplyPage from './Components/Admin/ReclamationReplyPage.jsx'
import HistoryOperationsPage from './Components/Admin/HistoryOperationsPage.jsx';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Sidebar" element={<Sidebar />}></Route>
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
                <Route path="/demandes" element={<RequestsPage />} />
                <Route path="/reclamation" element={<ReclamationPage />} />
                <Route path="/admin/reclamation/:id/reply" element={<ReclamationReplyPage />} />
                <Route path="/admin/reclamations" element={<ReclamationPage />} />
                <Route path="/History" element={<HistoryOperationsPage/>} />
                <Route path="*" element={<LandingPage />} />

            </Routes>
        </Router>
    );
}

export default App;
