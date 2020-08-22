import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import axios from "axios";
import {
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateConfirmation } from "../actions/cart";

const CheckoutForm = ({
  setPaying,
  total,
}: {
  setPaying: any;
  total: number;
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory();

  const [verifyingPayment, setVerifying] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const user = useSelector((state: any) => state.globalReducer.user);

  const dispatch = useDispatch();

  const handleBack = (e: any) => {
    e.preventDefault();
    setPaying(false);
  };

  const handlePayment = async (event: any) => {
    event.preventDefault();

    const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardElement)!,
    });

    if (!error) {
      setVerifying(true);
      const { id } = paymentMethod;

      const tempAmount = total.toString();

      const amount = tempAmount.replace(".", "").substring(0, 4);
      //
      axios
        .post("https://coorderapi.herokuapp.com/api/charge", {
          id: id,
          amount: parseInt(amount),
          title: "Coffee Delivery Order",
          total,
          customerId: user.id,
        })
        .then((res: any) => {
          setVerifying(false);

          dispatch(updateConfirmation(res.data.confirmation));
          history.push("/orderconfirmed");
        })
        .catch((err) => {
          setVerifying(false);
          setPaymentError("Card Error");
        });
    }
  };

  return (
    <form className="checkout-form" onSubmit={handlePayment}>
      <div className="checkout-form-inner">
        <h2>${total.toFixed(2)}</h2>
        {paymentError.length > 1 && (
          <p style={{ color: "red !important" }}>{paymentError}</p>
        )}
        <hr style={{ width: "100%", margin: 0, marginBottom: "5%" }} />
        <p>Credit Or Debit Card</p>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "1.5rem",
                color: "#D6752E",
                iconColor: "black",
                "::placeholder": {
                  color: "gray",
                },
              },
            },
          }}
        />

        <div className="checkout-btns">
          <button type="submit" disabled={!stripe} className="checkout-submit">
            Complete Order
          </button>
          <button onClick={handleBack} className="back-btn">
            Back To Review
          </button>
        </div>
      </div>
      {verifyingPayment && (
        <Dialog open={verifyingPayment} style={{ textAlign: "center" }}>
          <DialogTitle>Verifying Payment...</DialogTitle>
          <DialogContent>
            <CircularProgress />
          </DialogContent>
        </Dialog>
      )}
    </form>
  );
};

export default CheckoutForm;
