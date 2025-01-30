import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap'
import './mainImage.css'

export default class mainImage extends Component {
    render() {
        return (
            <>
                <Container className="mainContainer" fluid>
                    <Container className="mainText" fluid>
                        <h1><span> ورک‌نت:</span> پیشگام تحول در زیرساخت‌های هوشمند
                        </h1>
                        <h2>شرکت فنی مهندسی ورک‌نت سپاهان غرب</h2>
                        <h3>ارائه دهنده‌خدمات:طراحی,فروش,نظارت واجرای پروژه   های شبکه<span>(Active&Pasive)</span>,دیتاسنتر,برق,UPS,سیستم های امنیتی ومداربسته</h3>
                        <button type='button' className="botton1">اطلاعات بیشتر</button>
                        <button type='button' className="botton2">تماس باما</button>
                    </Container>
                </Container>
            </>
        )
    }
}
