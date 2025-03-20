import React, { useState } from "react";
import { Form, Container, Button, Alert, Spinner } from "react-bootstrap";
import "./contactForm.css";
import "bootstrap";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    body_text: "",
    created: "",
    file: null,
  });
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [click, setClick] = useState(false);

  const handelNameChange = (e) => {
    setFormData((prevForm) => ({ ...prevForm, name: e.target.value }));
  };

  const handelEmailChange = (e) => {
    setFormData((prevForm) => ({ ...prevForm, email: e.target.value }));
  };

  const handelPhoneChange = (e) => {
    setFormData((prevForm) => ({ ...prevForm, phone: e.target.value }));
    const phoneIsValid = /^\d{11}$/.test(e.target.value);
    setPhoneError(!phoneIsValid);
  };

  const handelBodyChange = (e) => {
    setFormData((prevForm) => ({ ...prevForm, body_text: e.target.value }));
  };

  const handelFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const isFormComplete = () => {
    return (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.phone.length > 0 &&
      formData.body_text.length > 0 &&
      !phoneError
    );
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete()) {
      setFormComplete(true);
      return;
    }

    function getCurrentDateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    setLoading(true);
    setSuccess(false);
    setError("");
    setIsError(false);
    let time = getCurrentDateTime();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("body_text", formData.body_text);
    formDataToSend.append("created", time);
    formDataToSend.append("file", formData.file);

    try {
      const response = await fetch(
        "http://62.60.198.69/api/v1/content/create/",
        {
          method: "POST",
          body: formDataToSend,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          body_text: "",
          created: "",
          file: null,
        });
      } else {
        const errorMessage = await response.text();
        setIsError(true);
        setError(`خطا از سمت سرور: ${errorMessage}`);
      }
    } catch (error) {
      setIsError(true);
      setError("مشکلی در ارسال درخواست رخ داد: " + error.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container className={`colorFace ${click ? "click zIndex" : ""}`} fluid>
        <Container className="containerFaceP p p-md-5">
          <p className="FaceP">
            ما در Worknet باور داریم که سرمایه اصلی هر سازمان، تیمی قوی و متخصص
            است. اگر به دنبال محیطی پویا، حرفه‌ای و سرشار از فرصت‌های رشد هستید،
            ما مشتاق آشنایی با شما هستیم در صورتی که علاقه‌مند به همکاری با ما
            هستید، می‌توانید رزومه خود را ارسال کنید یا درخواست همکاری و استخدام
            خود را مستقیماً برای مدیران شرکت بفرستید. فرقی نمی‌کند که به دنبال
            یک فرصت شغلی جدید هستید یا مایلید استعداد و توانایی‌های خود را به ما
            معرفی کنید، ما از دریافت پیام شما استقبال می‌کنیم. تیم ما همواره در
            جستجوی افرادی با انگیزه، خلاق و متعهد است که بتوانند در کنار هم به
            رشد و موفقیت بیشتری دست یابیم. پس اگر فکر می‌کنید می‌توانید عضوی از
            خانواده Worknet باشید، همین حالا اقدام کنید
          </p>
          <Button
            onClick={() => {
              setClick(true);
            }}
            className="FaceButton mt-5"
          >
            برای شروع کلیک کنید
          </Button>
        </Container>
      </Container>

      <Container
        className={`ContactFormContainer ${click ? "Opacity" : ""}`}
        fluid
      >
        <Container
          className="p-0 mx-auto"
          style={{ maxWidth: 600, borderRadius: 15, position: "relative" }}
        >
          <Form
            className="formContainer"
            style={{ direction: "rtl" }}
            onSubmit={handelSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>نام وخانوادگی(name & lastName)</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handelNameChange}
                placeholder="نام خود را وارد کنید"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ایمیل(email)</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handelEmailChange}
                placeholder="ایمیل"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>تلفن(phone)</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handelPhoneChange}
                placeholder="شماره تلفن"
              />
              {phoneError && (
                <Form.Text className="text-danger">
                  لطفا شماره تلفن خود را به درستی وارد کنید
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>توضیحات شما</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="body_text"
                value={formData.body_text}
                onChange={handelBodyChange}
              />
            </Form.Group>

            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>فایل خود را انتخاب کنید</Form.Label>
              <Form.Control type="file" onChange={handelFileChange} />
            </Form.Group>
            {isError && (
              <Alert style={{ direction: "rtl" }} variant="danger">
                {error}
              </Alert>
            )}
            {success && (
              <Alert style={{ direction: "rtl" }} variant="success">
                <h6>ارسال با موفقیت انجام شد</h6>
              </Alert>
            )}
            {formComplete && (
              <Alert style={{ direction: "rtl" }} variant="danger">
                <h6>لطفا همه فیلدها را به درستی پر کنید</h6>
              </Alert>
            )}

            <Button
              className="outline-primary"
              type="submit"
              variant="primary"
              disabled={loading}
            >
              {loading ? <Spinner as="span" animation="border" /> : "ارسال"}
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
}
