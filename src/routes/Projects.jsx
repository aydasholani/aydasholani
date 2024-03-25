import { useState, useEffect } from "react";
import projectsData from '../data/projectsData.json'
import {Container, Row, Col, Card} from 'react-bootstrap';

export default function Projects() {
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    setMyProjects(projectsData);
  }, []);

  const displayProjects = myProjects.map((project, index) => {
    return (  
      <Col key={project.name}  xxs={6} md={4} lg={4} xl={4} className="p-2">
        <Card bg="dark" text="white" className="project-card">
        <Card.Header>{project.name}</Card.Header>
          <Card.Body>
            <Card.Img src={`https://picsum.photos/200/100?random=${index}`} alt={project.name} />
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Link href={project.link} target="_blank">GitHub-Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    )
  })
  return (
    <section className='d-flex align-items-center justify-content-center 100vh'>
      <Container className="p-4">
        <h2>Projects</h2>
        <Row className="p-4">
          {displayProjects}
        </Row>
      </Container>
    </section>
  )
}
