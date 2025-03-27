import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Philosophy = ({ philosophyData }) => {
  return (
    <div className="philosophy_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  philosophyData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt="Property Management, Global Opportunities Real Estate"
                title="Global Opportunities Real Estate Mission | Best Real Estate Company | Global Opportunities Real Estate"
              />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="main_sec_heading">{philosophyData?.title}</h2>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{ __html: philosophyData?.description }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Philosophy;
