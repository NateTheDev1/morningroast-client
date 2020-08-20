import React, { useState } from "react";
import "./Product.css";
import LazyLoad from "react-lazyload";
import { useDispatch } from "react-redux";
import { updateCart } from "../actions/cart";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

type ProductType = {
  id: number;
  image: string;
  price: number;
  title: string;
};

const Product = ({ productInfo }: { productInfo: ProductType }) => {
  const dispatch = useDispatch();

  const [alertOpen, setAlertOpen] = useState(false);

  // Placeholder for adding to cart
  function handleClick() {
    dispatch(updateCart(productInfo));
    setAlertOpen(true);
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <LazyLoad height={200}>
        <img src={productInfo.image} alt={productInfo.title} />
      </LazyLoad>
      <p className="title">{productInfo.title}</p>
      <p className="price">${productInfo.price}</p>
      <Snackbar
        open={alertOpen}
        autoHideDuration={1500}
        onClose={() => setAlertOpen(false)}
      >
        <Alert
          icon={false}
          onClose={() => setAlertOpen(false)}
          style={{ fontSize: "1.2rem", background: "#F47920", color: "white" }}
        >
          Added To Cart!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Product;
