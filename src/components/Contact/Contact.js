import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <div id="contact" className="mainContainerContact">
      <div className="leftSide">
          <div>
            <h2>Contacteer mij</h2>
            <p>Laten we samen iets nieuw, mooi en uniek maken!</p>
          </div>
          <div className="contactMe">
            <div>
              <div>
              <i className="fas fa-phone-alt firstIcon"></i>
              </div>
              <div className="emailTel">
                <p>  <i className="fas fa-phone-alt secondIcon"></i> Telefoon:</p>
                <p>+32 476 66 87 49</p>
              </div>
            </div>
          
            <div>
              <div>
              <i className="far fa-envelope firstIcon"></i>
              </div>
              <div className="emailTel">
                <p> <i className="far fa-envelope secondIcon"></i> E-mail:</p>
                <p>jaimy.vangyseghem@gmail.com</p>
              </div>
            </div>
          </div>
          <div>

            <div className="icons">
            <p>Wil je nog meer weten? Hier is meer!</p>
              <div className="background">
                <a href="https://github.com/JaimyVanGyseghem" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/jaimy-van-gyseghem-2806a915b/" target="_blank"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
      </div>

      <div className="rightSide">
          <h2>Stel je vragen!</h2>
          <form method="POST" action="form.php">
            <div className="firstLine">
						<input className="form-control" type="text" placeholder="Naam" name="vrnm" required/>
            <input className="form-control" type="text" placeholder="Tel. nummer" name="tel" />
            </div>
            <input className="form-control" type="text" placeholder="E-mail" name="email" required/>
						<textarea placeholder="Bericht" rows="6" name="msg" required></textarea> <br/>
						<input className="submit" value="Verstuur" type="submit" name="submit" />
					</form>
        </div>

    </div>
  )
};

export default Contact;