import skillsBento from "../data/skills";
import { Container, Row } from "react-bootstrap"
import { ReactComponent as ExternalLink } from '../assets/img/external-link-icon.svg';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Skills = () => {

    const { t } = useTranslation("skills");

    return ( 
        <section className="skills" id="skills">
            <Container>
                <Row className="aligh-items-center">
                    <h1 className="section-title">{t("title")}</h1>
                    <div className="skills-bento">
                        {skillsBento.map((category) => (
                            <div key={category.title} className={`skill-category ${category.area}`}>
                            <h3 className="skill-title">
                                {t(`categories.${category.title}`)}
                                {category.link && (
                                    <Tooltip placement="top" title={t("viewCerts")}>
                                        <a  href={category.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cert-link-icon"
                                            title="View Certifications"
                                        > <ExternalLink width="20px" height="20px"/>
                                        </a>
                                    </Tooltip>
                                )}
                            </h3>
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