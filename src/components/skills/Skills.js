import React, {Component} from 'react';
import './Skills.scss';
import {isEmpty} from "../../utility/functions";
const API_KEY = process.env.REACT_APP_API_KEY;

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skillList: null
    };
  }

    componentDidMount() {
        fetch(`https://api.airtable.com/v0/appBnCm52rE74Dq30/skills?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                const fetchSkills = data.records.map(skill => skill);
                this.setState(prevState => ({skillList: [...fetchSkills]}));
                console.log(this.state.skillList);
            });
    }

  render(){
    return(
      <div className="mainConainer">
          <div className="title">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <h1>Mijn Skills</h1>
            <p>Hier moet nog een intro komen</p>
          </div>

        <div className="skills">
        {this.state.skillList && this.state.skillList.map(s => (
          <div key={s.id}>
            <img src={s.fields.icon[0].url}/>
            <p>{s.fields.skill}</p>
          </div>
            ))
        }
        </div>
      </div>
    )
  }
}

export default Skills;