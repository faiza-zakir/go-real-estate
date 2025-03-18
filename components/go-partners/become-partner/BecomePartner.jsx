import { useState } from "react";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import Register from "@/components/common/auth/register/Register";
// css
import "./styles.scss";
import Login from "@/components/common/auth/login/Login";

const BecomePartner = ({ aboutData }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="become_partner_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <figure>
              <Image
                // src={
                //   process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                //   aboutData?.featured_img2
                // }
                src={aboutData?.featured_img}
                layout="fill"
                objectFit="cover"
                alt={aboutData?.title}
                title={aboutData?.title}
              />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="main_sec_heading">{aboutData?.title}</h2>
            <div
              className="general-details mb-4"
              dangerouslySetInnerHTML={{ __html: aboutData?.description }}
            />
            <button
              className="theme_btn2 me-3"
              onClick={() => setShowLoginModal(true)}
            >
              Register Now
            </button>
          </Col>
        </Row>
        <Login
          show={showLoginModal}
          handleClose={() => setShowLoginModal(false)}
        />
      </Container>
    </div>
  );
};

export default BecomePartner;
