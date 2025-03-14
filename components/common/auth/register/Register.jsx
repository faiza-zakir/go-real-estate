import { useRef, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdOutlineFileUpload } from "react-icons/md";
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
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const [step, setStep] = useState(1); // 1 for Register, 2 for Verification, 4 for Uploads
  const [registerData, setRegisterData] = useState(initialRegisterData);
  const [verificationData, setVerificationData] = useState(
    initialVerificationData
  );
  const [uploadsData, setUploadsData] = useState(initialUploadsData);
  const [mobileValue, setMobileValue] = useState("");
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [loadingVerification, setLoadingVerification] = useState(false);
  const [loadingUploads, setLoadingUploads] = useState(false);
  const [errors, setErrors] = useState({});
  // Create references to the hidden file input elements
  const hiddenFileInputEmiratesId = useRef(null);
  const hiddenFileInputLoremIpsum1 = useRef(null);
  const hiddenFileInputLoremIpsum2 = useRef(null);

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files[0]; // Get first selected file
    if (file) {
      setUploadsData((prev) => ({
        ...prev,
        [fieldName]: file, // Assign file to the corresponding field
      }));
    }
  };

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
        setLoadingRegister(false);
        setStep(2); // Move to verification step
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoadingRegister(false);
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
    setLoadingRegister(true);
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
        setLoadingVerification(false);
        setStep(4); // Move to uploads step
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoadingVerification(false);
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
    setLoadingVerification(true);
    PostVerificationFormData(updatedVerificationData);
  };
  // uploads form data

  const PostUploadsFormData = async (imagesFormData) => {
    try {
      let header = {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${imagesFormData._boundary}`,
        },
      };

      const response = await postLeadForm(imagesFormData, header);
      if (response.status === 200 || response.status === 201) {
        toast.success("Account Created Successfully!");
        setLoadingUploads(false);
        setRegisterData({ ...initialRegisterData });
        setVerificationData({ ...initialVerificationData });
        setUploadsData({ ...initialUploadsData });
        setUploadFie([]);
        handleClose();
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoadingUploads(false);
      toast.error("Something Went wrong!");
    }
  };
  const handleUploadsSubmit = async (e) => {
    e.preventDefault();
    const { emirates_id, lorem_ipsum1, lorem_ipsum2 } = uploadsData;
    const errors = {};

    if (!emirates_id) errors.emirates_id = "Please upload your Emirates ID.";
    if (!lorem_ipsum1) errors.lorem_ipsum1 = "Please upload Lorem Ipsum 1.";
    if (!lorem_ipsum2) errors.lorem_ipsum2 = "Please upload Lorem Ipsum 2.";

    // If there are errors, stop the process
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    let imagesFormData = new FormData();
    imagesFormData.append("emirates_id", emirates_id);
    imagesFormData.append("lorem_ipsum1", lorem_ipsum1);
    imagesFormData.append("lorem_ipsum2", lorem_ipsum2);

    setLoadingUploads(true);
    PostUploadsFormData(imagesFormData);
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
                        {/* <Form.Control
                          type="password"
                          name="password"
                          value={registerData.password}
                          onChange={handleRegisterChange}
                        /> */}
                        <div className="position-relative">
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                          />
                          <span
                            className="position-absolute end-0 top-50 translate-middle-y me-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? (
                              <FaEyeSlash fontSize={18} />
                            ) : (
                              <FaEye fontSize={18} />
                            )}
                          </span>
                        </div>
                        <p className="form_error_msg">{errors?.password}</p>
                      </Form.Group>
                    </Col>
                    <Col sm={12}>
                      <Form.Group className="mb-4">
                        <Form.Label>Verify Password</Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type={showVerifyPassword ? "text" : "password"}
                            name="verify_password"
                            value={registerData.verify_password}
                            onChange={handleRegisterChange}
                          />
                          <span
                            className="position-absolute end-0 top-50 translate-middle-y me-3"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setShowVerifyPassword((prev) => !prev)
                            }
                          >
                            {showVerifyPassword ? (
                              <FaEyeSlash fontSize={18} />
                            ) : (
                              <FaEye fontSize={18} />
                            )}
                          </span>
                        </div>
                        <p className="form_error_msg">
                          {errors?.verify_password}
                        </p>
                      </Form.Group>
                    </Col>
                  </Row>
                  <button type="submit" className="theme_btn2">
                    {loadingRegister ? "Sending..." : "Next"}
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
                      {loadingVerification ? "Verifying..." : "Verify"}
                    </button>
                  </div>
                </Form>
              )}

              {step === 4 && (
                <Form onSubmit={handleUploadsSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Emirates ID</Form.Label>
                    <div
                      className="position-relative"
                      onClick={() => hiddenFileInputEmiratesId.current.click()}
                      style={{ cursor: "pointer" }}
                    >
                      <Form.Control
                        type="text"
                        readOnly
                        value={uploadsData.emirates_id?.name || "Upload"}
                      />
                      <span className="position-absolute end-0 top-50 translate-middle-y me-3">
                        <MdOutlineFileUpload fontSize={20} />
                      </span>
                    </div>
                    <input
                      type="file"
                      name="emirates_id"
                      accept=".pdf,.doc,.docx"
                      ref={hiddenFileInputEmiratesId}
                      onChange={(e) => handleFileChange(e, "emirates_id")}
                      style={{ display: "none" }}
                    />
                    <p className="form_error_msg">{errors?.emirates_id}</p>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Lorem Ipsum</Form.Label>
                    <div
                      className="position-relative"
                      onClick={() => hiddenFileInputLoremIpsum1.current.click()}
                      style={{ cursor: "pointer" }}
                    >
                      <Form.Control
                        type="text"
                        readOnly
                        value={uploadsData.lorem_ipsum1?.name || "Upload"}
                      />
                      <span className="position-absolute end-0 top-50 translate-middle-y me-3">
                        <MdOutlineFileUpload fontSize={20} />
                      </span>
                    </div>
                    <input
                      type="file"
                      name="lorem_ipsum1"
                      accept=".pdf,.doc,.docx"
                      ref={hiddenFileInputLoremIpsum1}
                      onChange={(e) => handleFileChange(e, "lorem_ipsum1")}
                      style={{ display: "none" }}
                    />
                    <p className="form_error_msg">{errors?.lorem_ipsum1}</p>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Lorem Ipsum</Form.Label>
                    <div
                      className="position-relative"
                      onClick={() => hiddenFileInputLoremIpsum2.current.click()}
                      style={{ cursor: "pointer" }}
                    >
                      <Form.Control
                        type="text"
                        readOnly
                        value={uploadsData.lorem_ipsum2?.name || "Upload"}
                      />
                      <span className="position-absolute end-0 top-50 translate-middle-y me-3">
                        <MdOutlineFileUpload fontSize={20} />
                      </span>
                    </div>
                    <input
                      type="file"
                      name="lorem_ipsum2"
                      accept=".pdf,.doc,.docx"
                      ref={hiddenFileInputLoremIpsum2}
                      onChange={(e) => handleFileChange(e, "lorem_ipsum2")}
                      style={{ display: "none" }}
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
                      {loadingUploads ? "Creating..." : "Create Account"}
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
