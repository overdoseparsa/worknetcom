import React, { Component } from 'react'
import './partner.css'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default class partner extends Component {
    render() {
        return (
            <>
                <h1 className='partnerTitle mb-5'>همراهان ما در مسیر موفقیت</h1>
                <Container fluid>
                    <Row className='partnerRow'>
                        <Col className='col-2 partnerCol'>
                            <Image src='image/tech-co-logo.png'/>
                        </Col>
                        <Col className='col-2 partnerCol'>
                            <Image src='image/online-academy-logo.png'/>
                        </Col>
                        <Col className='col-2 partnerCol'>
                            <Image src='image/tech-co-logo.png'/>
                        </Col>
                        <Col className='col-2 partnerCol'>
                            <Image src='image/طراحی-لوگو-برای-برند.png'/>
                        </Col>
                        <Col className='col-2 partnerCol'>
                            <Image src='image/طراحی-لوگو-شرکت-مانا-پوشش.png'/>
                        </Col>
                        <Col className='col-2 partnerCol'>
                            <Image src='image/طراحی-لوگو-وب-سایت-فروشگاهی.png'/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
