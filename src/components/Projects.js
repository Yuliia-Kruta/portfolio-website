import { Container, Row, Col } from "react-bootstrap"
import projects from "../data/projects";
import { ReactComponent as GlobeIcon } from "../assets/img/globe-icon.svg"
import { ReactComponent as GithubIcon } from "../assets/img/github-icon.svg"
import { useState } from "react";
import Pagination from "./Pagination";

const Projects = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6; 
    const maxTagsToShow = 3; // Maximum number of tags to display before showing the "+n" indicator

    
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderTags = (tags) => {
        if (tags.length <= maxTagsToShow) {
            return tags.map((skill) => (
                <div key={skill} className="project-tag">{skill}</div>
            ));
        } else {
            const visibleTags = tags.slice(0, maxTagsToShow);
            const hiddenTagsCount = tags.length - maxTagsToShow;
            return (
                <>
                    {visibleTags.map((skill) => (
                        <div key={skill} className="project-tag">{skill}</div>
                    ))}
                    <div className="more-tags-indicator">
                        +{hiddenTagsCount}more
                    </div>
                </>
            );
        }
    };

    return ( 
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <h1 className="section-title">Projects</h1>
                    <p className="section-description">I have used various technologies to develop applications. Here are some of my projects.</p>
                </Row>
                <Row className="projects-grid">
                    {currentProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <img src={project.gif} alt={project.title} className="project-gif" />
                            <div className="project-card-text">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>
                            <div className="project-links">
                                <a href={project.liveDemo} className="project-button">
                                    <div className="button-content-wrapper">
                                        <GlobeIcon className="project-button-icon"/>Live Demo
                                    </div>
                                </a>
                                <a href={project.sourceCode} className="project-button">
                                    <div className="button-content-wrapper">
                                        <GithubIcon  className="project-button-icon"/>Source Code
                                    </div>
                                </a>
                            </div>
                            <div className="project-tags">
                            {renderTags(project.skills)}
                            
                            </div>
                        </div>
                   
                    ))}
                </Row>
                <Pagination
                    projectsPerPage={projectsPerPage}
                    totalProjects={projects.length}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </Container>
        </section>
     );
}
 
export default Projects;

/*
{project.skills.map(skill => (
                                <div key={skill} className="project-tag">{skill}</div>
                            ))}
*/ 