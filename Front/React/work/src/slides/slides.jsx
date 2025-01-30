import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './slides.css'

export default class slides extends Component {
    render() {
        return (
            <>

                <h1><span className='Text'>از</span> ایده <span className='Text'>تا</span> اجرا</h1>
                <h3>همراه با <span className='orangText'>ورک‌نت</span> در مسیر پروژه‌های شرکتی</h3>
                <Carousel data-bs-theme="light" className='Carousel'>
                    <Carousel.Item>
                        <img
                            className="slideImage d-block w-100"
                            src="image/wave (4).jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='slidelItem'>
                            <h2>First slide label</h2>
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
                            <h2 >Second slide label</h2>
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
                            <h2 >Second slide label</h2>
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
                            <h2 >Second slide label</h2>
                            <p className='carousel-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}
