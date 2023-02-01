import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<<<<<<< HEAD
  //https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
=======
  <BrowserRouter>
    <App />
  </BrowserRouter>
>>>>>>> cc653f62ce5eb4074ebdb028ee438130e4738981
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>
<<<<<<< HEAD
  <BrowserRouter>
  <App />
</BrowserRouter>
=======
>>>>>>> cc653f62ce5eb4074ebdb028ee438130e4738981
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
