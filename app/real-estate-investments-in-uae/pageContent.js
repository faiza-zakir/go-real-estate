"use client";
// import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import AboutInvestment from "@/components/real-estate-investments-in-uae/about-investment/AboutInvestment";
import InvestProjectsSlider from "@/components/real-estate-investments-in-uae/invest-projects-slider/InvestProjectsSlider";
import WhyChooseSection from "@/components/home/why-choose-section/WhyChooseSection";
import ServicesSlider from "@/components/real-estate-investments-in-uae/services-slider/ServicesSlider";
import InvestmentInsightsSection from "@/components/real-estate-investments-in-uae/investment-insights-section/InvestmentInsightsSection";
import IndustryReportsSlider from "@/components/real-estate-investments-in-uae/industry-reports/IndustryReportsSlider";
import FAQSection from "@/components/home/faq-section/FAQSection";
// api
// import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { uaeInvestmentData } from "@/lib/uaeInvestmentData";

const PageContent = () => {
  const {
    about,
    projects,
    why_choose,
    services,
    investment_insights,
    industry_reports,
    faqs,
  } = uaeInvestmentData;

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
        name="Real Estate Investments in UAE"
        indexpage="Home"
        indexvisit="/"
        activepage="Real Estate Investments in UAE"
        // bgImg={
        //   pageData?.content?.banner?.background_image
        //     ? {
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
        //       }
        //     : {src:"/assets/banner/aboutbanner.webp"}
        // }
        bgImg={{ src: "/assets/banner/aboutbanner.webp" }}
      />
      <AboutInvestment aboutData={about} />
      <InvestProjectsSlider projectsData={projects} />
      <WhyChooseSection whyChooseData={why_choose} />
      <ServicesSlider servicesData={services} />
      <InvestmentInsightsSection investmentInsightsData={investment_insights} />
      <IndustryReportsSlider industryReportsData={industry_reports} />
      <FAQSection faqsData={faqs} />
    </>
  );
};

export default PageContent;
