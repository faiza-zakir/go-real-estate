import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const AboutInvestment = ({ aboutData }) => {
  return (
    <div className="about_invest_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <h2 className="main_sec_heading">{aboutData?.title}</h2>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{ __html: aboutData?.description }}
            />
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  aboutData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt={aboutData?.title}
                title={aboutData?.title}
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutInvestment;
