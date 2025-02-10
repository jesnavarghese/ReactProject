import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";
import { deleteProduct } from "../../apis/ProductDeletion";

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
    return <h2>Product not found!!</h2>;
  }

  // const handleBuyNow = () => {
  //   alert(`Thank you for purchasing ${product.name}!`);
  // };

  // const handleAddToCart = () => {
  //   alert(`${product.name}! is added to Cart`);
  // };

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
      {product.image ? (
        <img
          className="product-detailed-image"
          src={product.image}
          alt={product.name}
        />
      ) : (
        <div className="product-placeholder-box"></div>
      )}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.extraDescription}</p>

      <h4>Rp {product.price.toFixed(3)}</h4>
      <div className="service-buttons">
        <button onClick={handleUpdate}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        {/* <button onClick={handleBuyNow}>Buy Now</button>
      <button onClick={handleAddToCart}>Add To Cart</button> */}
      </div>
    </div>
  );
};
