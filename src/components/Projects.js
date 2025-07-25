import { useState } from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap"
import Pagination from "./Pagination";
import { ReactComponent as GlobeIcon } from "../assets/icons/globe-icon.svg"
import { ReactComponent as GithubIcon } from "../assets/icons/github-icon.svg"
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';


const Projects = ({openModal,setOpenModal}) => {

    const { t } = useTranslation("projects");
    const projects = t("list", { returnObjects: true });


    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [sortCriteria, setSortCriteria] = useState("");

    const projectsPerPage = 6; 
    const maxTagsToShow = 3; 

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleTagChange = (tag) => {
        setSelectedTags((prevSelectedTags) =>
            prevSelectedTags.includes(tag)
                ? prevSelectedTags.filter((t) => t !== tag)
                : [...prevSelectedTags, tag]
        );
        setCurrentPage(1);
    };

    const handleSortChange = (criteria) => {
        console.log(criteria)
        setSortCriteria(criteria);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);

        const section = document.getElementById("projects");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const filterProjects = (projects) => {
        return projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  project.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => project.skills.includes(tag));
            return matchesSearch && matchesTags;
        });
    };

    const sortProjects = (projects) => {
        return projects.sort((a, b) => {
            if (sortCriteria === "title-asc") return a.title.localeCompare(b.title);
            if (sortCriteria === "title-desc") return b.title.localeCompare(a.title);
            return 0;
        });
    };

    const filteredProjects = filterProjects(projects);
    const sortedProjects = sortProjects(filteredProjects);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);


    const renderTags = (tags) => {
        if (tags.length <= maxTagsToShow) {
            return tags.map((skill) => (
                <div key={skill} className="project-tag">{skill}</div>
            ));
        } else {
            const visibleTags = tags.slice(0, maxTagsToShow);
            const hiddenTagsCount = tags.length - maxTagsToShow;
            return (
                <>
                    {visibleTags.map((skill) => (
                        <div key={skill} className="project-tag">{skill}</div>
                    ))}
                    <div className="more-tags-indicator">
                        +{hiddenTagsCount}
                    </div>
                </>
            );
        }
    };

    return ( 
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <h1 className="section-title">{t("sectionTitle")}</h1>
                    <p className="section-description">{t("sectionDescription")}</p>
                </Row>
                <Row className="project-controls">
                    <div className="project-search-input">
                        <Form.Control
                            type="text"
                            placeholder={t("searchPlaceholder")}
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="filter-sort-container">
                        <Dropdown className="filter-dropdown">
                                <Dropdown.Toggle className="filter-button" id="dropdown-basic">
                                    {t("filterByTags")}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <div className="tags-container">
                                        {Array.from(new Set(projects.flatMap((project) => project.skills))).map((tag) => (
                                            <div
                                                key={tag}
                                                className={`tag-item ${selectedTags.includes(tag) ? 'selected' : ''}`}
                                                onClick={() => handleTagChange(tag)}
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        <Form.Control className="sort-select" as="select" value={sortCriteria} onChange={e => handleSortChange(e.target.value)}>
                            <option className="sort-option" value="default">{t("sort.default")}</option>
                            <option className="sort-option" value="title-asc">{t("sort.titleAsc")}</option>
                            <option className="sort-option" value="title-desc">{t("sort.titleDesc")}</option>
                        </Form.Control>
                    </div>
                </Row>
                <Row className="projects-grid">
                    {currentProjects.map((project) => (
                        <div key={project.id} className="project-card" onClick={() => setOpenModal({state: true, project: project})}>
                            <img src={require(`../assets/${project.gif}`)} alt={project.title} className="project-gif" />
                            <div className="project-card-text">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description" dangerouslySetInnerHTML={{__html: project.description}}/>
                            </div>
                            <div className="project-links">
                                {project?.liveDemo === "none" ? (
                                    <Tooltip placement="top" title={t("noLiveDemo")}>
                                        <span className="project-button disabled" onClick={(e) => { e.stopPropagation(); }}>
                                            <div className="button-content-wrapper">
                                                <GlobeIcon className="project-button-icon" /> 
                                                {t("liveDemo")}
                                            </div>
                                        </span>
                                    </Tooltip>
                                ) : (
                                    <a href={project.liveDemo} target="new" className="project-button" onClick={(e) => { e.stopPropagation(); }}>
                                        <div className="button-content-wrapper">
                                            <GlobeIcon className="project-button-icon" /> 
                                            {t("liveDemo")}
                                        </div>
                                    </a>
                                )}
                                <a href={project.sourceCode} target='new' className="project-button" onClick={(e)=> {e.stopPropagation()}}>
                                    <div className="button-content-wrapper">
                                        <GithubIcon  className="project-button-icon"/>
                                        {t("sourceCode")}
                                    </div>
                                </a>
                            </div>
                            <div className="project-tags">
                            {renderTags(project.skills)}
                            
                            </div>
                        </div>
                
                    ))}
                </Row>
                <Pagination
                    projectsPerPage={projectsPerPage}
                    totalProjects={sortedProjects.length}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </Container>
        </section>
     );
}
 
export default Projects;
