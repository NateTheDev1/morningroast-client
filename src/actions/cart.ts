import {
  ADD_TO_CART,
  UPDATE_TOTAL,
  REMOVE_FROM_CART,
  UPDATE_AMOUNT,
  UPDATE_CONFIRMATION,
} from "./types";

export const updateCart = (product: any) => (dispatch: any) => {
  const newProduct = {
    ...product,
    quantity: 1,
  };
  dispatch({ type: ADD_TO_CART, payload: newProduct });
  dispatch({ type: UPDATE_TOTAL, payload: newProduct.price });
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
    payload: { cart: newCart, price: newPrice + 3.99 },
  });
};

export const updateQuantity = (
  cart: Array<Object>,
  productId: number,
  amount: number
) => async (dispatch: any) => {
  console.log(amount);
  // change quantity to new quantity
  let newCart: any = await cart.map((product: any) => {
    if (productId === product.id) {
      product.quantity = amount;
      return product;
    } else {
      return product;
    }
  });

  let newPrice = 0.0;

  newCart.forEach((product: any) => {
    newPrice += product.price * product.quantity;
  });

  dispatch({ type: UPDATE_AMOUNT, payload: newCart, total: newPrice });
};

export const updateConfirmation = (confirmation: string) => (dispatch: any) => {
  dispatch({ type: UPDATE_CONFIRMATION, payload: confirmation });
};
