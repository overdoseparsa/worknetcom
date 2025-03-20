import React, { Component, useState, useEffect } from "react";
import "./partner.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Partner() {

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
              <img src="/Image/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="/Image/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="/Image/irisa.png" alt="" />
            </li>
            <li>
              <img src="/Image/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/mmte.png" alt="" />
            </li>
            <li>
              <img src="/Image/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="/Image/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="/Image/persha.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/sepah-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="/Image/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="/Image/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="/Image/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/MME.jpg" alt="" />
            </li>

            <li>
              <img src="/Image/nikAndish.png" alt="" />
            </li>

            <li>
              <img src="/Image/fouladMobarakehLogo.jpg" alt="" />
            </li>

            <li>
              <img
                src="/Image/shahrdaryEsfahan.png"
                alt=""
              />
            </li>
            <li>
              <img src="/Image/taaminejtemae.png" alt="" />
            </li>
            <li>
              <img src="/Image/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="/Image/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="/Image/irisa.png" alt="" />
            </li>
            <li>
              <img src="/Image/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/mmte.png" alt="" />
            </li>
            <li>
              <img src="/Image/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="/Image/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="/Image/persha.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/sepah-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="/Image/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="/Image/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="/Image/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/MME.jpg" alt="" />
            </li>

            <li>
              <img src="/Image/nikAndish.png" alt="" />
            </li>

            <li>
              <img src="/Image/fouladMobarakehLogo.jpg" alt="" />
            </li>

            <li>
              <img
                src="/Image/shahrdaryEsfahan.png"
                alt=""
              />
            </li>
            <li>
              <img src="/Image/taaminejtemae.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="slider mt-5">
          <ul className="mb-0 sliderULRevers">
          <li>
              <img src="/Image/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="/Image/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="/Image/irisa.png" alt="" />
            </li>
            <li>
              <img src="/Image/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/mmte.png" alt="" />
            </li>
            <li>
              <img src="/Image/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="/Image/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="/Image/persha.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/sepah-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="/Image/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="/Image/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="/Image/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/MME.jpg" alt="" />
            </li>

            <li>
              <img src="/Image/nikAndish.png" alt="" />
            </li>

            <li>
              <img src="/Image/fouladMobarakehLogo.jpg" alt="" />
            </li>

            <li>
              <img
                src="/Image/shahrdaryEsfahan.png"
                alt=""
              />
            </li>
            <li>
              <img src="/Image/taaminejtemae.png" alt="" />
            </li><li>
              <img src="/Image/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="/Image/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="/Image/irisa.png" alt="" />
            </li>
            <li>
              <img src="/Image/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/mmte.png" alt="" />
            </li>
            <li>
              <img src="/Image/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="/Image/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="/Image/persha.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="/Image/sepah-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="/Image/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="/Image/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="/Image/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="/Image/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="/Image/MME.jpg" alt="" />
            </li>

            <li>
              <img src="/Image/nikAndish.png" alt="" />
            </li>

            <li>
              <img src="/Image/fouladMobarakehLogo.jpg" alt="" />
            </li>

            <li>
              <img
                src="/Image/shahrdaryEsfahan.png"
                alt=""
              />
            </li>
            <li>
              <img src="/Image/taaminejtemae.png" alt="" />
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
