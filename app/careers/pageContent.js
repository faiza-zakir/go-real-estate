"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import CareersInfoSection from "@/components/careers/careers-info-section/CareersInfoSection";
import CareersFormSection from "@/components/careers/careers-form-section/CareersFormSection";
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
      const { data } = await fatchPagesContent("careers");
      setPageData(data?.content);
    } catch (err) {
      toast.error("Opps!, something went wrong, please try again later");
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
            activepage="Careers"
            bgImg={
              pageData?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/contactbanner.webp" }
            }
          />
          <CareersInfoSection
            introData={pageData?.people_careers}
            introImg={pageData?.intro_img}
          />
          <CareersFormSection />
          <FAQSection faqsData={pageData?.faqs} />
        </>
      )}
    </>
  );
};

export default PageContent;
