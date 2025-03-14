import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
// api
import { postLeadForm } from "@/app/apis/commonApi";
// css
import "./style.scss";

const initailObject = {
  full_name: "",
  phone: "",
  email: "",
  message: "",
};

const ContactFormSection = () => {
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const [mobileValue, setMobileValue] = useState("");
  const [errors, setErrors] = useState({});
  // const [captchaToken, setCaptchaToken] = useState(null); // Store reCAPTCHA token

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing again
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // const onCaptchaChange = (token) => {
  //   setCaptchaToken(token);
  //   setErrors({ ...errors, captcha: "" }); // Clear CAPTCHA error on success
  // };

  const PostLeadFormData = async (updatedData) => {
    try {
      const payload = {
        full_name: updatedData?.full_name,
        phone: updatedData?.phone,
        email: updatedData?.email,
        message: updatedData?.message,
      };

      const response = await postLeadForm(payload);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        setFormValues({ ...initailObject });
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoading(false);
      toast.error("Something Went wrong!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { full_name, email, message } = formValues;
    const errors = {};
    if (!full_name) {
      errors.full_name = "Please Enter First Name.";
    } else if (!mobileValue) {
      errors.phone = "Please Enter Phone Number.";
    } else if (!email) {
      errors.email = "Please Enter Email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address.";
    } else if (!message) {
      errors.message = "Please Enter Message.";
    }
    // else if (!captchaToken) {
    //   errors.captcha = "Please Complete the CAPTCHA.";
    // }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }

    let updatedData = { ...formValues, phone: mobileValue };
    setLoading(true);
    PostLeadFormData(updatedData);
  };

  return (
    <div className="contact-form-area mt-60">
      <Container>
        <Row className="gx-lg-5 gy-5 gy-lg-0">
          <Col lg={6} className="order-last order-lg-first">
            <Form onSubmit={handleSubmit}>
              <h2 className="main_sec_heading">Get In Touch</h2>
              <Row className="g-0 gx-md-2 gx-lg-2">
                <Col sm={12}>
                  <Form.Group controlId="full_name" className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="full_name"
                      value={formValues.full_name}
                      onChange={handleInputChange}
                    />
                    <p className="mt-2 form_error_msg">{errors?.full_name}</p>
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group controlId="phone" className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <PhoneInput
                      country="ae"
                      value={mobileValue}
                      onChange={setMobileValue}
                      enableSearch={true}
                      disableSearchIcon={true}
                    />
                    <p className="mt-2 form_error_msg">{errors?.phone}</p>
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                    <p className="mt-2 form_error_msg">{errors?.email}</p>
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group controlId="message" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formValues.message}
                      onChange={handleInputChange}
                      placeholder="Type your message..."
                    />
                    <p className="mt-2 form_error_msg">{errors?.message}</p>
                  </Form.Group>
                </Col>
                {/* Google reCAPTCHA */}
                {/* <Col sm={12}>
                  <div className="mb-4">
                    <ReCAPTCHA
                      sitekey="6LcV_WoqAAAAAF1KC63Gc6Rk0dYnogvW_4uiwe_w" // Add your site key here
                      onChange={onCaptchaChange}
                    />
                    <p className="mt-2 form_error_msg">{errors?.captcha}</p>
                  </div>
                </Col> */}
                <Col sm={12}>
                  <Button
                    className="theme_btn2"
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src="/assets/contact/contactImg.webp"
                layout="fill"
                objectFit="cover"
                alt="Real Estate Office Contact India | Global Opportunities Real Estate"
                title="Contact | Contact Real Estate Agents India | Global Opportunities Real Estate"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactFormSection;
