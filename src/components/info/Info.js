import React from 'react';
import './info.css';
import jaimy from '../../assets/images/test.png';

const Info = () => {

  return(
    <div id="info">
        <div className="title">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <h1>Over mij</h1> 
        </div>

        <div className="info">
          <div>
            <img src={jaimy}></img>
          </div>

          <div>
            <h2> Wie ben ik?</h2>
            <p>Mijn passie voor code ontdekte ik 2 jaar geleden. Na mijn middelbare studies begon ik aan de opleiding grafische en digitale media op Arteveldehogeschool. Uit deze opleiding is mijn liefde voor clean code elke dag gegroeid. Naast programmeren ben ik voornamelijk bezig met het bijschaven van designs, refactoren van code en het beluisteren van muziek. </p>
            <a href="jaimyvangyseghem.pdf" download><button>Download mijn CV</button></a>
          </div>
        </div>
    </div>
  )
}

export default Info;