import React from "react";
import "./Product.css";
import LazyLoad from "react-lazyload";
import { useDispatch } from "react-redux";
import { updateCart } from "../actions/cart";

type ProductType = {
  id: number;
  image: string;
  price: number;
  title: string;
};

const Product = ({ productInfo }: { productInfo: ProductType }) => {
  const dispatch = useDispatch();

  // Placeholder for adding to cart
  function handleClick() {
    dispatch(updateCart(productInfo));
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <LazyLoad height={200}>
        <img src={productInfo.image} alt={productInfo.title} />
      </LazyLoad>
      <p className="title">{productInfo.title}</p>
      <p className="price">${productInfo.price}</p>
    </div>
  );
};

export default Product;
