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
              <img src="/image/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="/image/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="/image/irisa.png" alt="" />
            </li>
            <li>
              <img src="/image/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="/image/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="/image/mmte.png" alt="" />
            </li>
            <li>
              <img src="/image/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>

            <li>
              <img src="/image/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="/image/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="/image/persha.jpg" alt="" />
            </li>
            <li>
              <img src="/image/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="/image/sepah-palet.png" alt="" />
            </li>

            <li>
              <img src="/image/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="/image/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="/image/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="/image/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="/image/MME.jpg" alt="" />
            </li>

            <li>
              <img src="/image/nikAndish.png" alt="" />
            </li>

            <li>
              <img src="/image/fouladMobarakehLogo.jpg" alt="" />
            </li>

            <li>
              <img
                src="/image/shahrdaryEsfahan.png"
                alt=""
              />
            </li>
            <li>
              <img src="/image/taaminejtemae.png" alt="" />
            </li>
            <li>
              <img src="/image/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="/image/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="/image/irisa.png" alt="" />
            </li>
            <li>
              <img src="/image/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="/image/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="/image/mmte.png" alt="" />
            </li>
            <li>
              <img src="/image/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>

            <li>
              <img src="/image/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="/image/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="/image/persha.jpg" alt="" />
            </li>
            <li>
              <img src="/image/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="/image/sepah-palet.png" alt="" />
            </li>

            <li>
              <img src="/image/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="/image/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="/image/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="/image/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="/image/MME.jpg" alt="" />
            </li>

            <li>
              <img src="/image/nikAndish.png" alt="" />
            </li>

            <li>
              <img src="/image/fouladMobarakehLogo.jpg" alt="" />
            </li>

            <li>
              <img
                src="/image/shahrdaryEsfahan.png"
                alt=""
              />
            </li>
            <li>
              <img src="/image/taaminejtemae.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="slider mt-5">
          <ul className="mb-0 sliderULRevers">
            <li>
              <img src="/image/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="/image/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="/image/irisa.png" alt="" />
            </li>
            <li>
              <img src="/image/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="/image/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="/image/mmte.png" alt="" />
            </li>
            <li>
              <img src="/image/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>

            <li>
              <img src="/image/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="/image/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="/image/persha.jpg" alt="" />
            </li>
            <li>
              <img src="/image/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="/image/sepah-palet.png" alt="" />
            </li>

            <li>
              <img src="/image/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="/image/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="/image/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="/image/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="/image/MME.jpg" alt="" />
            </li>

            <li>
              <img src="/image/nikAndish.png" alt="" />
            </li>

            <li>
              <img src="/image/fouladMobarakehLogo.jpg" alt="" />
            </li>

            <li>
              <img
                src="/image/shahrdaryEsfahan.png"
                alt=""
              />
            </li>
            <li>
              <img src="/image/taaminejtemae.png" alt="" />
            </li>
            <li>
              <img src="/image/asemanafraz.png" alt="" />
            </li>
            <li>
              <img src="/image/azaduniversity.png" alt="" />
            </li>
            <li>
              <img src="/image/irisa.png" alt="" />
            </li>
            <li>
              <img src="/image/keshavarzi-palet.jpg" alt="" />
            </li>
            <li>
              <img src="/image/khuisf-logo.png" alt="" />
            </li>
            <li>
              <img src="/image/mmte.png" alt="" />
            </li>
            <li>
              <img src="/image/Mes-Rafsanjan-FC-Logo.png" alt="" />
            </li>

            <li>
              <img src="/image/Metro-Arm.jpg" alt="" />
            </li>

            <li>
              <img src="/image/palayeshnaft.png" alt="" />
            </li>
            <li>
              <img src="/image/persha.jpg" alt="" />
            </li>
            <li>
              <img src="/image/refah-new-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/sefiddasht_ahanpakhsh.jpg" alt="" />
            </li>
            <li>
              <img src="/image/sepah-palet.png" alt="" />
            </li>

            <li>
              <img src="/image/shahrkord.webp" alt="" />
            </li>
            <li>
              <img src="/image/sina-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/spsilogo-notext.png" alt="" />
            </li>
            <li>
              <img src="/image/tejarat-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/tose-e-palet.png" alt="" />
            </li>
            <li>
              <img src="/image/tosee-taavon-palet-240x240.png" alt="" />
            </li>

            <li>
              <img src="/image/Zob_Ahan_logo.png" alt="" />
            </li>
            <li>
              <img src="/image/MME.jpg" alt="" />
            </li>

            <li>
              <img src="/image/nikAndish.png" alt="" />
            </li>

            <li>
              <img src="/image/fouladMobarakehLogo.jpg" alt="" />
            </li>

            <li>
              <img
                src="/image/shahrdaryEsfahan.png"
                alt=""
              />
            </li>
            <li>
              <img src="/image/taaminejtemae.png" alt="" />
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
