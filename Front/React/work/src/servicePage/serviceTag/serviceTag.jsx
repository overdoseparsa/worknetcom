import React, { useState, useEffect, useRef } from "react";
import "./serviceTag.css";
import "bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ServiceTag() {
  const [text, steText] = useState("");
  const massage = "دخدماتی که تفاوت ایجاد می‌کنند";
  const [isVisible, setIsVisible] = useState(false);
  const messageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (messageRef.current) {
      observer.observe(messageRef.current);
    }

    return () => {
      if (messageRef.current) {
        observer.unobserve(messageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const speed = 50;
      const typing = () => {
        if (i < massage.length) {
          steText((prevText) => prevText + massage.charAt(i));
          i++;
          setTimeout(typing, speed);
        }
      };
      typing();
    }
  }, [isVisible]);

  return (
    <>
      <Container
        ref={messageRef}
        className={`serviceTagContainer ${isVisible ? "visible" : ""}`}
        fluid
      >
        <h1>{text}</h1>
        <Row className="rowService">
          <Col className="serviceInfo" sm={6}>
            <h1 className="numService ">01</h1>
            <h3>مشاوره شبکه</h3>
            <h6>
              شرکت WORKNET با بهره‌گیری از تیمی متخصص و مجرب، خدمات مشاوره شبکه
              را به کسب‌وکارها ارائه می‌دهد. ما با تحلیل نیازهای سازمان شما،
              راهکارهای بهینه‌ای در زمینه طراحی، پیاده‌سازی، بهینه‌سازی و امنیت
              شبکه‌های کامپیوتری ارائه می‌کنیم
            </h6>
            <Link to={"/networkConsulting/"}>
              <h6>
                اطلاعات بیشتر
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#ff8800"
                  viewBox="0 0 256 256"
                  className="serviceIcon"
                >
                  <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                </svg>
              </h6>
            </Link>
          </Col>
          <Col className="serviceInfo" sm={6}>
            <h1 className="numService ">02</h1>
            <h3 className="">خدمات اکتیو شبکه</h3>
            <h6>
              شرکت ما با ارائه خدمات حرفه‌ای در حوزه اکتیو شبکه، به کسب‌وکارها
              کمک می‌کند تا شبکه‌ای پایدار، پرسرعت و ایمن داشته باشند. ما با
              استفاده از جدیدترین فناوری‌ها، راهکارهایی را برای بهینه‌سازی
              عملکرد شبکه‌های سازمانی ارائه می‌دهیم
            </h6>
            <Link to={"/ActiveNetworkServices/"}>
              <h6>
                اطلاعات بیشتر
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#ff8800"
                  viewBox="0 0 256 256"
                  className="serviceIcon"
                >
                  <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                </svg>
              </h6>
            </Link>
          </Col>
          <Col className="serviceInfo" sm={6}>
            <h1 className="numService">03</h1>
            <h3>خدمات پسیو شبکه </h3>
            <h6>
              WORKNET با ارائه خدمات حرفه‌ای در حوزه اکتیو شبکه، به کسب‌وکارها
              کمک می‌کند تا شبکه‌ای پایدار، پرسرعت و ایمن داشته باشند. ما با
              استفاده از جدیدترین فناوری‌ها، راهکارهایی را برای بهینه‌سازی
              عملکرد شبکه‌های سازمانی ارائه می‌دهیم
            </h6>
            <Link to={"/PassiveNetworkService/"}>
              <h6>
                اطلاعات بیشتر
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#ff8800"
                  viewBox="0 0 256 256"
                  className="serviceIcon"
                >
                  <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                </svg>
              </h6>
            </Link>
          </Col>
          <Col className="serviceInfo" sm={6}>
            <h1 className="numService ">04</h1>
            <h3 className="">امنیت شبکه</h3>
            <h6>
              در دنیای دیجیتال امروزی، امنیت شبکه یکی از مهم‌ترین نیازهای هر
              سازمان است. شرکت WORKNET با ارائه راهکارهای حرفه‌ای در حوزه امنیت
              شبکه، از اطلاعات و زیرساخت‌های شما در برابر تهدیدات سایبری محافظت
              می‌کند.
            </h6>
            <Link to={"/NetworkSecurity/"}>
              <h6>
                اطلاعات بیشتر
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#ff8800"
                  viewBox="0 0 256 256"
                  className="serviceIcon"
                >
                  <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                </svg>
              </h6>
            </Link>
          </Col>
          <Col className="serviceInfo" sm={6}>
            <h1 className="numService ">05</h1>
            <h3 className=""> خدمات بازرگانی </h3>
            <h6>
            شرکت WORKNET علاوه بر خدمات تخصصی شبکه، در حوزه بازرگانی تجهیزات شبکه و فناوری اطلاعات نیز فعالیت دارد. ما با تأمین تجهیزات اورجینال از برندهای معتبر، راهکارهایی حرفه‌ای و مقرون‌به‌صرفه را برای کسب‌وکارها و سازمان‌ها ارائه می‌دهیم.
            </h6>
            <Link to={"/businessService/"}>
              <h6>
                اطلاعات بیشتر
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#ff8800"
                  viewBox="0 0 256 256"
                  className="serviceIcon"
                >
                  <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                </svg>
              </h6>
            </Link>
          </Col>
          <Col className="serviceInfo" style={{minHeight:100}} sm={6}>
            <h1 className="numService ">06</h1>
            <h3 className=" "> نرم افزار ،خدمات وب</h3>
            <h6>
              شرکت WORKNET با تیمی متخصص در حوزه طراحی وب و توسعه نرم‌افزار،
              راهکارهای مدرن و کارآمدی را برای کسب‌وکارها ارائه می‌دهد. ما با
              استفاده از جدیدترین تکنولوژی‌ها، وب‌سایت‌ها و نرم‌افزارهایی سریع،
              امن و کاربردی طراحی و پیاده‌سازی می‌کنیم.
            </h6>
            <Link to={"/webService/"}>
              <h6>
                اطلاعات بیشتر
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#ff8800"
                  viewBox="0 0 256 256"
                  className="serviceIcon"
                >
                  <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                </svg>
              </h6>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
