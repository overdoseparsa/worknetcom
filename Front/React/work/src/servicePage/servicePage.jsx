import React from "react";
import "./servicePage.css";
import ServiceTag from "./serviceTag/serviceTag";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import "bootstrap";
export default function servicePage() {
  return (
    <>
      <Container className="aboutCompanyContainer" fluid>
        <Container className="aboutCompanyLogoContainer">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <h1 className="aboutCompanyTitle">ورک‌نت</h1>
          </motion.div>
          <motion.div
          initial={{opacity :0}}
          animate={{opacity :1}}
          transition={{duration :1 , delay :.5 } }
          >
            <h1 className="aboutCompanyLogo">WorkNet</h1>
          </motion.div>
        </Container>
        <motion.div
        initial={{
          opacity:0
          ,x:100
        }}
        animate={{
          opacity:1
          ,x:0
        }}
        transition={{ duration:2, delay: 1}}
        >
        <Container className="aboutCompanyExplane">
          <h1>درباره ورک‌نت</h1>
          <p className="mt-4">
            شرکت فنی مهندسی ورک نت سپاهان غرب در راستای اهداف موسسین آن پس
            از12سال فعالیت پرسنل خود در صنايع مخابرات و شبکهو سیستم های هوشمند و
            امنیتی به همت متخصصین خود در صنعت مخابرات و فن آوری اطالعات در
            سال1۳۹۰رسما ً تاسیس گرديده است و عضو پارک علم و فن آوری و شرکت های
            دانش بنیان میباشد که فعالیت تخصصی اين شرکت در زمینه شبکه های
            کامپیوتری و سیستم های امنیتی و هوشمند بوده و پله های ترقی را با تکیه
            بر دانش فنی، بکارگیری کارشناسان مجرب و استفاده از سیاستهای روز
            بازاريابی و استاندارد های جهانی يکی پس از ديگری طی می نمايد
          </p>
        </Container>
        </motion.div>
      </Container>
      <ServiceTag className="serviceTagaTag"></ServiceTag>
    </>
  );
}
