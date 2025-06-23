import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { Container } from "react-bootstrap"
import { icons } from "../util/exportIcons"
import { useContext } from "react"
import { ThemeContext } from "../Theme"
import { useTranslation } from 'react-i18next';

const Timeline = () => {

    const { t, i18n } = useTranslation("timeline");
    const timeline = t("timeline", { returnObjects: true });

    const {theme} = useContext(ThemeContext);

    const fontWeightClass = i18n.language === "ua" ? "font-weight-600" : "font-weight-500";

    function selectIcon(iconName){
        let IconComponent = icons[iconName]; 
        return <IconComponent />;
    }

    return ( 
        <section className="timeline" id="timeline">
            <Container>
            <h1 className="section-title">{t("sectionTitle")}</h1>
                <VerticalTimeline>
                    {
                        timeline.map((element, index) => (
                                <VerticalTimelineElement 
                                    key={index}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={{ backgroundColor: theme === "dark-theme" ? "#121212" : "#ffffff" }}
                                    icon={selectIcon(element.icon)}
                                >
                                <h3 className={`vertical-timeline-element-title ${fontWeightClass}`}>
                                    {element.title}
                                </h3>
                                <h5 className={`vertical-timeline-element-subtitle ${fontWeightClass}`}>
                                    {element.location}
                                </h5>
                                <div dangerouslySetInnerHTML={{__html: element.description}}/>

                                </VerticalTimelineElement>
                            )
                        )
                    }
                </VerticalTimeline>
            </Container>
            </section>
     );
}
 
export default Timeline;