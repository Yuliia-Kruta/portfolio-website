import { Container } from "react-bootstrap"
import { useTranslation } from 'react-i18next';

const References = () => {
    
    const { t, i18n } = useTranslation("references");

    return ( 
        <section className="references" id="references">
            <Container>
                <h1 className="section-title">{t("sectionTitle")}</h1>

            </Container>

        </section>
     );
}
 
export default References;