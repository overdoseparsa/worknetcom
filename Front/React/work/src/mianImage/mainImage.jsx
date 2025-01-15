import React, { Component } from 'react'
import { Container, Row, Col , Image } from 'react-bootstrap'
import "./mainImage.css"

export default class mainImage extends Component {
    render() {
        return (
            <>
                <Container className='mainContainer bg-primary' fluid>
                    <Image src='../../public/Image/h7-column1.jpg'/>
                </Container>
            </>
        )
    }
}
