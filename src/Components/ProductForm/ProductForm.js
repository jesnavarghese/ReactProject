import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductForm.css";

export const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isUpdating = Boolean(id);

  const [newproduct, setNewproduct] = useState({
    name: "",
    price: "",
    image: "",
    rating: "",
    description: "",
    extraDescription: "",
  });

  const [showUpdateButtons, setShowUpdateButtons] = useState(false);

  useEffect(() => {
    if (isUpdating) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/products/${id}`
          );
          setNewproduct(response.data);
        } catch (error) {
          console.log("Error fetching product: ", error);
        }
      };
      fetchProduct();
    }
  }, [id, isUpdating]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewproduct((prevProduct) => ({
      ...prevProduct,
      [name]:
        name === "price" || name === "rating" ? parseFloat(value) || "" : value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (isUpdating) {
        await axios.put(`http://localhost:8000/products/${id}`, newproduct);
        alert("Product updated successfully!");
      } else {
        await axios.post("http://localhost:8000/products", {
          ...newproduct,
          id: parseInt(newproduct.id, 10),
        });
        alert("Product added successfully");
      }
      navigate("/shop");
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to add product.");
    }
  }

 

  const handleCancel = () => {
    navigate("/shop");
  };

  return (
    <div className="product-page">
      <form onSubmit={handleSubmit} className="product-form">
        <h2 className="form-title">
          {" "}
          {isUpdating ? "Update Product" : "Create New Product"}
        </h2>

        <div className="form-group">
          <label>Product Name</label>
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
        <label>Product Price</label>
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
        <label>Image URL</label>
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
        <label>Product Rating</label>
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

        <div className="form-group">
        <label>Product Description</label>
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
            placeholder="product description"
            value={newproduct.extraDescription}
            onChange={(e) =>
              setNewproduct({ ...newproduct, extraDescription: e.target.value })
            }
           
          />
        </div>
        <div className="createproduct-button">
          {!isUpdating && <button type="submit">Create</button>}

          {!isUpdating && (
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>

        <div className="update-button">
          {isUpdating && !showUpdateButtons && (
            <button type="button" onClick={handleSubmit}>
              {" "}
              Update
            </button>
          )}

          {isUpdating && !showUpdateButtons && (
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
