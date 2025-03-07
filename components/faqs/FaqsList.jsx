import { Accordion, Container } from "react-bootstrap";
// css
import "./style.scss";

const FaqsList = ({ faqsData, isLoading }) => {
  const answer = `<p>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. N</p>`;
  return (
    <div className="mt-60 faqs-area">
      <Container>
        <h2 className="main_sec_heading">Frequently Asked Questions</h2>
        {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : (
          <Accordion defaultActiveKey={1} flush>
            {/* {faqsData?.map((item, i) => ( */}
            {[1, 2, 3, 4, 5]?.map((item, i) => (
              <Accordion.Item eventKey={i + 1} key={item?.id}>
                <Accordion.Header>
                  {/* {item?.question} */}
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie?
                </Accordion.Header>
                <Accordion.Body>
                  <div
                    className="general-details"
                    // dangerouslySetInnerHTML={{ __html: item?.answer }}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </Container>
    </div>
  );
};

export default FaqsList;
