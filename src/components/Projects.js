import { Container, Row, Col } from "react-bootstrap"
import projects from "../data/projects";
import { ReactComponent as GlobeIcon } from "../assets/img/globe-icon.svg"
import { ReactComponent as GithubIcon } from "../assets/img/github-icon.svg"

const Projects = () => {
    return ( 
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <h1 className="section-title">Projects</h1>
                    <p className="section-description">I have used various technologies to develop applications. Here are some of my projects.</p>
                </Row>
                <Row className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <img src={project.gif} alt={project.title} className="project-gif" />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
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
                            {project.skills.map(skill => (
                                <div key={skill} className="project-tag">{skill}</div>
                            ))}
                            </div>
                        </div>
                   
                    ))}
                </Row>
            </Container>
        </section>
     );
}
 
export default Projects;

