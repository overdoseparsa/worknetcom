import React, { Component, useState, useEffect } from "react";
import "./partner.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";

const images = [
  "image/طراحی-لوگو-وب-سایت-فروشگاهی.png",
  "image/LOGO",
  "image/طراحی-لوگو-شرکت-مانا-پوشش.png",
  "image/طراحی-لوگو-برای-برند.png",
  "image/tech-co-logo.png",
];

export default function Partner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // تغییر اسلاید هر 2 ثانیه

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container
        className="
      sliderontainer
      "
        fluid
      >
        <h1 className="partnerTitle center ">همراهان ما در مسیر موفقیت</h1>
        <div className="slider">
          <ul className="mb-0 sliderUL">
            <li>
              <img src="image/LOGO/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/irisa.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/mmte.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="image/LOGO/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/persha.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sepah-palet.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/شرکت-MME.jpg" alt="" />
            </li>

            <li>
              <img src="image/LOGO/شرکت-مهندسی-نیک-اندیش-200x170.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/مجتمع-فولاد-اصفهان.jpg" alt="" />
            </li>

            <li>
              <img
                src="image/LOGO/وکتور-لوگو-آرم-شهرداری-اصفهان-1.png"
                alt=""
              />
            </li>
            <li>
              <img src="image/LOGO/taaminejtemae.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/irisa.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/mmte.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="image/LOGO/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/persha.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sepah-palet.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/شرکت-MME.jpg" alt="" />
            </li>

            <li>
              <img src="image/LOGO/شرکت-مهندسی-نیک-اندیش-200x170.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/مجتمع-فولاد-اصفهان.jpg" alt="" />
            </li>

            <li>
              <img
                src="image/LOGO/وکتور-لوگو-آرم-شهرداری-اصفهان-1.png"
                alt=""
              />
            </li>
            <li>
              <img src="image/LOGO/taaminejtemae.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="slider mt-5">
          <ul className="mb-0 sliderULRevers">
            <li>
              <img src="image/LOGO/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/irisa.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/mmte.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="image/LOGO/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/persha.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sepah-palet.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/شرکت-MME.jpg" alt="" />
            </li>

            <li>
              <img src="image/LOGO/شرکت-مهندسی-نیک-اندیش-200x170.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/مجتمع-فولاد-اصفهان.jpg" alt="" />
            </li>

            <li>
              <img
                src="image/LOGO/وکتور-لوگو-آرم-شهرداری-اصفهان-1.png"
                alt=""
              />
            </li>
            <li>
              <img src="image/LOGO/taaminejtemae.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/irisa.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/mmte.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="image/LOGO/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/persha.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sepah-palet.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="image/LOGO/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="image/LOGO/شرکت-MME.jpg" alt="" />
            </li>

            <li>
              <img src="image/LOGO/شرکت-مهندسی-نیک-اندیش-200x170.png" alt="" />
            </li>

            <li>
              <img src="image/LOGO/مجتمع-فولاد-اصفهان.jpg" alt="" />
            </li>

            <li>
              <img
                src="image/LOGO/وکتور-لوگو-آرم-شهرداری-اصفهان-1.png"
                alt=""
              />
            </li>
            <li>
              <img src="image/LOGO/taaminejtemae.png" alt="" />
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
