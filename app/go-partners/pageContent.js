"use client";
// import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import BecomePartner from "@/components/go-partners/become-partner/BecomePartner";
import Partners from "@/components/about/partners/Partners";
import PartnersBenefits from "@/components/go-partners/partners-benefits/PartnersBenefits";
import ContactSection from "@/components/home/contact-section/ContactSection";
import BlogSection from "@/components/go-partners/blog-section/BlogSection";
import FAQSection from "@/components/home/faq-section/FAQSection";
// api
// import { fatchPagesContent } from "@/app/apis/commonApi";
// data
import { goPartnersData } from "@/lib/goPartnersData";

const PageContent = () => {
  const { partners, about, partners_benefits, blogs } = goPartnersData;

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
        name="GO Partners"
        indexpage="Home"
        indexvisit="/"
        activepage="GO Partners"
        // bgImg={
        //   pageData?.content?.banner?.background_image
        //     ? {
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
        //       }
        //     : {src:"/assets/banner/aboutbanner.webp"}
        // }
        bgImg={{ src: "/assets/banner/aboutbanner.webp" }}
      />
      <Partners partnersData={partners} />
      <BecomePartner aboutData={about} />
      <PartnersBenefits benefitsData={partners_benefits} />
      <BlogSection blogsData={blogs} />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default PageContent;
