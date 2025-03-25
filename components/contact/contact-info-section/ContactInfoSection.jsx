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
              <a href={`mailto:${infoData?.email}`}>{infoData?.email}</a>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="contact-item">
              <FiPhone className="icon-style" />
              <h3 className="sub_heading">Phone</h3>
              <p className="para_comm">
                Call us for immediate assistance and information.
              </p>
              <a href={`tel:${infoData?.phone?.replace(/\s+/g, "")}`}>
                {infoData?.phone}
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
                href="https://www.google.com/maps/place/11440+Okeechobee+Blvd+%23203,+Royal+Palm+Beach,+FL+33411,+USA/@26.7055034,-80.2236385,17z/data=!3m1!4b1!4m5!3m4!1s0x88d92efa87c90dc9:0x99f0bf54e79f3e7b!8m2!3d26.7055034!4d-80.2236385?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                US Office:{" "}
                <span style={{ fontWeight: "400" }}>{infoData?.address1}</span>
              </a>
              <br />
              <a
                href="https://www.google.com/maps/place/B2B+Tower/@25.1912682,55.2827183,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f68248ccaa99b:0x467fdf5f16bdf75b!8m2!3d25.1912682!4d55.2852986!16s%2Fm%2F03d2bqw?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                UAE Office:{" "}
                <span style={{ fontWeight: "400" }}>{infoData?.address2}</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfoSection;
