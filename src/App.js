import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import CurrencyContainer from './components/currency/CurrencyContainer';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <div className="app">
          <CurrencyContainer/>
        </div>
      </Provider>)
  }
}

export default App;


