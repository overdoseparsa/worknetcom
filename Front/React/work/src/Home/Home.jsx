import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import "./Home.css";
import NavBar from "../navBar/navBar";
import MainImage from "../mianImage/mainImage";
import "bootstrap";
import Slides from "../slides/slides";
import InfoContainer from "../infoContainer/infoContainer";
import Partner from "../partner/partner";
import { motion, time } from "framer-motion";

export default function Home() {
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
  const [show, setShow] = useState(true);
  const [reapet, setReapet] = useState(true);
  const handleClose = () => {
    setShow(false);
    setReapet(false);
  };

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
            return newState;
          });
        }, index * 500);
      });
    }
  }, [isVisible]);

  return (
    <>
      {reapet && (
        <Modal show={show} onHide={handleClose}  style={{ direction: "rtl" }}>
          <Modal.Header className="modelHeader" style={{ direction: "ltr" }} closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image  src="Image/Vector-Nowruz-00011.1-GraphicTarh.ir_.jpg" fluid/>
            وُرک‌نت فرارسیدن سال نو را به شما همراهان گرامی تبریک می‌گوید. 🌿🌺 <br />
            امیدواریم سالی سرشار از موفقیت، شادی و آرامش پیش رو داشته باشید. 💫 <br />
            با آرزوی بهترین‌ها در سال جدید،<br /> تیم فنی مهندسی وُرک‌نت 💙 <span style={{float:'left'}}>Worknetco</span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              بستن
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <MainImage className="fadeIn" />
      </motion.div>

      {/* information zon*/}
      <Container className="serviveContainer" fluid>
        <h3 className="pTag">چشم‌انداز عملکرد ما</h3>
        <p>
          خدمات <span>ورک‌نت</span> با ترکیبی از کیفیت بی‌نظیر، ایده‌های نو و
          توجه به خواسته‌های مشتری، راهی مطمئن برای پیشرفت و تحول کسب‌وکار شما
          فراهم می‌کند.
        </p>
        <Container className="srviceContant" fluid>
          {/*////////////////   left: */}
          <Row className="leftRow">
            <Col className="leftCol">
              <Row className="d-flex">
                <Col className="leftImageCol col-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    fill="#845a3e"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232,112H136V88h8a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H112A16,16,0,0,0,96,40V72a16,16,0,0,0,16,16h8v24H24a8,8,0,0,0,0,16H56v32H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H72V128H184v32h-8a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16h-8V128h32a8,8,0,0,0,0-16ZM112,40h32V72H112ZM80,208H48V176H80Zm128,0H176V176h32Z"></path>
                  </svg>
                </Col>
                <Col className="leftTitle">
                  <Link to={"/networkConsulting/"}>
                    <h2>مشاوره شبکه</h2>
                  </Link>
                  <p>Network Consulting</p>
                </Col>
              </Row>
            </Col>
            <Col className="leftCol">
              <Row className="d-flex">
                <Col className="leftImageCol col-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    fill="#3e697e"
                    viewBox="0 0 256 256"
                  >
                    <path d="M140,204a12,12,0,1,1-12-12A12,12,0,0,1,140,204ZM237.08,87A172,172,0,0,0,18.92,87,8,8,0,0,0,29.08,99.37a156,156,0,0,1,197.84,0A8,8,0,0,0,237.08,87ZM205,122.77a124,124,0,0,0-153.94,0A8,8,0,0,0,61,135.31a108,108,0,0,1,134.06,0,8,8,0,0,0,11.24-1.3A8,8,0,0,0,205,122.77Zm-32.26,35.76a76.05,76.05,0,0,0-89.42,0,8,8,0,0,0,9.42,12.94,60,60,0,0,1,70.58,0,8,8,0,1,0,9.42-12.94Z"></path>
                  </svg>
                </Col>
                <Col className="leftTitle">
                  <Link to={"/ActiveNetworkServices/"}>
                    <h2>خدمات اکتیو شبکه</h2>
                  </Link>
                  <p>Active Network</p>
                </Col>
              </Row>
            </Col>
            <Col className="leftCol">
              <Row className="d-flex">
                <Col className="leftImageCol col-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    fill="#3b7244"
                    viewBox="0 0 256 256"
                  >
                    <path d="M168,72V200a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm-48,32a8,8,0,0,0-8,8v88a8,8,0,0,0,16,0V112A8,8,0,0,0,120,104ZM80,144a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V152A8,8,0,0,0,80,144ZM40,184a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,40,184Z"></path>
                  </svg>
                </Col>
                <Col className="leftTitle">
                  <Link to={"/PassiveNetworkService/"}>
                    <h2>خدمات پسیو شبکه</h2>
                  </Link>
                  <p>Pasive Network</p>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* ///////////// middle */}
          <Row className="middleRow sm-4">
            <div className="text-center">
              <Image className="firstImage" src="/image/worknetService.png" />
              <Image className="secondImage" src="/image/worknetService2.png" />
            </div>
          </Row>

          {/* ///////////// right */}

          <Row className="rightRow sm-4">
            <Col className="rightCol">
              <Row className="d-flex">
                <Col className="rightImageCol col-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    fill="#403c77"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,112a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm80-72H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"></path>
                  </svg>
                </Col>
                <Col className="rightTitle">
                  <Link to={"/NetworkSecurity/"}>
                    <h2>امنیت شبکه</h2>
                  </Link>
                  <p>Network Security</p>
                </Col>
              </Row>
            </Col>
            <Col className="rightCol">
              <Row className="d-flex">
                <Col className="rightImageCol col-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    fill="#366e35"
                    viewBox="0 0 256 256"
                  >
                    <path d="M178.48,115.7A44,44,0,0,0,152,40.19V24a8,8,0,0,0-16,0V40H120V24a8,8,0,0,0-16,0V40H72a8,8,0,0,0,0,16h8V192H72a8,8,0,0,0,0,16h32v16a8,8,0,0,0,16,0V208h16v16a8,8,0,0,0,16,0V208h8a48,48,0,0,0,18.48-92.3ZM176,84a28,28,0,0,1-28,28H96V56h52A28,28,0,0,1,176,84ZM160,192H96V128h64a32,32,0,0,1,0,64Z"></path>
                  </svg>
                </Col>
                <Col className="rightTitle">
                  <Link to={"/businessService/"}>
                    <h2>خدمات بازرگانی</h2>
                  </Link>
                  <p>Business Service</p>
                </Col>
              </Row>
            </Col>
            <Col className="rightCol">
              <Row className="d-flex">
                <Col className="rightImageCol col-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    fill="#6e3535"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path>
                  </svg>
                </Col>
                <Col className="rightTitle col-8">
                  <Link to={"/webService/"}>
                    <h2>خدمات نرم افزار وب</h2>
                  </Link>
                  <p>Web Service</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* //////// about us \\\\\\\\\ */}
      <Container className="aboutContainer" fluid>
        <Row className="aboutRow p-0">
          <Col xs={3} className=" history ">
            <Row className="historyRow d-grid">
              <Col className=" histoyCol ">
                <h2>150</h2>
                <h6>کارشناس ومتخصص</h6>
              </Col>
              <Col className=" histoyCol ">
                <h2>175</h2>
                <h6>پروژه های موفق</h6>
              </Col>
              <Col className=" histoyCol col">
                <h2>20+ سال</h2>
                <h6>تخصص و تجربه</h6>
              </Col>
            </Row>
          </Col>
          <Col xs={4} className=" imgCol p-0">
            <Image
              src="../image/nick-office-04.jpg"
              style={{
                objectFit: "cover",
              }}
            />
          </Col>
          <Col ref={sectionRef} xs={5} className="explaneCol ">
            <h2 className={`fadeIn ${itemsVisible[0] ? "show" : ""}`}>
              درباره
              <span>
                <h2
                  className="d-inline-block fw-bold"
                  style={{ color: "orange", marginRight: 6 }}
                >
                  ورک‌نت
                </h2>
              </span>
            </h2>
            <h6 className={`fadeIn ${itemsVisible[1] ? "show" : ""}`}>
              شرکت فنی مهندسی ورک نت سپاهان غرب در راستای اهداف موسسین آن پس
              از12سال فعالیت پرسنل خود در صنايع مخابرات و شبکه و سیستم های
              هوشمند و امنیتی به همت متخصصین خود در صنعت مخابرات و فن آوری
              اطلاعات در سال1390رسما ً تاسیس گرديده استوعضو پارک علم و فن آوریو
              شرکت های دانش بنیان میباشد
            </h6>
            <ol className={`fadeIn ${itemsVisible[1] ? "show" : ""}`}>
              <li className={`fadeIn ${itemsVisible[2] ? "show" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" tickIcon size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                بیش از 20 سال
              </li>
              <li className={`fadeIn ${itemsVisible[3] ? "show" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" tickIcon size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                تجربه و تخصص بالا
              </li>
              <li className={`fadeIn ${itemsVisible[4] ? "show" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" tickIcon size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                ارائه راهکارهای جامع و استاندارد
              </li>
              <li className={`fadeIn ${itemsVisible[5] ? "show" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" tickIcon size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                بهره‌گیری از متخصصین مجرب و فناوری‌های نوین
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
      {/* another Component */}
      <Partner />
      <Slides />
      <InfoContainer />

      {/* Contact Form Container */}
      <Container className="contactFormContainer" fluid>
        <div className="cubeContainer1"></div>
        <div className="cubeContainer2"></div>
        <div className="cubeContainer3"></div>
        <div className="cubeContainer4"></div>
        <div className="cubeContainer5"></div>
        <Container className="contactForm d-grid">
          <Row className="contactRow">
            <Col className="colContactAvatarImage col-5">
              <Image
                className="contactAvatarImage"
                src="image/sapiens.svg"
                fluid
              />
            </Col>
            <Col xs={7} className="fromP col-6">
              <h3 className="pb-3 fw-bold">به تیم ورک‌نت بپیوندید...</h3>
              <p>
                ورک‌نت همیشه به دنبال افراد خلاق و نوآور است که بتوانند در کنار
                تیم حرفه‌ای ما به پروژه‌های بزرگ و تاثیرگذار بپیوندند. برای
                مشاهده فرصت‌های شغلی و ارسال رزومه خود برای موقعیت‌های مختلف،
                کافیست به بخش فرصت‌های شغلی ما مراجعه کنید. بیایید با هم، گامی
                دیگر در مسیر موفقیت و نوآوری برداریم.
              </p>
              <button type="botton" className="botton1" id="contactBotton1">
                <Link to={"/Services/"}>اطلاعات بیشتر</Link>
              </button>
              <button type="botton" id="contactBotton2" className="botton2 ">
                <Link to={"/ContactForm/"}>تماس باما</Link>
              </button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
