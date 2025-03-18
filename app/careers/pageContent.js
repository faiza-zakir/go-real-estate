"use client";
import Banner from "@/components/common/common-banner/CommonBanner";
import CareersInfoSection from "@/components/careers/careers-info-section/CareersInfoSection";
import CareersFormSection from "@/components/careers/careers-form-section/CareersFormSection";
import FAQSection from "@/components/home/faq-section/FAQSection";
// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";
// import { fatchPagesContent } from "@/app/apis/commonApi";

const faqs = [
  {
    id: 1,
    question: "What are the best real estate jobs in the UAE for beginners?",
    answer: `<p>Entry-level roles such as <strong>real estate agent positions</strong> or assistant property consultants provide excellent opportunities for newcomers to gain experience in the industry.</p>`,
  },
  {
    id: 2,
    question: "How can I find real estate job vacancies in Dubai?",
    answer: `<p>Many leading firms post <strong>real estate job openings in Dubai</strong> on online job portals, company websites, and networking platforms, making it easy to explore available opportunities.</p>`,
  },
  {
    id: 3,
    question:
      "What skills are required for a successful career in real estate employment in Dubai?",
    answer: `<p>Strong negotiation skills, market knowledge, and excellent communication abilities are essential for thriving in <strong>real estate career paths</strong> and securing high-value deals.</p>`,
  },
  {
    id: 4,
    question:
      "Are there opportunities for career growth in real estate career opportunities?",
    answer: `<p>Yes, professionals can advance from junior <strong>real estate agent positions</strong> to senior management roles, such as investment advisors or directors, by gaining experience and building a strong network.</p>`,
  },
];

const PageContent = () => {
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
    </>
  );
};

export default PageContent;
