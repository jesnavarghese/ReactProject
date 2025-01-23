import React, { useEffect, useState } from "react";
import { ProductCard } from "../../Components/ProductCard";
import { CollectionsPage } from "../../Components/CollectionPage";
import { DeliveryDetails } from "../../Components/DeliveryDetails";
// import { products } from "../../data/Products/products";
import "./ProductList.css";
import axios from "axios";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    try {
      const response = await axios.get("http://localhost:8000/products");
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <CollectionsPage />

      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <DeliveryDetails />
    </div>
  );
};
