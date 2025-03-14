import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Founder = ({ founderData }) => {
  return (
    <div className="founder_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <h2 className="main_sec_heading">{founderData?.title}</h2>
            <div
              className="general-details mb-4"
              dangerouslySetInnerHTML={{ __html: founderData?.description }}
            />
            <button className="theme_btn2 me-3">Learn More</button>
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                // src={
                //   process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                //   founderData?.featured_img2
                // }
                src={founderData?.featured_img}
                layout="fill"
                objectFit="cover"
                alt={founderData?.title}
                title={founderData?.title}
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Founder;
