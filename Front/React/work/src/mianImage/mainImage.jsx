import React, { Component } from 'react'
import { Container, Image } from 'react-bootstrap'
import 'bootstrap'
import "./mainImage.css"

export default class mainImage extends Component {
    render() {
        return (
            <>
                <Container className='mainContainer' >
                    <Image className='mainImage' src='image/bigBulding.jpg' />
                    {/* راهکارهای هوشمند، آینده‌ای امن و متصل */}


                    {/* ایجاد زیرساخت‌های هوشمند برای شبکه‌های امن، انرژی پایدار و سیستم‌های پیشرفته نظارتی و امنیتی، همراه با طراحی و توسعه وب برای آینده‌ای متصل‌تر */}

                    {/* تحول در زیرساخت‌های هوشمند؛ از شبکه‌های پیشرفته و انرژی بی‌وقفه تا امنیت مطمئن و وبی آینده‌ساز
                     */}

                    {/* ورکنت، پیشگام تحول در زیرساخت‌های هوشمند؛ از شبکه‌های پیشرفته و انرژی پایدار تا امنیت مطمئن و طراحی وب آینده‌ساز */}

                    {/* ورکنت؛ انقلابی در شبکه‌های هوشمند، انرژی پایدار، امنیت پیشرفته و طراحی وب برای آینده‌ای متصل‌تر */}

                    <Container className='mainText'>
                        <h1><span> ورک‌نت</span> پیشگام تحول در زیرساخت‌های هوشمند؛ از شبکه‌های پیشرفته و انرژی پایدار 
                        </h1>
                        <button type='button' className='button btn btn-outline-danger'>بیشتر بدانید</button>
                    </Container>
                </Container>
            </>
        )
    }
}
