"use client";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import BannerVideo from "@/components/home/banner-section/banner-video/BannerVideo";
import BannerForm from "@/components/home/banner-section/banner-form/BannerForm";
import ContactSection from "@/components/home/contact-section/ContactSection";
import FAQSection from "@/components/home/faq-section/FAQSection";
// api
// import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { educationalPortalData } from "@/lib/educationalPortalData";

const PageContent = () => {
  const { bannerData } = educationalPortalData;

  const [showForm, setShowForm] = useState(false);
  // const [pageData, setPageData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const getPageData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const resp = await fatchPagesContent("about");
  //     setPageData(resp?.data);
  //   } catch (err) {
  //     console.log("Err: ", err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getPageData();
  // }, []);

  return (
    <>
      <BannerVideo
        showForm={showForm}
        setShowForm={setShowForm}
        // content={pageData?.content?.banner}
        content={bannerData}
        btnText="Schedule A Consultation"
      />
      <section className="form_mobile_view mt-60">
        <Container>{showForm && <BannerForm />}</Container>
      </section>
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default PageContent;
