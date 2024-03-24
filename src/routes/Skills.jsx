import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import skillsData from '../data/skillsData.json'

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  const displaySkills = skills.map((skill, index) => {
    return (  
      <Col key={skill.index} className="p-2">
        <Card 
          bg="dark" 
          text="white" 
          className="project-card"
        >
          <Card.Body>
            <Card.Img 
              variant="top" 
              src={`${skill.img}`} 
              alt={skill.name} 
            />
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <section className='d-flex align-items-center justify-content-center 100vh'>
      <Container className="p-4">
        <h2>Skills</h2>
        <Row className="p-4">
          {displaySkills}
        </Row>
      </Container>
    </section>
  )
}
