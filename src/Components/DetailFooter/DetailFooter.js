import React from 'react'
import './DetailFooter.css'

export const DetailFooter=()=> {
    return (
        <div className='Footer'>
        <div className='Footer-section'>
            <h4> Funiro.</h4>
            <address>
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
            </address>

        </div>

        <div className='Footer-section'>
            <h5>Links</h5>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
         
        </div>
        <div className="footer-section">
        <h5>Help</h5>
        <ul>
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </ul>
      </div>

      <div className="footer-section">
        <h5>Newsletter</h5>
        
          <input
            type="email"
            placeholder="Enter Your Email Address"
            
          />
          <button className="newsletter-button">SUBSCRIBE</button>
      </div>
        </div>
    )
}

