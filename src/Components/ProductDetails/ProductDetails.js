import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { products } from "../../data/Products/products";
import "./ProductDetails.css";
import axios from "axios";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  async function getProductUsingId() {
    try {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProductUsingId();
  }, []);

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
      <p>${product.price.toFixed(3)}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};
