import { Container } from "react-bootstrap";
import "./styles.scss";

const HiddenContent = ({ hiddenData }) => {
  return (
    <div className="hidden_content_sec mt-60">
      <Container>
        <div
          className="content_wrap"
          dangerouslySetInnerHTML={{ __html: hiddenData?.description }}
        ></div>
      </Container>
    </div>
  );
};

export default HiddenContent;
