import { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Container} from "react-bootstrap"
import { sectionIds } from "./SectionIds";
import { ThemeContext } from "../Theme";
import { ReactComponent as Sun } from '../assets/icons/sun-icon.svg';
import { ReactComponent as Moon } from '../assets/icons/moon-icon.svg';
import { useTranslation } from "react-i18next";

const NavBar = () => {

  const { t, i18n } = useTranslation("navbar");

  const {theme, toggleTheme} = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState("home");

  function scrollToSection(sectionId){
    const element = document.getElementById(sectionId);
    if(element){
      const marginTop = 80;
      const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({top: scrollToY, behavior: "smooth"});
    }
  }

  function determineActiveSection(){
    for (let i = sectionIds.length-1; i>=0; i--){
      const section = document.getElementById(sectionIds[i]);
      if(section){
        const rect = section.getBoundingClientRect();
        if(rect.top <= 120 && rect.bottom >=120){
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      determineActiveSection();
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

    return ( 
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="/" dangerouslySetInnerHTML={{ __html: t("brand") }}
          />
          <button
            type="button"
            onClick={toggleTheme}
            className="toggle-theme-button"
            aria-label="toggle theme"
            tool
          >
            {theme === "dark-theme" ? <Sun width="30px" height="30px" /> : <Moon width="24px" height="24px" />}
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            className="toggle-lang-button"
            aria-label="toggle language"
          >
            {i18n.language.toUpperCase()}
          </button>


          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {sectionIds.map((sectionId, i) => (
                <Nav.Link key={i} className={activeLink === sectionId ? "active navbar-link" : "navbar-link"} onClick={() => scrollToSection(sectionId)}>
                  {t(`sections.${sectionId}`)}
                  </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default NavBar;