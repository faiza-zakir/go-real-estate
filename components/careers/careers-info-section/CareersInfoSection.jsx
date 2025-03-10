import Image from "next/image";
import { Row, Col, Container, Accordion } from "react-bootstrap";
// css
import "./styles.scss";

const CareersInfoSection = ({ infoData }) => {
  const careersInfoData = [
    {
      id: 1,
      question: "Conduct Thorough Due Diligence",
      answer: `Ensure you perform comprehensive research on the land’s history, current status, and any potential future changes. This will help you avoid surprises and make a well-informed decision.`,
    },
    {
      id: 2,
      question: "Understand the Financing Options",
      answer: `Ensure you perform comprehensive research on the land’s history, current status, and any potential future changes. This will help you avoid surprises and make a well-informed decision.`,
    },
    {
      id: 3,
      question: "Hire Legal Expertise",
      answer: `Ensure you perform comprehensive research on the land’s history, current status, and any potential future changes. This will help you avoid surprises and make a well-informed decision.`,
    },
    {
      id: 4,
      question: "Invest with a Long-Term Perspective",
      answer: `Ensure you perform comprehensive research on the land’s history, current status, and any potential future changes. This will help you avoid surprises and make a well-informed decision.`,
    },
  ];
  return (
    <div className="careers-info-area mt-60">
      <Container>
        <Row className="gx-lg-5 gy-5 gy-lg-0 align-items-center">
          <Col lg={6} className="order-last order-lg-first">
            <figure>
              <Image
                src="/assets/careers/careersInfo.webp"
                layout="fill"
                objectFit="cover"
                alt="Real Estate Office Careers India | Global Opportunities Real Estate"
                title="Careers | Careers Real Estate Agents India | Global Opportunities Real Estate"
              />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="main_sec_heading">Peoples & Careers</h2>
            <Accordion defaultActiveKey={1} flush>
              {careersInfoData?.map((item, i) => (
                <Accordion.Item eventKey={i + 1} key={item?.id}>
                  <Accordion.Header>{item?.question}</Accordion.Header>
                  <Accordion.Body>
                    <div>{item?.answer}</div>
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
