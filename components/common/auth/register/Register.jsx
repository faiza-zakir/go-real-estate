import { useState } from "react";
import Image from "next/image";
import { Col, Container, Modal, Row, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// api
import { postLeadForm } from "@/app/apis/commonApi";
// css
import "./styles.scss";

const initailObject = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
  verify_password: "",
};

const Register = ({ show, handleClose }) => {
  const [formValues, setFormValues] = useState(initailObject);
  const [mobileValue, setMobileValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing again
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const PostLeadFormData = async (updatedData) => {
    try {
      const payload = {
        first_name: updatedData?.first_name,
        last_name: updatedData?.last_name,
        email: updatedData?.email,
        phone: updatedData?.phone,
        password: updatedData?.password,
        verify_password: updatedData?.verify_password,
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
    const { first_name, last_name, email, password, verify_password } =
      formValues;
    const errors = {};

    // First Name Validation
    if (!first_name) {
      errors.first_name = "Please enter your first name.";
    } else if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(first_name)) {
      errors.first_name = "First name should contain only alphabets.";
    } else if (first_name.length < 2) {
      errors.first_name = "First name must be at least 2 characters long.";
    }

    // Last Name Validation
    if (!last_name) {
      errors.last_name = "Please enter your last name.";
    } else if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(last_name)) {
      errors.last_name = "Last name should contain only alphabets.";
    } else if (last_name.length < 2) {
      errors.last_name = "Last name must be at least 2 characters long.";
    }

    // Phone Number Validation
    if (!mobileValue) {
      errors.phone = "Please enter your mobile number.";
    } else if (!/^\d{8,15}$/.test(mobileValue.replace(/\D/g, ""))) {
      errors.phone = "Please enter a valid phone number (8-15 digits).";
    }

    // Email Validation
    if (!email) {
      errors.email = "Please enter your email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email format.";
    } else if (email.length < 5) {
      errors.email = "Email must be at least 5 characters long.";
    } else if (/\.\./.test(email)) {
      errors.email = "Email cannot contain consecutive dots.";
    } else if (
      /(@example\.com|@tempmail\.com|@disposable\.com)$/i.test(email)
    ) {
      errors.email = "Disposable email addresses are not allowed.";
    }

    // Password Validation
    if (!password) {
      errors.password = "Please enter your password.";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    } else if (!/[A-Z]/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      errors.password = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      errors.password = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.password = "Password must contain at least one special character.";
    }

    // Verify Password Validation
    if (!verify_password) {
      errors.verify_password = "Please confirm your password.";
    } else if (verify_password !== password) {
      errors.verify_password = "Passwords do not match.";
    }

    // If there are errors, stop the process
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
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="xl"
      centered
      className="register-modal"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col lg={6} md={6} sm={12}>
              <h2 className="main_sec_heading">
                Global Opportunities Real Estate
              </h2>
              <p className="para_comm">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <Form>
                <Row className="g-0 gx-md-2 gx-lg-2">
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="first_name" className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        value={formValues.first_name}
                        onChange={handleInputChange}
                      />
                      <p className="mt-2 form_error_msg">
                        {errors?.first_name}
                      </p>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="last_name" className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        value={formValues.last_name}
                        onChange={handleInputChange}
                      />
                      <p className="mt-2 form_error_msg">{errors?.last_name}</p>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
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
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="phone" className="mb-3">
                      <Form.Label>Mobile Number</Form.Label>
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
                    <Form.Group controlId="password" className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        name="password"
                        value={formValues.password}
                        onChange={handleInputChange}
                      />
                      <p className="mt-2 form_error_msg">{errors?.password}</p>
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <Form.Group controlId="verify_password" className="mb-4">
                      <Form.Label>Verify Password</Form.Label>
                      <Form.Control
                        type="text"
                        name="verify_password"
                        value={formValues.verify_password}
                        onChange={handleInputChange}
                      />
                      <p className="mt-2 form_error_msg">
                        {errors?.verify_password}
                      </p>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex align-items-center gap-2">
                  <button className="theme_btn3 me-3">Back</button>
                  <button
                    className="theme_btn2"
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    {loading ? "Sending..." : "Next"}
                  </button>
                </div>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <figure>
                <Image
                  src="/assets/auth/login.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Login"
                  title="Login to Global Opportunities Real Estate"
                />
              </figure>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
