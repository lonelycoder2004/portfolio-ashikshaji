import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState ,useEffect} from "react";
import logo from '../assets/image/logo.svg';
import navicon1 from '../assets/image/nav-icon1.svg';
import navicon2 from '../assets/image/nav-icon2.svg';
import navicon3 from '../assets/image/icons8-github1.svg';



function Navbar1() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpadteActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }

              onClick={() => onUpadteActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skill" ? "active navbar-link" : "navbar-link"
              }

              onClick={() => onUpadteActiveLink("skill")}
            >
              Skill
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpadteActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ashik-shaji-6552a2255/" target="_blank">
                
                <img src={navicon1} alt="" />
              </a>
              <a href="https://github.com/lonelycoder2004" target="_blank">
               
                <img src={navicon2} alt="" />
              </a>
              <a href="https://github.com/lonelycoder2004" target="_blank">
               
                <img src={navicon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => {
  const element = document.getElementById('connect');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
