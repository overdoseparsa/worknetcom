import React, { useState, useEffect, useRef } from "react";
import "./adminPanel.css";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap";
import UserText from "./userText/userText";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function AdminPanel() {
  const [isAnswer, setIsAnswer] = useState(false);
  const [answer, setAnswer] = useState("");
  const [newAnswer, setNewAnswer] = useState([]);
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const massageContainerRef = useRef(null);
  const [userMassage, setUserMassage] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    body_text: "",
    file: "",
    createTime: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const usersClickHandler = (e) => {
    console.log(e);
    setUserMassage((...prev)=>({
      ...prev , 
      name:e.name,
      email:e.email,
      phoneNumber:e.phone,
      file: e.website,
      createTime:e.id
    }))
  };
  const clickhandler = () => {
    if (answer.length > 0) {
      const newMassage = [...newAnswer, answer];
      setNewAnswer(newMassage);
      console.log(newMassage);
      setAnswer("");
      setIsAnswer(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    if (massageContainerRef.current) {
      massageContainerRef.current.scrollTop =
        massageContainerRef.current.scrollHeight;
    }
  }, [newAnswer]);

  return (
    <>
      <Container className="mainAdminContainer p-0" fluid>
        <Container className="usersMassage p-0 " fluid>
          {loading ? (
            <Container className="text-center pt-5">
              <Spinner animation="border" varient="#ff7300" />
            </Container>
          ) : (
            <UserText onClickUser={usersClickHandler} users={users} />
          )}
        </Container>

        <Container className=" OffcanvasContainer " fluid>
          <Button
            style={{ backgroundColor: "#ff7300", borderColor: "#ff7300" }}
            onClick={handleShow}
            className="me-2 p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
            </svg>
          </Button>
          <Offcanvas placement="end" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <UserText onClickUser={usersClickHandler} users={users} />
            </Offcanvas.Body>
          </Offcanvas>
          <Button
            style={{
              backgroundColor: "#ff7300",
              borderColor: "#ff7300",
              float: "left",
            }}
            onClick={handleShow}
            className="me-2 p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"></path>
            </svg>
          </Button>
          <Button
            style={{
              backgroundColor: "#ff7300",
              borderColor: "#ff7300",
              float: "left",
            }}
            onClick={handleShow}
            className="me-2 p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"></path>
            </svg>
          </Button>
        </Container>

        <Container
          ref={massageContainerRef}
          className="massageContainer ps-0"
          fluid
        >
          <Row>
            <Container className="massageText p-3" fluid>
              <p className="m-0">
                <ul className="massageList">
                  <li>اسم:{userMassage.name}</li>
                  <li>ایمیل:{userMassage.email}</li>
                  <li>شماره تلفن:{userMassage.phoneNumber}</li>
                  <li>متن:{userMassage.body_text}</li>
                  <li>فایل رزومه:{<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations'>{userMassage.file}</a>}</li>
                  <li>زمان:{userMassage.createTime}</li>
                </ul>
              </p>
            </Container>
          </Row>
          {isAnswer &&
            newAnswer.map((answers, index) => {
              return (
                <Row
                  style={{ display: "flex", justifyContent: "end" }}
                  key={index}
                >
                  <Container className="answerText p-3">
                    <p className="m-0">{answers}</p>
                  </Container>
                </Row>
              );
            })}
        </Container>

        {/* answer Area */}
        <Container className="answerArea p-3 d-grid align-items-center" fluid>
          <Row className="d-flex">
            <Col className="col-7 col-lg-8">
              <Form className="formText">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    style={{ height: 50, direction: "rtl" }}
                    placeholder="پیام خود را بنویسید ..."
                    as="textarea"
                    rows={3}
                    value={answer}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col className="col-2 col-lg-1 d-flex justify-content-center">
              <Button
                style={{ backgroundColor: "#ff7300", borderColor: "#ff7300" }}
                className="p-1 ps-2 pe-2  "
                onClick={clickhandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                </svg>
              </Button>
            </Col>
            <Col className="buttomCol">
              <Button
                style={{
                  backgroundColor: "#ff7300",
                  borderColor: "#ff7300",
                  float: "right",
                }}
                className="me-2 p-1"
              >
                <Link to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"></path>
                  </svg>
                </Link>
              </Button>
              <Button
                style={{
                  backgroundColor: "#ff7300",
                  borderColor: "#ff7300",
                  float: "right",
                }}
                className="me-2 p-1"
              >
                <Link to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"></path>
                  </svg>
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
