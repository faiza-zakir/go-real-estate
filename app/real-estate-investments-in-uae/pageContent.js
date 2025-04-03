"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import AboutInvestment from "@/components/real-estate-investments-in-uae/about-investment/AboutInvestment";
import InvestProjectsSlider from "@/components/real-estate-investments-in-uae/invest-projects-slider/InvestProjectsSlider";
import WhyChooseSection from "@/components/home/why-choose-section/WhyChooseSection";
import ServicesSlider from "@/components/real-estate-investments-in-uae/services-slider/ServicesSlider";
import InvestmentInsightsSection from "@/components/real-estate-investments-in-uae/investment-insights-section/InvestmentInsightsSection";
import IndustryReportsSlider from "@/components/real-estate-investments-in-uae/industry-reports/IndustryReportsSlider";
import FAQSection from "@/components/home/faq-section/FAQSection";
import Loader from "@/components/common/loader/Loader";
// api
import {
  fatchPagesContent,
  fatchProjects,
  fatchPropertyType,
} from "@/app/apis/commonApi";
// data
import { uaeInvestmentData } from "@/lib/uaeInvestmentData";

const PageContent = () => {
  const { why_choose, investment_insights } = uaeInvestmentData;
  const [projects, setProjects] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState({});
  const [isPageLoading, setIsPageLoading] = useState(false);

  const getPageData = async () => {
    try {
      setIsPageLoading(true);
      const { data } = await fatchPagesContent(
        "real-estate-investments-in-uae"
      );
      setPageData(data?.content);
    } catch (err) {
      console.log("Err: ", err);
    } finally {
      setIsPageLoading(false);
    }
  };

  useEffect(() => {
    const fetchPropertyTypesListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchPropertyType();
        setPropertyTypes(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    fetchPropertyTypesListData();
  }, []);

  useEffect(() => {
    const fetchProjectListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    getPageData();
    fetchProjectListData();
  }, []);

  return (
    <>
      {isPageLoading ? (
        <Loader />
      ) : (
        <>
          <Banner
            name={pageData?.banner?.title}
            indexpage="Home"
            indexvisit="/"
            activepage="Real Estate Investments in UAE"
            bgImg={
              pageData?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/aboutbanner.webp" }
            }
          />
          <AboutInvestment aboutData={pageData?.intro} />
          <InvestProjectsSlider
            projectsData={projects}
            propertyTypesData={propertyTypes}
            isLoading={isLoading}
          />
          <WhyChooseSection whyChooseData={why_choose} />
          <ServicesSlider servicesData={pageData?.services} />
          <InvestmentInsightsSection
            investmentInsightsData={pageData?.investment_insights}
            insightsData={investment_insights?.processData}
          />
          <IndustryReportsSlider />
          <FAQSection faqsData={pageData?.faqs} />
        </>
      )}
    </>
  );
};

export default PageContent;
