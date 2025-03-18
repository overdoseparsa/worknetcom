import React, { Component } from "react";
import "./activeNetworkServiceAccording.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap";
export default class activeNetworkService extends Component {
  render() {
    return (
      <>
        <h2 className="accordingTitle">آشنایی بیشتر با جزئیات این بخش</h2>
        <Accordion defaultActiveKey={["0"]}>
          <Accordion.Item className="accordingItem" eventKey="0">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6 style={{textAlign:'start'}}>نصب و پیکر بندی فایروال های سخت افزاری</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              شرکت WORKNET با ارائه خدمات نصب و پیکربندی فایروال‌های سخت‌افزاری،
              به سازمان‌ها کمک می‌کند تا از شبکه‌های خود در برابر تهدیدات بیرونی
              و داخلی محافظت کنند. این خدمات شامل نصب فایروال‌های سخت‌افزاری
              پیشرفته، پیکربندی قوانین امنیتی، مدیریت ترافیک ورودی و خروجی، و
              اعمال سیاست‌های دسترسی است. تیم متخصص ما با استفاده از تجهیزات
              به‌روز و تکنولوژی‌های امنیتی پیشرفته، امنیت شبکه شما را به
              بالاترین سطح ارتقا می‌دهد تا از داده‌ها و زیرساخت‌های سازمانی در
              برابر حملات سایبری محافظت شود.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="1">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6 style={{textAlign:'start'}}>تنظیم و کانفیگ روتر های سیسکو، میکروتیک و هواووی</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              شرکت WORKNET خدمات تخصصی تنظیم و کانفیگ روترهای سیسکو، میکروتیک و
              هواوی را ارائه می‌دهد تا شبکه‌های سازمانی شما به‌طور بهینه و ایمن
              عمل کنند. این خدمات شامل پیکربندی روترها، تنظیمات پروتکل‌های
              مسیریابی (مثل OSPF، EIGRP، BGP)، تنظیم فایروال داخلی، بهینه‌سازی
              ترافیک و پهنای باند، ایجاد VPN‌های ایمن برای ارتباطات از راه دور و
              مدیریت دسترسی کاربران است. تیم متخصص ما با استفاده از تجهیزات
              پیشرفته و تجربه فراوان، روترهای سیسکو، میکروتیک و هواوی را مطابق
              با نیازهای خاص سازمان شما پیکربندی کرده و یک شبکه امن و پایدار را
              برای شما فراهم می‌آورد.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="2">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6 style={{textAlign:'start'}}>نصب و راه اندازی آنتی ویروس بر روی سرورو کالینت</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              شرکت WORKNET خدمات نصب و راه‌اندازی آنتی‌ویروس بر روی سرورها و
              کلاینت‌ها را به منظور حفاظت از سیستم‌ها در برابر تهدیدات سایبری
              ارائه می‌دهد. این خدمات شامل نصب و پیکربندی نرم‌افزارهای
              آنتی‌ویروس معتبر برای سرورها و دستگاه‌های کلاینت، تنظیم اسکن‌های
              خودکار و دستی، به‌روزرسانی مداوم ویروس‌کش‌ها و مدیریت قوانین
              امنیتی به‌منظور شناسایی و حذف تهدیدات از قبیل ویروس‌ها، تروجان‌ها،
              بدافزارها و ransomware است. تیم فنی ما با توجه به نیازهای خاص
              سازمان شما، راهکارهای سفارشی برای تأمین امنیت شبکه و سیستم‌ها
              ارائه می‌دهد تا از داده‌ها و زیرساخت‌های شما محافظت کامل صورت
              گیرد.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="3">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6 style={{textAlign:'start'}}>نصب و راه اندازی سیستم های تلفن تحت شبکه</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              شرکت WORKNET با ارائه خدمات نصب و راه‌اندازی سیستم‌های تلفن تحت
              شبکه (VoIP)، به سازمان‌ها کمک می‌کند تا سیستم‌های ارتباطی خود را
              به‌صورت دیجیتال و با هزینه‌های پایین‌تر بهینه‌سازی کنند. این خدمات
              شامل طراحی و نصب سیستم‌های تلفن VoIP، پیکربندی سرورهای ارتباطی،
              اتصال به خطوط تلفن سنتی و اینترنت، تنظیمات شماره‌گیری، و
              یکپارچه‌سازی با نرم‌افزارهای مدیریت تماس است. تیم ما با استفاده از
              تکنولوژی‌های پیشرفته و پروتکل‌های استاندارد جهانی، یک سیستم تلفنی
              پایدار و مقرون‌به‌صرفه برای سازمان‌ها فراهم می‌آورد که به راحتی
              می‌توان آن را گسترش و مدیریت کرد.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="4">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6 style={{textAlign:'start'}}>ایجاد بستر VoIPبا استفاده از تجهیزات سیسکو</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              شرکت WORKNET خدمات ایجاد بستر VoIP با استفاده از تجهیزات سیسکو را
              به سازمان‌ها ارائه می‌دهد تا سیستم‌های ارتباطی خود را به‌صورت
              دیجیتال و با کیفیت بالا راه‌اندازی کنند. این خدمات شامل طراحی و
              پیاده‌سازی شبکه VoIP با استفاده از روترها، سوئیچ‌ها، سرورها و
              گیت‌وی‌های سیسکو، پیکربندی پروتکل‌های VoIP مانند SIP و H.323، و
              تنظیمات مدیریت تماس، شماره‌گیری و کیفیت سرویس (QoS) است. تیم متخصص
              ما با استفاده از تجهیزات سیسکو، بستر VoIP با امنیت و کارایی بالا
              را برای سازمان‌ها فراهم می‌کند تا بتوانند ارتباطات صوتی و تصویری
              با کیفیت عالی و بدون اختلال برقرار کنند. این راهکار باعث کاهش
              هزینه‌های ارتباطی و تسهیل در مدیریت تماس‌ها می‌شود.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="5">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6 style={{textAlign:'start'}}>راه اندازی پروتکل(HSRP)</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              خدمات ما در این زمینه شامل پیکربندی پروتکل HSRP برای روترهای سیسکو
              به‌منظور فراهم کردن مسیر پشتیبان برای دسترسی به شبکه، تعریف
              گروه‌های HSRP، تنظیم اولویت‌ها و آدرس‌های مجازی است. این کار باعث
              می‌شود که اگر روتر اصلی دچار مشکل شود، روتر پشتیبان به‌طور خودکار
              جایگزین شده و ارتباطات شبکه قطع نمی‌شود.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="6">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6 style={{textAlign:'start'}}> کلیه خدمات اجراییLANوWANسیسکو</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              شرکت WORKNET با ارائه خدمات اجرایی LAN و WAN سیسکو، به سازمان‌ها
              کمک می‌کند تا شبکه‌های محلی (LAN) و گسترده (WAN) خود را به بهترین
              شکل طراحی، پیاده‌سازی و مدیریت کنند. این خدمات شامل راه‌اندازی و
              پیکربندی تجهیزات سیسکو برای شبکه‌های LAN و WAN، از جمله سوئیچ‌ها،
              روترها، فایروال‌ها، و گیت‌وی‌ها است.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="accordingItem" eventKey="7">
            <Accordion.Header
              className="accordingHeader
                        "
            >
              <h6 style={{textAlign:'start'}}> روتینگ و سوئیجینگ و فایروال سیسکو</h6>
            </Accordion.Header>
            <Accordion.Body className="accordingBody">
              شرکت WORKNET خدمات روتینگ، سوئیچینگ و فایروال سیسکو را برای ایجاد
              شبکه‌های امن، پایدار و بهینه‌شده ارائه می‌دهد. این خدمات شامل
              طراحی، پیکربندی و مدیریت روترها، سوئیچ‌ها و فایروال‌های سیسکو
              به‌منظور تضمین عملکرد بالا و امنیت در شبکه‌های سازمانی است.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}
