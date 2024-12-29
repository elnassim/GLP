// ContactUs.jsx
import React from "react";
import "./ContactUs.css";
import Navbar from './Navbar.jsx';
function ContactUs() {
  return (
    <div className="contactus-page">
      
      {/* Background section */}
      <div className="contactus-background"></div>
      {<Navbar />}
      {/* Main content */}
      <div className="contactus-container">
        <div className="contactus-header">
          <h1 className="contactus-title">Contact-Us</h1>
        </div>
        <div className="contactus-content">
          <p>

          Do you have any questions or need assistance? Our team is here to help. Contact us through the methods below, and we will respond as quickly as possible.          </p>
          <p>
            Email : <a href="mailto:support@nasym.com">support@nasym.com</a>
          </p>
          <p>
            Phone : +212 123 456 789
          </p>
          <p>
            Adress : 123 Students' Street, Tetouan, Morocco.
          </p>
        </div>
        <div className="contactus-footer">
          <p>© 2024 Nasym. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
