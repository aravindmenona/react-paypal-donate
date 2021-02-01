import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
export class BootstrapCarousel extends Component {
  render() {
    return (
      <div id="carousel" className="full-width margintop50">
        <Container>
          <Carousel fade>
            <Carousel.Item style={{ height: "600px" }}>
              <img
                alt="img2"
                style={{ height: "100%" }}
                className="d-block w-100"
                src={""}
              />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "600px" }}>
              <img
                alt="assets/img1"
                style={{ height: "600px" }}
                className="d-block w-100"
                src={""}
              />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "600px" }}>
              <img
                alt="img3"
                style={{ height: "600px" }}
                className="d-block w-100"
                src={""}
              />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
  }
}
export default BootstrapCarousel;
