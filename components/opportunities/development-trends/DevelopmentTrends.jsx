import Image from "next/image";
import { Row, Col, Container, Accordion } from "react-bootstrap";
// css
import "./styles.scss";

const DevelopmentTrends = ({ title, devTrendsData, trendsImg }) => {
  return (
    <div className="development_trends_sec mt-60">
      <Container>
        <Row className="gx-lg-5 gy-5 gy-lg-0 align-items-center">
          <Col lg={6} className="order-last order-lg-first">
            <h2 className="main_sec_heading">{title}</h2>
            <Accordion defaultActiveKey={1} flush>
              {devTrendsData?.map((item, i) => (
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
          <Col lg={6}>
            <figure>
              <Image
                src={
                  trendsImg?.featured_img
                    ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                      trendsImg?.featured_img
                    : "/assets/investment/opportunities/devTrends.png"
                }
                layout="fill"
                objectFit="cover"
                alt="Real Estate Office  India | Global Opportunities Real Estate"
                title="Opportunities | Real Estate Agents India | Global Opportunities Real Estate"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DevelopmentTrends;
