import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import {isEmpty} from '../../utility/functions';
import './Project.css';
const API_KEY = process.env.REACT_APP_API_KEY;

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            activeProject: null,
            projectsList: null
        };
    }

    componentDidMount() {
        fetch(`https://api.airtable.com/v0/appK6z5g1ggIpyXTR/projects?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                const fetchedProjects = data.records.filter(project => !isEmpty(project.fields)).map(project => project);
                this.setState(prevState => ({projectsList: [...fetchedProjects]}));
            });
    }

    handleClose = () => this.setState(prevState => ({showModal: false}));

    handleShow = () => this.setState(prevState => ({showModal: true}));

    setActiveProject = (project) => this.setState(prevState => ({activeProject: {...project}}));

    resetActiveProject = () => this.setState(prevState => ({activeProject: null}));


    render() {
        return (
        <div id="projecten" className="mainConainer">
          <div className="title">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <h1>Mijn Projecten</h1>
            <p>Hier heb je enkele projecten die ik gemaakt heb.</p>
  
            </div>


            <div>
                <Modal activeproject={this.state.activeProject}
                       show={this.state.showModal}
                       onHide={() => {
                           this.resetActiveProject();
                           this.handleClose();
                       }}/>
                <div className="thumbnails">
                    {this.state.projectsList && this.state.projectsList.map(item => (
                        <div className="flip-card" key={item.id}>
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                          <img src={item.fields.thumbnail[0].url} onClick={() => {
                                 this.setActiveProject(item);
                                 this.handleShow();
                             }}/>
                          </div>
                          {console.log(item)}
                          <div className="flip-card-back" onClick={() => {
                                 this.setActiveProject(item);
                                 this.handleShow();
                             }}>
                            <h2>{item.fields.Name}</h2> 
                            <p>{item.fields.tags}</p> 
                            <p className="desc">{item.fields.info}</p>
                          </div>
                        </div>
                      </div>
                        
                    ))}
                </div>
              </div>
            </div>
        );
    }
}

export default Projects;