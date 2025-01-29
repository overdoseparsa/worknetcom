import React, { Component } from 'react'
import "./infoContainer.css"
import { Container, Col, Row, Image } from 'react-bootstrap'
import 'bootstrap'


export default class infoContainer extends Component {
    render() {
        return (
            <>
                <Container className='baseProjectContainer bg-warning' fluid>
                    <h1 className='titleTag'> پروژه‌های شاخص شرکت</h1>
                    <Container className='infoContainer mb-5 p-1 p-sm-2' fluid >

                        {/* first */}
                        <Row className='rowContainer d-md-flex '>
                                <Col className='imgContainer col-sm-12 col-md-6 p-0' xs={{order:'first'}}>
                                    <Image src='image/bigBulding.jpg' fluid />
                                </Col>
                                <Col className='textContainer col-sm-12 col-md-6 pt-0 pt-md-5 p-0'  xs={{order:'last'}}>
                                    <h2 className='mb-4 mt-5'>Lorem ipsum dolor sit</h2>
                                    <p>amet consectetur adipisicing elit. Voluptatem aut harum voluptatum accusantium, repudiandae ad reiciendis, quia nemo aperiam excepturi impedit veniam distinctio ut modi ipsa animi provident architecto labore.</p>
                                </Col>
                        </Row>
                        {/* second */}
                        <Row className='rowContainer d-md-flex '>
                                <Col className='textContainer col-sm-12 col-md-6 pt-0 pt-md-5 p-0' md={{order:'first'}} xs={{order:'last'}}>
                                    <h2 className='mb-4 mt-5'>Lorem ipsum dolor sit</h2>
                                    <p>amet consectetur adipisicing elit. Voluptatem aut harum voluptatum accusantium, repudiandae ad reiciendis, quia nemo aperiam excepturi impedit veniam distinctio ut modi ipsa animi provident architecto labore.</p>
                                </Col>
                                <Col className='imgContainer col-sm-12 col-md-6 p-0' md={{order:'last'}} xs={{order:'first'}}>
                                    <Image src='image/bigBulding.jpg' fluid />
                                </Col>
                        </Row>
                        {/* third */}
                        <Row className='rowContainer d-md-flex '>
                                <Col className='imgContainer col-sm-12 col-md-6 p-0' xs={{order:'first'}}>
                                    <Image src='image/bigBulding.jpg' fluid />
                                </Col>
                                <Col className='textContainer col-sm-12 col-md-6 pt-0 pt-md-5 p-0'  xs={{order:'last'}}>
                                    <h2 className='mb-4 mt-5'>Lorem ipsum dolor sit</h2>
                                    <p>amet consectetur adipisicing elit. Voluptatem aut harum voluptatum accusantium, repudiandae ad reiciendis, quia nemo aperiam excepturi impedit veniam distinctio ut modi ipsa animi provident architecto labore.</p>
                                </Col>
                        </Row>
                    </Container>
                </Container>
            </>
        )
    }
}

