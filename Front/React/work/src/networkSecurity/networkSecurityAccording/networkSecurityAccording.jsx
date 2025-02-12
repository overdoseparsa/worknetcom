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
              className="accordingHeader
                        "
            >
              <h6>نصب و راه اندازی IDS و IPS در شبکه</h6>
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
              <h6>امنیت سیستم عامل و الیه کاربردی</h6>
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
              <h6>پیکربندی امنیتی و ایمن سازی سرویسهای شبکه</h6>
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
              <h6>امنیت و پیاده سازی Network Monitoring</h6>
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
              <h6>نصب و پیاده سازی IP SLA Manager</h6>
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
              <h6>نصب و راه اندازی سیستم Anti-Virus</h6>
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
              <h6>نصب و پیاده سازی NetFlow Traffic Analyzer</h6>
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
          <Accordion.Item className="accordingItem" eventKey="7">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6>
                {" "}
                طراحی ، نصب و راه اندازی سیستم Bandwidth Management & Caching
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
