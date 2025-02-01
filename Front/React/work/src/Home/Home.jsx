import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./Home.css"
import NavBar from "../navBar/navBar"
import MainImage from '../mianImage/mainImage'
import 'bootstrap'
import Slides from '../slides/slides'
import InfoContainer from '../infoContainer/infoContainer'
import Partner from '../partner/partner'




import { Swiper } from "swiper/react";
import { SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default class Home extends Component {

  render() {

    const images = [
      "image/طراحی-لوگو-وب-سایت-فروشگاهی.png",
      "image/طراحی-لوگو-محصول.png",
      "image/طراحی-لوگو-شرکت-مانا-پوشش.png",
      "image/طراحی-لوگو-برای-برند.png",
      "image/tech-co-logo.png",
      "image/food-brand-products-logo-1.png"

    ]

    return (
      <>
        <NavBar />
        <MainImage />

        {/* information zon*/}
        <Container className='serviveContainer' fluid>
          <h3 className='pTag'>چشم‌انداز عملکرد ما</h3>
          <p>خدمات <span>ورک‌نت</span> با ترکیبی از کیفیت بی‌نظیر، ایده‌های نو و توجه به خواسته‌های مشتری، راهی مطمئن برای پیشرفت و تحول کسب‌وکار شما فراهم می‌کند.</p>
          <Container className="srviceContant" fluid>

            {/*////////////////   left: */}
            <Row className="leftRow" >
              <Col className="leftCol">
                <Row className='d-flex'>
                  <Col className="leftImageCol col-5">
                    <Image className='leftImage' src='image/network-and-infrastructure-icon.png'></Image>
                  </Col>
                  <Col className="leftTitle">
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
              <Col className='leftCol'>
                <Row className='d-flex'>
                  <Col className='leftImageCol col-5'>
                    <Image className='leftImage' src='image/network-and-infrastructure-icon.png'></Image>
                  </Col>
                  <Col className='leftTitle'>
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
              <Col className='leftCol'>
                <Row className='d-flex'>
                  <Col className='leftImageCol col-5'>
                    <Image className='leftImage' src='image/network-and-infrastructure-icon.png'></Image>
                  </Col>
                  <Col className='leftTitle'>
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* ///////////// middle */}
            <Row className='middleRow sm-4'>
              <div>
                <h2>WorkNet</h2>
              </div>
            </Row>

            {/* ///////////// right */}


            <Row className='rightRow sm-4'>
              <Col className='rightCol'>
                <Row className='d-flex'>
                  <Col className='rightImageCol col-5'>
                    <Image className='leftImage' src='image/network-and-infrastructure-icon.png'></Image>
                  </Col>
                  <Col className='rightTitle'>
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
              <Col className='rightCol'>
                <Row className='d-flex'>
                  <Col className='rightImageCol col-5'>
                    <Image className='leftImage' src='image/network-and-infrastructure-icon.png'></Image>
                  </Col>
                  <Col className='rightTitle'>
                    <Link to={"/networkConsulting"}>
                      <h2>مشاوره شبکه</h2>
                    </Link>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
              <Col className='rightCol'>
                <Row className='d-flex'>
                  <Col className='rightImageCol col-5'>
                    <Image className='leftImage' src='image/network-and-infrastructure-icon.png'></Image>
                  </Col>
                  <Col className='rightTitle'>
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
        <Container className="aboutContainer" >
          <Row className="aboutRow p-0">
            <Col xs={3} className=" history ">
              <Row className="historyRow d-grid">
                <Col className=" histoyCol ">
                  <h2>330</h2>
                  <h6>کارشناس ومتخصص</h6>
                </Col>
                <Col className=" histoyCol "><h2>330</h2>
                  <h6>کارشناس ومتخصص</h6></Col>
                <Col className=" histoyCol col"><h2>330</h2>
                  <h6>کارشناس ومتخصص</h6></Col>
              </Row>
            </Col>
            <Col xs={4} className=" imgCol p-0">
              <Image src='../image/Building-New-York.jpg' />
            </Col>
            <Col xs={5} className="explaneCol ">
              <h2>
                درباره<span><h2 className="d-inline-block">ورک‌نت</h2></span>
              </h2>
              <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga impedit perspiciatis distinctio labore quae at sapiente est commodi hic id laudantium perferendis officiis, voluptatem ex incidunt maiores, error totam corrupti?</h4>
              <ol>
                <li>fghrethrthyth</li>
                <li>tshthsthrsthrthjhrtjh</li>
                <li>trhswertawr46tyn5yb5hty5t</li>
                <li>rtybqg345tq43wetvb45ty543t3wt534h6</li>
              </ol>
            </Col>
          </Row>
        </Container>
        <Partner />
        <Slides />
        <InfoContainer />
        {/* there is a single page */}
        <h1>service page</h1>
        {/* <ServicePage /> */}
        <h1>NetworkConsulting</h1>
        {/* <NetworkConsulting /> */}
        <h1>ActiveNetworkServices</h1>
        {/* <ActiveNetworkServices /> */}
      </>

)
}
}
{/*   Swiper 
  
  
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
</Container> */}
