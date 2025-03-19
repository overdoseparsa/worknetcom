import React, { useState, useEffect, useRef } from "react";
import "./infoContainer.css";
import { Container, Col, Row, Image } from "react-bootstrap";
import "bootstrap";

export default function InfoContainer() {
  const [isVisible, setIsVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      itemsVisible.forEach((_, index) => {
        setTimeout(() => {
          setItemsVisible((prev) => {
            const newState = [...prev];
            newState[index] = true;
            console.log(index);
            return newState;
          });
        }, index * 300);
      });
    }
  }, [isVisible]);

  return (
    <>
      <Container ref={sectionRef} className="baseProjectContainer " fluid>
        <h1 className={`fadeIn titleTag ${itemsVisible[0] ? "" : "show"}`}>
          پروژه‌های شاخص شرکت
        </h1>
        <Container className="infoContainer mb-5 p-1 p-sm-2" fluid>
          {/* first */}
          <Row
            className={`fadeIn rowContainer d-md-flex show ${
              itemsVisible[1] ? "" : ""
            }`}
          >
            <Col
              className="imgContainer col-sm-12 col-md-6 p-0"
              xs={{ order: "first" }}
            >
              <Image src="image/zobAhan.jpg" fluid />
            </Col>
            <Col
              className="textContainer col-12 col-md-6 pt-0 pb-5"
              xs={{ order: "last" }}
            >
              <h2 className="mb-4 mt-5">شرکت ذوب اهن اصفهان</h2>
              <p>
                شرکت ما در ذوب‌آهن اصفهان پروژه‌هایی شامل اجرای دوربین‌های
                امنیتی و نظارتی، راه‌اندازی شبکه کامپیوتری، ایجاد ارتباط از طریق
                فیبر نوری، پیاده‌سازی شبکه‌های صنعتی و تأمین کالا و تجهیزات را
                انجام داده است
              </p>
            </Col>
          </Row>
          {/* second */}
          <Row
            className={`fadeIn rowContainer d-md-flex show ${
              itemsVisible[2] ? "" : ""
            }`}
          >
            <Col
              className="textContainer col-12 col-md-6 pt-0 pb-5"
              md={{ order: "first" }}
              xs={{ order: "last" }}
            >
              <h2 className="mb-4 mt-5"> شرکت فولاد مبارکه</h2>
              <p>
                شرکت ما در مجموعه‌های فولادی پروژه‌هایی شامل اجرای دوربین‌های
                امنیتی و نظارتی، راه‌اندازی شبکه کامپیوتری، ایجاد ارتباط از طریق
                فیبر نوری، پیاده‌سازی شبکه‌های صنعتی و تأمین کالا و تجهیزات را
                انجام داده است
              </p>
            </Col>
            <Col
              className="imgContainer col-sm-12 col-md-6 p-0"
              md={{ order: "last" }}
              xs={{ order: "first" }}
            >
              <Image src="image/fouladmobarake.jpg" fluid />
            </Col>
          </Row>
          {/* third */}
          <Row
            className={`fadeIn rowContainer d-md-flex show ${
              itemsVisible[3] ? "" : ""
            }`}
          >
            <Col
              className="imgContainer col-sm-12 col-md-6 p-0"
              xs={{ order: "first" }}
              style={{ backgroundColor: "#ffffff", borderRadius: 15 }}
            >
              <Image src="image/irisa.png" fluid />
            </Col>
            <Col
              className="textContainer col-12 col-md-6  p-0 pb-5"
              xs={{ order: "last" }}
            >
              <h2 className="mb-4 mt-5">شرکت ایریسا</h2>
              <p>
                شرکت ما در همکاری با ایریسا، تأمین کالا و تجهیزات شبکه و ارائه
                خدمات اکتیو شبکه را بر عهده داشته است. این پروژه با هدف بهبود
                زیرساخت‌های ارتباطی و افزایش کارایی سیستم‌های شبکه اجرا شده است.
              </p>
            </Col>
          </Row>
          {/* forth */}
          <Row
            className={`fadeIn rowContainer d-md-flex show`}
          >
            <Col
              className="textContainer col-12 col-md-6 pt-0 pb-5"
              md={{ order: "first" }}
              xs={{ order: "last" }}
            >
              <h2 className="mb-4 mt-5"> شرکت مس رفسنجان</h2>
              <p>
                شرکت ما در مجموعه‌های مس رفسنجان پروژه‌هایی شامل اجرای دوربین‌های
                امنیتی و نظارتی، راه‌اندازی شبکه کامپیوتری، ایجاد ارتباط از طریق
                فیبر نوری، پیاده‌سازی شبکه‌های صنعتی و تأمین کالا و تجهیزات را
                انجام داده است
              </p>
            </Col>
            <Col
              className="imgContainer col-sm-12 col-md-6 p-0"
              md={{ order: "last" }}
              xs={{ order: "first" }}
            >
              <Image src="image/mesRafsanjan.jpg" fluid />
            </Col>
          </Row>
          {/* fith */}
          <Row
            className={`fadeIn rowContainer d-md-flex show ${
              itemsVisible[3] ? "" : ""
            }`}
          >
            <Col
              className="imgContainer col-sm-12 col-md-6 p-0"
              xs={{ order: "first" }}
            >
              <Image src="/Image/fouladSefidDasht.jpg" fluid />
            </Col>
            <Col
              className="textContainer col-12 col-md-6  p-0 pb-5"
              xs={{ order: "last" }}
            >
              <h2 className="mb-4 mt-5">شرکت فولاد سفید دشت</h2>
              <p>
                شرکت ما در همکاری با فولاد سفید دشت، تأمین کالا و تجهیزات شبکه و ارائه
                خدمات اکتیو شبکه را بر عهده داشته است. این پروژه با هدف بهبود
                زیرساخت‌های ارتباطی و افزایش کارایی سیستم‌های شبکه اجرا شده است.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
