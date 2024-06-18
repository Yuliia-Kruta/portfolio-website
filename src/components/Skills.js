import skillsBento from "../data/skills";
import { Container, Row, Col } from "react-bootstrap"

const Skills = () => {
    return ( 
        <section className="skills" id="skills">
            <Container>
                <Row className="aligh-items-center">
                    <h1 className="section-title">My skills</h1>
                    <div className="skills-bento">
                        {skillsBento.map((category) => (
                            <div key={category.title} className={`skill-category ${category.area}`}>
                            <h3 className="skill-title">{category.title}</h3>
                            <ul>
                                {category.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                                ))}
                            </ul>
                            </div>
                        ))}
                    </div>
                </Row>
            </Container>
        </section>
     );
}
 
export default Skills;