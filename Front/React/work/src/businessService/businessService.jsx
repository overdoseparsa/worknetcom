import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap";
import "./businessService.css";
import BusinessServiceAccording from "./businessServiceAccording/businessServiceAccording";
export default class businessService extends Component {
  render() {
    return (
      <>
        <Container fluid className="explanebusinessService">
          <Container className="whatbusinessService">
            <h1>خدمات بازرگانی</h1>
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

        <Container className="businessParagraphContainer" fluid>
          <Row className="businessRow">
            <Col
              className="businessparagraph col-12 col-lg-6"
              xs={{ order: "last" }}
              lg={{ order: "first" }}
            >
              <h1>خدمات بازرگانی</h1>
              <ol>
                <li>
                  فروش و نصب کلیه تجهیزات برق و UPS ( برندهای Apc - Nexanse -
                  Unicome - Legrand - Moller ,...){" "}
                </li>
                <li>فروش کلیه تجهیزات شبکه</li>
                <li>فروش کلیه تجهیزات امنیتی و نظارتی</li>
                <li>فروش سیستم های رادیویی</li>
                <li>
                  تامین نیروی انسانی تمام وقت در جهت انجام فعالیت های تخصصی درون
                  سازمانی{" "}
                </li>
                <li>ارائه راهکارهای مدیریتی نیروی انسانی در حوزهIT </li>
                <li>
                  تامین نیروی انسانی پاره وقت متخصص در جهت انجام فعالیت های
                  تخصصی درون سازمانیو برون سازمانی{" "}
                </li>
              </ol>
            </Col>
            <Col
              className="col-12 col-lg-6"
              lg={{ order: "last" }}
              xs={{ order: "first" }}
            >
              <Image
                className="businessImage col-12"
                src="image/bigBulding.jpg"
              ></Image>
            </Col>
          </Row>
        </Container>
        <Container className="businessAccordingContainer" fluid>
          <Container>
            <BusinessServiceAccording />
          </Container>
        </Container>
        <Container className="businessDetailsContainer" fluid>
          <h2>خدمات ما در حوزه امنیت شبکه</h2>
          <Row className="businessDerailsRow">
            <Col md={6} xs={12}>
              فروش و نصب کلیه تجهیزات برق و UPS ( برندهای Apc - Nexanse -
              Unicome - Legrand - Moller ,...)
            </Col>
            <Col md={6} xs={12}>
              فروش کلیه تجهیزات شبکه
            </Col>
            <Col md={6} xs={12}>
              فروش کلیه تجهیزات امنیتی و نظارتی
            </Col>
            <Col md={6} xs={12}>
              فروش سیستم های رادیویی{" "}
            </Col>
            <Col md={6} xs={12}>
              تامین نیروی انسانی تمام وقت در جهت انجام فعالیت های تخصصی درون
              سازمانی
            </Col>
            <Col md={6} xs={12}>
              ارائه راهکارهای مدیریتی نیروی انسانی در حوزهIT
            </Col>
            <Col md={6} xs={12}>
              تامین نیروی انسانی پاره وقت متخصص در جهت انجام فعالیت های تخصصی
              درون سازمانیو برون سازمانی
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
