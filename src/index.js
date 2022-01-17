import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Topbar from './components/topbar';
import Skill from './components/skill';
import About from './components/about';

ReactDOM.render(
  <div className="">
    <div className="">
    <Topbar/>
    </div>
    <div className="">
      <About/>
      <Skill/>
    </div>
  </div>,
  document.getElementById('root')
);


