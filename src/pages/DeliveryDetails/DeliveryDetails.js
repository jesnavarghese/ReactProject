import React from 'react'
import './DeliveryDetails.css'
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa";

export const DeliveryDetails = () => {
return (
    <div className="feature-highlights">
      <div className="feature">
        <FaTrophy className="feature-icon" />
        <div className='feature-details'>
        <h3>High Quality</h3>
        <p>Crafted from top materials</p>
        </div>
      </div>
      <div className="feature">
        <FaShieldAlt className="feature-icon" />
        <div className='feature-details'>
        <h3>Warranty Protection</h3>
        <p>Over 2 years</p>
        </div>
      </div>
      <div className="feature">
        <FaShippingFast className="feature-icon" />
        <div className='feature-details'>
        <h3>Free Shipping</h3>
        <p>Order over 150 $</p>
        </div>
      </div>
      <div className="feature">
        <FaHeadset className="feature-icon" />
        <div className='feature-details'>
        <h3>24/7 Support</h3>
        <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

