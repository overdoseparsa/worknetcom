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
  constructor() {
    super()

    this.state = {
      users: []
    }
  }
  render() {
    return (
      <>
        <NavBar />
        <MainImage />

        {/* information zon*/}



        <Container className='baseContainer' fluid>
          <p className='pTag'>چشم‌انداز عملکرد ما</p>
          <Container className='information d-md-flex' fluid>

            {/* information box */}

            <Row className='rowInfo justify-content-evenly container-lg-fluid container-xl-fluid justify-content-md-around'>

              {/* firstBox */}

              <Col className='colInformation ' md={3} lg={2} sm={'auto'}>
                <Image className='infoImage' src='image/bigBulding.jpg'>
                </Image>
                <div className='overlay'>
                  <div className="text"><h2>شبکه</h2></div>
                </div>
              </Col>

              {/* secondBox */}

              <Col className='colInformation ' md={3} lg={2} sm={'auto'}>
                <Image className='infoImage' src='image/bigBulding.jpg'>
                </Image>
                <div className='overlay'>
                  <div className="text"><h2>دیتاسنتر</h2></div>
                </div>
              </Col>

              {/* thirdBox */}

              <Col className='colInformation ' md={3} lg={2} sm={'auto'}>
                <Image className='infoImage' src='image/bigBulding.jpg'>
                </Image>
                <div className='overlay'>
                  <div className="text"><h2>برق</h2></div>
                </div>
              </Col>

              {/* fourthBox */}

              <Col className='colInformation ' md={3} lg={2} sm={'auto'}>
                <Image className='infoImage' src='image/bigBulding.jpg'>
                </Image>
                <div className='overlay'>
                  <div className="text"><h2>ups</h2></div>
                </div>
              </Col>

              {/* fivthBox */}

              <Col className='colInformation ' md={3} lg={2} sm={'auto'}>
                <Image className='infoImage' src='image/bigBulding.jpg'>
                </Image>
                <div className='overlay'>
                  <div className="text"><h2>سیستم امینتی</h2></div>
                </div>
              </Col>

              {/* sixthBox */}

              <Col className='colInformation' md={3} lg={2} sm={'auto'}>
                <Image className='infoImage' src='image/bigBulding.jpg'>
                </Image>
                <div className='overlay'>
                  <div className="text"><h2>طراحی سایت</h2></div>
                </div>
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
        <ActiveNetworkServices />
      </>

    )
  }
}
