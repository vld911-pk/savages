import {
  GET_CONTINENTS_FULFILLED,
  GET_CONTINENTS_PENDING,
  GET_CONTINENTS_REJECTED,
} from "../constants/actionTypes";

const initialState = {
  continents: [],
  loading: false,
};
export const continentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENTS_PENDING:
      return { ...state, loading: true };
    case GET_CONTINENTS_REJECTED:
      return { ...state, loading: false, error: true };
    case GET_CONTINENTS_FULFILLED:
      return { ...state, continents: action.payload };
    default:
      return state;
  }
};
