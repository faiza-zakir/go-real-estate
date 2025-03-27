import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Col, Container, Modal, Row, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Register from "../register/Register";
import ForgetPassword from "../forget-password/ForgetPassword";
// api
import { postLoginForm } from "@/app/apis/commonApi";
// css
import "./styles.scss";

const initailObject = {
  email: "",
  password: "",
};

const Login = ({ show, handleClose }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [showRegister, setShowRegister] = useState(false);
  const [showForgetPass, setShowForgetPass] = useState(false);
  const [formValues, setFormValues] = useState(initailObject);
  const [showPassword, setShowPassword] = useState(false);
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
  const PostLoginFormData = async (updatedData) => {
    try {
      const payload = {
        email: updatedData?.email,
        password: updatedData?.password,
      };

      const response = await postLoginForm(payload);
      if (response.status === 200 || response.status === 201) {
        if (typeof window !== "undefined") {
          localStorage.setItem("auth_token", response.data?.token);
        }
        toast.success(response.data.message || "Logged in Successfully!");
        setLoading(false);
        setFormValues({ ...initailObject });
        handleClose();
        router.push("/go-partners");
        if (pathname === "/go-partners") {
          if (typeof window !== "undefined") {
            window.location.reload(); // Reload page when token is added or removed
          }
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went wrong!");
      console.error("Error posting Data:", error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    const errors = {};

    // Email validation
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

    // Password validation
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

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }

    let updatedData = { ...formValues };
    setLoading(true);
    PostLoginFormData(updatedData);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        centered
        className="login-modal"
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
                  <Form.Group controlId="full_name" className="mb-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <Form.Label>Password</Form.Label>
                      <Form.Label
                        className="forget_pass"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShowForgetPass(true);
                          handleClose();
                        }}
                      >
                        Forget Password?
                      </Form.Label>
                    </div>
                    <div className="position-relative">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formValues.password}
                        onChange={handleInputChange}
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
                    <p className="mt-2 form_error_msg">{errors?.password}</p>
                  </Form.Group>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="theme_btn3 me-3"
                      onClick={() => {
                        setShowRegister(true);
                        handleClose();
                      }}
                    >
                      Create Account
                    </button>
                    <button
                      className="theme_btn2"
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      {loading ? "Sending..." : "Login"}
                    </button>
                  </div>
                  <div className="d-flex align-items-center gap-3 my-4 additonal_login">
                    <div className="line_style" />
                    <p className="para_comm m-0">or</p>
                    <div className="line_style" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <Image
                      src="/assets/logo/google-logo.png"
                      width={35}
                      height={35}
                      alt="google logo"
                    />
                    <Image
                      src="/assets/logo/linkedin-logo.png"
                      width={35}
                      height={35}
                      alt="linkedin logo"
                    />
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
      <Register
        show={showRegister}
        handleClose={() => setShowRegister(false)}
      />
      <ForgetPassword
        show={showForgetPass}
        handleClose={() => setShowForgetPass(false)}
      />
    </>
  );
};

export default Login;
