import React, { Component } from 'react'
import './servicePage.css'
import ServiceTag from './serviceTag/serviceTag'
import { Container, Row, Col, Image } from 'react-bootstrap'
import 'bootstrap'
export default class Service extends Component {
  render() {
    return (
      <>
        <Container className='p-0 m-0' fluid>
          <ServiceTag />
          <Row className='expalneService'>
            <Col className='explaneCompany'>
              <h1>ساختن آینده بر پایه تعالی
              </h1>

              <Row><Col md={12}>
                <h1>99%</h1>
                <h4>
                  Building Control
                  Approval Rate</h4>
              </Col>
                <Col md={12}>
                  <h1>320+</h1>
                  <h4>Active Projects in
                    Construction Management
                  </h4>
                </Col>
              </Row>
              <Row><Col md={12}>
                <h1>200+</h1>
                <h4>Completed Projects
                  Every Year</h4>
              </Col>
                <Col md={12}>
                  <h1>4.253</h1>
                  <h4>Million euros Turnover
                    in 2024</h4>
                </Col></Row>

            </Col>
            <Col className='iamgeContainer p-0'>
              <Image className='iamgeCompany  p-0' src='image/group.jpg' fluid />
            </Col>
          </Row>

          {/*----------------- second part ----------------- */}


          <Container className='expalneService2' fluid>
            <h1 className='headerServicetitle2'> نمونه‌هایی از هنر و تخصص ما </h1>
            <Row className='rowServiceContainer d-md-flex d-grid'>
              <Col className='imgserviceContainer col-sm-12 col-md-6 p-0' xs={{ order: 'first' }}>
                <Image className='imageService' src='image/earth (3).jpg' fluid />
              </Col>
              <Col className='textServiceContainer col-sm-12 col-md-6 pt-0 pt-md-5 ' xs={{ order: 'last' }}>
                <h2 className='mb-4 mt-5'>Lorem ipsum dolor sit</h2>
                <p>amet consectetur adipisicing elit. Voluptatem aut harum voluptatum accusantium, repudiandae ad reiciendis, quia nemo aperiam excepturi impedit veniam distinctio ut modi ipsa animi provident architecto labore.</p>
              </Col>
            </Row>
            <Row className='rowServiceContainer d-md-flex d-grid'>
              <Col className='imgserviceContainer col-sm-12 col-md-6 p-0' xs={{ order: 'first' }}>
                <Image className='imageService' src='image/bigBulding.jpg' fluid />
              </Col>
              <Col className='textServiceContainer col-sm-12 col-md-6 pt-0 pt-md-5 ' xs={{ order: 'last' }}>
                <h2 className='mb-4 mt-5'>Lorem ipsum dolor sit</h2>
                <p>amet consectetur adipisicing elit. Voluptatem aut harum voluptatum accusantium, repudiandae ad reiciendis, quia nemo aperiam excepturi impedit veniam distinctio ut modi ipsa animi provident architecto labore.</p>
              </Col>
            </Row>
            <Row className='rowServiceContainer d-md-flex d-grid'>
              <Col className='textServiceContainer col-sm-12 col-md-6 pt-0 pt-md-5 ' xs={{ order: 'last' }}>
                <h2 className='mb-4 mt-5'>Lorem ipsum dolor sit</h2>
                <p>amet consectetur adipisicing elit. Voluptatem aut harum voluptatum accusantium, repudiandae ad reiciendis, quia nemo aperiam excepturi impedit veniam distinctio ut modi ipsa animi provident architecto labore.</p>
              </Col>
              <Col className='imgserviceContainer col-sm-12 col-md-6 p-0' xs={{ order: 'first' }}>
                <Image className='imageService' src='image/5Gearth.png' fluid />
              </Col>
            </Row>
          </Container>

        </Container>
      </>
    )
  }
}
