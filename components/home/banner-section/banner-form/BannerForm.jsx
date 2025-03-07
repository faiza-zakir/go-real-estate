import { useState, useEffect } from "react";
import { Row, Button, Col, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
// api
import { postLeadForm } from "@/app/apis/commonApi";
// css
import "./style.scss";

// min max prices

const minBudgetData = [
  {
    name: "50 lac",
    value: 5000000,
  },
  {
    name: "2 Cr",
    value: 20000000,
  },
  {
    name: "5 Cr",
    value: 50000000,
  },
  {
    name: "10 Cr",
    value: 100000000,
  },
  {
    name: "15 Cr",
    value: 150000000,
  },
];

const maxBudgetData = [
  {
    name: "50 lac",
    value: 5000000,
  },
  {
    name: "2 Cr",
    value: 20000000,
  },
  {
    name: "5 Cr",
    value: 50000000,
  },
  {
    name: "10 Cr",
    value: 100000000,
  },
  {
    name: "15 Cr",
    value: 150000000,
  },
];

const initailObject = {
  first_name: "",
  last_name: "",
  company: "",
  phone: "",
  email: "",
  purchase_objective: "",
  min_budget: "",
  max_budget: "",
  message: "",
};

const BannerForm = () => {
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [mobileValue, setMobileValue] = useState("");
  // const [captchaToken, setCaptchaToken] = useState(null); // Store reCAPTCHA token
  const [filteredMaxBudgetData, setFilteredMaxBudgetData] =
    useState(maxBudgetData);

  useEffect(() => {
    const minBudgetNumeric = Number(
      formValues.min_budget ? formValues.min_budget : 5000000
    );
    const filteredData = maxBudgetData.filter(
      (val) => Number(val?.value) > minBudgetNumeric
    );
    setFilteredMaxBudgetData(filteredData);
  }, [formValues.min_budget]);

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
        first_name: updatedData?.first_name,
        last_name: updatedData?.last_name,
        company: updatedData?.company,
        phone: updatedData?.phone,
        email: updatedData?.email,
        purchase_objective: updatedData?.purchase_objective,
        min_budget: parseFloat(updatedData?.min_budget).toFixed(2),
        max_budget: parseFloat(updatedData?.max_budget).toFixed(2),
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

  const validateForm = () => {
    const {
      first_name,
      last_name,
      company,
      email,
      purchase_objective,
      min_budget,
      max_budget,
      message,
    } = formValues;

    const errors = {};

    if (!first_name) {
      errors.first_name = "Please Enter First Name.";
    } else if (!last_name) {
      errors.last_name = "Please Enter Last Name.";
    } else if (!company) {
      errors.company = "Please Enter Company Name.";
    } else if (!mobileValue) {
      errors.phone = "Please Enter Phone Number.";
    } else if (!email) {
      errors.email = "Please Enter Email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address.";
    } else if (!purchase_objective) {
      errors.purchase_objective = "Please Select Purchase Objective.";
    } else if (!min_budget) {
      errors.min_budget = "Please Enter Min. Budget.";
    } else if (!max_budget) {
      errors.max_budget = "Please Enter Max. Budget.";
    }
    // else if (Number(max_budget) <= Number(min_budget)) {
    //   errors.max_budget = "Max. Budget must be greater than Min. Budget.";
    // }
    else if (!message) {
      errors.message = "Please Enter Your Message.";
    }
    // else if (!captchaToken) {
    //   errors.captcha = "Please Complete the CAPTCHA.";
    // }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    let updatedData = { ...formValues, phone: mobileValue };
    setLoading(true);
    PostLeadFormData(updatedData);
  };
  return (
    <Form className="banner_form_sec" onSubmit={handleSubmit}>
      <Row className="g-0 gx-md-2 gx-lg-2">
        <Col md={6} lg={6}>
          <Form.Group controlId="first_name" className="mb-3">
            <Form.Control
              type="text"
              name="first_name"
              value={formValues.first_name}
              onChange={handleInputChange}
              placeholder="First Name"
            />
            <p className="mt-2 form_error_msg">{errors?.first_name}</p>
          </Form.Group>
        </Col>
        <Col md={6} lg={6}>
          <Form.Group controlId="last_name" className="mb-3">
            <Form.Control
              type="text"
              name="last_name"
              value={formValues.last_name}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
            <p className="mt-2 form_error_msg">{errors?.last_name}</p>
          </Form.Group>
        </Col>
        <Col sm={12}>
          <Form.Group controlId="company" className="mb-3">
            <Form.Control
              type="text"
              name="company"
              value={formValues.company}
              onChange={handleInputChange}
              placeholder="Company Name"
            />
            <p className="mt-2 form_error_msg">{errors?.company}</p>
          </Form.Group>
        </Col>
        <Col md={6} lg={6}>
          <div className="form-group mb-3">
            <PhoneInput
              country="ae"
              value={mobileValue}
              onChange={setMobileValue}
              enableSearch={true}
              disableSearchIcon={true}
            />
            <p className="mt-2 form_error_msg">{errors?.phone}</p>
          </div>
        </Col>
        <Col md={6} lg={6}>
          <Form.Group controlId="email" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <p className="mt-2 form_error_msg">{errors?.email}</p>
          </Form.Group>
        </Col>
        <Col sm={12}>
          <Form.Group controlId="purchase_objective" className="mb-3">
            <Form.Select
              name="Purchase Objective"
              value={formValues.purchase_objective}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Purchase Objective
              </option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="pre-leased">Pre-Leased</option>
              <option value="farmhouse">Farmhouse</option>
            </Form.Select>
            <p className="mt-2 form_error_msg">{errors?.purchase_objective}</p>
          </Form.Group>
        </Col>
        <Col md={6} lg={6}>
          <Form.Group controlId="min_budget" className="mb-3">
            <Form.Select
              name="min_budget"
              value={formValues.min_budget}
              onChange={handleInputChange}
              className="custom-select"
            >
              <option value="" disabled>
                Min. Budget
              </option>
              {minBudgetData?.map((val, i) => (
                <option key={"min" + i} value={val?.value}>
                  {val?.name} AED
                </option>
              ))}
            </Form.Select>
            <p className="mt-2 form_error_msg">{errors?.min_budget}</p>
          </Form.Group>
        </Col>
        <Col md={6} lg={6}>
          <Form.Group controlId="max_budget" className="mb-3">
            <Form.Select
              name="max_budget"
              value={formValues.max_budget}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Max. Budget
              </option>
              {filteredMaxBudgetData?.map((val, i) => (
                <option key={"max" + i} value={val?.value}>
                  {val?.name} AED
                </option>
              ))}
            </Form.Select>
            <p className="mt-2 form_error_msg">{errors?.max_budget}</p>
          </Form.Group>
        </Col>
        <Col sm={12}>
          <Form.Group controlId="message" className="mb-3">
            <Form.Control
              type="text"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="Message"
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
          <Button className="theme_btn2" disabled={loading} type="submit">
            {loading ? "Sending..." : "Submit"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BannerForm;
