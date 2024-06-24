import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from '../assets/img/linkedin-icon.svg';
import githubIcon from '../assets/img/github-icon.svg';
import gmailIcon from '../assets/img/gmail-icon.svg';

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col>
            <a href="#">
                <span className="tagline">Scroll up {'\u{2191}'}</span>
            </a>
          </Col>
          <Col className="footer-text-wrapper text-center text-sm-end">
            <div className="social-icons-container">
                <div className="social-icons-text">Let's Connect!</div>
                <div className="social-icons">
                    <a href="#"><img src={linkedinIcon} alt="" /></a>
                    <a href="#"><img src={githubIcon} alt="" /></a>
                    <a href="#"><img src={gmailIcon} alt="" /></a>
                </div>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
