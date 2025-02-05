import React, { Component } from "react";
import "./businessServiceAccording.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap";
export default class businessServiceAccording extends Component {
  render() {
    return (
      <>
        <h2 className="accordingTitle">آشنایی بیشتر با جزئیات این بخش</h2>
        <Accordion defaultActiveKey={["0"]}>
          <Accordion.Item className="accordingItem" eventKey="0">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>فروش و نصب کلیه تجهیزات برق و UPS ( برندهای Apc - Nexanse ,...)
              </h6>
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
          <Accordion.Item className="accordingItem" eventKey="1">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>فروش کلیه تجهیزات شبکه</h6>
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
          <Accordion.Item className="accordingItem" eventKey="2">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>فروش کلیه تجهیزات امنیتی و نظارتی
              </h6>
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
          <Accordion.Item className="accordingItem" eventKey="3">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>فروش سیستم های رادیویی
              </h6>
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
          <Accordion.Item className="accordingItem" eventKey="4">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>تامین نیروی انسانی تمام وقت در جهت انجام فعالیت های تخصصی درون سازمانی
              </h6>
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
          <Accordion.Item className="accordingItem" eventKey="5">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>ارائه راهکارهای مدیریتی نیروی انسانی در حوزهIT
              </h6>
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
          <Accordion.Item className="accordingItem" eventKey="6">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6> تامین نیروی انسانی پاره وقت متخصص در جهت انجام فعالیت های ...
              </h6>
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
