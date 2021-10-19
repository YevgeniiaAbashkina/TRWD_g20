import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./components/books_store/store";
import {Provider} from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

