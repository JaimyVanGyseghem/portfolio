import React, {Component} from 'react';
import './Skills.scss';
const API_KEY = process.env.REACT_APP_API_KEY;

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skillList: null
    };
  }

  skillData() {
    fetch(`https://api.airtable.com/v0/appBnCm52rE74Dq30/skills?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const fetchSkills = data.records.map(skill => skill);
        this.setState(state => ({skillList: [fetchSkills]}));
        console.log(this.state.skillList);
      })
  }

  render(){
    return(
      <div>
        <p>hey</p>
        {
          console.log(this.state.skillList)
        }
      </div>
    )
  }
}

export default Skills;