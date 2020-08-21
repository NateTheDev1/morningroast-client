import React from "react";
import Product from "./Product";

const CartRight = ({ cart }: { cart: any }) => {
  return (
    <div className="products-cart-root">
      {cart.map((product: any) => (
        <Product productInfo={product} key={product.id} cartItem={true} />
      ))}
    </div>
  );
};

export default CartRight;
