import { Container, Row, Col } from "react-bootstrap"
import homeImg from "../assets/img/profile-photo.jpg";
import linkedinIcon from '../assets/img/linkedin-icon.svg';
import githubIcon from '../assets/img/github-icon.svg';
import gmailIcon from '../assets/img/gmail-icon.svg';
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {

    const { t } = useTranslation("hero");

    return ( 
        <section className="home" id="home">
            <Container>
                <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                    <div>
                        <span className="tagline">{t("tagline")}</span>
                        <h1><Trans i18nKey="greeting" ns="hero" components={[<span />]} /></h1>
                        <h3 className="role"><Trans i18nKey="role" ns="hero" components={[<span />]} /></h3>
                        <p>{t("description")}</p>
                        <div className="social-icons-container">
                            <div className="social-icons-text">{t("connect")}</div>
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