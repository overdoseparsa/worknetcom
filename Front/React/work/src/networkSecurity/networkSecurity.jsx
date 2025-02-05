import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap";
import "./networkSecurity.css";
import NetworkSecurityAccording from "./networkSecurityAccording/networkSecurityAccording";
export default class networksecurity extends Component {
  render() {
    return (
      <>
        <Container fluid className="explaneSecuritynetwork">
          <Container className="whatSecurityNetwork">
            <h1>خدمات امنیت شبکه</h1>
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

        <Container className="networkSecurityParagraphContainer" fluid>
          <Row className="NetworkSecurityRow">
            <Col
              className="networkSecurityparagraph col-12 col-lg-6"
              xs={{ order: "last" }}
              lg={{ order: "first" }}
            >
              <h1>خدمات امنیت شبکه</h1>
              <ol>
                <li>نصب و راه اندازیIDSوIPSدر شبکه</li>
                <li>امنیت سیستم عامل و الیه کاربردی</li>
                <li>پیکربندی امنیتی و ایمن سازی سرویسهای شبکه</li>
                <li>امنیت و پیاده سازیNetwork Monitoring</li>
                <li>نصب و پیاده سازیIP SLA Manager </li>
                <li>نصب و راه اندازی سیستمAnti-Virus </li>
                <li>نصب و پیاده سازیNetFlow Traffic Analyzer</li>
                <li>
                  طراحی ، نصب و راه اندازی سیستمBandwidth Management & Caching
                </li>
              </ol>
            </Col>
            <Col
              className="col-12 col-lg-6"
              lg={{ order: "last" }}
              xs={{ order: "first" }}
            >
              <Image
                className="networkSecurityImage col-12"
                src="image/bigBulding.jpg"
              ></Image>
            </Col>
          </Row>
        </Container>
        <Container className="networkSecurityAccordingContainer" fluid>
          <Container>
            <NetworkSecurityAccording />
          </Container>
        </Container>
        <Container className="securityDetailsContainer" fluid>
          <h2>ادامه خدمات ما در حوزه امنیت شبکه </h2>
          <Row className="securityDerailsRow">
            <Col md={6} xs={12}>
              امنیت ساختار شبکه و تهیه مستندات مربوط بر اساس مدل الیه ای
              (Core,Distribution,Access)و مستندسازی تمامی ساختار شبکه
            </Col>
            <Col md={6} xs={12}>
              امنیت ، طراحی و پیاده سازی سیستم سوییچینگ شبکه بر اساس مدلL3
              Switching & STP{" "}
            </Col>
            <Col md={6} xs={12}>
              نصب و راه اندازیFirewallو ایجادZoneهای امنیتی توسط آن و تعریف سطوح
              دسترسی
            </Col>
            <Col md={6} xs={12}>
              امنیت ، طراحی و پیاده سازیIP Address Management
            </Col>
            <Col md={6} xs={12}>
              امنیت ، طراحی و پیاده سازیLAN & WANو مدیریت سوییچها ، روترها و
              کنترل ترافیک آنها
            </Col>
            <Col md={6} xs={12}>
              پیکربندی امنیت روی تمامی سیستمهای عامل شبکه ای و اینترنتی(NOS &
              IOS)
            </Col>
            <Col md={6} xs={12}>
              پیکربندی امنیتی روی تمامیسیستمهای عامل کالینت ها(OS)
            </Col>
            <Col md={6} xs={12}>
              نصب و راه اندازی سیستمAutomatic Backup & Restore
            </Col>
            <Col md={6} xs={12}>
              نصب و راه اندازی سیستمWSUSدر شبکه هایMicrosoft Base
            </Col>
            <Col md={6} xs={12}>
              پیکربندی امنیتی و ایمن سازیActive Directory & Group Policy
            </Col>
            <Col md={6} xs={12}>
              نصب و راه اندازی سیستمNetwork Monitoring & Analyzer
            </Col>
            <Col md={6} xs={12}>
              نصب و پیاده سازیNetwork Performance Monitor
            </Col>
            <Col md={6} xs={12}>
              نصب و پیاده سازیApplication Performance Monitor{" "}
            </Col>
            <Col md={6} xs={12}>
              نصب و پیاده سازیIP Address Manager{" "}
            </Col>
            <Col md={6} xs={12}>
              Network Base & Host Base{" "}
            </Col>
            <Col md={6} xs={12}>
              نصب و راه اندازی سیستمAnti-Virus{" "}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
