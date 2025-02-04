import React, { Component } from "react";
import "./servicePage.css";
import ServiceTag from "./serviceTag/serviceTag";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap";
export default function servicePage() {
  return (
    <>
      <Container className="aboutCompanyContainer" fluid>
        <Container className="aboutCompanyLogoContainer">
          <h1 className="aboutCompanyTitle">ورک‌نت</h1>
          {/* <Image className="aboutCompanyLogo" src="image/tech-co-logo.png" /> */}
          <h1 className="aboutCompanyLogo">WorkNet</h1>
        </Container>
        <Container className="aboutCompanyExplane">
          <h1>درباره ورک‌نت</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            laudantium. Sit fugiat necessitatibus nostrum culpa, iste nihil est
            ullam quae eaque maxime nesciunt. Fuga doloribus, doloremque maxime
            similique explicabo sunt.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nobis, laudantium. Sit fugiat necessitatibus
            nostrum culpa, iste nihil est ullam quae eaque maxime nesciunt. Fuga
            doloribus, doloremque maxime similique explicabo sunt.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Nobis, laudantium. Sit
            fugiat necessitatibus nostrum culpa, iste nihil est ullam quae eaque
            maxime nesciunt. Fuga doloribus, doloremque maxime similique
            explicabo sunt.
          </p>
        </Container>
      </Container>
      {/* <Container className="colorContainer" fluid></Container> */}
      <ServiceTag className="serviceTagaTag"></ServiceTag>
      <Container className="colorContainer1" fluid></Container>
      {/* <Container fluid>
        <Container className="expalneService" fluid>
          <h1 className="headerServicetitle"> نمونه‌هایی از هنر و تخصص ما </h1>
          <Row className="rowServiceContainer d-md-flex d-grid">
            <Col
              className="imgserviceContainer col-sm-12 col-md-6 p-0"
              xs={{ order: "first" }}
            >
              <Image className="imageService" src="image/earth (3).jpg" fluid />
            </Col>
            <Col
              className="textServiceContainer col-sm-12 col-md-6 pt-0 pt-md-5 "
              xs={{ order: "last" }}
            >
              <h2 className="mb-4 mt-5">Lorem ipsum dolor sit</h2>
              <p>
                amet consectetur adipisicing elit. Voluptatem aut harum
                voluptatum accusantium, repudiandae ad reiciendis, quia nemo
                aperiam excepturi impedit veniam distinctio ut modi ipsa animi
                provident architecto labore.
              </p>
            </Col>
          </Row>
          <Row className="rowServiceContainer d-md-flex d-grid">
            <Col
              className="imgserviceContainer col-sm-12 col-md-6 p-0"
              xs={{ order: "first" }}
            >
              <Image
                className="imageService"
                src="image/bigBulding.jpg"
                fluid
              />
            </Col>
            <Col
              className="textServiceContainer col-sm-12 col-md-6 pt-0 pt-md-5 "
              xs={{ order: "last" }}
            >
              <h2 className="mb-4 mt-5">Lorem ipsum dolor sit</h2>
              <p>
                amet consectetur adipisicing elit. Voluptatem aut harum
                voluptatum accusantium, repudiandae ad reiciendis, quia nemo
                aperiam excepturi impedit veniam distinctio ut modi ipsa animi
                provident architecto labore.
              </p>
            </Col>
          </Row>
          <Row className="rowServiceContainer d-md-flex d-grid">
            <Col
              className="textServiceContainer col-sm-12 col-md-6 pt-0 pt-md-5 "
              xs={{ order: "last" }}
            >
              <h2 className="mb-4 mt-5">Lorem ipsum dolor sit</h2>
              <p>
                amet consectetur adipisicing elit. Voluptatem aut harum
                voluptatum accusantium, repudiandae ad reiciendis, quia nemo
                aperiam excepturi impedit veniam distinctio ut modi ipsa animi
                provident architecto labore.
              </p>
            </Col>
            <Col
              className="imgserviceContainer col-sm-12 col-md-6 p-0"
              xs={{ order: "first" }}
            >
              <Image className="imageService" src="image/5Gearth.png" fluid />
            </Col>
          </Row>
        </Container>
      </Container> */}
    </>
  );
}
