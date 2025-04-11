import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// api
import { postProjectContactForm } from "@/app/apis/commonApi";
// css
import "./styles.scss";

const initailObject = {
  full_name: "",
  phone: "",
  email: "",
  message: "",
  property_id: "",
  property_name: "",
};

const ContactUsModal = ({ show, handleClose, projectId, projectName }) => {
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const [mobileValue, setMobileValue] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing again
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const PostProjectContactFormData = async (updatedData) => {
    try {
      const payload = {
        full_name: updatedData?.full_name,
        phone: updatedData?.phone,
        email: updatedData?.email,
        message: updatedData?.message,
        property_id: updatedData?.property_id,
        property_name: updatedData?.property_name,
      };

      const response = await postProjectContactForm(payload);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        toast.success(
          "We have received your query. Our team will get in touch with you shortly."
        );
        setFormValues({ ...initailObject });
        setMobileValue("");
        handleClose();
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

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }

    let updatedData = {
      ...formValues,
      phone: mobileValue,
      property_id: projectId,
      property_name: projectName,
    };
    setLoading(true);
    PostProjectContactFormData(updatedData);
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        centered
        className="contact-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={handleSubmit}>
              <h2 className="main_sec_heading">Get In Touch</h2>
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
              <Button className="theme_btn2" disabled={loading} type="submit">
                {loading ? "Sending..." : "Submit"}
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactUsModal;
