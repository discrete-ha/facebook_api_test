import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import App from './components/App';
import appReducer from './reducers/app';

const store = createStore(appReducer);
const appElement = document.getElementById('root');

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    appElement
);
