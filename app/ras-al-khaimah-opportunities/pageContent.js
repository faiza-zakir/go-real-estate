"use client";
// import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import AboutOpportunity from "@/components/opportunities/about-opportunity/AboutOpportunity";
import WhyInvestSlider from "@/components/opportunities/why-invest-slider/WhyInvestSlider";
import DevelopmentTrends from "@/components/opportunities/development-trends/DevelopmentTrends";
import FAQSection from "@/components/home/faq-section/FAQSection";
import HiddenContent from "@/components/common/hidden-content/HiddenContent";
// api
// import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { rakOpportunitiesData } from "@/lib/rakOpportunitiesData";

const PageContent = () => {
  const { about, why_invest, development_trends, faqs } = rakOpportunitiesData;

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
        name="Ras Al Khaimah Opportunities"
        indexpage="Home"
        indexvisit="/"
        activepage="Ras Al Khaimah Opportunities"
        // bgImg={
        //   pageData?.content?.banner?.background_image
        //     ? {
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
        //       }
        //     : {src:"/assets/banner/aboutbanner.webp"}
        // }
        bgImg={{ src: "/assets/banner/aboutbanner.webp" }}
      />
      <AboutOpportunity aboutData={about} />
      <WhyInvestSlider
        whyInvestData={why_invest}
        title="Why Invest in Ras Al Khaimah Real Estate?"
      />
      <DevelopmentTrends
        devTrendsData={development_trends}
        title="Ras Al Khaimah Development Trends"
      />
      <FAQSection faqsData={faqs} />
      <HiddenContent />
    </>
  );
};

export default PageContent;
