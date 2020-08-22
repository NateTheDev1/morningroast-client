import React from "react";
import "./ConfirmedOrder.css";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

const ConfirmedOrder = () => {
  const orderConfirm = useSelector(
    (state: any) => state.cartReducer.confirmation
  );

  const history = useHistory();

  const user = useSelector((state: any) => state.globalReducer.user);

  if (orderConfirm.length < 1) {
    history.push("/");
  }

  return (
    <div className="confirmed-order">
      <h2>Thank You For Your Order {user.username}</h2>
      <p>Order Confirmation: {orderConfirm}</p>
      <p>Estimated Delivery Time: 23 Minutes</p>
      <p>You Will Not Be Automatically Redirected</p>
    </div>
  );
};

export default ConfirmedOrder;
