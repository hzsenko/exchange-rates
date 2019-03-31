import {
  CHANGE_SELECTED_CURRENCY,
  FETCH_CURRENCIES_FAILED,
  FETCH_CURRENCIES_SUCCESS,
  LOADING_CURRENCIES
} from "./actions";

const defaultState = {
  selectedCurrency: '',
  currencies: {
    values: [],
    errors: null,
    loaded: false
  },
};

const CurrencyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_CURRENCY:
      return {
        ...state, selectedCurrency: action.payload
      };
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: {
          ...state.currencies,
          values: action.payload,
          loaded: true,
          errors: null
        }
      };
    case FETCH_CURRENCIES_FAILED:
      return {
        ...state,
        currencies: {
          ...state.currencies,
          values: [],
          errors: action.payload,
          loaded: true
        },
      };
    case LOADING_CURRENCIES:
      return {
        ...state,
        currencies: {
          ...state.currencies,
          loaded: action.payload
        }
      };
    default:
      return state;
  }
};

export default CurrencyReducer;