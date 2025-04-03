"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import AboutUae from "@/components/about/about-uae/AboutUae";
import AboutDubai from "@/components/about/about-dubai/AboutDubai";
import DubaiFuture from "@/components/about/dubai-future/DubaiFuture";
import WhyChooseSection from "@/components/home/why-choose-section/WhyChooseSection";
import Mission from "@/components/about/mission/Mission";
import Vision from "@/components/about/vision/Vision";
import Philosophy from "@/components/about/philosophy/Philosophy";
import Partners from "@/components/about/partners/Partners";
import Testimonials from "@/components/about/testimonials/Testimonials";
import FAQSection from "@/components/home/faq-section/FAQSection";
import Loader from "@/components/common/loader/Loader";
// api
import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { aboutData } from "@/lib/aboutData";

const PageContent = () => {
  const { why_choose } = aboutData;
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const { data } = await fatchPagesContent("about-us");
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
            activepage="About Us"
            bgImg={
              pageData?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/aboutbanner.webp" }
            }
          />
          <AboutUae aboutUaeData={pageData?.about_uae} />
          <AboutDubai aboutDubaiData={pageData?.about_dubai} />
          <DubaiFuture dubaiFutureData={pageData?.dubai_future} />
          <WhyChooseSection whyChooseData={why_choose} />
          <Mission missionData={pageData?.mission} />
          <Vision visionData={pageData?.vision} />
          <Philosophy philosophyData={pageData?.philosophy} />
          <Partners />
          <Testimonials />
          <FAQSection faqsData={pageData?.faqs} />
        </>
      )}
    </>
  );
};

export default PageContent;
