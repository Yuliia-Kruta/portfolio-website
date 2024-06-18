import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import timelineElements from "../data/timelineElements"
import { Container } from "react-bootstrap"
import { icons } from "../util/exportIcons"

const Timeline = () => {

    function selectIcon(iconName){
        let IconComponent = icons[iconName]; 
        return <IconComponent />;
    }

    return ( 
        <section className="timeline" id="timeline">
            <Container>
            <h1 className="section-title">My Journey</h1>
                <VerticalTimeline>
                    {
                        timelineElements.map(element => {
                            return(
                                <VerticalTimelineElement 
                                    key={element.id}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={{backgroundColor: "#121212"}}
                                    icon={selectIcon(element.icon)}
                                >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <div dangerouslySetInnerHTML={{__html: element.description}}/>

                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </Container>
            </section>
     );
}
 
export default Timeline;