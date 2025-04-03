"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import AboutOpportunity from "@/components/opportunities/about-opportunity/AboutOpportunity";
import WhyInvestSlider from "@/components/opportunities/why-invest-slider/WhyInvestSlider";
import DevelopmentTrends from "@/components/opportunities/development-trends/DevelopmentTrends";
import FAQSection from "@/components/home/faq-section/FAQSection";
import Loader from "@/components/common/loader/Loader";
// api
import { fatchPagesContent } from "@/app/apis/commonApi";

const PageContent = () => {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const { data } = await fatchPagesContent("abu-dhabi-opportunities");
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
            activepage="Abu Dhabi Opportunities"
            bgImg={
              pageData?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/aboutbanner.webp" }
            }
          />
          <AboutOpportunity aboutData={pageData?.intro} />
          <WhyInvestSlider
            whyInvestData={pageData?.why_invest}
            title="Why Invest In Abu Dhabi Real Estate?"
          />
          <DevelopmentTrends
            devTrendsData={pageData?.trends}
            trendsImg={pageData?.trend_img}
            title="Abu Dhabi Development Trends"
          />
          <FAQSection faqsData={pageData?.faqs} />
        </>
      )}
    </>
  );
};

export default PageContent;
