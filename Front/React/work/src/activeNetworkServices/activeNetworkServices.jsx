import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap";
import "./activeNetworkServices.css";
import ActiveNetworkServicesAccording from "./activeNetworkServiceAccording/activeNetworkServiceAccording";
export default function ActiveNetworkService() {
  return (
    <>
      <Container fluid className="explaneActivenetwork">
        <Container className="whatsActiveNetwork">
          <h1>خدمات اکتیو شبکه</h1>
          <h6>
            خدمات اکتیو شبکه شرکت WORKNET شامل مجموعه‌ای از فعالیت‌های تخصصی و
            حرفه‌ای است که به نصب، پیکربندی، مدیریت و بهینه‌سازی تجهیزات فعال
            شبکه می‌پردازد. این خدمات شامل تجهیزات کلیدی و اساسی مانند سوئیچ‌ها،
            روترها، فایروال‌ها، سرورها و سایر ابزارهای مرتبط است که برای طراحی و
            پیاده‌سازی شبکه‌های پرسرعت، امن و پایدار مورد استفاده قرار می‌گیرند.
            در WORKNET، ما به‌طور تخصصی شبکه‌هایی را ایجاد می‌کنیم که عملکردی
            بهینه، امنیت بالا و سرعت عالی داشته باشند تا کسب‌وکارها بتوانند
            به‌طور مؤثر و بدون هیچ‌گونه اختلالی از زیرساخت فناوری اطلاعات خود
            استفاده کنند. تیم حرفه‌ای ما با استفاده از جدیدترین تکنولوژی‌ها و
            ابزارهای مدیریتی، شبکه‌ای بهینه و قابل اعتماد را برای شما طراحی و
            پیاده‌سازی می‌کند. همچنین، ما به‌طور مداوم پشتیبانی و نظارت بر شبکه
            را انجام می‌دهیم تا اطمینان حاصل کنیم که شبکه شما بدون مشکل و به‌طور
            مؤثر به فعالیت خود ادامه می‌دهد
          </h6>
        </Container>
      </Container>

      <Container className="ActiveNetworkParagraphContainer" fluid>
        <Row className="activeNetworkRow">
          <Col
            className="activeNetworkparagraph col-12 col-lg-6 p-0 pe-md-5"
            xs={{ order: "last" }}
            lg={{ order: "first" }}
          >
            <h1>خدمات اکتیو شبکه</h1>
            <ol>
              <li>تنظیم و کانفیگ روتر های سیسکو، میکروتیک و هواووی</li>
              <li>نصب و پیکر بندی فایروال های سخت افزاری</li>
              <li>نصب و راه اندازی آنتی ویروس بر روی سرورو کالینت</li>
              <li>نصب و راه اندازی سیستم های تلفن تحت شبکه</li>
              <li>ایجاد بسترVoIPبا استفاده از تجهیزات سیسکو</li>
              <li>راه اندازی پروتکل(HSRP)</li>
              <li>کلیه خدمات اجراییLANوWANسیسکو</li>
              <li>روتینگ و سوئیجینگ و فایروال سیسکو</li>
            </ol>
          </Col>
          <Col
            className=" activeImageRow col-12 col-lg-6 "
            lg={{ order: "last" }}
            xs={{ order: "first" }}
          >
            <Container className="activeNetworkSpecialist">
              <Row className=" activeNetworkSpecialistRow d-flex rightTitle">
                <Col className=" d-flex justify-content-center col-12 col-sm-8">
                  <ul
                    className="d-grid p-0 pe-sm-5 pe-0"
                    style={{ listStyle: "none" }}
                  >
                    <li className="mb-2 fw-bold text-end fs-4">
                      مدیر بخش شبکه اکتیو
                    </li>
                    <li className="mb-2 text-end fs-sm-5 fs-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        className="ms-2"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M148,108a12,12,0,0,1,12-12h28a12,12,0,0,1,0,24H160A12,12,0,0,1,148,108Zm40,28H168a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24Zm48-80V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212ZM58.28,159.37A43.82,43.82,0,0,1,71.53,142a36,36,0,1,1,56.94,0,43.84,43.84,0,0,1,13.26,17.37,12,12,0,0,1-22.15,9.26C116.48,161.19,108.42,156,100,156s-16.47,5.2-19.59,12.63a12,12,0,1,1-22.13-9.26ZM88,120a12,12,0,1,0,12-12A12,12,0,0,0,88,120Z"></path>
                      </svg>
                      محمدرضا زندیان
                    </li>
                    <li className="mb-2 text-end fs-sm-6 fs-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        className="ms-2"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z"></path>
                      </svg>
                      Worknsco@gmail.com
                    </li>
                    <li className=" text-end fs-sm-5 fs-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        className="ms-2"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z"></path>
                      </svg>
                      09120155112
                    </li>
                  </ul>
                </Col>
                <Col className="text-center d-grid align-items-center">
                  <Button
                    className="mx-auto mb-2 mb-sm-0"
                    style={{ width: 100 }}
                  >
                    <Link to={"/ContactForm"}>ارتباط باما</Link>
                  </Button>
                </Col>
              </Row>
            </Container>
            <Image
              className="ActiveNetworkImage col-12"
              src="/image/services/activenetworkImage.jpg"
            ></Image>
          </Col>
        </Row>
      </Container>
      <Container className="activeNetworkAccordingContainer" fluid>
        <Container>
          <ActiveNetworkServicesAccording />
        </Container>
      </Container>
      <Container className="activeDetailsContainer" fluid>
        <h2>تمام خدمات ما در حوزه شبکه اکتیو</h2>
        <Row className="activeDerailsRow">
          <Col md={6} xs={12}>
            نصب و راه اندازی سرورهای ویندوزی و لینوکسیlinux windows, Domain
            Controller, File Server, Backup Server, Web Server, Application
            Server, Mail Server, Print Server
          </Col>
          <Col md={6} xs={12}>
            نصب و راه اندازی سرویس های شبکه نصب و راه اندازی سیستم های مدیریتی و
            مانیتورینگ شبکه
          </Col>
          <Col md={6} xs={12}>
            نصب و راه اندازی شبکه های وایرلس
          </Col>
          <Col md={6} xs={12}>
            نصب و راه اندازی سیستم های پشتیبان گیری اتوماتیک از سرور ها و کالینت
            ها
          </Col>
          <Col md={6} xs={12}>
            نصب سیستم های مدیریت و کنترل پهنای باند و ترافیک شبکه و اینترنت
          </Col>
          <Col md={6} xs={12}>
            پیکر بندی سوییچ های مدیریتی سیسکو و برند های دیگرVlan, Management
          </Col>
          <Col md={6} xs={12}>
            فراهم آوردن حداکثر امنیت با استفاده از فایروال های سخت افزاری سیسکو
          </Col>
          <Col md={6} xs={12}>
            نصب و راه اندازی سرویس های شبکه برروی سرورهای ویندوز و لینوکسActive
            Directory, DNS, DHCP, NAT, PROXY, IIS, RAS, Security
          </Col>
          <Col md={6} xs={12}>
            روتینگ و سوئیچینگ شبکه با استفاده از سخت افزارهای های سیسکو
          </Col>
          <Col md={6} xs={12}>
            خدماتSubnettingوVLANبندی سوئیچ های سیسکو
          </Col>
          <Col md={6} xs={12}>
            راه اندازی سرویس های اتصال راه دور به تجهیزات سیسکو(SSH, Telnet)
          </Col>
          <Col md={6} xs={12}>
            راه اندازی مانیتورینگ تجهیزات سیسکو(SNMP)
          </Col>
          <Col md={6} xs={12}>
            راه اندازی پروتکل های امنیتنی جهت جلوگیری از لوپ در شبکه(Spanning
            Tree Protocol)
          </Col>
          <Col md={6} xs={12}>
            پروتکل یکپارچه سازی تنظیمات(VTP Domain)
          </Col>
          <Col md={6} xs={12}>
            کانفیگ اترچنل(Ether Channel)
          </Col>
          <Col md={6} xs={12}>
            راه اندازی انواع روتینگ پروتکل شامل(OSPF, EIGRP)
          </Col>
          <Col md={6} xs={12}>
            بدست آوردن ارتباطی امن و مطمئن با استفاده از اکسس پوینت های سیسکو
          </Col>
          <Col md={6} xs={12}>
            روتینگ و سوئیجینگ و فایروال سیسکو
          </Col>
        </Row>
      </Container>
    </>
  );
}
