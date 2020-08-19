import { combineReducers } from "redux";
import { LOADING } from "../actions/types";

const initialState = {
  loading: false,
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
    default:
      return { ...state };
  }
};

const indexReducer = combineReducers({
  globalReducer,
});

export default indexReducer;
