import React, { Component } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import "bootstrap";
import "./networkConsulting.css";
import NetworkAccording from "./According/networkAccording";
export default class networkConsulting extends Component {
  render() {
    return (
      <>
        <Container fluid className="explanenetworkColsulting">
          <Container className="whatsNetworkConsulting">
            <h1>مشاوره شبکه</h1>
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

        <Container className="networkParagraphContainer" fluid>
          <Row className="networkRow">
            <Col
              className="networkparagraph col-12"
              lg={6}
              xs={{ order: "last" }}
              md={{ order: "first" }}
            >
              <h1>مشاوره شبکه</h1>
              <ol>
                <li>مشاوره طراحی و پیاده سازی ساختار مجازی سازی</li>
                <li>مشاوره و پیاده سازی زیر ساخت شبکه</li>
                <li>مشاوره امنیت شبکه</li>
                <li>مشاوره و پیاده سازی بهینه سازی و ارتقای شبکه</li>
                <li>مشاوره سرویسهای مایکروسافتی</li>
                <li>مشاوره شبکه های وایرلس</li>
                <li>مشاوره راه اندازی مراکز تلفن سازمانی</li>
                <li>مشاوره در خصوص راه اندازی سیستم برق اضطراری</li>
              </ol>
            </Col>
            <Col lg={6} xs={{ order: "first" }} md={{ order: "last" }}>
              <Image
                className="networkImage col-12"
                src="image/bigBulding.jpg"
              ></Image>
            </Col>
          </Row>
        </Container>
        <Container className="networkAccordingContainer" fluid>
          <Container>
            <NetworkAccording />
          </Container>
        </Container>
      </>
    );
  }
}
