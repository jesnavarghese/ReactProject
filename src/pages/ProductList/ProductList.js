import React from "react";
import {products} from '../../data/Products'
import {ProductCard} from '../../Components/ProductCard'
import {CollectionsPage} from '../../Components/CollectionPage'
import {DeliveryDetails} from '../../Components/DeliveryDetails'



export const ProductList = () => {
  return (
    <div>
      <CollectionsPage />
    
    <div className="product-list">

      
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <DeliveryDetails/>
    </div>
  );
};


