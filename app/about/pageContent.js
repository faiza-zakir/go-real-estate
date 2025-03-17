"use client";
// import { useState, useEffect } from "react";
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
// api
// import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { aboutData } from "@/lib/aboutData";

const PageContent = () => {
  const {
    about_uae,
    about_dubai,
    dubai_future,
    why_choose,
    mission,
    vision,
    philosophy,
    partners,
    testimonials,
    faqs,
  } = aboutData;
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
        name="About Us"
        indexpage="Home"
        indexvisit="/"
        activepage="About Us"
        // bgImg={
        //   pageData?.content?.banner?.background_image
        //     ? {
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
        //       }
        //     : {src:"/assets/banner/aboutbanner.webp"}
        // }
        bgImg={{ src: "/assets/banner/aboutbanner.webp" }}
      />
      <AboutUae
        // aboutUaeData={pageData?.content?.about_uae}
        aboutUaeData={about_uae}
      />
      <AboutDubai
        // aboutDubaiData={pageData?.content?.about_dubai}
        aboutDubaiData={about_dubai}
      />
      <DubaiFuture
        // aboutDubaiData={pageData?.content?.about_dubai}
        dubaiFutureData={dubai_future}
      />
      <WhyChooseSection whyChooseData={why_choose} />
      <Mission
        // missionData={pageData?.content?.mission}
        missionData={mission}
      />
      <Vision
        // visionData={pageData?.content?.vision}
        visionData={vision}
      />
      <Philosophy
        // philosophyData={pageData?.content?.philosophy}
        philosophyData={philosophy}
      />
      <Partners partnersData={partners} />
      <Testimonials testimonialsData={testimonials} />
      <FAQSection faqsData={faqs} />
    </>
  );
};

export default PageContent;
