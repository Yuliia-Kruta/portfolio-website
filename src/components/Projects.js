import { Container, Row, Col } from "react-bootstrap"
import projects from "../data/projects";

const Projects = () => {
    return ( 
        <section className="projects" id="projects">
            <Container className="projects-container">
                <Row>
                    <h1 className="section-title">Projects</h1>
                    <p className="section-description">I have used various technologies to develop applications. Here are some of my projects.</p>
                </Row>
                <Row className="projects-grid">
                    {projects.map((project) => (
                        
                        <div key={project.id} className="project-card project-box">
                            <img src={project.gif} alt={project.title} className="project-gif" />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                            <a href={project.liveDemo} className="btn btn-primary">Live Demo</a>
                            <a href={project.sourceCode} className="btn btn-secondary">Source Code</a>
                            </div>
                            <div className="project-tags">
                            {project.skills.map(skill => (
                                <span key={skill} className="project-tag">{skill}</span>
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
