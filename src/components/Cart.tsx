import React, { useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// If you want to use the provided css
import "react-google-places-autocomplete/dist/index.min.css";
import { UPDATE_TOTAL } from "../actions/types";
import CartRight from "./CartRight";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cartReducer.cart);
  const total = useSelector((state: any) => state.cartReducer.total);
  const [address, setAddress] = useState("");

  const handleAddress = (e: any) => {
    setAddress(e.description);
    dispatch({ type: UPDATE_TOTAL, payload: 3.99 });
  };

  return (
    <div className="cart-root">
      <div className="cart-left">
        <h2>Review Order ({cart.length})</h2>
        <hr style={{ width: "75%", margin: 0 }} />
        <p>
          {total > 0
            ? "Choose A Delivery Address"
            : "Please Add Items To Your Cart First"}
        </p>
        <GooglePlacesAutocomplete
          required
          inputStyle={{ width: "75%", borderRadius: "15px" }}
          disabled={total <= 0}
          onSelect={(e) => handleAddress(e)}
          autocompletionRequest={{
            componentRestrictions: {
              country: ["us"],
            },
          }}
        />
        {address.length > 0 && (
          <div className="delivery-fee-root">
            <p className="del-title">Delivery Fee - 3.99</p>

            {cart.map((product: any) => {
              return (
                <div>
                  <p className="del-title">
                    {product.title} - ${product.price}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <p className="total">Total: ${total.toFixed(2)}</p>
        <button
          className="checkout-btn"
          disabled={address.length > 0 ? false : true}
        >
          {address.length > 0 ? "Complete Order" : "Missing Address"}
        </button>
      </div>
      <div className="cart-right">
        {cart.length > 0 && <CartRight cart={cart} />}
      </div>
    </div>
  );
};

export default Cart;
