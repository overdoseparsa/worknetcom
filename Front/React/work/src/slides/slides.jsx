import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./slides.css";

export default function Slides() {
  return (
    <>
      <h2>
        <span className="Text">از</span> ایده <span className="Text">تا</span>
        اجرا
      </h2>
      <h4>
        همراه با <span className="orangText">ورک‌نت</span> در مسیر پروژه‌های
        شرکتی
      </h4>
      <Carousel data-bs-theme="light" className="Carousel">
        <Carousel.Item>
          <img
            className="slideImage d-block w-100"
            src="/Image/Isfahansubway.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="slidelItem">
            <h3>شرکت متروی اصفهان</h3>
            <p className="carousel-p">
              شرکت ما اجرای فیبر نوری برای دوربین‌های مداربسته را بر عهده داشته
              است. این پروژه با هدف تقویت زیرساخت‌های نظارتی و افزایش امنیت
              ایستگاه‌ها و خطوط مترو انجام شده است
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slideImage d-block w-100"
            src="/Image/social.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="slidelItem">
            <h3>تامین اجتماعی</h3>
            <p className="carousel-p">
              پروژه‌های تأمین اجتماعی مسئولیت اجرای زیرساخت‌های شبکه و سرور را
              بر عهده داشته است. این پروژه‌ها با هدف بهبود ارتباطات، افزایش
              امنیت داده‌ها و ارتقای کارایی سیستم‌های فناوری اطلاعات انجام
              شده‌اند
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slideImage d-block w-100"
            src="/Image/isfahanrefinery.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="slidelItem">
            <h3>پالایشگاه اصفهان</h3>
            <p className="carousel-p">
              در پالایشگاه اصفهان اجرای زیرساخت‌های شبکه، دوربین‌های امنیتی و
              دیتا سنتر را بر عهده داشته است. این پروژه با هدف بهبود امنیت،
              افزایش پایداری ارتباطات و ارتقای مدیریت داده‌ها اجرا شده است.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slideImage d-block w-100"
            src="/Image/MME.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="slidelItem">
            <h3>شرکت MME</h3>
            <p className="carousel-p">
              شرکت ما در همکاری با شرکت مهندسی معادن و فلزات، اجرای شبکه‌های
              صنعتی پروفی‌نت و پروفی‌باس را بر عهده داشته است. این پروژه با هدف
              بهینه‌سازی ارتباطات صنعتی، افزایش بهره‌وری و بهبود عملکرد
              سیستم‌های اتوماسیون انجام شده است.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
