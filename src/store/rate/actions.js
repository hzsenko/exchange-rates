export const FETCH_RATE_SUCCESS = 'FETCH_RATE_SUCCESS';
export const LOADING_RATE = 'LOADING_RATE';

export const fetchRateSuccess = (currency) => ({
  type: FETCH_RATE_SUCCESS,
  payload: {
    currency: currency,
    data: [
      { currency: 'USD', value: 65 },
      { currency: 'EUR', value: 75 },
      { currency: 'KZT', value: 15 }
    ]
  }
});

export const asyncGetRate = (currency) => dispatch => {
  dispatch(loadingRate());
  setTimeout(() => {
    dispatch(fetchRateSuccess(currency));
  }, 1000);
};

export const loadingRate = () => ({
  type: LOADING_RATE,
  payload: false
});
