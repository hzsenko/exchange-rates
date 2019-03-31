import React from 'react';
import Select from 'react-select';

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
    this.getRate = this.getRate.bind(this);
  }

  getCurrencies() {
    this.props.fetchCurrencies()
  }

  getRate() {
    this.props.fetchRate(this.props.selectedCurrency);
  }

  handleChange(selectedOption) {
    this.props.changeSelectedCurrency(selectedOption)
  }

  componentDidMount() {
    this.getCurrencies();
  }

  render() {
    const loading = (!this.props.currencies.loaded) ? 'Загрузка...' : null;
    const loadingRate = (this.props.rate.loaded === false) ? 'Получение курса...' : null;

    const RateArea = () => {
      return (
        <div className="rate-area">
          <div className="rate-name">
            { this.props.rate.rate.currency }:
            <span className="rate-value">
            { this.props.rate.rate.value }
          </span>
          </div>
        </div>
      )
    };

    const error = (this.props.currencies.errors && this.props.currencies.loaded)
      ? this.props.currencies.errors.errorText : null;

    return (
      <div className="currency-container">
        <h1>Выбор валюты</h1>
        <div className='loading'>{ loading }</div>
        <div className="select-currency">
          <Select options={ this.props.currencies.values }
                  onChange={ this.handleChange }
                  value={ this.props.selectedCurrency }/>
          <div className="errors">{ error }</div>
          <button className="btn"
                  disabled={ loading || error || !this.props.selectedCurrency}
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
          <div className="loading">
            { loadingRate }
          </div>
          { (this.props.rate.rate && this.props.rate.loaded) ? <RateArea/> : '' }
        </div>
      </div>
    )
  }
}

export default Currency;