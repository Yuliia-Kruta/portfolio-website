import { Container, Row, Col } from "react-bootstrap"
import homeImg from "../assets/img/profile-photo.jpg";
import linkedinIcon from '../assets/img/linkedin-icon.svg';
import githubIcon from '../assets/img/github-icon.svg';
import gmailIcon from '../assets/img/gmail-icon.svg';
import heroText from "../data/heroText";

const Hero = () => {
    return ( 
        <section className="home" id="home">
            <Container>
                <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                    <div>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hi! It's <span>Yuliia</span></h1>
                        <h3>I am a <span>Software Engineer</span></h3>
                        <p>{heroText[0]}</p>
                        <div className="social-icons-container">
                            <div className="social-icons-text">Let's Connect!</div>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/yuliia-kruta-300173263/" target="_blank"><img src={linkedinIcon} alt="My LinkedIn" /></a>
                                <a href="https://github.com/Yuliia-Kruta" target="_blank"><img src={githubIcon} alt="My Github" /></a>
                                <a href="mailto: yuliia.krutaa@gmail.com" target="_blank"><img src={gmailIcon} alt="My email" /></a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <div className="home-img">
                        <img src={homeImg} alt="Profile photo"/>
                    </div>
                </Col>
                </Row>
            </Container>
    </section>
     );
}
 
export default Hero;