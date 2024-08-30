import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Portfolio} from './components/portfolio/portfolio';
// import { Random } from './components/randomnumber/random';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './components/test/test';
// import { CardComponent } from './components/login/card';
// import { Amazon } from './components/controlledcomponent/home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
