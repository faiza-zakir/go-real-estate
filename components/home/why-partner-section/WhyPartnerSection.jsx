import { useRouter } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";
// css
import "./styles.scss";

const cardVariant = {
  hidden: { scale: 0.8, opacity: 0 }, // Start smaller & invisible
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.2, type: "spring", stiffness: 200 },
  }),
};
const WhyPartnerSection = ({ whyPartnersData }) => {
  const router = useRouter();
  const handleFlyerDownload = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="why-partner-sec mt-60">
      <Container fluid>
        <Row className="gy-5">
          <Col lg={6}>
            <div className="content_part">
              <h2 className="main_sec_heading">{whyPartnersData?.title}</h2>
              <p className="para_comm">{whyPartnersData?.description}</p>
              <button
                className="theme_btn2 me-3"
                onClick={() => router.push("/go-partners")}
              >
                Learn More
              </button>
              <button
                className="theme_btn3"
                onClick={() =>
                  handleFlyerDownload(
                    "https://gorealestate.b-cdn.net/Gallery/1742802626-0-file-sample150kB.pdf"
                  )
                }
              >
                English Flyer
              </button>
            </div>
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={whyPartnersData?.featured_img}
                layout="fill"
                objectFit="cover"
                alt={whyPartnersData?.img_alt}
                title={whyPartnersData?.img_title}
              />
            </figure>
          </Col>
        </Row>
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {whyPartnersData?.processData?.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              custom={i} // Pass index for staggered effect
              className="process_item"
            >
              <div className="content_sec">
                <Image
                  src={item?.icon}
                  alt="icon"
                  className="icon"
                  width={80}
                  height={80}
                />
                <h4 className="slide_number">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </h4>
              </div>
              <h3 className="sub_heading">{item?.title}</h3>
            </motion.div>
          ))}
        </Marquee>
      </Container>
    </div>
  );
};

export default WhyPartnerSection;
