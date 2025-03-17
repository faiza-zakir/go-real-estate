"use client";
// import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import AboutCommunity from "@/components/go-community/about-community/AboutCommunity";
import FAQSection from "@/components/home/faq-section/FAQSection";
import ContactSection from "@/components/home/contact-section/ContactSection";
// api
// import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { goCommunityData } from "@/lib/goCommunityData";

const PageContent = () => {
  const { about, faqs } = goCommunityData;

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
        name="GO Community"
        indexpage="Home"
        indexvisit="/"
        activepage="GO Community"
        // bgImg={
        //   pageData?.content?.banner?.background_image
        //     ? {
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
        //       }
        //     : {src:"/assets/banner/aboutbanner.webp"}
        // }
        bgImg={{ src: "/assets/banner/aboutbanner.webp" }}
      />
      <AboutCommunity aboutData={about} />
      <FAQSection faqsData={faqs} />
      <ContactSection />
    </>
  );
};

export default PageContent;
