import React from 'react';

export default () => {
  return (
    <footer>
    <div className="container">
      <nav className="footer-nav">
        <div className="row">
          <div className="col-md-3">
            <h3 className="footer-nav-title">CUSTOMER SERVICE</h3>
              <a className="footer-nav-link">Contact Us</a>
              <a className="footer-nav-link">Payment</a>
              <a className="footer-nav-link">Payment</a>
              <a className="footer-nav-link">Returns</a>
              <a className="footer-nav-link">Faqs</a>
              <a className="footer-nav-link">Live Chat</a>
              <a className="footer-nav-link">The Burberry App</a>
              <a className="footer-nav-link">Store Locator</a>
          </div>
          <div className="col-md-3">
            <h3 className="footer-nav-title">OUR COMPANY</h3>
              <a className="footer-nav-link">Our History</a>
              <a className="footer-nav-link">Burberry Group Plc</a>
              <a className="footer-nav-link">Careers</a>
              <a className="footer-nav-link">Corporate Responsibility</a>
              <a className="footer-nav-link">Site Map</a>
          </div>
          <div className="col-md-3">
            <h3 className="footer-nav-title">LEGAL & COOKIES</h3>
              <a className="footer-nav-link">Terms & Conditions</a>
              <a className="footer-nav-link">Privacy Policy</a>
              <a className="footer-nav-link">Cookie Policy</a>
              <a className="footer-nav-link">Accessibility Statement</a>
              <a className="footer-nav-link">Japan Only - SCTL indications</a>
          </div>
        </div>
      </nav>
      <div className="footer-language-buttons">
        <button className="footer-language-button" type="button">Shipping country: RussiaFederation</button>
        <button className="footer-language-button" type="button">Language: English</button>
      </div>
      <h2 className="footer-needhelp">Need help?</h2>
      <a className="footer-contact">Find out more and contact us</a>
    </div>
    </footer>
);
};
