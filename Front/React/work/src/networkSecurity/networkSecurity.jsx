import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap";
import "./networkSecurity.css";
import NetworkSecurityAccording from "./networkSecurityAccording/networkSecurityAccording";
import { delay, motion } from "framer-motion";
export default function Networksecurity() {
  return (
    <>
      <Container fluid className="explaneSecuritynetwork">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Container className="whatSecurityNetwork">
            <h1>خدمات امنیت شبکه</h1>
            <h6>
              امنیت شبکه یکی از اولویت‌های اصلی شرکت WORKNET است. ما با استفاده
              از ابزارها و تکنیک‌های پیشرفته امنیتی، به‌طور کامل از شبکه‌های شما
              در برابر تهدیدات و حملات سایبری محافظت می‌کنیم. در دنیای امروز که
              حملات سایبری و تهدیدات دیجیتال به‌طور فزاینده‌ای پیچیده‌تر و
              مداوم‌تر می‌شوند، داشتن یک شبکه ایمن و مقاوم در برابر این تهدیدات
              امری ضروری است. تیم ما با بهره‌گیری از دانش فنی بالا، راهکارهای
              جامع و تخصصی را برای تأمین امنیت شبکه‌های سازمانی ارائه می‌دهد.
              خدمات امنیت شبکه ما شامل مجموعه‌ای از اقدامات پیشگیرانه و واکنش
              سریع به تهدیدات احتمالی است. این اقدامات به‌گونه‌ای طراحی شده‌اند
              که بتوانند از شبکه‌های شما در برابر حملات مختلف، نشت داده‌ها و
              هرگونه تهدید احتمالی محافظت کنند. تمامی راهکارهای امنیتی ما، با در
              نظر گرفتن نیازهای خاص شما و همچنین بهترین شیوه‌های امنیتی روز دنیا
              ارائه می‌شود تا تضمین شود که شبکه شما در هر شرایطی از امنیت بالایی
              برخوردار خواهد بود
            </h6>
          </Container>
        </motion.div>
      </Container>

      <Container className="networkSecurityParagraphContainer" fluid>
        <Row className="NetworkSecurityRow">
          <Col
            className="networkSecurityparagraph col-12 col-lg-6 p-0 pe-md-5"
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
            className=" securityImageRow col-12 col-lg-6"
            lg={{ order: "last" }}
            xs={{ order: "first" }}
          >
            <Container className="networkSecuritySpecialist">
              <Row className=" networkSecuritySpecialistRow d-flex rightTitle">
                <Col className=" d-flex justify-content-center col-12 col-sm-8">
                  <ul
                    className="d-grid p-0 pe-sm-5 pe-0"
                    style={{ listStyle: "none" }}
                  >
                    <li className="mb-2 fw-bold text-end fs-sm-4 fs-6">
                      مدیر بخش امنیت شبکه
                    </li>
                    <li className="mb-2 text-end fs-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        className="ms-2"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M148,108a12,12,0,0,1,12-12h28a12,12,0,0,1,0,24H160A12,12,0,0,1,148,108Zm40,28H168a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24Zm48-80V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212ZM58.28,159.37A43.82,43.82,0,0,1,71.53,142a36,36,0,1,1,56.94,0,43.84,43.84,0,0,1,13.26,17.37,12,12,0,0,1-22.15,9.26C116.48,161.19,108.42,156,100,156s-16.47,5.2-19.59,12.63a12,12,0,1,1-22.13-9.26ZM88,120a12,12,0,1,0,12-12A12,12,0,0,0,88,120Z"></path>
                      </svg>
                      محمدرضا زندیان
                    </li>
                    <li className="mb-2 text-end fs-sm-6 fs-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        className="ms-2"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z"></path>
                      </svg>
                      Worknsco@gmail.com
                    </li>
                    <li className=" text-end fs-sm-5 fs-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        className="ms-2"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z"></path>
                      </svg>
                      09120155112
                    </li>
                  </ul>
                </Col>
                <Col className="text-center d-grid align-items-center">
                  <Button
                    className="mx-auto mb-2 mb-sm-0"
                    style={{ width: 100 }}
                  >
                    <Link to={"/ContactForm"}>ارتباط باما</Link>
                  </Button>
                </Col>
              </Row>
            </Container>
            <Image
              className="networkSecurityImage col-12"
              src="/image/services/networkSecurityImage.jpg"
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
            امنیت ، طراحی و پیاده سازیLAN & WANو مدیریت سوییچها ، روترها و کنترل
            ترافیک آنها
          </Col>
          <Col md={6} xs={12}>
            پیکربندی امنیت روی تمامی سیستمهای عامل شبکه ای و اینترنتی(NOS & IOS)
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
