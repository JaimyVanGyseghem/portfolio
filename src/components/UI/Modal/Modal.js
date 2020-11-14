import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Modal.css';

function modal(props) {
    let title, thumbnail, description, tags, URL = null;
    if (props.activeproject) {
        const project = props.activeproject;
        {console.log(project)}
        title = (
            <Modal.Title id="contained-modal-title-vcenter">
                {project.fields.Name}
            </Modal.Title>
        );

        thumbnail = (
            <img src={project.fields.thumbnail[0].url} alt={project.fields.Name} />
        );

        description = (
            <p className="description">{project.fields.info}</p>
        );
        
        let tagName = project.fields.tags;
        let tagArray = tagName.split(',');
        tags = tagArray.map(t => <span className="tag">{t}</span>);

        tags = (
          <span>{tags}</span>
        )
       

        console.log(tagArray);
        URL = (
          <a target="_blank" href={project.fields.URL}>klik hier voor de website</a>
        )
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                { title }
            </Modal.Header>
            <Modal.Body>
              <div className="mainContent">
                { thumbnail }
                <p>{tags}</p>
              </div>
                { description }
                {URL}
          
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default modal;