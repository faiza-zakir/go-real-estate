import Image from "next/image";
import { Row, Col, Container, Accordion } from "react-bootstrap";
// css
import "./styles.scss";

const CareersInfoSection = ({ infoData }) => {
  const careersInfoData = [
    {
      id: 1,
      title: "Conduct Thorough Due Diligence",
      description: `<p>Before pursuing <strong>real estate careers in Dubai</strong>, it is crucial to research market trends, legal requirements, and property valuations to make informed decisions. Understanding the evolving landscape of <strong>real estate employment opportunities</strong> ensures long-term success in the industry.</p>`,
    },
    {
      id: 2,
      title: "Understand the Financing Options",
      description: `<p>Navigating financing options is essential for those seeking <strong>real estate jobs in the UAE</strong>, as investment strategies and mortgage terms vary. Whether working as a property consultant or in a <strong>real estate sales career</strong>, knowledge of financial planning is key to securing profitable deals.</p>`,
    },
    {
      id: 3,
      title: "Hire Legal Expertise",
      description: `<p>Professionals in <strong>property consultant jobs</strong> must work closely with legal advisors to ensure compliance with UAE property laws and regulations. Partnering with experts can safeguard investments and enhance credibility in <strong>real estate employment opportunities.</strong></p>`,
    },
    {
      id: 4,
      title: "Invest with a Long-Term Perspective",
      description: `<p>A successful career in <strong>real estate career opportunities</strong> requires a forward-thinking approach, focusing on sustainable investments and steady market growth. Whether considering <strong>real estate agent positions</strong> or <strong>careers in property management</strong>, long-term vision is vital for stability and profitability.</p>`,
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
            <h2 className="main_sec_heading">People & Careers</h2>
            <Accordion defaultActiveKey={1} flush>
              {careersInfoData?.map((item, i) => (
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
