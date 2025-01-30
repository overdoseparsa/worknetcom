import React, { Component } from 'react'
import NavBar from "../navBar/navBar"
import InfoContainer from '../infoContainer/infoContainer'
import MainImage from '../mianImage/mainImage'
import Slides from '../slides/slides'
import Partner from '../partner/partner'
import ServicePage from '../servicePage/servicePage'
import NetworkConsulting from '../networkConsulting/networkConsulting'
import ActiveNetworkServices from '../activeNetworkServices/activeNetworkServices'
import 'bootstrap'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Home.css'
export default class Home extends Component {
  // constructor() {
  //   super()

  //   this.state = {
  //     users: []
  //   }
  // }
  render() {
    return (
      <>
        <NavBar />
        <MainImage />

        {/* information zon*/}
        <Container className='serviveContainer' fluid>
          <h2 className='pTag'>چشم‌انداز عملکرد ما</h2>
          <p>خدمات <span>ورک‌نت</span> با ترکیبی از کیفیت بی‌نظیر، ایده‌های نو و توجه به خواسته‌های مشتری، راهی مطمئن برای پیشرفت و تحول کسب‌وکار شما فراهم می‌کند.</p>
          <Container className='srviceContant' fluid>

            {/*////////////////   left: */}
            <Row className='leftRow' >
              <Col className='leftCol'>
                <Row className='d-flex'>
                  <Col className='leftImageCol col-5'>
                    <Image className='leftImage' src='image/network-and-infrastructure-icon.png'></Image>
                  </Col>
                  <Col className='leftTitle'>
                    <h2>مشاوره شبکه</h2>
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
                    <h2>مشاوره شبکه</h2>
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
                    <h2>مشاوره شبکه</h2>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className='middleRow sm-4'>
              <div>
                <h1>WorkNet</h1>
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
                    <h2>مشاوره شبکه</h2>
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
                    <h2>مشاوره شبکه</h2>
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
                    <h2>مشاوره شبکه</h2>
                    <p>Network Consulting</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* //////// end \\\\\\\\ */}

        <Slides />
        <InfoContainer />
        <Partner />

        {/* there is a single page */}
        <h1>service page</h1>
        <ServicePage />
        <h1>NetworkConsulting</h1>
        <NetworkConsulting />
        <h1>ActiveNetworkServices</h1>
        {/* <ActiveNetworkServices /> */}
      </>

    )
  }
}
