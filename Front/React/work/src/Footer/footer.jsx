import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap";
import "./footer.css";

export default function footer() {
  return (
    <Container className="footerContainer" fluid>
      <Row className="d-grid d-md-flex text-center text-md-end">
        <Col className="footerImageContainer">
          <Image
            className="footerImage"
            src="/image/worknetService2.png"
            fluid
          />
        </Col>
        <Col>
          <h5>دفتر مرکزی</h5>
          <ul className="p-0">
            <li>
              <h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#f56200"
                  viewBox="0 0 256 256"
                >
                  <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path>
                </svg>
                اصفهان خیابان توحید میانی کوچه 25 ساختمان عقیق پلاک 101
              </h6>
            </li>
            <li
              style={{
                marginTop: 10,
              }}
            >
              <h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#f56200"
                  viewBox="0 0 256 256"
                >
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                </svg>
                09120155112
              </h6>
            </li>
            <li
              style={{
                marginTop: 10,
              }}
            >
              <h6>ایمیل:Worknsco@gmail.com</h6>
            </li>
          </ul>
        </Col>
        <Col>
          <h5>دفتر شهرکرد</h5>
          <ul className="p-0">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#f56200"
                viewBox="0 0 256 256"
              >
                <path d="M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,32H192V224H160V184a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v40H64Zm80,192H112V192h32ZM88,64a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,64ZM88,104a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,104Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,104ZM88,144a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,144Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144Z"></path>
              </svg>
              شهرکرد میرآباد شرقی ساختمان پارک علم و فن آوری پلاک 103
            </li>
            <li
              style={{
                marginTop: 10,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#f56200"
                viewBox="0 0 256 256"
              >
                <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
              </svg>
              09133882313
            </li>
          </ul>
        </Col>
        <Col>
          <h5>کارگاه تولیدی تجهیزات IT</h5>
          <ul className="p-0">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#f56200"
                viewBox="0 0 256 256"
              >
                <path d="M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,32H192V224H160V184a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v40H64Zm80,192H112V192h32ZM88,64a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,64ZM88,104a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,104Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,104ZM88,144a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,144Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144Z"></path>
              </svg>
              شهرک صنعتی سفید دشت میدان صنعت خیابان اصلی پلاک 101
            </li>
            <li
              style={{
                marginTop: 10,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#f56200"
                viewBox="0 0 256 256"
              >
                <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
              </svg>
              09133882313
            </li>
          </ul>
        </Col>
        <Col>
          <h5>
            <Link className="footerServiceLink" to={"/servicePage/"}>
              خدمات شرکت
            </Link>
          </h5>
          <ul className="p-0">
            <li>
              <Link to={"/networkConsulting/"}>مشاوره شبکه</Link>
            </li>
            <li>
              <Link to={"/ActiveNetworkServices/"}>خدمات اکتیو شبکه</Link>
            </li>
            <li>
              <Link to={"/passiveNetworkService/"}>خدمات پسیو شبکه</Link>
            </li>
            <li>
              <Link to={"/NetworkSecurity/"}>امنیت شبکه</Link>
            </li>
            <li>
              <Link to={"/businessService/"}>خدمات بازرگانی</Link>
            </li>
            <li>
              <Link to={"/webService/"}>طراحی وب و اپلیکیشن</Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Container className="copyRight mt-4" fluid>
        <Col style={{
          maxWidth:500,
          minHeight:70,
          paddingTop:10,
          border:'2px solid #f38226',
          borderRadius:15,
          paddingLeft:15,
          backgroundColor:'#cacaca59'
        }} className="col-xl-4 col-12 mx-2 footerImageLogo ">
          <Image
          className="mx-2 rounded"
            style={{
              width: 40,
            }}
            src="/Image/iso14001.jpg"
          />
          <Image
          className="mx-2 rounded"
            style={{
              width: 40,
            }}
            src="/Image/iso9001.jpg"
          />
          <Image
          className="mx-2 rounded"
            style={{
              width: 40,
            }}
            src="/Image/HSE.jpg"
          />
          <Image
          className="mx-2 rounded"
            style={{
              width: 40,
            }}
            src="/Image/iso27001.jpg"
          />
          <Image
          className="mx-2 rounded"
            style={{
              width: 40,
            }}
            src="/Image/iso20000.jpg"
          />
          <Image
          className="mx-2 rounded"
            style={{
              width: 40,
            }}
            src="/Image/iso45001.jpg"
          />
          <Image
          className="mx-2 rounded"
            style={{
              width: 40,
            }}
            src="/Image/IMS.jpg"
          />
          <Image
          className=" rounded"
            style={{
              width: 40,
            }}
            src="/Image/daneshBonyan.png"
          />
        </Col>
        <Col 
        style={{paddingTop:20}}
        className="col-xl-7 col-12">
          <p className="m-0 copyRightText d-inline english-text">
            Designed & Developed by
            <Link to={"/"} className="text-blue-400 hover:underline mx-1 p-0">
              Worknet
            </Link>
            – All Rights Reserved &copy; {new Date().getFullYear()} Worknet
          </p>
        </Col>
      </Container>
    </Container>
  );
}
