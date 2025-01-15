import React, { Component } from 'react'
import "./infoContainer.css"
import { Container, Col, Row, Image} from 'react-bootstrap'


export default class infoContainer extends Component {
    render() {
        return (
            <Container className='infoContainer'>
                <Row className='rowContainer'>
                    <Col lg={5} className='imgContainer p-0'>
                        <Image src='Image/h7-column1.jpg' fluid/>
                    </Col>
                    <Col className='textContainer  p-3 pt-5 ps-5'>
                        <h2 className='mb-4 mt-5'>Lorem ipsum dolor sit</h2>
                        <p>amet consectetur adipisicing elit. Voluptatem aut harum voluptatum accusantium, repudiandae ad reiciendis, quia nemo aperiam excepturi impedit veniam distinctio ut modi ipsa animi provident architecto labore.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

