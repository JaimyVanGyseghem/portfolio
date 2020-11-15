import React from 'react';
import './Mainpage.css';
import jaimy from '../../assets/images/main.png'
const Mainpage = () => {
  return (
    <div id="main" className="mainContainer">
    
      <div className="mainpageInfo">
        <p className="intro"><span>Hey! Ik ben</span></p>
        <h1>JAIMY VAN GYSEGHEM</h1>
        <p className="openingszin">Een professionele full-stack developer</p>
        <div className="buttons">
        <a href="#contact"><button className="contactBTN">Contacteer mij</button></a>
        <a href="#projecten"> <button className="projectBTN">Mijn projecten</button></a>
        </div>
      </div>

      <div className="myPhoto">
        <img className="mainPhoto" src={jaimy} aly="Foto van Jaimy Van Gyseghem" />
      </div>
    </div>
  )
};

export default Mainpage;