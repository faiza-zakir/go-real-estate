"use client";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "@/components/common/common-banner/CommonBanner";
import Loader from "@/components/common/loader/Loader";

function PageContent() {
  return (
    <>
      <Banner
        name="Account"
        indexpage="Home"
        indexvisit="/"
        activepage="Account"
        bgImg={{ src: "/assets/banner/aboutbanner.webp" }}
      />
      <section className="ptb-60">
        <Container>
          <Row>
            <Col sm={4}>Update Profile</Col>
            <Col sm={4}>Change Password</Col>
            <Col sm={4}>Logout</Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PageContent;
