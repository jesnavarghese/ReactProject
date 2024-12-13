import React from 'react'
import './DetailFooter.css'



export const DetailFooter = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h3>Funiro.</h3>
        <address>
          400 University Drive Suite 200 Coral Gables,<br />
          FL 33134 USA
        </address>
      </div>
      <div className="footer-section">
        <h4>Links</h4>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Help</h4>
        <ul>
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Newsletter</h4>
        <div className="newsletter">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="newsletter-input"
          />
          <button className="newsletter-button">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};




