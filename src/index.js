import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import './index.css';
import App from './App';

import {store, persistor} from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        {/*allow us to access the store*/}
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                {/*session storage*/}
                <App />
            </PersistGate>
        </BrowserRouter>,
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

