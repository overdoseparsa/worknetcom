import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Home.css";
import NavBar from "../navBar/navBar";
import MainImage from "../mianImage/mainImage";
import "bootstrap";
import Slides from "../slides/slides";
import InfoContainer from "../infoContainer/infoContainer";
import Partner from "../partner/partner";
import Footer from "../Footer/footer";

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <MainImage />

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
                    <Image
                      className="leftImage"
                      src="image/network-and-infrastructure-icon.png"
                    ></Image>
                  </Col>
                  <Col className="leftTitle">
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
              <Col className="leftCol">
                <Row className="d-flex">
                  <Col className="leftImageCol col-5">
                    <Image
                      className="leftImage"
                      src="image/network-and-infrastructure-icon.png"
                    ></Image>
                  </Col>
                  <Col className="leftTitle">
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
              <Col className="leftCol">
                <Row className="d-flex">
                  <Col className="leftImageCol col-5">
                    <Image
                      className="leftImage"
                      src="image/network-and-infrastructure-icon.png"
                    ></Image>
                  </Col>
                  <Col className="leftTitle">
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* ///////////// middle */}
            <Row className="middleRow sm-4">
              <div>
                <h2>WorkNet</h2>
              </div>
            </Row>

            {/* ///////////// right */}

            <Row className="rightRow sm-4">
              <Col className="rightCol">
                <Row className="d-flex">
                  <Col className="rightImageCol col-5">
                    <Image
                      className="leftImage"
                      src="image/network-and-infrastructure-icon.png"
                    ></Image>
                  </Col>
                  <Col className="rightTitle">
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
              <Col className="rightCol">
                <Row className="d-flex">
                  <Col className="rightImageCol col-5">
                    <Image
                      className="leftImage"
                      src="image/network-and-infrastructure-icon.png"
                    ></Image>
                  </Col>
                  <Col className="rightTitle">
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
              <Col className="rightCol">
                <Row className="d-flex">
                  <Col className="rightImageCol col-5">
                    <Image
                      className="leftImage"
                      src="image/network-and-infrastructure-icon.png"
                    ></Image>
                  </Col>
                  <Col className="rightTitle">
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
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
                  <h2>330</h2>
                  <h6>کارشناس ومتخصص</h6>
                </Col>
                <Col className=" histoyCol ">
                  <h2>330</h2>
                  <h6>کارشناس ومتخصص</h6>
                </Col>
                <Col className=" histoyCol col">
                  <h2>330</h2>
                  <h6>کارشناس ومتخصص</h6>
                </Col>
              </Row>
            </Col>
            <Col xs={4} className=" imgCol p-0">
              <Image src="../image/Building-New-York.jpg" />
            </Col>
            <Col xs={5} className="explaneCol ">
              <h2>
                fo درباره
                <span>
                  <h2 className="d-inline-block">ورک‌نت</h2>
                </span>
              </h2>
              <h4>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                impedit perspiciatis distinctio labore quae at sapiente est
                commodi hic id laudantium perferendis officiis, voluptatem ex
                incidunt maiores, error totam corrupti?
              </h4>
              <ol>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" tickIcon size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  fghrethrthyth
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" tickIcon size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  tshthsthrsthrthjhrtjh
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" tickIcon size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  trhswertawr46tyn5yb5hty5t
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" tickIcon size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  rtybqg345tq43wetvb45ty543t3wt534h6
                </li>
              </ol>
            </Col>
          </Row>
        </Container>

        {/* another Component */}
        <Partner />
        <Slides />
        <InfoContainer />

        {/* Cotact Form Container */}
        <Container className="contactFormContainer" fluid>
          <div className="cubeContainer1"></div>
          <div className="cubeContainer2"></div>
          <div className="cubeContainer3"></div>
          <div className="cubeContainer4"></div>
          <div className="cubeContainer5"></div>
          <Container className="contactForm">
            <Row className="contactRow">
              <Col></Col>
              <Col xs={7} className="fromP">
                <h3 className="pb-3">Lorem, ipsum dolor sit amet</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  alias, nihil eligendi aperiam voluptatum velit numquam magnam,
                  soluta laudantium corrupti, voluptatem dolorum? Placeat,
                  rerum. Sed molestiae autem tenetur aut voluptatum.
                </p>
                <button type="botton" className="botton1" id="contactBotton1">
                  اطلاعات بیشتر
                </button>
                <button type="botton" id="contactBotton2" className="botton2 ">
                  تماس باما
                </button>
              </Col>
            </Row>
          </Container>
        </Container>

        <Footer />
        {/* there is a single page */}

        {/* <ServicePage /> */}
        <h1>service page</h1>
        {/* <NetworkConsulting /> */}
        <h1>NetworkConsulting</h1>
        {/* <ActiveNetworkServices /> */}
        <h1>ActiveNetworkServices</h1>
      </>
    );
  }
}
{
  /*   Swiper 
  
  
  <Container>
  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    spaceBetween={10}
    slidesPerView={3}
    loop={true}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    navigation
    pagination={{ clickable: false }}
  >
    {images.map((image, index) => {
      <SwiperSlide key={index}>
        <img src={image} alt={`Slide+${index + 1}`} className="w-full h-auto rounded-lg" />
      </SwiperSlide>
    })}
  </Swiper>
</Container> */
}
