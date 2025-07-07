import { Container } from "react-bootstrap"
import { useTranslation } from 'react-i18next';
import { ReactComponent as ExternalLink } from '../assets/icons/external-link-icon.svg';
import { Tooltip } from '@mui/material';

const References = () => {
    
    const { t, i18n } = useTranslation("references");
    const references = t("references", { returnObjects: true });

    return ( 
        <section className="references" id="references">
            <Container>
                <h1 className="section-title">{t("sectionTitle")}
                    <Tooltip placement="top" title={t("viewRefs")}>
                        <a  href="https://drive.google.com/drive/folders/1s5mADPv0KHw3-Gs7TcW5fNOmlfGjLcTv?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link-icon"
                            title="View All References"
                        > <ExternalLink width="25px" height="25px"/>
                        </a>
                    </Tooltip>
                </h1>
                <div className="references-grid">
                        {references.map((reference) => (
                            <div key={reference.id} className="reference-card">
                            <h3 className="reference-name">{reference.name}</h3>
                            <p className="reference-position">{reference.position}</p>
                            <p className="reference-snippet" dangerouslySetInnerHTML={{__html: reference.snippet}}/>
                            <a
                            href={reference.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="read-more-btn"
                            >
                            {t("readFull")}
                            </a>
                        </div>
                        ))}
                    </div>
            </Container>
        </section>
     );
}
 
export default References;