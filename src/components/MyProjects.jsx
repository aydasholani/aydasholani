import { Row, Col, Card } from "react-bootstrap"
export default function MyProjects() {

  const myProjects = [
    {
      name: "Rick-And-Morty-Api",
      description: "Fetching data from Rick and Morty API",
      link: "https://github.com/aydasholani/Rick-And-Morty-Api"
    },
    {
      name: "API-persons",
      description: "Fetching data of persons from API",
      link: "https://github.com/aydasholani/API-persons"
    },
    {
      name: "translate_to_rovarspraket",
      description: "Translating text to rovarspraket with python",
      link: "https://github.com/aydasholani/translate_to_rovarspraket"
    },
    {
      name: "BookReviews",
      description: "Creating an API for a book review website",
      link: "https://github.com/aydasholani/BookReviews"
    },
    {
      name: "Rick-and-Morty",
      description: "Fetching from Rick and Morty API and display the data",
      link: "https://github.com/aydasholani/Rick-and-Morty"
    },
  ]

  const displayProjects = myProjects.map((project, index) => {
    return (  
      <Col key={project.name}  xxs={6} md={4} lg={4} xl={3} className="p-2">
      <Card>
        <Card.Body>
          <Card.Img src={`https://picsum.photos/200/100?random=${index}`} alt={project.name} />
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Card.Link href={project.link} target="_blank">{project.name}</Card.Link>
        </Card.Body>
      </Card>
    </Col>
    )
  })

  return (
    <Row >
      {displayProjects}
    </Row>
  )
}
