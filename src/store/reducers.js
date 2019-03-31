import { combineReducers } from "redux";
import CurrencyReducer from "./currency/reducers";
import RateReducer from "./rate/reducers";

export default combineReducers({
  currency: CurrencyReducer,
  rate: RateReducer
});

