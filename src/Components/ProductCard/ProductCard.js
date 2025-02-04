import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";

import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        {product.image ? (
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        ) : (
          <div className= "placeholder-box" />  
          
        )}
        
        <div className="product-card-details">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h4>Rp {product.price.toFixed(3)}</h4>
        </div>
      </div>
    </Link>
  );
};
