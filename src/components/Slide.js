import Carousel from "react-bootstrap/Carousel";
import slide1 from "../images/s1.jpg";
import slide2 from "../images/s2.jpg";
import slide3 from "../images/s3.jpg";
function Slide() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{ textAlign: "center" }}>
        <img src={slide1} style={{ height: "600px" }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{ textAlign: "center" }}>
        <img src={slide2} style={{ height: "600px" }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ textAlign: "center" }}>
        <img src={slide3} style={{ height: "600px" }} />
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

export default Slide;
