import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const AboutDubaiSection = ({ aboutDubaiData }) => {
  const handleFlyerDownload = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="about_dubai_sec mt-60">
      <Container>
        <Row className="gy-5">
          <Col sm={12}>
            <div className="img_wrap">
              <figure>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                    aboutDubaiData?.featured_img
                  }
                  layout="fill"
                  objectFit="cover"
                  alt={aboutDubaiData?.title}
                  title={aboutDubaiData?.title}
                />
              </figure>
            </div>
          </Col>
          <Col sm={12} className="text-center">
            <h2 className="main_sec_heading">{aboutDubaiData?.title}</h2>
            <div
              className="general-details mb-2"
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
                  "https://gorealestate.b-cdn.net/Gallery/1742802626-0-file-sample150kB.pdf"
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

export default AboutDubaiSection;
