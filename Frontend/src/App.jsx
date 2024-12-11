import React from 'react';
import LandingPage from './Components/LandingPage.jsx';
import Formulate from './Components/Formulate.jsx';
import DemandeForm from './Components/DemandeForm.jsx';
import ReclamationForm from './Components/ReclamationForm.jsx';
import AboutUs from './Components/AboutUs.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/formulate" element={<Formulate />}>
                    <Route path="demande" element={<DemandeForm />} />
                    <Route path="reclamation" element={<ReclamationForm />} />
                </Route>
                <Route path="/aboutus" element={<AboutUs />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;

