import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from '../assets/icons/linkedin-icon.svg';
import githubIcon from '../assets/icons/github-icon.svg';
import gmailIcon from '../assets/icons/gmail-icon.svg';

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
                    <a href="https://www.linkedin.com/in/yuliia-kruta-300173263/" target="_blank"><img src={linkedinIcon} alt="My LinkedIn" /></a>
                    <a href="https://github.com/Yuliia-Kruta" target="_blank"><img src={githubIcon} alt="My Github" /></a>
                    <a href="mailto: yuliia.krutaa@gmail.com" target="_blank"><img src={gmailIcon} alt="My email" /></a>
                </div>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
