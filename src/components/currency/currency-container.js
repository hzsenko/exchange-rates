import React, { Component } from 'react';
import Currency from './currency';
import { connect } from 'react-redux';
import { asyncGetCurrencies, changeSelectedCurrency, } from '../../store/currency/actions';
import { asyncGetRate } from "../../store/rate/actions";

class CurrencyContainer extends Component {
  render() {
    const {
      selectedCurrency, currencies, rate,
      fetchCurrencies,
      changeSelectedCurrency,
      fetchRate
    } = this.props;

    return (
      <Currency selectedCurrency={ selectedCurrency }
                currencies={ currencies }
                rate={ rate }
                changeSelectedCurrency={ changeSelectedCurrency }
                fetchCurrencies={ fetchCurrencies }
                fetchRate={ fetchRate }
      />
    )
  }
}

const mapStateToProps = state => {
  const { currency, rate } = state;
  return {
    selectedCurrency: currency.selectedCurrency,
    currencies: currency.currencies,
    rate: rate
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedCurrency: value => dispatch(changeSelectedCurrency(value)),
    fetchCurrencies: () => dispatch(asyncGetCurrencies()),
    fetchRate: currency => dispatch(asyncGetRate(currency))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyContainer);