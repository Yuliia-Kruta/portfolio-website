import { Container, Row, Col } from "react-bootstrap"
import homeImg from "../assets/img/profile-photo.jpg";
import linkedinIcon from '../assets/img/linkedin-icon.svg';
import githubIcon from '../assets/img/github-icon.svg';
import gmailIcon from '../assets/img/gmail-icon.svg';

//maybe home-content not needed

const Hero = () => {
    return ( 
        <section className="home">
            <Container>
                <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                    <div className="home-content">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hi! It's <span>Yuliia</span></h1>
                        <h3>I am a <span>Software Engineer</span></h3>
                        <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
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