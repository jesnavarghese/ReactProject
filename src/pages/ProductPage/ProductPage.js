import React from "react";
import {products} from '../../data/Products'
import {ProductCard} from '../../Components/ProductCard'

export const ProductPage = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


