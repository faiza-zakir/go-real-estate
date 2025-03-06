import { useRouter } from "next/navigation";
import { Accordion, Container } from "react-bootstrap";
// css
import "./style.scss";

const faqsData = [
  {
    id: 1,
    question: "What is Broker?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
  },
  {
    id: 2,
    question: "Can i pay my own taxes and insurance?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
  },
  {
    id: 3,
    question: "Can a home depreciate in value?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
  },
  {
    id: 4,
    question: "Is an old home as good a value as a new home?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
  },
];

const FAQSection = () => {
  const router = useRouter();
  return (
    <div className="mt-60 faqs-area">
      <Container>
        <div className="header_wrap">
          <div>
            <span className="tag_line">Help</span>
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
            <Accordion.Item eventKey={i + 1} key={item?.id}>
              <Accordion.Header>{item?.question}</Accordion.Header>
              <Accordion.Body>
                <div>{item?.answer}</div>
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
