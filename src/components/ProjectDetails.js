import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';

const ProjectDetails = ({ openModal, setOpenModal }) => {

    const project = openModal?.project;
    console.log(project);

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <div className="modal-container">
                <div className="modal-wrapper">
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <img className="modal-gif" src={project?.gif} alt="Project image" />
                    <div className="modal-title">{project?.title}</div>
                    <div className="modal-tags">
                        {project?.skills.map((skill, index) => (
                            <div key={index} className="modal-tag">{skill}</div>
                        ))}
                    </div>
                    <div className="modal-description">{project?.description}</div>
                    <div className="modal-button-group">
                        <a className="modal-button" dull href={project?.liveDemo} target='new'>Live Demo</a>
                        <a className="modal-button" href={project?.sourceCode} target='new'>Source Code</a>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ProjectDetails;
