"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// css
import "./style.scss";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="mt-60 footer-area">
      <div className="ptb-60">
        <Container>
          <Row className="gy-5 gy-lg-0">
            <Col sm={12} md={6} lg>
              <Image
                src="/assets/logo/clrlogo.png"
                alt="logo"
                width={100}
                height={110}
                onClick={() => router.push("/")}
                style={{
                  cursor: "pointer",
                  background: "#fff",
                  borderRadius: "5px",
                  padding: "0.5rem",
                }}
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
                  <Link href="/blogs">Blog</Link>
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
                    info@gogrouprealestate.com
                  </a>
                </li>
                <li>Dubai, Lorem Lipsum Eslopsum</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <h3>Stay In Loop</h3>
              <Form>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    // value={formValues.email}
                    // onChange={handleInputChange}
                    placeholder="Enter Your Name"
                  />
                  {/* <p className="mt-2 form_error_msg">{errors?.email}</p> */}
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    // value={formValues.email}
                    // onChange={handleInputChange}
                    placeholder="Enter Your Email"
                  />
                  {/* <p className="mt-2 form_error_msg">{errors?.email}</p> */}
                </Form.Group>
                <Button
                  className="theme_btn"
                  // disabled={loading}
                  type="submit"
                >
                  {/* {loading ? "Sending..." : "Submit"} */} Subscribe
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
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
            <Link href="/terms-of-use">Terms of Use</Link>
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
