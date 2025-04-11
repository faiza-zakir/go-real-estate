import { useState } from "react";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import { FaPlay } from "react-icons/fa";
// css
import "./styles.scss";

const AboutCommunity = ({ aboutData }) => {
  const [isOpen, setOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  return (
    <div className="about_community_sec mt-60">
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
              <div
                className="icon_wrape"
                onClick={() => {
                  setVideoLink(aboutData?.video_url);
                  setOpen(true);
                }}
              >
                <FaPlay fontSize={20} className="icon_style" />
              </div>
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="main_sec_heading">{aboutData?.title}</h2>
            <div
              className="general-details mb-4"
              dangerouslySetInnerHTML={{ __html: aboutData?.description }}
            />
            <button className="theme_btn2 me-3">Learn More</button>
          </Col>
        </Row>
        <ModalVideo
          channel={"youtube"}
          isOpen={isOpen}
          videoId={videoLink?.split("/")?.[3]}
          allowFullScreen={true}
          ratio="16:9"
          onClose={() => setOpen(false)}
        />
      </Container>
    </div>
  );
};

export default AboutCommunity;
