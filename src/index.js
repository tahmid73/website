import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Topbar from './components/topbar';
import Skill from './components/skill';
import About from './components/about';
import Home from './components/Home';
import DirectoryListing from './file';

ReactDOM.render(
  <div className="">
    <div className="">
    <Topbar/>
    </div>
    <div className="bg-black content-center p-10 font-coding">
      <Home/>
      <About/>
      <Skill/>
      <Home/>
      {/* <DirectoryListing directory="/home/tahmid/Downloads"/> */}
    </div>
  </div>,
  document.getElementById('root')
);


