import React, { useState, useEffect } from "react";
import "./Product.css";
import LazyLoad from "react-lazyload";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, removeFromCart } from "../actions/cart";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

type ProductType = {
  id: number;
  image: string;
  price: number;
  title: string;
  nutrition: object;
};

const Product = ({
  productInfo,
  cartItem = false,
}: {
  productInfo: any;
  cartItem?: boolean;
}) => {
  const dispatch = useDispatch();

  const [alertOpen, setAlertOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inCart, setInCart] = useState(false);

  const cart = useSelector((state: any) => state.cartReducer.cart);

  useEffect(() => {
    handleItem();
  }, [cart]);

  // Placeholder for adding to cart
  const handleAdd = (e: any) => {
    e.stopPropagation();
    setDialogOpen(false);
    if (!inCart) {
      dispatch(updateCart(productInfo));
      setInCart(true);
      setAlertOpen(true);
    } else {
      dispatch(removeFromCart(cart, productInfo.id));
      setInCart(false);
      setAlertOpen(true);
    }
  };

  const handleClose = (e: any) => {
    e.stopPropagation();

    setDialogOpen(false);
  };

  const handleOpen = (e: any) => {
    e.stopPropagation();
    setDialogOpen(true);
  };

  const handleItem = () => {
    if (cart.some((product: any) => product.id === productInfo.id)) {
      setInCart(true);
    }
  };

  return (
    <div className="product-card" onClick={handleOpen}>
      <LazyLoad height={200}>
        <img src={productInfo.image} alt={productInfo.title} />
      </LazyLoad>
      <p className="title">{productInfo.title}</p>
      <p className="price">${productInfo.price}</p>
      <Dialog
        onClose={handleClose}
        open={dialogOpen}
        fullWidth={true}
        maxWidth="md"
        aria-labelledby="Add Product To Cart"
      >
        <DialogTitle className="dialog-title">{productInfo.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>${productInfo.price}</DialogContentText>
          <div>
            <h2 className="n-title">Nutrition Info</h2>
            <hr className="n-divider" />
            <div className="nutrition-root">
              <p className="nutrition">Calories</p>
              <p className="nutrition-data">{productInfo.nutrition.calories}</p>
              <p className="nutrition">Cholesterol</p>
              <p className="nutrition-data">
                {productInfo.nutrition.cholesterol}
              </p>
              <p className="nutrition">Protein</p>
              <p className="nutrition-data">{productInfo.nutrition.protein}</p>
              <p className="nutrition">Fat</p>
              <p className="nutrition-data">{productInfo.nutrition.fat}</p>
              <p className="nutrition">Caffeine</p>
              <p className="nutrition-data">{productInfo.nutrition.caffeine}</p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>
            {inCart ? "Remove From Cart" : "Add To Cart"}
          </Button>
        </DialogActions>
      </Dialog>
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
          {inCart ? "Added To Cart" : "Removed From Cart"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Product;
