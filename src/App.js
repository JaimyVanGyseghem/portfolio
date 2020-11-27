import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Skills, Mainpage, Info, Projects, Contact, Footer} from './components/index';


function App() {
  console.log("test");
  return (
    <div>
    <div className="App container">
      <Mainpage />
      <Info />
      <Skills />
      <Projects />
      <div className="contact">
      <Contact />
      </div>
      <Footer />
    </div>
    
    </div>
  );
}

export default App;
