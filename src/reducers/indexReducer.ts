import { combineReducers } from "redux";
import {
  LOADING,
  LOGIN_USER_OK,
  LOGIN_USER_FAIL,
  LOGOUT,
  SIGN_UP_OK,
  SIGN_UP_FAIL,
  FETCH_ORDERS,
} from "../actions/types";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const initialState = {
  loading: false,
  user: null,
  user_error: "",
};

type Action = {
  type: string;
  payload: any;
  error: string;
};

const globalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case LOGIN_USER_OK:
      return { ...state, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, user_error: action.error };
    case LOGOUT:
      return { ...state, user_error: "", user: null };
    case SIGN_UP_OK:
      return { ...state, user: action.payload };
    case SIGN_UP_FAIL:
      return { ...state, user_error: action.error };
    case FETCH_ORDERS:
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
};

const indexReducer = combineReducers({
  globalReducer,
  productsReducer,
  cartReducer,
});

export default indexReducer;
