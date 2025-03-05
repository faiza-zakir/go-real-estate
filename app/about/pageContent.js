"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import Intro from "@/components/about/Intro/Intro";
import CountsSection from "@/components/about/counts-section/CountsSection";
import ContactSection from "@/components/home/contact-section/ContactSection";
import WhyChooseSection from "@/components/home/why-choose-section/WhyChooseSection";
import Mission from "@/components/about/mission/Mission";
import Vision from "@/components/about/vision/Vision";
import Founder from "@/components/about/founder/Founder";
import TeamList from "@/components/about/team/TeamList";
import OurCredentials from "@/components/home/our-credentials/OurCredentials";
import FAQSection from "@/components/home/faq-section/FAQSection";
// api
import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { homeData } from "@/lib/homeData";

const PageContent = () => {
  const { whyChoose } = homeData;
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("about");
      setPageData(resp?.data);
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
      <Banner
        name={pageData?.content?.banner?.title}
        indexpage="Home"
        indexvisit="/"
        activepage="About Us"
        bgImg={
          pageData?.content?.banner?.background_image
            ? {
                src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
              }
            : "/assets/banner/aboutbanner.webp"
        }
      />
      <Intro introData={pageData?.content?.intro} />
      <CountsSection countsData={pageData?.content?.counts} />
      <WhyChooseSection whyChooseData={whyChoose} />
      <Mission missionData={pageData?.content?.mission} />
      <Vision visionData={pageData?.content?.vision} />
      <Founder founderData={pageData?.content?.founder} />
      <TeamList teamData={pageData?.content?.team} />
      <OurCredentials />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default PageContent;
