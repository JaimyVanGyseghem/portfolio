import React from 'react';
import './App.css';
import {Mainpage} from './components/Mainpage';
import {Info} from './components/info';
import {Skills} from './components/skills';
import {Projects} from './components/projects';

function App() {
  return (
    <div className="App container">
      <Mainpage />
      <Info />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
