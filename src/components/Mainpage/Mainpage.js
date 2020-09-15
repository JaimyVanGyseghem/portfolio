import React from 'react';
import './Mainpage.scss';
import jaimy from '../../assets/images/main.png'
const Mainpage = () => {
  return (
    <div className="mainContainer">
      <div>
        <p className="intro"><span>Hey! Ik ben</span></p>
        <h1>JAIMY VAN GYSEGHEM</h1>
        <p className="openingszin">Een professionele front-end developer</p>
        <div className="buttons">
          <button className="contactBTN">Contacteer mij</button>
          <button className="projectBTN">Mijn projecten</button>
        </div>
      </div>

      <div className="myPhoto">
        <img className="mainPhoto" src={jaimy} aly="Foto van Jaimy Van Gyseghem" />
      </div>
    </div>
  )
};

export default Mainpage;