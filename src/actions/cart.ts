import { ADD_TO_CART, UPDATE_TOTAL, REMOVE_FROM_CART } from "./types";

export const updateCart = (product: any) => (dispatch: any) => {
  dispatch({ type: ADD_TO_CART, payload: product });
  dispatch({ type: UPDATE_TOTAL, payload: product.price });
};

export const removeFromCart = (cart: Array<Object>, productId: number) => (
  dispatch: any
) => {
  let newCart: Array<Object> = cart.filter(
    (prod: any) => prod.id !== productId
  );
  let newPrice = 0;
  newCart.forEach((product: any) => {
    newPrice += product.price;
  });

  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cart: newCart, price: newPrice },
  });
};
