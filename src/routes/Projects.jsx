import { useState, useEffect } from "react";
import projectsData from '../data/projectsData'
import {Container, Row, Col, Card} from 'react-bootstrap';
import { AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    setMyProjects(projectsData);
  }, []);

  const displayProjects = myProjects.map((project, index) => {
    const image = require(`../img/projectImage/${project.img}`);

    return (  
      <Col key={project.key} xs={12} sm={6} lg={4} className="mb-4 d-flex project-card">
        <Card border="secondary" bg="dark" text="white" className="flex-fill">
          <Card.Img variant="top" src={image} alt={project.name} />

          <Card.Header>
            <Card.Title>
              {project.name} 
            </Card.Title>             
            <Card.Subtitle >
              <code>{project.techs}</code>
            </Card.Subtitle> 
          </Card.Header>
          <Card.Body className="mb-2">
            <Card.Text>{project.description}</Card.Text>
            
          </Card.Body>
          <Card.Footer>
            <Card.Link href={project.link} target='_blank'>
              <AiOutlineGithub size={25} />   
            </Card.Link>
          </Card.Footer>
        </Card>
      </Col>
    )
  })
  return (
    <section className='100vh'>
      <Container className="mt-4">
        <h2>Projects</h2>
        <Row className="mt-4 g-4">
          {displayProjects}
        </Row>
      </Container>
    </section>
  )
}
