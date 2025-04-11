"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import AboutCommunity from "@/components/go-community/about-community/AboutCommunity";
import FAQSection from "@/components/home/faq-section/FAQSection";
import ContactSection from "@/components/home/contact-section/ContactSection";
import Loader from "@/components/common/loader/Loader";
// api
import { fatchPagesContent } from "@/app/apis/commonApi";

const PageContent = () => {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const { data } = await fatchPagesContent("go-community");
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
            activepage="GO Community"
            bgImg={
              pageData?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/aboutbanner.webp" }
            }
          />
          <AboutCommunity aboutData={pageData?.about} />
          <FAQSection faqsData={pageData?.faqs} />
          <ContactSection />
        </>
      )}
    </>
  );
};

export default PageContent;
