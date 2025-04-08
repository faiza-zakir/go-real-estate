import { useRouter } from "next/navigation";
import { Accordion, Container } from "react-bootstrap";
// css
import "./style.scss";

const FAQSection = ({ faqsData }) => {
  const router = useRouter();
  return (
    <div className="mt-60 faqs-area">
      <Container>
        <div className="header_wrap">
          <div>
            <h2 className="main_sec_heading">FAQs</h2>
          </div>
          <div className="desktop_view">
            <button className="theme_btn2" onClick={() => router.push("/faqs")}>
              See More
            </button>
          </div>
        </div>
        <Accordion defaultActiveKey={1} flush>
          {faqsData?.map((item, i) => (
            <Accordion.Item eventKey={i + 1} key={i}>
              <Accordion.Header>{item?.question}</Accordion.Header>
              <Accordion.Body>
                <div
                  className="general-details"
                  dangerouslySetInnerHTML={{ __html: item?.answer }}
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <div className="mobile_view">
          <button className="theme_btn2" onClick={() => router.push("/faqs")}>
            See More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;
