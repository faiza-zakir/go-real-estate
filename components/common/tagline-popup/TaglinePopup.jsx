import { useRouter } from "next/navigation";
import { Container, Modal } from "react-bootstrap";
// css
import "./styles.scss";

const TaglinePopup = ({ show, handleClose }) => {
  const router = useRouter();
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        centered
        className="tagline-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="main_sec_heading">
                GO Community – Where Visionaries Grow
              </h2>
              <p className="para_comm">
                Step into a thriving network of real estate <b>professionals</b>
                , <b>exclusive events</b>, and <b>investment opportunities</b>.
              </p>
              <button
                className="theme_btn2"
                onClick={() => router.push("/go-community")}
              >
                Explore the GO Community
              </button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaglinePopup;
