import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Modern Integrity Hair Salon</h3>
            <p className="footer-description">
              Professional hairstyling services and innovative hair restoration solutions.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="footer-contact">
              <p>Book your appointment today</p>
              <p>Professional hair care services</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 Modern Integrity Hair Salon. All rights reserved.</p>
          </div>
          <div className="footer-built-by">
            <p>Website by Purple Monkey Creative Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;