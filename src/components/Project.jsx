import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/image/Project1.png";
import projImg2 from "../assets/image/Project2.png";
import projImg3 from "../assets/image/Project3.png";
import colorSharp2 from "../assets/image/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

  const projects = [
    {
      title: "Ai Phone Recommendation System",
      description: "React,Nodejs,Python & MongoDB",
      imgUrl: projImg1,
    },
    // {
    //     title: "Blog Management Platform",
    //     description: "HTML,CSS,JS,Nodejs & MongoDB",
    //     imgUrl: projImg2,
    //   },
    //   {
    //     title: "Student Management System",
    //     description: "Java and MySQL",
    //     imgUrl: projImg3,
    //   },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
  I have worked on a variety of projects that showcase my expertise in Full Stack Development, App Development, and AI/ML. Below are some highlights of my work:
</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p>Helloo</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Helloo</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}