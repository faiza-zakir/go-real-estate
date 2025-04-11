import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const AboutOpportunity = ({ aboutData }) => {
  const handleFlyerDownload = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="about_opportunity_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
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
          <Col lg={6}>
            <h2 className="main_sec_heading">{aboutData?.title}</h2>
            <div
              className="general-details mb-4"
              dangerouslySetInnerHTML={{ __html: aboutData?.description }}
            />
            {/* <button
              className="theme_btn2 me-3"
              onClick={() =>
                handleFlyerDownload(
                  "https://gorealestate.b-cdn.net/Gallery/1742802626-0-file-sample150kB.pdf"
                )
              }
            >
              Arabic Flyer
            </button> */}
            <button
              className="theme_btn2"
              onClick={() =>
                handleFlyerDownload(
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                    aboutData?.english_flyer
                )
              }
            >
              View Flyer
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutOpportunity;
