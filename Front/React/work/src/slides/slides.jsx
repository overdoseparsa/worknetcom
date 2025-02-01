import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './slides.css'

export default class slides extends Component {
    render() {
        return (
            <>

                <h2><span className='Text'>از</span> ایده <span className='Text'>تا</span> اجرا</h2>
                <h4>همراه با <span className='orangText'>ورک‌نت</span> در مسیر پروژه‌های شرکتی</h4 >
                <Carousel data-bs-theme="light" className='Carousel'>
                    <Carousel.Item>
                        <img
                            className="slideImage d-block w-100"
                            src="image/wave (4).jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='slidelItem'>
                            <h3>First slide label</h3>
                            <p className='carousel-p'>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slideImage d-block w-100"
                            src="image/bigBulding.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='slidelItem'>
                            <h3 >Second slide label</h3>
                            <p className='carousel-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slideImage d-block w-100"
                            src="image/bigBulding.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='slidelItem'>
                            <h3 >Second slide label</h3>
                            <p className='carousel-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slideImage d-block w-100"
                            src="image/bigBulding.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='slidelItem'>
                            <h3 >Second slide label</h3>
                            <p className='carousel-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}
