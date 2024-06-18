import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import timelineElements from "../data/timelineElements"
import { ReactComponent as WorkIcon } from "../assets/img/work.svg"
import { ReactComponent as SchoolIcon } from "../assets/img/school-icon.svg"
import { ReactComponent as StudyIcon } from "../assets/img/study-icon.svg"
import { ReactComponent as UniIcon } from "../assets/img/uni-icon.svg"
import { ReactComponent as TutorIcon } from "../assets/img/tutor-icon.svg"
import { ReactComponent as FlightIcon } from "../assets/img/airplane-icon.svg"
import { ReactComponent as CodingIcon } from "../assets/img/coding-icon.svg"
import { Container } from "react-bootstrap"

import { ReactComponent as GithubIcon } from '../assets/img/github-icon.svg';

const Timeline = () => {

    let workIconStyle = { background: "#121212" }; //#ff002e #06D6A0
    let schoolIconStyle = { background: "#f9c74f" };

    function renderWithStyling(text){
        //let descriptionText = document.createElement( 'html' );
        //descriptionText.innerHTML = text;
        //console.log($(descriptionText))
        //return descriptionText;
        var temp = document.createElement('div');
        temp.innerHTML = text;
        return temp;
    }

    function selectIcon(iconName){
        let icon;
        switch(iconName){
            case "school":
                icon = <SchoolIcon />
                break;
            case "study":
                icon = <StudyIcon />
                break;
            case "university":
                icon = <UniIcon />
                break;
            case "tutor":
                icon = <TutorIcon />
                break;
            case "flight":
                icon = <FlightIcon />
                break;
            case "coding":
                icon = <CodingIcon />
                break;
        default:
                break;
        }
        return icon;
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