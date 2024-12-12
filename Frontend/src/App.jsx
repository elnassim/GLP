import React from 'react';
import LandingPage from './Components/LandingPage.jsx';
import Formulate from './Components/Formulate.jsx';
import FormulateSelection from './Components/FormulateSelection.jsx';
import DemandeForm from './Components/DemandeForm.jsx';
import ReclamationForm from './Components/ReclamationForm.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ContactUs from './Components/ContactUs.jsx';
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
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </Router>
    );
}

export default App;