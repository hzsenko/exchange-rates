import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../store/reducers'
import CurrencyContainer from '../currency';
import './app.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={ store }>
      <div className="app">
        <CurrencyContainer/>
      </div>
    </Provider>);
};

export default App;


