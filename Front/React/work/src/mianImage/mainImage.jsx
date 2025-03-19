import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap";
import "./mainImage.css";

export default class mainImage extends Component {
  render() {
    return (
      <>
        <Container className=" mainImageContainer d-grid align-items-center " fluid>
          <Row className="mainContainer d-flex">
            <motion.div 
            className="motionDiv"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <Col className="mainText">
                <div className="mainImageText">
                  <h1>
                    <span className="mainImageSpan"> وُرک‌نت:</span> پیشگام تحول
                    در زیرساخت‌های هوشمند
                  </h1>
                  <h2>شرکت فنی مهندسی وُرک‌نت سپاهان غرب</h2>
                  <h3>
                    ارائه دهنده‌خدمات:طراحی,فروش,نظارت واجرای پروژه های شبکه
                    <span>(Active&Pasive)</span>,دیتاسنتر,برق,UPS,سیستم های
                    امنیتی ومداربسته
                  </h3>
                </div>
                <div>
                  <button type="button" className="botton1">
                    <Link className="mainImageLink" to={"/servicePage/"}>
                      اطلاعات بیشتر
                    </Link>
                  </button>
                  <button type="button" className="botton2">
                    <Link className="mainImageLink" to={"/ContactForm/"}>
                      تماس باما
                    </Link>
                  </button>
                </div>
              </Col>
            </motion.div>
            <motion.div
            style={{width:'50%'}}
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1.5, delay:1.5}}
            >
              <Col
                className="mainImageImage"
              >
                <Image
                  className="Image"
                  src="image/DALL·E 2025-01-29 10.44.57 - A clean and modern homepage theme for a technology company specializing in network design, sales, supervision, and implementation of data center proje.jpg"
                  fluid
                />
              </Col>
            </motion.div>
          </Row>
        </Container>
      </>
    );
  }
}
