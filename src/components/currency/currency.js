import React, { Component } from 'react';
import Select from 'react-select';
import './currency.scss';

class Currency extends Component {

  getRate = () => this.props.fetchRate(this.props.selectedCurrency);

  getCurrencies = () => this.props.fetchCurrencies();

  handleChange = (selectedOption) => this.props.changeSelectedCurrency(selectedOption);

  renderLoading = (currencies) => {
    if (!currencies.loaded) {
      return <div className="loading">Загрузка...</div>;
    }
    return false;
  };

  renderLoadingRate = (rate) => {
    if (rate.loaded === false) {
      return <div className="loading">Получение курса...</div>;
    }
    return false;
  };

  renderRateArea = (rate) => {
    if (rate.rate && rate.loaded) {
      return (
        <div className="rate-area">
          <div className="rate-name">{ rate.rate.currency }
            <span className="rate-value">{ rate.rate.value }</span>
          </div>
        </div>
      )
    }
  };

  componentDidMount() {
    this.getCurrencies();
  }

  render() {
    const { currencies, rate, selectedCurrency } = this.props;

    const error = (currencies.errors && currencies.loaded) ? currencies.errors.errorText : null;
    const loading = this.renderLoading(currencies);
    const loadingRate = this.renderLoadingRate(rate);

    return (
      <div className="currency-container">
        <h1>Выбор валюты</h1>
        { loading }
        <div className="select-currency">
          <Select options={ currencies.values }
                  onChange={ this.handleChange }
                  value={ selectedCurrency }/>
          <div className="errors">{ error }</div>

          <button className="btn"
                  disabled={ loading || error || !selectedCurrency || loadingRate }
                  onClick={ this.getRate }>
            Получить курс
          </button>
          <button className="btn"
                  hidden={ !error || loading }
                  onClick={ this.getCurrencies }>
            Получить список валют
          </button>
        </div>
        <div className="rate">
          { loadingRate }
          { this.renderRateArea(rate) }
        </div>
      </div>
    )
  }
}

export default Currency;