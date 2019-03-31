import React from 'react';
import Currency from './Currency';
import { connect } from 'react-redux';
import { asyncGetCurrencies, changeSelectedCurrency, } from '../../store/currency/actions';
import { asyncGetRate } from "../../store/rate/actions";

class CurrencyContainer extends React.Component {
  render() {
    return (
      <Currency selectedCurrency={ this.props.selectedCurrency }
                currencies={ this.props.currencies }
                changeSelectedCurrency={ this.props.changeSelectedCurrency }
                fetchCurrencies={ this.props.fetchCurrencies }
                fetchRate={ this.props.fetchRate }
                rate={ this.props.rate }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCurrency: state.currency.selectedCurrency,
    currencies: state.currency.currencies,
    rate: state.rate
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedCurrency: (value) => {
      dispatch(changeSelectedCurrency(value));
    },
    fetchCurrencies: () => {
      dispatch(asyncGetCurrencies());
    },
    fetchRate: (currency) => {
      dispatch(asyncGetRate(currency));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyContainer);