import { Row, Col, Container } from "react-bootstrap";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
// css
import "./styles.scss";

const ContactInfoSection = ({ infoData }) => {
  return (
    <div className="contact-info-area mt-60">
      <Container>
        <h2 className="main_sec_heading">Need Help?</h2>
        <Row className="gx-lg-5 gx-md-5 gy-5 gy-lg-0">
          <Col md={6} lg={4}>
            <div className="contact-item">
              <MdOutlineMailOutline className="icon-style" />
              <h3 className="sub_heading">Email</h3>
              <p className="para_comm">
                Reach out to us for any inquiries or support
              </p>
              {/* <a href={`mailto:${infoData?.email}`}>{infoData?.email}</a> */}
              <a href="mailto:info@gogrouprealestate.com">
                info@gogrouprealestate.com
              </a>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="contact-item">
              <FiPhone className="icon-style" />
              <h3 className="sub_heading">Phone</h3>
              <p className="para_comm">
                Call us for immediate assistance and information.
              </p>
              {/* <a href={`tel:${infoData?.phone?.replace(/\s+/g, "")}`}>
                {infoData?.phone}
              </a> */}
              <a
                href={"https://wa.me/15613775509"}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                +1(561) 377-5509
              </a>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="contact-item">
              <GrLocation className="icon-style" />
              <h3 className="sub_heading">Offices</h3>
              <p className="para_comm">
                Visit us for personalized service and consultations:
              </p>
              <a
                href="https://www.google.com/maps/place/Dubai+-+United+Arab+Emirates/@25.0762804,54.8978044,10z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43496ad9c645:0xbde66e5084295162!8m2!3d25.2048493!4d55.2707828!16zL20vMDFmMDhy?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* {infoData?.address} */}
                <strong>US Office:</strong> 11440 Okeechobee Blvd, Suite 203,
                Royal Palm Beach, FL 33411
              </a>
              <br />
              <a
                href="https://www.google.com/maps/place/Dubai+-+United+Arab+Emirates/@25.0762804,54.8978044,10z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43496ad9c645:0xbde66e5084295162!8m2!3d25.2048493!4d55.2707828!16zL20vMDFmMDhy?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* {infoData?.address} */}
                <strong>UAE Office:</strong> Office 1612 - B2B Tower, Business
                Bay, Dubai
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfoSection;
