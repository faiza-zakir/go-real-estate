"use client";
import Banner from "@/components/common/common-banner/CommonBanner";
import CareersInfoSection from "@/components/careers/careers-info-section/CareersInfoSection";
import CareersFormSection from "@/components/careers/careers-form-section/CareersFormSection";
import FAQSection from "@/components/home/faq-section/FAQSection";
import HiddenContent from "@/components/common/hidden-content/HiddenContent";
// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";
// import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { careerData } from "@/lib/careerData";

const PageContent = () => {
  const { faqs, hidden_content } = careerData;
  // const [pageData, setPageData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const getPageData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const resp = await fatchPagesContent("careers");
  //     setPageData(resp?.data);
  //   } catch (err) {
  //     toast.error("Opps!, something went wrong, please try again later");
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
        name="Careers"
        indexpage="Home"
        indexvisit="/"
        activepage="Careers"
        // bgImg={
        //   pageData?.content?.banner?.background_image
        //     ? {
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
        //       }
        //     : { src: "/assets/banner/contactbanner.webp" }
        // }
        bgImg={{ src: "/assets/banner/contactbanner.webp" }}
      />
      <CareersInfoSection
      // infoData={pageData?.content?.info}
      />
      <CareersFormSection />
      <FAQSection faqsData={faqs} />
      <HiddenContent hiddenData={hidden_content} />
    </>
  );
};

export default PageContent;
