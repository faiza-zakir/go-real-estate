"use client";
import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
// api
import { postSubscribeForm } from "@/app/apis/commonApi";
// data
import { hiddenData } from "@/lib/hiddenData";
// css
import "./style.scss";

const initailObject = {
  full_name: "",
  email: "",
};

const Footer = () => {
  const pathname = usePathname();
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

  const PostSubscribeFormData = async (updatedData) => {
    try {
      const payload = {
        full_name: updatedData?.full_name,
        email: updatedData?.email,
      };

      const response = await postSubscribeForm(payload);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        toast.success("You have subscribed successfully.");
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
    const { full_name, email } = formValues;
    const errors = {};

    if (!full_name) {
      errors.full_name = "Please enter your full name.";
    }

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
    PostSubscribeFormData(updatedData);
  };
  return (
    <div className="mt-60 footer-area">
      <div className="ptb-60">
        <Container>
          <Row className="gy-5 gy-lg-0">
            <Col sm={12} md={6} lg>
              <Image
                src="/assets/logo/clrlogo.png"
                alt="logo"
                width={120}
                height={130}
                onClick={() => router.push("/")}
                // style={{
                //   cursor: "pointer",
                //   background: "#fff",
                //   borderRadius: "5px",
                //   padding: "0.5rem",
                // }}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/real-estate-investments-in-uae">
                    Real Estate Investments in UAE
                  </Link>
                </li>
                <li>
                  <Link href="/dubai-opportunities">Dubai Opportunities</Link>
                </li>
                <li>
                  <Link href="/abu-dhabi-opportunities">
                    Abu Dhabi Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/ras-al-khaimah-opportunities">
                    Ras Al Khaimah Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/partners-educational-portal">
                    Partners Educational Portal
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={6} lg>
              <h3>Company</h3>
              <ul>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/faqs">Faqs</Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={6} lg>
              <h3>Contact</h3>
              <ul>
                <li>
                  <a
                    href="https://wa.me/15613775509"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +1 (561) 377-5509
                  </a>
                </li>
                <li>
                  <a href="mailto:info@gogrouprealestate.com">
                    info@GoGroupRealEstate.com
                  </a>
                </li>
                <li>Dubai, Lorem Lipsum Eslopsum</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <h3>Stay In Loop</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="full_name" className="mb-3">
                  <Form.Control
                    type="text"
                    name="full_name"
                    value={formValues.full_name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                  />
                  <p className="mt-2 form_error_msg">{errors?.full_name}</p>
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                  />
                  <p className="mt-2 form_error_msg">{errors?.email}</p>
                </Form.Group>
                <Button className="theme_btn" disabled={loading} type="submit">
                  {loading ? "Sending..." : "Subscribe"}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        {/* More Information Section using Accordion */}
        <div className="border-top border-bottom py-3 more_info">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>More Information</Accordion.Header>
              <Accordion.Body>
                <div
                  className="hidden_content_wrap"
                  dangerouslySetInnerHTML={{
                    __html: hiddenData?.[pathname]?.description,
                  }}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="footer-bottom py-4">
          <div className="d-flex gap-3 align-items-center">
            <p>
              © 2024 Designed And Managed By{" "}
              <a
                href="https://www.prism-me.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prism Digital
              </a>
            </p>
            {/* <Link href="/refund-policy">Refund Policy</Link> */}
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
          <ul className="d-flex gap-3 align-items-center social-icons">
            <li>
              <a
                href="https://www.facebook.com/globalopportunitiesrealestate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook fontSize="22px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gogrouprealestate/?igshid=OGQ5ZDc2ODk2ZA#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram fontSize="22px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/gogrouprealestate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok fontSize="22px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/gogrouprealestate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin fontSize="22px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@GOGroupRealEstate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube fontSize="22px" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
