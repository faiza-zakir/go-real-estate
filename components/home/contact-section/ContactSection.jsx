import { Container } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
// css
import "./style.scss";

const ContactSection = () => {
  return (
    <Container>
      <div className="mt-60 contact-sec-area">
        <div className="content_sec ptb-60">
          <h2 className="main_sec_heading">Get In Touch</h2>
          <a
            href="https://wa.me/15613775509"
            className="theme_btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp fontSize="26px" /> Call Now
          </a>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
