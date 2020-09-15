import React, {useState, useEffect} from 'react';
import './Skills.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const Skills = () => {

  const [skill, setSkill] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`https://api.airtable.com/v0/appBnCm52rE74Dq30/skills?api_key=${API_KEY}`)
      let data = await response.json();
      setSkill(data);
      return console.log(skill);
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(skill); //check the result here
  }, [skill])



  return (
    <div className="mainConainer">

     <div className="title">
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <h1>Mijn skills</h1>
       <p>Hier moet nog een intro komen</p>
  
     </div>

    {/* <div>
    {!!skill
      ? skill.map((skill) => {
        return (
          <div>
            <p></p> 
          </div>
        )
      })
      : <p>LOADING...</p>
      }
    </div> */}

    </div>
  )
};

export default Skills;