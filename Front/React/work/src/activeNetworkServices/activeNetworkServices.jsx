import React, { Component } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import "bootstrap";
import "./activeNetworkServices.css";
import ActiveNetworkServicesAccording from "./activeNetworkServiceAccording/activeNetworkServiceAccording";
export default class activeNetworkService extends Component {
  render() {
    return (
      <>
        <Container fluid className="explaneActivenetwork">
          <Container className="whatsActiveNetwork">
            <h1>خدمات اکتیو شبکه</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              deserunt odio consequatur dolor consequuntur atque et quia, odit
              accusantium adipisci soluta quidem consectetur saepe temporibus
              nam, ea suscipit qui asperiores? Optio iusto consequuntur ducimus
              possimus consectetur doloremque accusamus perferendis vero nostrum
              dicta! Possimus fugiat, architecto velit placeat perspiciatis
              aspernatur voluptates temporibus iste veniam ducimus enim quos hic
              similique dolore sed. Numquam dicta doloribus aut explicabo quod
              officiis, magni soluta mollitia. Nihil itaque quibusdam autem
              laborum quas, praesentium, obcaecati, maxime sed ducimus
              consequatur magnam perspiciatis nesciunt omnis quos corporis sit
              corrupti.
            </h6>
          </Container>
        </Container>

        <Container className="ActiveNetworkParagraphContainer" fluid>
          <Row className="activeNetworkRow">
            <Col
              className="activeNetworkparagraph col-12 col-lg-6"
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
              className="col-12 col-lg-6"
              lg={{ order: "last" }}
              xs={{ order: "first" }}
            >
              <Image
                className="ActiveNetworkImage col-12"
                src="image/bigBulding.jpg"
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
              نصب و راه اندازی سرویس های شبکه نصب و راه اندازی سیستم های مدیریتی
              و مانیتورینگ شبکه
            </Col>
            <Col md={6} xs={12}>
              نصب و راه اندازی شبکه های وایرلس
            </Col>
            <Col md={6} xs={12}>
              نصب و راه اندازی سیستم های پشتیبان گیری اتوماتیک از سرور ها و
              کالینت ها
            </Col>
            <Col md={6} xs={12}>
              نصب سیستم های مدیریت و کنترل پهنای باند و ترافیک شبکه و اینترنت
            </Col>
            <Col md={6} xs={12}>
              پیکر بندی سوییچ های مدیریتی سیسکو و برند های دیگرVlan, Management
            </Col>
            <Col md={6} xs={12}>
              فراهم آوردن حداکثر امنیت با استفاده از فایروال های سخت افزاری
              سیسکو
            </Col>
            <Col md={6} xs={12}>
              نصب و راه اندازی سرویس های شبکه برروی سرورهای ویندوز و
              لینوکسActive Directory, DNS, DHCP, NAT, PROXY, IIS, RAS, Security
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
}
