import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Col, Container, Modal, Row, Form } from "react-bootstrap";
import { toast } from "react-toastify";
// api
import { postForgetPasswordForm } from "@/app/apis/commonApi";
// css
import "./styles.scss";

const initailObject = {
  email: "",
};

const ForgetPassword = ({ show, handleClose }) => {
  const router = useRouter();
  const [formValues, setFormValues] = useState(initailObject);
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
  const PostForgetPasswordFormData = async (updatedData) => {
    try {
      const payload = {
        email: updatedData?.email,
      };

      const response = await postForgetPasswordForm(payload);
      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message || "Password Reset Successfully!");
        setLoading(false);
        setFormValues({ ...initailObject });
        handleClose();
        router.push("/");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.details?.email?.[0] || "Something Went wrong!"
      );
      console.error("Error posting Data:", error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = formValues;
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

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }

    let updatedData = { ...formValues };
    setLoading(true);
    PostForgetPasswordFormData(updatedData);
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
        className="forget-pass-modal"
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
                  <Form.Group controlId="email" className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                    <p className="mt-2 form_error_msg">{errors?.email}</p>
                  </Form.Group>
                  <button
                    className="theme_btn2"
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
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
    </>
  );
};

export default ForgetPassword;
