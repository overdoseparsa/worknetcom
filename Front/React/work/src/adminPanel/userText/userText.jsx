import React from "react";
import "./userText.css";
import { Container, Col, Row } from "react-bootstrap";

export default function UserText({ users, onClickUser }) {
  return (
    <>
      {users.map((user, index) => {
        return (
          <Container
            key={index}
            onClick={() => {
              onClickUser(user);
            }}
            className="userMassage p-2 pt-3 pe-3 "
            fluid
          >
            <Row className="p-0">
              <Col className="col-8 ps-0 m-0">
                <h6 className="m-0">{user.name}</h6>
              </Col>
              <Col className="textTime col-4 p-0 m-0">{user.id}</Col>
            </Row>
            <Row className="textRow pe-3">
              <Col className="col-10 p-0">{user.email}</Col>
              <Col className="col-1 p-0">...</Col>
            </Row>
          </Container>
        );
      })}
    </>
  );
}
