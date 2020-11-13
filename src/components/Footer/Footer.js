import React from 'react';
import './Footer.css';


const Footer = () => {

  return(
    <div className="footer">
      <div className="slogan">
      <h1>JAI<span>M</span>Y</h1>
      </div>

      <div className="footerNav">
        <div className="quote">
          <p>Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the is the magna aliquyam.</p>
        </div>
        <div className="navigation">
          <h3>Navigatie</h3>
          <a href="#">Home</a>
          <a href="#">Over mij</a>
          <a href="#">Mijn Skills</a>
          <a href="#">Mijn projecten</a>
        </div>
        <div className="contactMe">
          <h3>Contacteer mij</h3>
          <p> <i className="fas fa-phone-alt"></i> <span>+32 476 66 87 49</span></p>
          <p> <i className="far fa-envelope"></i><span>jaimy.vangyseghem@gmail.com</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;