import { randomInteger } from "../../utils/utils";

export const CHANGE_SELECTED_CURRENCY = 'CHANGE_SELECTED_CURRENCY';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_FAILED = 'FETCH_CURRENCIES_FAILED';
export const LOADING_CURRENCIES = 'LOADING_CURRENCIES';

export const changeSelectedCurrency = (currency) => ({
  type: CHANGE_SELECTED_CURRENCY,
  payload: currency
});

export const fetchCurrenciesSuccess = () => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: [
    { value: 'USD', label: 'Доллар США' },
    { value: 'EUR', label: 'Евро' },
    { value: 'KZT', label: 'Казахский тенге' }
  ]
});

export const asyncGetCurrencies = () => dispatch => {
  dispatch(loadingCurrencies());
  setTimeout(() => {
    let randomCase = randomInteger(1, 2);
    switch (randomCase) {
      case 1:
        return dispatch(fetchCurrenciesSuccess());
      case 2:
        return dispatch(fetchCurrenciesFailed());
      default:
        return true
    }
  }, 3000);
};


export const fetchCurrenciesFailed = () => ({
  type: FETCH_CURRENCIES_FAILED,
  payload: {
    type: 'error',
    errorText: 'Произошла ошибка при загрузке списков валют'
  }
});

export const loadingCurrencies = () => ({
  type: LOADING_CURRENCIES,
  payload: false
});


