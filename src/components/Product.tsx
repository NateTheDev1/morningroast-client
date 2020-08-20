import React from "react";
import "./Product.css";

type ProductType = {
  id: number;
  image: string;
  price: number;
  title: string;
};

const Product = ({ productInfo }: { productInfo: ProductType }) => {
  return <div className="product-card"></div>;
};

export default Product;
