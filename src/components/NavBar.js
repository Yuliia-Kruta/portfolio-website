import { useEffect, useState } from "react";
import { Navbar, Nav, Container} from "react-bootstrap"
import { sectionIds } from "./SectionIds";

const NavBar = () => {
    
    const [activeLink, setActiveLink] = useState("home");

    function scrollToSection(sectionId){
      const element = document.getElementById(sectionId);
      if(element){
        const marginTop = 0;
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

    return ( 
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="/">
            Yuliia <span>Kruta</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {sectionIds.map((sectionId, i) => (
                <Nav.Link key={i} className={activeLink === sectionId ? "active navbar-link" : "navbar-link"} onClick={() => scrollToSection(sectionId)}>{
                  sectionId==="timeline" ? "My Journey" : sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default NavBar;