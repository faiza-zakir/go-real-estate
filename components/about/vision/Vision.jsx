import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Vision = ({ visionData }) => {
  return (
    <div className="vision_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6} className="order-last order-lg-first">
            <h2 className="main_sec_heading">{visionData?.title}</h2>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{ __html: visionData?.description }}
            />
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  visionData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt="Property Management | Global Opportunities Real Estate"
                title="Global Opportunities Real Estate Banner | Real Estate Agency | Global Opportunities Real Estate"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vision;
