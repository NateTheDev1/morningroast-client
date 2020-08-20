import { ADD_TO_CART, UPDATE_TOTAL } from "./types";

export const updateCart = (product: any) => (dispatch: any) => {
  dispatch({ type: ADD_TO_CART, payload: product });
  dispatch({ type: UPDATE_TOTAL, payload: product.price });
};
