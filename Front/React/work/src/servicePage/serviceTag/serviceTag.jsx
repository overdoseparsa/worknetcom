import React, { Component } from 'react'
import './serviceTag.css'
import 'bootstrap'
import { Container, Row, Col, Image } from 'react-bootstrap'
export default class serviceTag extends Component {
    render() {
        return (
            <Container className='serContainer'>
                <h1>خدماتی که تفاوت ایجاد می‌کنند
                </h1>
                <Row>
                    <Col>
                        <Image >

                        </Image>
                    </Col>
                    <Col>
                        <Image >

                        </Image>
                    </Col>
                    <Col>
                        <Image >

                        </Image>
                    </Col>
                    <Col>
                        <Image >

                        </Image>
                    </Col>
                    <Col>
                        <Image >

                        </Image>
                    </Col>
                    <Col>
                        <Image >

                        </Image>
                    </Col>
                </Row>
            </Container>
        )
    }
}
