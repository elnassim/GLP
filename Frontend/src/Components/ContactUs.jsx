// ContactUs.jsx
import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contactus-page">
      {/* Background section */}
      <div className="contactus-background"></div>

      {/* Main content */}
      <div className="contactus-container">
        <div className="contactus-header">
          <h1 className="contactus-title">Contactez-Nous</h1>
        </div>
        <div className="contactus-content">
          <p>
            Vous avez des questions ou besoin d’assistance ? Notre équipe est là pour vous aider. Contactez-nous via les moyens ci-dessous, et nous vous répondrons dans les plus brefs délais.
          </p>
          <p>
            Email : <a href="mailto:support@nasym.com">support@nasym.com</a>
          </p>
          <p>
            Téléphone : +212 123 456 789
          </p>
          <p>
            Adresse : 123 Rue des Étudiants, Tétouan, Maroc.
          </p>
        </div>
        <div className="contactus-footer">
          <p>© 2024 Nasym. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
