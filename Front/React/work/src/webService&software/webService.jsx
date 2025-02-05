import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap";
import "./webService.css";
import WebServiceAccording from "./webServiceAccording/webServiceAccording";
export default class webService extends Component {
  render() {
    return (
      <>
        <Container fluid className="explanewebService">
          <Container className="whatwebService">
            <h1>خدمات وب و نرم افزار</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              deserunt odio consequatur dolor consequuntur atque et quia, odit
              accusantium adipisci soluta quidem consectetur saepe temporibus
              nam, ea suscipit qui asperiores? Optio iusto consequuntur ducimus
              possimus consectetur doloremque accusamus perferendis vero nostrum
              dicta! Possimus fugiat, architecto velit placeat perspiciatis
              aspernatur voluptates temporibus iste veniam ducimus enim quos hic
              similique dolore sed. Numquam dicta doloribus aut explicabo quod
              officiis, magni soluta mollitia. Nihil itaque quibusdam autem
              laborum quas, praesentium, obcaecati, maxime sed ducimus
              consequatur magnam perspiciatis nesciunt omnis quos corporis sit
              corrupti.
            </h6>
          </Container>
        </Container>

        <Container className="webServiceParagraphContainer" fluid>
          <Row className="webServiceRow">
            <Col
              className="webServiceparagraph col-12 col-lg-6"
              xs={{ order: "last" }}
              lg={{ order: "first" }}
            >
              <h1>خدمات وب و نرم افزار</h1>
              <ol>
                <li>برنامه نویسی وب سفارش مشتری</li>
                <li>برنامه نویسی نرم افزار سفارش مشتری</li>
                <li>ارائه خدمات نگهداری وب سایت</li>
                <li>نرم افزار جامع ارزیابی عملکرد</li>
                <li>نرم افزار آرشیو الکترونیکی اسناد</li>
                <li>سیستم جامع مدیریت ارتباط با مشتریانISP</li>
                <li>سیستم جامع کنترل فروشISP </li>
                <li>ارائه راهکارهای مبتنی بر شیرپوینت</li>
              </ol>
            </Col>
            <Col
              className="col-12 col-lg-6"
              lg={{ order: "last" }}
              xs={{ order: "first" }}
            >
              <Image
                className="webServiceImage col-12"
                src="image/bigBulding.jpg"
              ></Image>
            </Col>
          </Row>
        </Container>
        <Container className="webServiceAccordingContainer" fluid>
          <Container>
            <WebServiceAccording />
          </Container>
        </Container>
        <Container className="webServiceDetailsContainer" fluid>
          <h2>خدمات ما در حوزه وب و نرم افزار</h2>
          <Row className="webServiceDerailsRow">
            <Col md={6} xs={12}>
              برنامه نویسی وب سفارش مشتری
            </Col>
            <Col md={6} xs={12}>
              برنامه نویسی نرم افزار سفارش مشتری
            </Col>
            <Col md={6} xs={12}>
              ارائه خدمات نگهداری وب سایت
            </Col>
            <Col md={6} xs={12}>
              ارائه خدمات نگهداری وب سایت{" "}
            </Col>
            <Col md={6} xs={12}>
              نرم افزار جامع ارزیابی عملکرد
            </Col>
            <Col md={6} xs={12}>
              نرم افزار آرشیو الکترونیکی اسناد
            </Col>
            <Col md={6} xs={12}>
              سیستم جامع مدیریت ارتباط با مشتریانISP
            </Col>
            <Col md={6} xs={12}>
              سیستم جامع کنترل فروشISP
            </Col>
            <Col md={6} xs={12}>
              ارائه راهکارهای مبتنی بر شیرپوینت
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
