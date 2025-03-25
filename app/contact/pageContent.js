"use client";
import Banner from "@/components/common/common-banner/CommonBanner";
import ContactInfoSection from "@/components/contact/contact-info-section/ContactInfoSection";
import ContactFormSection from "@/components/contact/contact-form-section/ContactFormSection";
import FAQSection from "@/components/home/faq-section/FAQSection";
import HiddenContent from "@/components/common/hidden-content/HiddenContent";
// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";
// import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { contactData } from "@/lib/contactData";

const PageContent = () => {
  const { faqs, hidden_content } = contactData;
  // const [pageData, setPageData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const getPageData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const resp = await fatchPagesContent("contact");
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
        name="Contact Us"
        indexpage="Home"
        indexvisit="/"
        activepage="Contact Us"
        // bgImg={
        //   pageData?.content?.banner?.background_image
        //     ? {
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
        //       }
        //     : { src: "/assets/banner/contactbanner.webp" }
        // }
        bgImg={{ src: "/assets/banner/contactbanner.webp" }}
      />
      <ContactInfoSection
      // infoData={pageData?.content?.info}
      />
      <ContactFormSection />
      <FAQSection faqsData={faqs} />
      <HiddenContent hiddenData={hidden_content} />
    </>
  );
};

export default PageContent;
