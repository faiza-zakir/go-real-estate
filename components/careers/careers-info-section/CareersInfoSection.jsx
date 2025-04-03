import Image from "next/image";
import { Row, Col, Container, Accordion } from "react-bootstrap";
// css
import "./styles.scss";

const CareersInfoSection = ({ introData, introImg }) => {
  return (
    <div className="careers-info-area mt-60">
      <Container>
        <Row className="gx-lg-5 gy-5 gy-lg-0 align-items-center">
          <Col lg={6} className="order-last order-lg-first">
            <figure>
              <Image
                src={
                  introImg?.featured_img
                    ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                      introImg?.featured_img
                    : "/assets/careers/careersInfo.webp"
                }
                layout="fill"
                objectFit="cover"
                alt="Real Estate Office Careers India | Global Opportunities Real Estate"
                title="Careers | Careers Real Estate Agents India | Global Opportunities Real Estate"
              />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="main_sec_heading">People & Careers</h2>
            <Accordion defaultActiveKey={1} flush>
              {introData?.map((item, i) => (
                <Accordion.Item eventKey={i + 1} key={item?.id}>
                  <Accordion.Header>{item?.title}</Accordion.Header>
                  <Accordion.Body>
                    <div
                      className="general-details"
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CareersInfoSection;
