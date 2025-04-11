import { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import ContactUsModal from "../contact-us-modal/ContactUsModal";
// css
import "./styles.scss";

const PropertiesDetails = ({ show, handleClose, projectDetails }) => {
  const [contactModal, setContactModal] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        centered
        className="property-details-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <h2 className="main_sec_heading">{projectDetails?.title}</h2>
            <div
              className="general-details mb-4"
              dangerouslySetInnerHTML={{ __html: projectDetails?.description }}
            />
            <button
              className="theme_btn2"
              onClick={() => {
                setContactModal(true);
                setProjectName(projectDetails?.title);
                setProjectId(projectDetails?.id);
                // handleClose();
              }}
            >
              Contact Us
            </button>
          </Container>
        </Modal.Body>
      </Modal>
      {contactModal && (
        <ContactUsModal
          show={contactModal}
          handleClose={() => setContactModal(false)}
          projectId={projectId}
          projectName={projectName}
        />
      )}
    </>
  );
};

export default PropertiesDetails;
