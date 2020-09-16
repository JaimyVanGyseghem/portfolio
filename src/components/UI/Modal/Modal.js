import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Modal.scss';

function modal(props) {
    let title, thumbnail, description = null;
    if (props.activeproject) {
        const project = props.activeproject;
        title = (
            <Modal.Title id="contained-modal-title-vcenter">
                {project.fields.Name}
            </Modal.Title>
        );

        thumbnail = (
            <img src={project.fields.thumbnail[0].url} alt={project.fields.Name} />
        );

        description = (
            <h4>{project.fields.info}</h4>
        );
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
                { description }
                { thumbnail }
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default modal;