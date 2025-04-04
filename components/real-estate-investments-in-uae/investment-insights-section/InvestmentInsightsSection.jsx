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
const InvestmentInsightsSection = ({
  investmentInsightsData,
  insightsData,
}) => {
  const router = useRouter();
  return (
    <div className="investment-insights-sec mt-60">
      <Container fluid>
        <Row className="gy-5">
          <Col lg={6}>
            <div className="content_part">
              <h2 className="main_sec_heading">
                {investmentInsightsData?.title}
              </h2>
              <div
                className="general-details mb-4"
                dangerouslySetInnerHTML={{
                  __html: investmentInsightsData?.description,
                }}
              />
              <button
                className="theme_btn2"
                onClick={() => router.push("/dubai-opportunities")}
              >
                Learn More
              </button>
            </div>
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  investmentInsightsData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt={investmentInsightsData?.img_alt}
                title={investmentInsightsData?.img_title}
              />
            </figure>
          </Col>
        </Row>
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {insightsData?.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              custom={i} // Pass index for staggered effect
              className="process_item"
            >
              <div className="content_sec">
                <h2 className="main_sec_heading">{item?.value}</h2>
                <h3 className="sub_heading">{item?.title}</h3>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </Container>
    </div>
  );
};

export default InvestmentInsightsSection;
