import Image from "next/image";
import { useRouter } from "next/navigation";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const AboutDubaiSection = ({ aboutData }) => {
  const router = useRouter();

  return (
    <div className="about_dubai_sec mt-60">
      <Container>
        <Row className="gy-5">
          <Col sm={12}>
            <div className="img_wrap">
              <figure>
                <Image
                  src={aboutData?.featured_img}
                  layout="fill"
                  objectFit="cover"
                  alt={aboutData?.img_alt}
                  title={aboutData?.img_title}
                />
              </figure>
            </div>
          </Col>
          <Col sm={12} className="text-center">
            <h2 className="main_sec_heading">{aboutData?.title}</h2>
            <p
              className="para_comm"
              dangerouslySetInnerHTML={{ __html: aboutData?.description }}
            ></p>
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

export default AboutDubaiSection;
