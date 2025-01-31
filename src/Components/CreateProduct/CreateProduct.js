import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateProduct.css";

export const CreateProduct = () => {
  const [newproduct, setNewproduct] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
    rating: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/products", {
        ...newproduct,
        id: parseInt(newproduct.id, 10),
        price: parseFloat(newproduct.price),
        rating: parseFloat(newproduct.rating),
      });
      alert(`product "${response.data.product.name}" added successfully`);
      navigate("/shop");
    } catch (error) {
      console.error("Error adding product", error);
      alert(
        `Failed to add product: ${error.response?.data?.error || error.message}`
      );
    }
  }
  return (
    <div className="create-product-page">
      
      <form onSubmit={handleSubmit} className="create-product-form">
      <h2 className="form-title">Create New Product</h2>
        <div className="form-group">
          <input
            type="number"
            placeholder="product ID"
            value={newproduct.id || ""}
            onChange={(e) =>
              setNewproduct({ ...newproduct, id: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="product name"
            value={newproduct.name}
            onChange={(e) =>
              setNewproduct({ ...newproduct, name: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            step="0.01"
            placeholder="product price"
            value={newproduct.price || ""}
            onChange={(e) =>
              setNewproduct({ ...newproduct, price: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="product description"
            value={newproduct.description}
            onChange={(e) =>
              setNewproduct({ ...newproduct, description: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="product image URL"
            value={newproduct.image}
            onChange={(e) =>
              setNewproduct({ ...newproduct, image: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            placeholder="product rating"
            value={newproduct.rating || ""}
            onChange={(e) =>
              setNewproduct({ ...newproduct, rating: e.target.value })
            }
            required
          />
        </div>

        <button className="createproduct-button" type="submit">Add Product</button>
      </form>
    </div>
  );
};
