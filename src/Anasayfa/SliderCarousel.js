import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel className="container mt-3" style={{ marginTop: '70px', width: "500px" }}>
      <Carousel.Item>
        <img
          style={{ width: "auto" }}
          className="d-block img-thumbnail mx-auto d-block img-fluid"
          src='https://source.unsplash.com/random'
          alt="First slide"

        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "auto" }}
          className="d-block img-thumbnail mx-auto d-block img-fluid"
          src="https://source.unsplash.com/random"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "auto" }}
          className="d-block img-thumbnail mx-auto d-block img-fluid"
          src="https://source.unsplash.com/random"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;