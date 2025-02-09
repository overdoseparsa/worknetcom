import React from "react";
import "./productPage.css";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

export default function productpage() {
  return (
    <>
      <Container className="p-0 m-0" fluid>
        <Carousel data-bs-theme="light" className="porductCarousel">
          <Carousel.Item style={{ backgroundColor: "black" }}>
            <Image
              className="productSlideImage"
              src="image/product Image/cameraProduct.jpg"
              fluid
            />
            <Carousel.Caption className="productSliderItem">
              <h3>محصولات امنیتی</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
                vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="productcarouselItem1"
            style={{ backgroundColor: "#fff" }}
          >
            <Image
              className="productSlideImage1"
              src="image/product Image/radioProduct.jpg"
            />
            <Carousel.Caption
              className="productSliderItem"
            >
              <h3 className="productSliderItemH3">محصولات رادیویی</h3>
              <p className="productSliderItemP">
                Lorem ipsum dolor sit amet
                <br />, consectetur adipiscing elit.Nulla
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ backgroundColor: "#080808" }}>
            <img
              className="productSlideImage3 d-block"
              src="image/product Image/electritic.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="productSliderItem">
              <h3>محصولات برق و UPS </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla
                vitae elit libero
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="productcarouselItem"
            style={{ backgroundColor: "#03080c" }}
          >
            <img
              className="productSlideImage2 d-block"
              src="image/product Image/networkProduct.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="productSliderItem">
              <h3>محصولات شبکه</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className="expaneProductContainer" fluid>
        <Row className="explaneProductRow">
          <Col
          sm={12}
          lg={6}
          className="explaneProductImageCol">
            <Image
              className="explaneProductImage"
              src="image/product Image/cameraProduct (2).jpg"
              fluid
            />
          </Col>
          <Col
          sm={12}
          lg={6}
          className="explaneProductCol">
            <div div>
              <h3>Lorem ipsum dolor sit </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                debitis corporis possimus? Deleniti aliquid ratione asperiores,
                fugit quae, architecto ad aspernatur unde corrupti numquam
                incidunt labore? Esse, dignissimos maxime? Mollitia.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        className="expaneProductContainer"
        style={{ backgroundColor: "#6a7d8a" }}
        fluid
      >
        <Row className="explaneProductRow">
          <Col
          sm={12}
          lg={6}
          className="explaneProductCol">
            <div div>
              <h3>Lorem ipsum dolor sit </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                debitis corporis possimus? Deleniti aliquid ratione asperiores,
                fugit quae, architecto ad aspernatur unde corrupti numquam
                incidunt labore? Esse, dignissimos maxime? Mollitia.
              </p>
            </div>
          </Col>
          <Col
          sm={12}
          lg={6}
          className="explaneProductImageCol">
            <Image
              className="explaneProductImage"
              src="image/product Image/electritic (2).jpg"
              fluid
            />
          </Col>
        </Row>
      </Container>
      <Container
        className="expaneProductContainer"
        style={{ backgroundColor: "#e9e9e9" }}
        fluid
      >
        <Row className="explaneProductRow">
          <Col
          sm={12}
          lg={6}
          className="explaneProductImageCol">
            <Image
              className="explaneProductImage"
              src="image/product Image/networkProduct (2).jpg"
              fluid
            />
          </Col>
          <Col
          sm={12}
          lg={6}
          className="explaneProductCol">
            <div div>
              <h3>Lorem ipsum dolor sit </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                debitis corporis possimus? Deleniti aliquid ratione asperiores,
                fugit quae, architecto ad aspernatur unde corrupti numquam
                incidunt labore? Esse, dignissimos maxime? Mollitia.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        className="expaneProductContainer"
        style={{ backgroundColor: "#000000" }}
        fluid
      >
        <Row className="explaneProductRow">
          <Col
          sm={12}
          lg={6}
          className="explaneProductCol">
            <div div>
              <h3>Lorem ipsum dolor sit </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                debitis corporis possimus? Deleniti aliquid ratione asperiores,
                fugit quae, architecto ad aspernatur unde corrupti numquam
                incidunt labore? Esse, dignissimos maxime? Mollitia.
              </p>
            </div>
          </Col>
          <Col
          sm={12}
          lg={6}
          className="explaneProductImageCol">
            <Image
              className="explaneProductImage"
              src="image/product Image/radioProduct (2).jpg"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
