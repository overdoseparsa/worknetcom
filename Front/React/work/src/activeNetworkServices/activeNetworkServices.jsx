import React, { Component } from 'react'
import 'bootstrap'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './activeNetworkServices.css'

export default class activeNetworkServices extends Component {
  render() {
    return (
      <>
        <Container className='activeContainer' fluid>
          <h1 className="activeTitle">خدمات اکتیو شبکه</h1>
        </Container>
        <Container className='explaneNetworkContainer' fluid>
          <Container className='expalneNetwork'>
            <h1>شبکه<span>(Active)</span></h1>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid sit unde rem ex quisquam perferendis quia eveniet et, dolores iste sapiente expedita optio fuga nobis? Amet facilis aspernatur id.
              Libero molestias ab enim provident vitae eius, optio aut fuga? Voluptate fuga praesentium non distinctio libero voluptatibus nihil sequi nesciunt voluptatum, id aliquid molestias vitae sunt nam, reprehenderit, veniam magnam.
              Aliquam veniam ipsa recusandae voluptatibus magni ipsam sunt unde! Commodi totam ducimus explicabo laudantium repellat, impedit earum, quod cupiditate corrupti quis quam omnis saepe esse perferendis asperiores error? Ea, ratione.
              Tempore voluptates qui aperiam ullam? Ullam iusto reprehenderit laboriosam explicabo nam inventore rerum non cum corrupti eligendi consequuntur quas aliquid accusantium veritatis mollitia dolores temporibus ipsam, itaque odit vel similique.
              Et quae obcaecati soluta fugit odio rem nihil voluptate. Laudantium molestiae asperiores modi nisi doloremque perferendis nihil, saepe alias dolor repellendus deserunt quam veritatis, labore vitae ullam officia, cupiditate in.</h6>
          </Container>
        </Container>
        <Container className='olActive'>
          <Row>
            <Col className='liActive col-lg-6'xs={{order:'last'}} lg={{order:'first'}}>
              <h1>خدمات اکتیو شبکه</h1>
              <ol>
                <li><h6>
                  نصب و راه اندازی سیستم های مدیریتی و مانیتورینگ شبکه</h6></li>
                <li><h6>
                  تنظیم و کانفیگ روتر های سیسکو، میکروتیک و هواووی</h6></li>
                <li><h6>نصب و پیکر بندی فایروال های سخت افزاری
                </h6></li>
                <li><h6>نصب و راه اندازی شبکه های وایرلس
                </h6></li>
                <li><h6>نصب و راه اندازی آنتی ویروس بر روی سرورو کالینت</h6></li>
                <li>
                  <h6>ایجاد بسترVoIPبا استفاده از تجهیزات سیسکو
                  </h6>
                </li>
                <li><h6>نصب و راه اندازی سیستم های تلفن تحت شبکه</h6></li>
                <li><h6>روتینگ و سوئیجینگ و فایروال سیسکو</h6></li>
              </ol>
            </Col>
            <Col className=' col-lg-6' xs={{order:'first'}} lg={{order:'last'}} >
              <Image className='activeImage' src='image/earth (2).jpg' />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          
        </Container>
      </>
    )
  }
}
