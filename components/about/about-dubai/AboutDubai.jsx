import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const AboutDubai = ({ aboutDubaiData }) => {
  const handleFlyerDownload = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="dubai_about_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <h2 className="main_sec_heading">{aboutDubaiData?.title}</h2>
            <div
              className="general-details mb-4"
              dangerouslySetInnerHTML={{ __html: aboutDubaiData?.description }}
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
                    aboutDubaiData?.english_flyer
                )
              }
            >
              View Flyer
            </button>
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  aboutDubaiData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt="Property Management, Global Opportunities Real Estate"
                title="Property Consultancy Firms | Property Management | Global Opportunities Real Estate"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutDubai;
