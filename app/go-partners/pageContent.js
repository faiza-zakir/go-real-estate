"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import BecomePartner from "@/components/go-partners/become-partner/BecomePartner";
import Partners from "@/components/about/partners/Partners";
import PartnersBenefits from "@/components/go-partners/partners-benefits/PartnersBenefits";
import ContactSection from "@/components/home/contact-section/ContactSection";
import CaseStudiesSlider from "@/components/go-partners/case-studies/CaseStudiesSlider";
import VideosSlider from "@/components/go-partners/videos-slider/VideosSlider";
import IndustryReportsSlider from "@/components/real-estate-investments-in-uae/industry-reports/IndustryReportsSlider";
import BlogSection from "@/components/go-partners/blog-section/BlogSection";
import FAQSection from "@/components/home/faq-section/FAQSection";

// api
// import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { goPartnersData } from "@/lib/goPartnersData";

const PageContent = () => {
  const {
    about,
    partners_benefits,
    case_studies,
    videos,
    industry_reports,
    blogs,
    faqs,
  } = goPartnersData;

  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      setAuthToken(token);
    }
  }, []);

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
      <Banner
        // name={pageData?.content?.banner?.title}
        name="GO Partners"
        indexpage="Home"
        indexvisit="/"
        activepage="GO Partners"
        // bgImg={
        //   pageData?.content?.banner?.background_image
        //     ? {
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
        //       }
        //     : {src:"/assets/banner/aboutbanner.webp"}
        // }
        bgImg={{ src: "/assets/banner/aboutbanner.webp" }}
      />

      {authToken ? (
        <>
          <CaseStudiesSlider caseStudiesData={case_studies} />
          <VideosSlider videoData={videos} />
          <IndustryReportsSlider />
          <BlogSection />
        </>
      ) : (
        <>
          <Partners />
          <BecomePartner aboutData={about} />
          <PartnersBenefits benefitsData={partners_benefits} />
        </>
      )}
      <FAQSection faqsData={faqs} />
      {!authToken && <ContactSection />}
    </>
  );
};

export default PageContent;
