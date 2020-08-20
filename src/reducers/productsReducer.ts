import { FETCH_PRODUCTS_OK, FETCH_PRODUCTS_FAIL } from "../actions/types";

const initialState = {
  products: [],
  error: "",
};

type Action = {
  type: string;
  payload: any;
  error: string;
};

const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_OK:
      return { ...state, loading: false, products: action.payload };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
};

export default productsReducer;
