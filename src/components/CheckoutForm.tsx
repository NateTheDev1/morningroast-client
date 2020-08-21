import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";

const CheckoutForm = ({
  setPaying,
  total,
}: {
  setPaying: any;
  total: number;
}) => {
  const stripe = useStripe();
  const elements = useElements();

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
      const { id } = paymentMethod;
    }
  };

  return (
    <form className="checkout-form" onSubmit={handlePayment}>
      <div className="checkout-form-inner">
        <h2>${total.toFixed(2)}</h2>
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
    </form>
  );
};

export default CheckoutForm;
