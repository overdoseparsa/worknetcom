import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap";
import "./networkSecurity.css";
import NetworkSecurityAccording from "./networkSecurityAccording/networkSecurityAccording";
export default class networksecurity extends Component {
  render() {
    return (
      <>
        <Container fluid className="explanePasivenetwork">
          <Container className="whatspasiveNetwork">
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

        <Container className="pasiveNetworkParagraphContainer" fluid>
          <Row className="pasiveNetworkRow">
            <Col
              className="pasiveNetworkparagraph col-12 col-lg-6"
              xs={{ order: "last" }}
              lg={{ order: "first" }}
            >
              <h1>خدمات امنیت شبکه</h1>
              <ol>
                <li>ارائه لیست تجهیزات مورد نیاز پسیو شبکه(LOM)</li>
                <li>برآوردهزینه خدمات پسیو شبکه و ارائه تعرفه ثابت خدمات</li>
                <li>اجرای استاندارد کابل کشی شبکه، تلفن، برق و دوربین مداربسته</li>
                <li>اجرا و پیاده سازی زیرساخت شبکه به صورت استاندارد و ساختار یافته</li>
                <li>ارتقاء و بهینه سازی زیرساخت قدیمی شبکه </li>
                <li>داکت کشی شبکه و ترانکینگ شبکه </li>
                <li>نصب نودها،پریزها، کیستونها و پچ پنل و سایر اتصاالت</li>
                <li>نصب، مرتب سازی و آرایش انواع رک ایستاده و دیواری</li>
              </ol>
            </Col>
            <Col
              className="col-12 col-lg-6"
              lg={{ order: "last" }}
              xs={{ order: "first" }}
            >
              <Image
                className="pasiveNetworkImage col-12"
                src="image/bigBulding.jpg"
              ></Image>
            </Col>
          </Row>
        </Container>
        <Container className="pasiveNetworkAccordingContainer" fluid>
          <Container>
            <NetworkSecurityAccording />
          </Container>
        </Container>
        <Container className="pasiveDetailsContainer" fluid>
          <h2>ادامه خدمات ما در حوزه شبکه اکتیو</h2>
          <Row className="pasiveDerailsRow">
            <Col md={6} xs={12}>
            نصب، مرتب سازی و آرایش انواع رک ایستاده و دیواری
            </Col>
            <Col md={6} xs={12}>
            طراحی و اجرای پروژه اتاق سرور و دیتاسنتر
            </Col>
            <Col md={6} xs={12}>
            فروش، نصب و راه اندازی دوربین مداربسته تحت شبکه
            </Col>
            <Col md={6} xs={12}>
            نصب سنسورها و تجهیزات هوشمند سازی جهت کنترل زیرساخت شبکه
            </Col>
            <Col md={6} xs={12}>
            طراحی واستاندارد سازی اتاق سرور
            </Col>
            <Col md={6} xs={12}>
            نصب تجهیزات شبکه مانند: سوئیچ، روتر، سرور، رادیو و…
            </Col>
            <Col md={6} xs={12}>
            ارائه نقشه و گزارش کار از اجرای پروژه های کابلی و بیسیم شبکه
            </Col>
            <Col md={6} xs={12}>
            اجرای کابل کشی فیبر نوری
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
