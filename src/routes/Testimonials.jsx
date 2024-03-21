import { Container, Carousel, Row } from 'react-bootstrap';

export default function Testimonials() {
  return (
    <section className='d-flex align-items-center justify-content-center 100vh'>
    <Container className="p-4">
      <h2>Testimonials</h2>
      <Row className="p-4">

        <Carousel>
          <Carousel.Item interval={5000} >
            <img src="https://picsum.photos/200/100?random=1" alt="p1" />
            <Carousel.Caption>
              <h3>Person 1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000} >
          <img src="https://picsum.photos/200/100?random=2" alt="p2" />
            <Carousel.Caption>
              <h3>Person 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000} >
          <img src="https://picsum.photos/200/100?random=3" alt="p3" />
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
