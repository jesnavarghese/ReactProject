import React from "react";
import { useParams } from "react-router-dom";
import {products} from '../../data/Products';
import './ProductDetails.css'

export const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const handleBuyNow = () => {
    alert(`Thank you for purchasing ${product.name}!`);
  };

  const handleAddToCart = () => {
    alert(`${product.name}! is added to Cart`);
  };


  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

