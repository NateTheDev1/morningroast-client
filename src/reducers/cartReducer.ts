import { ADD_TO_CART, UPDATE_TOTAL, REMOVE_FROM_CART } from "../actions/types";

const initialState = {
  cart: [],
  total: 0,
};

type Action = {
  type: string;
  payload: any;
  error: string;
};

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case UPDATE_TOTAL:
      return { ...state, total: state.total + action.payload };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload.cart,
        total: action.payload.price,
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
