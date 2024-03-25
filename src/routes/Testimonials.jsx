import { Container, Carousel, Row } from 'react-bootstrap';

export default function Testimonials() {
  return (
    <section className='d-flex align-items-center justify-content-center 100vh'>
    <Container className="p-4">
      <h2>Testimonials</h2>
      <Row className="g-2">

        <Carousel className='testimonials'>
          <Carousel.Item interval={5000} >
            <img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="p1" />
            <Carousel.Caption>
              <h3>Person 1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000} >
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="p2" />
            <Carousel.Caption>
              <h3>Person 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000} >
          <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="p3" />
            <Carousel.Caption>
              <h3>Person 3</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
    </section>
  )
}
