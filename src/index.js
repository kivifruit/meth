import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.tsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, compose,createStore} from 'redux';
import { transitionReducer, statusReducer } from "./store/reducers";
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combine = combineReducers(
  {
    statusPart: statusReducer,
    transitionPart: transitionReducer
  }
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(combine, composeEnhancers(
      applyMiddleware(thunk)
    ))}>
    < App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
