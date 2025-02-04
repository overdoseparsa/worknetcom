import React, { Component } from "react";
import "./networkSecurityAccording.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap";
export default class networkSecurityAccording extends Component {
  render() {
    return (
      <>
        <h2 className="accordingTitle">آشنایی بیشتر با جزئیات این بخش</h2>
        <Accordion defaultActiveKey={["0"]}>
          <Accordion.Item className="accordingItem" eventKey="0">
            <Accordion.Header
              className="accordingHeader"
            >
              <h6>ارائه لیست تجهیزات مورد نیاز پسیو شبکه(LOM)</h6>
            </Accordion.Header>
            <Accordion.Item className="accordingBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Item>
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="1">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>برآوردهزینه خدمات پسیو شبکه و ارائه تعرفه ثابت خدمات</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body >
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="2">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>اجرای استاندارد کابل کشی شبکه، تلفن، برق و دوربین مداربسته</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body >
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="3">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>اجرا و پیاده سازی زیرساخت شبکه به صورت استاندارد و ساختار یافته</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body >
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="4">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>ارتقاء و بهینه سازی زیرساخت قدیمی شبکه</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body >
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="5">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>داکت کشی شبکه و ترانکینگ شبکه</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body >
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="6">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>نصب نودها،پریزها، کیستون ها و پچ پنل و سایر اتصالات</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body >
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="7">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6> نصب، مرتب سازی و آرایش انواع رک ایستاده و دیواری</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}
