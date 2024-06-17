import { useState } from "react";
import { Navbar, Nav, Container} from "react-bootstrap"

const NavBar = () => {
    
    const [activeLink, setActiveLink] = useState("home");
    
    function onUpdateActiveLink(value){
          setActiveLink(value);
    }

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
              <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
              <Nav.Link href="#timeline" className={activeLink === "timeline" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("timeline")}>My Journey</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
              <Nav.Link href="#education" className={activeLink === "education" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("education")}>Education</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default NavBar;