import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import{ FavContextProvider} from "./store/fav-context"
import { Context } from './components/Statemanagment/Contex';
 
ReactDOM.render(
  <Context>
  <FavContextProvider>
    <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </BrowserRouter>
  </FavContextProvider>
  </Context>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
