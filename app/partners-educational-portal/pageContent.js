"use client";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import BannerVideo from "@/components/home/banner-section/banner-video/BannerVideo";
import BannerForm from "@/components/home/banner-section/banner-form/BannerForm";
import AboutPortal from "@/components/partners-educational-portal/about-portal/AboutPortal";
import Founder from "@/components/partners-educational-portal/founder/Founder";
import PortalVideos from "@/components/partners-educational-portal/portal-videos/PortalVideos";
import EducationalWebinar from "@/components/partners-educational-portal/educational-webinar/EducationalWebinar";
import IndustryReportsSlider from "@/components/real-estate-investments-in-uae/industry-reports/IndustryReportsSlider";
import CaseStudiesSlider from "@/components/go-partners/case-studies/CaseStudiesSlider";
import WhyInvestSlider from "@/components/opportunities/why-invest-slider/WhyInvestSlider";
import FAQSection from "@/components/home/faq-section/FAQSection";
import ContactSection from "@/components/home/contact-section/ContactSection";
// api
// import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { educationalPortalData } from "@/lib/educationalPortalData";

const PageContent = () => {
  const {
    bannerData,
    about,
    founder,
    videos,
    educational_webinar,
    industry_reports,
    case_studies,
    why_invest,
    faqs,
  } = educationalPortalData;

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
      <AboutPortal aboutData={about} />
      <Founder founderData={founder} />
      <PortalVideos videoData={videos} />
      <EducationalWebinar educationalWebinarData={educational_webinar} />
      <IndustryReportsSlider industryReportsData={industry_reports} />
      <CaseStudiesSlider caseStudiesData={case_studies} />
      <WhyInvestSlider
        whyInvestData={why_invest}
        title="Why Invest In Dubai Real Estate"
      />
      <FAQSection faqsData={faqs} />
      <ContactSection />
    </>
  );
};

export default PageContent;
