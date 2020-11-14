import React from 'react';
import './info.css';
import jaimy from '../../assets/images/jaimy2.jpg';

const Info = () => {

  return(
    <div>
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
            <p>Ik heb mijn passie voor code 2 jaar geleden ontdekt. Na mijn middelbare studies ben ik begonnen op de Arteveldehogeschool met de opleiding Grafisch en digitale media. Uit die opleiding is mijn liefde voor clean code elke dag gegroeid. Na programmeren ben ik voornamelijk bezig met het bijschaven van designs en het luisteren van muziek.</p>
            <button>Download mijn CV</button>
          </div>
        </div>
    </div>
  )
}

export default Info;