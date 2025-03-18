import React, { useState, useEffect, useRef } from "react";
import "./networkAccording.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap";
export default function According() {
  const [text, steText] = useState("");
  const massage = "ذآشنایی بیشتر با جزئیات این بخش";
  const [isVisible, setIsVisible] = useState(false);
  const messageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (messageRef.current) {
      observer.observe(messageRef.current);
    }

    return () => {
      if (messageRef.current) {
        observer.unobserve(messageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const speed = 50;
      const typing = () => {
        if (i < massage.length) {
          steText((prevText) => prevText + massage.charAt(i));
          i++;
          setTimeout(typing, speed);
        }
      };
      typing();
    }
  }, [isVisible]);

  return (
    <>
      <h1
        ref={messageRef}
        className={`accordingTitle ${isVisible ? "visible" : ""} `}
      >
        {text}
      </h1>
      <Accordion defaultActiveKey={["0"]}>
        <Accordion.Item className="accordingItem" eventKey="0">
          <Accordion.Header
            className="accordingHeader
                        "
          >
            <h6 style={{ textAlign: "start" }}>
              مشاوره طراحی و پیاده سازی ساختار مجازی سازی
            </h6>
          </Accordion.Header>
          <Accordion.Body className="acccordingBody">
            شرکت WORKNET با ارائه خدمات مشاوره، طراحی و پیاده‌سازی ساختار
            مجازی‌سازی، به سازمان‌ها کمک می‌کند تا سرورها، ذخیره‌سازها و
            زیرساخت‌های شبکه خود را بهینه کرده و بهره‌وری را افزایش دهند. با
            استفاده از فناوری‌های مجازی‌سازی، کاهش هزینه‌ها، مدیریت ساده‌تر،
            افزایش امنیت و بهبود عملکرد سیستم‌ها امکان‌پذیر می‌شود. تیم متخصص ما
            راهکارهای سفارشی را متناسب با نیازهای سازمان شما ارائه می‌دهد.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="accordingItem" eventKey="1">
          <Accordion.Header
            className="accordingHeader
                        "
          >
            <h6 style={{ textAlign: "start" }}>
              مشاوره و پیاده سازی زیر ساخت شبکه
            </h6>
          </Accordion.Header>
          <Accordion.Body className="acccordingBody">
            شرکت WORKNET با ارائه خدمات مشاوره، طراحی و پیاده‌سازی زیرساخت شبکه،
            به سازمان‌ها کمک می‌کند تا شبکه‌ای پایدار، امن و بهینه داشته باشند.
            این خدمات شامل بررسی نیازها، طراحی ساختار شبکه، پیاده‌سازی تجهیزات
            اکتیو و پسیو، مدیریت پهنای باند و بهینه‌سازی عملکرد شبکه است. ما با
            استفاده از تجهیزات پیشرفته و استانداردهای جهانی، بستری مطمئن برای
            انتقال داده‌ها و ارتباطات سازمانی فراهم می‌کنیم.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="accordingItem" eventKey="2">
          <Accordion.Header
            className="accordingHeader
                        "
          >
            <h6 style={{ textAlign: "start" }}>مشاوره امنیت شبکه</h6>
          </Accordion.Header>
          <Accordion.Body className="acccordingBody">
            شرکت WORKNET با ارائه خدمات مشاوره امنیت شبکه، به سازمان‌ها کمک
            می‌کند تا از حملات سایبری، نشت اطلاعات و تهدیدات امنیتی محافظت شوند.
            این خدمات شامل ارزیابی ریسک، طراحی معماری امنیتی، پیاده‌سازی
            فایروال‌ها، سیستم‌های تشخیص نفوذ (IDS/IPS)، مدیریت دسترسی و رمزنگاری
            داده‌ها است. ما با استفاده از جدیدترین استانداردها و ابزارهای
            امنیتی، بستری امن و مطمئن برای کسب‌وکارها فراهم می‌کنیم.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="accordingItem" eventKey="3">
          <Accordion.Header
            className="accordingHeader
                        "
          >
            <h6 style={{ textAlign: "start" }}>
              مشاوره و پیاده سازی بهینه سازی و ارتقای شبکه
            </h6>
          </Accordion.Header>
          <Accordion.Body className="acccordingBody">
            شرکت WORKNET با ارائه خدمات بهینه‌سازی و ارتقای شبکه، به سازمان‌ها
            کمک می‌کند تا کارایی، امنیت و پایداری زیرساخت‌های شبکه خود را افزایش
            دهند. این خدمات شامل شناسایی نقاط ضعف، بهبود سرعت و پهنای باند،
            ارتقای تجهیزات، بهینه‌سازی ترافیک شبکه و افزایش امنیت ارتباطات است.
            با استفاده از تکنولوژی‌های نوین و راهکارهای پیشرفته، شبکه‌ای
            کارآمدتر و مقیاس‌پذیرتر برای سازمان‌ها فراهم می‌کنیم.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="accordingItem" eventKey="4">
          <Accordion.Header
            className="accordingHeader
                        "
          >
            <h6 style={{ textAlign: "start" }}>مشاوره سرویسهای مایکروسافتی</h6>
          </Accordion.Header>
          <Accordion.Body className="acccordingBody">
            شرکت WORKNET با ارائه خدمات مشاوره در زمینه سرویس‌های مایکروسافتی،
            به سازمان‌ها کمک می‌کند تا از تمامی امکانات نرم‌افزارها و سرویس‌های
            مایکروسافت به نحو احسن بهره‌برداری کنند. این خدمات شامل پیاده‌سازی و
            پیکربندی سرورهای مایکروسافت، Active Directory، Exchange Server،
            Office 365، Microsoft Teams و سایر سرویس‌های ابری و نرم‌افزاری
            مایکروسافت است. تیم متخصص ما به شما کمک می‌کند تا بهترین راهکارهای
            مایکروسافتی را متناسب با نیازهای سازمانی خود انتخاب کرده و به صورت
            مؤثر پیاده‌سازی کنید.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="accordingItem" eventKey="5">
          <Accordion.Header
            className="accordingHeader
                        "
          >
            <h6 style={{ textAlign: "start" }}> مشاوره شبکه های وایرلس</h6>
          </Accordion.Header>
          <Accordion.Body className="acccordingBody">
            شرکت WORKNET با ارائه خدمات مشاوره شبکه‌های وایرلس، به سازمان‌ها کمک
            می‌کند تا شبکه‌های بی‌سیم امن، پایدار و با کارایی بالا را طراحی و
            پیاده‌سازی کنند. این خدمات شامل طراحی و راه‌اندازی شبکه‌های Wi-Fi،
            نقاط دسترسی (Access Points)، امنیت شبکه‌های وایرلس، مدیریت تداخل‌های
            سیگنال و بهینه‌سازی پوشش‌دهی است. ما با استفاده از تکنولوژی‌های
            پیشرفته و تحلیل نیازهای سازمانی، بهترین راهکارهای بی‌سیم را ارائه
            می‌دهیم تا شبکه‌ای سریع و بدون اختلال در تمامی نقاط سازمان برقرار
            باشد.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="accordingItem" eventKey="6">
          <Accordion.Header
            className="accordingHeader
                        "
          >
            <h6 style={{ textAlign: "start" }}>
              {" "}
              مشاوره راه اندازی مراکز تلفن سازمانی
            </h6>
          </Accordion.Header>
          <Accordion.Body className="acccordingBody">
            شرکت WORKNET با ارائه خدمات مشاوره راه‌اندازی مراکز تلفن سازمانی، به
            کسب‌وکارها کمک می‌کند تا سیستم‌های ارتباطی مدرن و کارآمد برای سازمان
            خود راه‌اندازی کنند. این خدمات شامل طراحی و پیاده‌سازی مراکز تلفن
            VoIP، سیستم‌های پاسخگوی خودکار، مدیریت تماس‌ها، اتصال به شبکه‌های
            داخلی و خارجی است. تیم ما از تکنولوژی‌های پیشرفته برای بهینه‌سازی و
            یکپارچه‌سازی سیستم‌های ارتباطی سازمان شما استفاده می‌کند تا ارتباطات
            داخلی و خارجی شما به‌طور مؤثر و امن مدیریت شود.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="accordingItem" eventKey="7">
          <Accordion.Header
            className="accordingHeader
                        "
          >
            <h6 style={{ textAlign: "start" }}>
              مشاوره در خصوص راه اندازی سیستم برق اضطراری
            </h6>
          </Accordion.Header>
          <Accordion.Body className="acccordingBody">
            شرکت WORKNET با ارائه خدمات مشاوره در خصوص راه‌اندازی سیستم برق
            اضطراری، به سازمان‌ها کمک می‌کند تا از تامین برق پایدار و مطمئن در
            شرایط اضطراری اطمینان حاصل کنند. این خدمات شامل طراحی و پیاده‌سازی
            سیستم‌های UPS (منبع تغذیه بدون وقفه)، ژنراتورها، استابلایزرها و سایر
            تجهیزات برق اضطراری است. تیم ما با تحلیل نیازهای سازمان شما، بهترین
            راهکارهای مناسب برای جلوگیری از اختلالات ناشی از قطع برق و حفظ
            عملکرد تجهیزات حیاتی را ارائه می‌دهد.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
