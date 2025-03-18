import Image from "next/image";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import { FaPlay } from "react-icons/fa";
// css
import "./styles.scss";

const Founder = ({ founderData }) => {
  const [isOpen, setOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");

  const downloadFile = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <button
              className="theme_btn2"
              onClick={() =>
                downloadFile(
                  "https://gogrouprealestate.com/webinars/wp-content/uploads/2024/05/GO-Group-Management.pdf"
                )
              }
            >
              Learn More
            </button>
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
              <div
                className="icon_wrape"
                onClick={() => {
                  setVideoLink(founderData?.video_url);
                  setOpen(true);
                }}
              >
                <FaPlay fontSize={20} className="icon_style" />
              </div>
            </figure>
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

export default Founder;
