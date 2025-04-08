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
import Loader from "@/components/common/loader/Loader";
// api
import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { goPartnersData } from "@/lib/goPartnersData";

const PageContent = () => {
  const { partners_benefits, videos } = goPartnersData;

  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      setAuthToken(token);
    }
  }, []);

  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const { data } = await fatchPagesContent("go-partners");
      setPageData(data?.content);
    } catch (err) {
      console.log("Err: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner
            name={pageData?.banner?.title}
            indexpage="Home"
            indexvisit="/"
            activepage="GO Partners"
            bgImg={
              pageData?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/aboutbanner.webp" }
            }
          />

          {authToken ? (
            <>
              <CaseStudiesSlider />
              <VideosSlider videoData={videos} />
              <IndustryReportsSlider />
              <BlogSection />
            </>
          ) : (
            <>
              <Partners />
              <BecomePartner aboutData={pageData?.about} />
              <PartnersBenefits benefitsData={partners_benefits} />
            </>
          )}
          <FAQSection faqsData={pageData?.faqs} />
          {!authToken && <ContactSection />}
        </>
      )}
    </>
  );
};

export default PageContent;
