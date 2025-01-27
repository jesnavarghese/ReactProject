import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { products } from "../../data/Products/products";
import "./ProductDetails.css";
import axios from "axios";
import { deleteProduct } from "./ProductService";

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  async function handleDelete() {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${product.name}`
    );
    if (confirmDelete) {
      try {
        await deleteProduct(id);
        navigate("/shop");
      } catch (error) {
        console.error("Error in deleting product: ", error);
      }
    }
  }

  const handleUpdate = () => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(3)}</p>
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleBuyNow}>Buy Now</button>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};
