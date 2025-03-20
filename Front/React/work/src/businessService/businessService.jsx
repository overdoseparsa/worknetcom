import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap";
import { Link } from "react-router-dom";
import "./businessService.css";
import BusinessServiceAccording from "./businessServiceAccording/businessServiceAccording";
import { motion } from "framer-motion";

export default function BusinessService() {
  return (
    <>
      <Container fluid className="explanebusinessService">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Container className="whatbusinessService">
            <h1>خدمات بازرگانی</h1>
            <h6>
              شرکت WORKNET با هدف ارتقاء عملکرد شبکه‌های سازمانی، خدمات تأمین
              تجهیزات اورجینال و باکیفیت از برندهای معتبر جهانی را برای
              سازمان‌ها و کسب‌وکارها فراهم می‌کند. در دنیای امروز، داشتن تجهیزات
              مناسب و باکیفیت برای شبکه، یکی از اساسی‌ترین ارکان عملکرد صحیح و
              بهینه شبکه است. تیم متخصص ما با درک نیازهای خاص هر کسب‌وکار، کمک
              می‌کند تا تجهیزات مناسب، قابل اعتماد و با بهترین کیفیت برای شبکه
              شما انتخاب و تأمین شود. ما با ارائه خدمات تأمین تجهیزات، اطمینان
              می‌دهیم که سازمان‌ها به تجهیزاتی دسترسی داشته باشند که نه تنها از
              نظر کیفیت بالا و مطابق با آخرین استانداردهای جهانی باشند، بلکه
              بتوانند نیازهای خاص شبکه شما را به‌خوبی پوشش دهند. این تجهیزات
              شامل سوئیچ‌ها، روترها، فایروال‌ها، سرورها، کابل‌ها و سایر تجهیزات
              پسیو و اکتیو شبکه هستند که از برندهای مطرح و قابل اعتماد جهانی
              تأمین می‌شوند
            </h6>
          </Container>
        </motion.div>
      </Container>

      <Container className="businessParagraphContainer" fluid>
        <Row className="businessRow">
          <Col
            className="businessparagraph col-12 col-lg-6 p-0 pe-md-5"
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
                تامین نیروی انسانی پاره وقت متخصص در جهت انجام فعالیت های تخصصی
                درون سازمانیو برون سازمانی{" "}
              </li>
            </ol>
          </Col>
          <Col
            className=" bussinesImageRow col-12 col-lg-6"
            lg={{ order: "last" }}
            xs={{ order: "first" }}
          >
            <Container className="bussinesSpecialist">
              <Row className=" bussinesSpecialistRow d-flex rightTitle">
                <Col className=" d-flex justify-content-center col-12 col-sm-8">
                  <ul
                    className="d-grid p-0 pe-sm-5 pe-0"
                    style={{ listStyle: "none" }}
                  >
                    <li className="mb-2 fw-bold text-end fs-4">
                      مدیر بخش خدمات بازرگانی
                    </li>
                    <li className="mb-2 text-end fs-sm-5 fs-6">
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
                      فریبرز زندیان
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
                      09131254936
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
              className="businessImage col-12"
              src="/Image/bussinessImage.jpg"
            ></Image>
          </Col>
        </Row>
      </Container>
      <Container className="businessAccordingContainer" fluid>
        <Container>
          <BusinessServiceAccording />
        </Container>
      </Container>
      <Container className="consultingDetailsContainer" fluid>
        <h2>خدمات ما در حوزه خدمات بازرگانی</h2>
        <Row className="consultingDerailsRow">
          <Col md={6} xs={12}>
            فروش و نصب کلیه تجهیزات برق و UPS ( برندهای Apc - Nexanse - Unicome
            - Legrand - Moller ,...)
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
            تامین نیروی انسانی پاره وقت متخصص در جهت انجام فعالیت های تخصصی درون
            سازمانیو برون سازمانی
          </Col>
        </Row>
      </Container>
    </>
  );
}
