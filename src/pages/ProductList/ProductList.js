import React from "react";
import { ProductCard } from "../../Components/ProductCard";
import { CollectionsPage } from "../../Components/CollectionPage";
import { DeliveryDetails } from "../../Components/DeliveryDetails";
import { products } from "../../data/Products/products";
import "./ProductList.css";

export const ProductList = () => {
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
