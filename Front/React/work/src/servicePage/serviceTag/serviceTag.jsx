import React, { Component } from "react";
import "./serviceTag.css";
import "bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class serviceTag extends Component {
  render() {
    return (
      <>
        <Container className="serviceTagContainer" fluid>
          {/* <Container className="ColorContainer" fluid></Container> */}
          <h1>خدماتی که تفاوت ایجاد می‌کنند</h1>
          <Row className="rowService">
            <Col className="serviceInfo" sm={6}>
              <h1 className="numService ">01</h1>
              <h3>مشاوره شبکه</h3>
              <h6>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </h6>
              <Link to={"/networkConsulting"}>
                <h6>
                  اطلاعات بیشتر
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#ff8800"
                    viewBox="0 0 256 256"
                    className="serviceIcon"
                  >
                    <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                  </svg>
                </h6>
              </Link>
            </Col>
            <Col className="serviceInfo" sm={6}>
              <h1 className="numService ">02</h1>
              <h3 className="">خدمات اکتیو شبکه</h3>
              <h6>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </h6>
              <Link to={"/ActiveNetworkServices"}>
                <h6>
                  اطلاعات بیشتر
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#ff8800"
                    viewBox="0 0 256 256"
                    className="serviceIcon"
                  >
                    <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                  </svg>
                </h6>
              </Link>
            </Col>
            <Col className="serviceInfo" sm={6}>
              <h1 className="numService">03</h1>
              <h3>خدمات پسیو شبکه </h3>
              <h6>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </h6>
              <Link to={"/PasiveNetworkService"}>
                <h6>
                  اطلاعات بیشتر
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#ff8800"
                    viewBox="0 0 256 256"
                    className="serviceIcon"
                  >
                    <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                  </svg>
                </h6>
              </Link>
            </Col>
            <Col className="serviceInfo" sm={6}>
              <h1 className="numService ">04</h1>
              <h3 className="">امنیت شبکه</h3>
              <h6>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </h6>
              <Link to={"/NetworkSecurity"}>
                <h6>
                  اطلاعات بیشتر
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#ff8800"
                    viewBox="0 0 256 256"
                    className="serviceIcon"
                  >
                    <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                  </svg>
                </h6>
              </Link>
            </Col>
            <Col className="serviceInfo" sm={6}>
              <h1 className="numService ">05</h1>
              <h3 className=""> خدمات بازرگانی </h3>
              <h6>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </h6>
              <Link to={"/businessService"}>
                <h6>
                  اطلاعات بیشتر
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#ff8800"
                    viewBox="0 0 256 256"
                    className="serviceIcon"
                  >
                    <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                  </svg>
                </h6>
              </Link>
            </Col>
            <Col className="serviceInfo" sm={6}>
              <h1 className="numService ">06</h1>
              <h3 className=" "> نرم افزار ،خدمات وب</h3>
              <h6>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </h6>
              <Link to={"/webService"}>
                <h6>
                  اطلاعات بیشتر
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#ff8800"
                    viewBox="0 0 256 256"
                    className="serviceIcon"
                  >
                    <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
                  </svg>
                </h6>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
