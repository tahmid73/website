import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Topbar from './components/topbar';
import Skill from './components/skill';
import About from './components/about';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div class="">
    <div class="">
    <Topbar/>
    </div>
    <div class="">
      <About/>
      <Skill/>
    </div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
