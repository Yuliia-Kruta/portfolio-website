import { Container, Row, Col } from "react-bootstrap"
import homeImg from "../assets/img/profile-photo.jpg";
import linkedinIcon from '../assets/img/linkedin-icon.svg';
import githubIcon from '../assets/img/github-icon.svg';
import gmailIcon from '../assets/img/gmail-icon.svg';
import heroText from "../data/heroText";

//maybe home-content not needed

const Hero = () => {
    return ( 
        <section className="home" id="home">
            <Container>
                <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                    <div className="home-content">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hi! It's <span>Yuliia</span></h1>
                        <h3>I am a <span>Software Engineer</span></h3>
                        <p>{heroText[0]}</p>
                        <div className="social-icons-container">
                            <div className="social-icons-text">Let's Connect!</div>
                            <div className="social-icons">
                                <a href="#"><img src={linkedinIcon} alt="" /></a>
                                <a href="#"><img src={githubIcon} alt="" /></a>
                                <a href="#"><img src={gmailIcon} alt="" /></a>
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