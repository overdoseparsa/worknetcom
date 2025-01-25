import React, { Component } from 'react'
import './serviceTag.css'
import 'bootstrap'
import { Container, Row, Col, Image } from 'react-bootstrap'
export default class serviceTag extends Component {
    render() {
        return (
            <Container className='serviceTagContainer' fluid>
                <h1>خدماتی که تفاوت ایجاد می‌کنند
                </h1>
                <Row className='rowService'>
                    <Col className='serviceInfo'  sm={6}>
                        <h1 className='numService py-1'>03</h1>
                        <h3 className='py-1'>برق 
                        </h3>
                        <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h6>
                        <button className='buttomService' href='#'><h6>اطلاعات بیشتر</h6></button>
                    </Col>
                    <Col className='serviceInfo' sm={6}>
                        <h1 className='numService py-1'>02</h1>
                        <h3 className='py-1'>دیتاسنتر
                        </h3>
                        <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h6>
                        <button className='buttomService' href='#'><h6>اطلاعات بیشتر</h6></button>
                    </Col>
                    <Col className='serviceInfo' sm={6}>
                        <h1 className='numService py-1'>01</h1>
                        <h3 className='py-1'><span style={{color: 'rgba(11, 11, 11, 0.59)'}}>(Active&Pasive)</span>شبکه
                        </h3>
                        <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h6>
                        <button className='buttomService' href='#'><h6>اطلاعات بیشتر</h6></button>
                    </Col>
                    <Col className='serviceInfo' sm={6}>
                        <h1 className='numService py-1'>06</h1>
                        <h3 className=' py-1'> طراحی وبسایت 
                        </h3>
                        <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h6>
                        <button className='buttomService' href='#'><h6>اطلاعات بیشتر</h6></button>
                    </Col>
                    <Col className='serviceInfo' sm={6}>
                        <h1 className='numService py-1'>05</h1>
                        <h3 className='py-1'> سیستم امینتی و مداربسته 
                        </h3>
                        <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h6>
                        <button className='buttomService' href='#'><h6>اطلاعات بیشتر</h6></button>
                    </Col>
                    <Col className='serviceInfo' sm={6}>
                        <h1 className='numService py-1'>04</h1>
                        <h3 className='py-1'>UPS 
                        </h3>
                        <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h6>
                        <button className='buttomService' href='#'><h6>اطلاعات بیشتر</h6></button>
                    </Col>
                </Row>
            </Container>
        )
    }
}
