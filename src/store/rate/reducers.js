import { FETCH_RATE_SUCCESS, LOADING_RATE } from "./actions";

const defaultState = {
  rate: null,
  loaded: null
};

const RateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_RATE_SUCCESS:
      return {
        ...state,
        rate: action.payload.data
          .find(({ currency }) => currency === action.payload.currency.value),
        loaded: true
      };
    case LOADING_RATE:
      return {
        ...state,
        loaded: false
      };
    default:
      return state;
  }
};

export default RateReducer;