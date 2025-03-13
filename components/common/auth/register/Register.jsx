import { useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// api
import { postLeadForm } from "@/app/apis/commonApi";
// css
import "./styles.scss";

const initialRegisterData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
  verify_password: "",
};

const initialVerificationData = {
  code: "",
};

const initialUploadsData = {
  emirates_id: "",
  lorem_ipsum1: "",
  lorem_ipsum2: "",
};

const Register = ({ show, handleClose }) => {
  const [step, setStep] = useState(1); // 1 for Register, 2 for Verification
  const [registerData, setRegisterData] = useState(initialRegisterData);
  const [verificationData, setVerificationData] = useState(
    initialVerificationData
  );
  const [uploadsData, setUploadsData] = useState(initialUploadsData);
  const [mobileValue, setMobileValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleVerificationChange = (e) => {
    setVerificationData({
      ...verificationData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleUploadsChange = (e) => {
    setUploadsData({
      ...uploadsData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // register form data
  const PostRegisterFormData = async (updatedRegisterData) => {
    try {
      const payload = {
        first_name: updatedRegisterData?.first_name,
        last_name: updatedRegisterData?.last_name,
        email: updatedRegisterData?.email,
        phone: updatedRegisterData?.phone,
        password: updatedRegisterData?.password,
        verify_password: updatedRegisterData?.verify_password,
      };
      setStep(2); // Move to verification step

      const response = await postLeadForm(payload);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        setStep(2); // Move to verification step
        // setRegisterData({ ...initialRegisterData });
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoading(false);
      toast.error("Something Went wrong!");
    }
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password, verify_password } =
      registerData;
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
      return;
    }

    let updatedRegisterData = { ...registerData, phone: mobileValue };
    setLoading(true);
    PostRegisterFormData(updatedRegisterData);
  };
  // verification form data
  const PostVerificationFormData = async (updatedVerificationData) => {
    try {
      const payload = {
        code: updatedVerificationData?.code,
      };
      setStep(4); // Move to uploads step

      const response = await postLeadForm(payload);
      if (response.status === 200 || response.status === 201) {
        toast.success("Verification Successful!");
        setLoading(false);
        setStep(4); // Move to uploads step
        // setVerificationData({ ...initialVerificationData });
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoading(false);
      toast.error("Something Went wrong!");
    }
  };
  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    const { code } = verificationData;
    const errors = {};

    // Validation
    if (!code) {
      errors.code = "Please enter the verification code.";
    }
    // If there are errors, stop the process
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    let updatedVerificationData = { ...verificationData };
    setLoading(true);
    PostVerificationFormData(updatedVerificationData);
  };
  // uploads form data
  const PostUploadsFormData = async (updatedUploadsData) => {
    try {
      const payload = {
        emirates_id: updatedUploadsData?.emirates_id,
        lorem_ipsum1: updatedUploadsData?.lorem_ipsum1,
        lorem_ipsum2: updatedUploadsData?.lorem_ipsum2,
      };

      const response = await postLeadForm(payload);
      if (response.status === 200 || response.status === 201) {
        toast.success("Account Created Successfully!");
        setLoading(false);
        // setUploadsData({ ...initialUploadsData });
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoading(false);
      toast.error("Something Went wrong!");
    }
  };
  const handleUploadsSubmit = async (e) => {
    e.preventDefault();
    const { emirates_id } = uploadsData;
    const errors = {};

    // Validation
    if (!emirates_id) {
      errors.emirates_id = "Please upload your Emirated ID.";
    }
    // If there are errors, stop the process
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    let updatedUploadsData = { ...uploadsData };
    setLoading(true);
    PostUploadsFormData(updatedUploadsData);
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
              {step === 1 && (
                <Form onSubmit={handleRegisterSubmit}>
                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="first_name"
                          value={registerData.first_name}
                          onChange={handleRegisterChange}
                        />
                        <p className="form_error_msg">{errors?.first_name}</p>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="last_name"
                          value={registerData.last_name}
                          onChange={handleRegisterChange}
                        />
                        <p className="form_error_msg">{errors?.last_name}</p>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={registerData.email}
                          onChange={handleRegisterChange}
                        />
                        <p className="form_error_msg">{errors?.email}</p>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <PhoneInput
                          country="ae"
                          value={mobileValue}
                          onChange={setMobileValue}
                          enableSearch={true}
                        />
                        <p className="form_error_msg">{errors?.phone}</p>
                      </Form.Group>
                    </Col>
                    <Col sm={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={registerData.password}
                          onChange={handleRegisterChange}
                        />
                        <p className="form_error_msg">{errors?.password}</p>
                      </Form.Group>
                    </Col>
                    <Col sm={12}>
                      <Form.Group className="mb-4">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="verify_password"
                          value={registerData.verify_password}
                          onChange={handleRegisterChange}
                        />
                        <p className="form_error_msg">
                          {errors?.verify_password}
                        </p>
                      </Form.Group>
                    </Col>
                  </Row>
                  <button type="submit" className="theme_btn2">
                    {loading ? "Sending..." : "Next"}
                  </button>
                </Form>
              )}

              {step === 2 && (
                <Form onSubmit={handleVerificationSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label>Email Verification</Form.Label>
                    <Form.Control
                      type="text"
                      name="code"
                      value={verificationData.code}
                      onChange={handleVerificationChange}
                      maxLength={6}
                      inputMode="numeric"
                      className="verification_input"
                    />
                    <p className="form_error_msg">{errors?.code}</p>
                  </Form.Group>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="theme_btn3"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>
                    <button type="submit" className="theme_btn2">
                      {loading ? "Verifying..." : "Verify"}
                    </button>
                  </div>
                </Form>
              )}

              {step === 4 && (
                <Form onSubmit={handleUploadsSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Emirates ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="emirates_id"
                      value={uploadsData.emirates_id}
                      onChange={handleUploadsChange}
                    />
                    <p className="form_error_msg">{errors?.emirates_id}</p>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Lorem Ipsum</Form.Label>
                    <Form.Control
                      type="text"
                      name="lorem_ipsum1"
                      value={uploadsData.lorem_ipsum1}
                      onChange={handleUploadsChange}
                    />
                    <p className="form_error_msg">{errors?.lorem_ipsum1}</p>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Lorem Ipsum</Form.Label>
                    <Form.Control
                      type="text"
                      name="lorem_ipsum2"
                      value={uploadsData.lorem_ipsum2}
                      onChange={handleUploadsChange}
                    />
                    <p className="form_error_msg">{errors?.lorem_ipsum2}</p>
                  </Form.Group>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="theme_btn3"
                      onClick={() => setStep(2)}
                    >
                      Back
                    </button>
                    <button type="submit" className="theme_btn2">
                      {loading ? "Creating..." : "Create Account"}
                    </button>
                  </div>
                </Form>
              )}
            </Col>
            <Col lg={6} md={6} sm={12}>
              <figure>
                <Image
                  src="/assets/auth/login.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Register"
                  title="Register to Global Opportunities Real Estate"
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
