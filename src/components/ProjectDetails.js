import React, { useContext } from 'react';
import { CloseRounded } from '@mui/icons-material';
import { Modal, Tooltip } from '@mui/material';
import { ReactComponent as GlobeIcon } from "../assets/img/globe-icon.svg"
import { ReactComponent as GithubIcon } from "../assets/img/github-icon.svg"
import { ThemeContext } from '../Theme';
import { useTranslation } from 'react-i18next';

const ProjectDetails = ({ openModal, setOpenModal }) => {

    const project = openModal?.project;
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation("projects");

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <div className="modal-container">
                <div className={`modal-wrapper ${theme}`}>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <img src={require(`../assets/${project.gif}`)} alt={project.title} className="modal-gif" />
                    <h3 className="modal-title">{project?.title}</h3>
                    <p className="modal-description" dangerouslySetInnerHTML={{__html: project?.description}}/>
                    <div className="modal-button-group">
                        {project?.liveDemo === "none" ? (
                            <Tooltip placement="top" title={t("noLiveDemo")}>
                                <span className="modal-button disabled">
                                    <div className="button-content-wrapper">
                                        <GlobeIcon className="project-button-icon" /> 
                                        {t("liveDemo")}
                                    </div>
                                </span>
                            </Tooltip>
                        ) : (
                            <a className="modal-button" dull href={project?.liveDemo} target='new'>
                                <div className="button-content-wrapper">
                                    <GlobeIcon className="project-button-icon"/>{t("liveDemo")}
                                </div>
                            </a>
                        )}
                        
                        <a className="modal-button" href={project?.sourceCode} target='new'>
                            <div className="button-content-wrapper">
                                <GithubIcon  className="project-button-icon"/>{t("sourceCode")}
                            </div>
                        </a>
                    </div>
                    <div className="modal-tags">
                        {project?.skills.map((skill, index) => (
                            <div key={index} className="project-tag">{skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ProjectDetails;
