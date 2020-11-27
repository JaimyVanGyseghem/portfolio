import React from 'react';
import './Footer.css';


const Footer = () => {
console.log("t");
  return(
    <div className="footer">
      <div className="slogan">
      <h1>JAI<span>M</span>Y</h1>
      </div>

      <div className="footerNav">
        <div className="quote">
          <p>Iemand die zeer gedreven is in de projecten waar hij aan werkt.
              Als voorzitter van de studentenraad ben ik een geboren teamleider
              en teamspeler.
          </p>
        </div>
        <div className="navigation">
          <h3>Navigatie</h3>
          <a href="#main">Home</a>
          <a href="#info">Over mij</a>
          <a href="#skills">Mijn Skills</a>
          <a href="#projecten">Mijn projecten</a>
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