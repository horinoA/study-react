import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CSstart from './CSstart';
import App from './App';
import FStart from './FStart';
import UEstart from './UEstart';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <>
      <Route exact path="/" component={App}/>
      <Route exact path="/cs" component={CSstart}/>
      <Route exact path="/fc" component={FStart}/>
      <Route exact path="/ue" component={UEstart}/>
    </>
    </Router>
 </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
