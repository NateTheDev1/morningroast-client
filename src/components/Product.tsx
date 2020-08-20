import React from "react";
import "./Product.css";

type ProductType = {
  id: number;
  image: string;
  price: number;
  title: string;
};

const Product = ({ productInfo }: { productInfo: ProductType }) => {
  return (
    <div className="product-card" key={productInfo.id}>
      <img src={productInfo.image} alt={productInfo.title} />
      <h2>{productInfo.title}</h2>
      <p>${productInfo.price}</p>
    </div>
  );
};

export default Product;
