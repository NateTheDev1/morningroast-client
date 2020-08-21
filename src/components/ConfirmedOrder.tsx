import React, { useEffect } from "react";
import "./ConfirmedOrder.css";
import { useSelector } from "react-redux";
import { setTimeout } from "timers";
import { useHistory } from "react-router-dom";

const ConfirmedOrder = () => {
  const orderConfirm = useSelector(
    (state: any) => state.cartReducer.confirmation
  );

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 10000);
  }, []);

  if (orderConfirm.length < 1) {
    history.push("/");
  }

  return (
    <div className="confirmed-order">
      <h2>Thank You For Your Order Valued Customer!</h2>
      <p>Order Confirmation: {orderConfirm}</p>
      <p>Estimated Delivery Time: 23 Minutes</p>
      <p>You Will Automatically Redirected in 10 seconds</p>
    </div>
  );
};

export default ConfirmedOrder;
