import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const DubaiFuture = ({ dubaiFutureData }) => {
  return (
    <div className="dubai_future_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <figure>
              <Image
                // src={
                //   process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                //   dubaiFutureData?.featured_img
                // }
                src={dubaiFutureData?.featured_img}
                layout="fill"
                objectFit="cover"
                alt="Property Management, Global Opportunities Real Estate"
                title="Property Consultancy Firms | Property Management | Global Opportunities Real Estate"
              />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="main_sec_heading">{dubaiFutureData?.title}</h2>
            <div
              className="general-details mb-4"
              dangerouslySetInnerHTML={{ __html: dubaiFutureData?.description }}
            />
            <button
              className="theme_btn2 me-3"
              onClick={() => router.push("/about")}
            >
              Arabic Flyer
            </button>
            <button
              className="theme_btn3"
              onClick={() => router.push("/about")}
            >
              English Flyer
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DubaiFuture;
