import React from "react";
import "./productPage.css";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { motion } from "framer-motion";

export default function productpage() {
  return (
    <>
      <Container className="p-0 m-0" fluid>
        <Carousel
          data-bs-theme="light"
          className="porductCarousel"
          pause={false}
          interval={3000}
        >
          <Carousel.Item style={{ backgroundColor: "black" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                className="productSlideImage"
                src="/Image/cameraProduct.jpg"
                fluid
              />
            </motion.div>
            <Carousel.Caption className="productSliderItem">
              <h3>محصولات امنیتی</h3>
              <p>
                محصولات امنیتی WORKNET شامل فایروال‌های پیشرفته، سیستم‌های تشخیص
                نفوذ، راهکارهای احراز هویت و رمزنگاری داده‌ها است که از
                سازمان‌ها در برابر تهدیدات سایبری محافظت می‌کند
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="productcarouselItem1"
            style={{ backgroundColor: "#fff" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              <Image
                className="productSlideImage1"
                src="/Image/RadioProduct.jpg"
              />
            </motion.div>
            <Carousel.Caption className="productSliderItem">
              <h3 className="productSliderItemH3">محصولات رادیویی</h3>
              <p className="productSliderItemP">
                محصولات رادیویی WORKNET شامل رادیوهای PtP و PtMP، آنتن‌های تخصصی
                و تجهیزات ارتباط بی‌سیم پرسرعت است که ارتباطات پایدار و امن را
                فراهم می‌کند.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ backgroundColor: "#000000" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 7.5 }}
            >
              <Image
                className="productSlideImage3 d-block"
                src="/Image/electritic.jpg"
                alt="First slide"
              />
            </motion.div>
            <Carousel.Caption className="productSliderItem">
              <h3>محصولات برق و UPS </h3>
              <p>
                محصولات برق و UPS WORKNET شامل UPSهای آنلاین و آفلاین،
                استابلایزرها و منابع تغذیه اضطراری است که برای تأمین برق پایدار
                و جلوگیری از اختلالات الکتریکی طراحی شده‌اند.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="productcarouselItem"
            style={{ backgroundColor: "#03080c" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 11 }}
            >
              <Image
                className="productSlideImage2 d-block"
                src="/Image/NetworkProduct.jpg"
                alt="First slide"
              />
            </motion.div>
            <Carousel.Caption className="productSliderItem">
              <h3>محصولات شبکه</h3>
              <p>
                محصولات شبکه WORKNET شامل سوئیچ‌ها، روترها، فایروال‌ها و تجهیزات
                وایرلس است که ارتباطی <br /> پایدار، سریع و امن را برای
                سازمان‌ها فراهم می‌کند
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
            className="explaneProductImageCol col-12 col-lg-6"
          >
            <Image
              className="explaneProductImage"
              src="/Image/cameraProduct(2).jpg"
              fluid
            />
          </Col>
          <Col sm={12} lg={6} className="explaneProductCol col-12 col-lg-6">
            <div div>
              <h3 className="fw-bold">محصولات امنیتی </h3>
              <p className="fw-bold">
                تولید انواع محصولات امنیتی مشغول است. برخی از محصولات شامل
                دوربین‌های مداربسته، سیستم‌های اعلام حریق، سیستم‌های کنترل
                دسترسی، دزدگیرهای بی‌سیم، و تجهیزات نظارتی پیشرفته می‌باشد. این
                محصولات به منظور افزایش امنیت و نظارت در محیط‌های مختلف تولید و
                ارائه می‌شوند
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
          <Col sm={12} lg={6} className="explaneProductCol col-12 col-lg-6">
            <div div>
              <h3 className="fw-bold">محصولات برق و UPS</h3>
              <p className="fw-bold">
                تولید و تأمین محصولات برق اضطراری (UPS) مشغول است. برخی از این
                محصولات شامل UPS های صنعتی، خانگی، و سازمانی هستند که برای تأمین
                برق پایدار در مواقع قطعی برق و حفاظت از تجهیزات حساس در برابر
                نوسانات برق طراحی شده‌اند. این سیستم‌ها کمک می‌کنند تا عملکرد
                بدون وقفه در دستگاه‌ها و تجهیزات حیاتی حفظ شود
              </p>
            </div>
          </Col>
          <Col
            sm={{ order: "first" }}
            lg={{ order: "last" }}
            className="explaneProductImageCol col-12 col-lg-6"
          >
            <Image
              className="explaneProductImage"
              src="/Image/electritic(2).jpg"
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
            className="explaneProductImageCol col-12 col-lg-6"
          >
            <Image
              className="explaneProductImage"
              src="/Image/networkProduct(2).jpg"
              fluid
            />
          </Col>
          <Col sm={12} lg={6} className="explaneProductCol col-12 col-lg-6">
            <div div>
              <h3 className="fw-bold">محصولات شبکه </h3>
              <p className="fw-bold">
                تولید و تأمین محصولات شبکه نیز فعالیت دارد. این محصولات شامل
                سوئیچ‌ها، روترها، مودم‌ها، فایروال‌ها، کابل‌های شبکه، پچ‌پنل‌ها
                و تجهیزات اکتیو و پسیو شبکه هستند. این تجهیزات برای بهبود
                ارتباطات شبکه‌ای، افزایش سرعت انتقال داده و ایجاد شبکه‌های
                پایدار و امن در سازمان‌ها و صنایع مختلف طراحی و تولید می‌شوند
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
          <Col sm={12} lg={6} className="explaneProductCol col-12 col-lg-6">
            <div div>
              <h3 className="fw-bold">محصولات رادیویی </h3>
              <p className="fw-bold">
                تولید محصولات رادیویی نیز فعالیت دارد. این محصولات شامل رادیوهای
                بی‌سیم برای ارتباطات سریع و امن، سیستم‌های ارتباطی رادیویی برای
                صنایع مختلف مانند نفت، گاز، حمل‌ونقل و امنیت، آنتن‌های رادیویی
                برای تقویت سیگنال‌ها و دستگاه‌های ارتباطی VHF/UHF برای استفاده
                در شبکه‌های رادیویی تخصصی هستند. تمامی این محصولات به منظور
                بهبود ارتباطات و افزایش کارایی در محیط‌های صنعتی و حساس طراحی و
                تولید می‌شوند
              </p>
            </div>
          </Col>
          <Col
            sm={{ order: "first" }}
            lg={{ order: "last" }}
            className="explaneProductImageCol col-12 col-lg-6"
          >
            <Image
              className="explaneProductImage"
              src="/Image/radioProduct(2).jpg"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
