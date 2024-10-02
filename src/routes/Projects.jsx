import { useState, useEffect } from "react";
import projectsData from '../data/projectsData'
import {Container, Row, Col, Card } from 'react-bootstrap';
import { AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    setMyProjects(projectsData);
  }, []);

  const displayProjects = myProjects.map((project, index) => {
    const image = require(`../img/projectImage/${project.img}`);

    return (  
      <Col key={project.key} xs={12} sm={6} lg={4} className="mb-2 d-flex project-card">

        <Card 
          bg="dark" 
          text="white" 
          className="flex-fill" 
          key={project.key} xs={12} sm={6} lg={4}
        >
          
          <Card.Header>
            <Card.Title>
             <Card.Link href={project.link} target='_blank'>
                <AiOutlineGithub size={30} />   
          </Card.Link>
            </Card.Title>             
          </Card.Header>

          <Card.Img variant="top" src={image} alt={project.name} className="img-fluid"/>
          <Card.Title>

          </Card.Title>
          <Card.Body className="mb-2">
            <Card.Text>{project.description}</Card.Text>
            
          </Card.Body> 
          <Card.Footer>
            <code>{project.techs}</code>
          </Card.Footer>
        </Card>
        </Col>
    )
  })
  return (
    <section className='100vh'>
      <Container className="mt-4">
        <h2>Projects</h2>
        <Row className="mt-4 g-4" xs={1} md={2}>
          {displayProjects}
        </Row>
      </Container>
    </section>
  )
}
