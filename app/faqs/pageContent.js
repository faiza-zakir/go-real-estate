"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import FaqsList from "@/components/faqs/FaqsList";
// api
import { fatchPagesContent, fetchFaqData } from "@/app/apis/commonApi";

const PageContent = () => {
  const [faqData, setFaqData] = useState([]);
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const { data } = await fatchPagesContent("faqs");
      setPageData(data?.content);
    } catch (err) {
      console.log("Err: ", err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchFaqListData = async () => {
    try {
      setIsLoading(true); // Show the loader
      const { data } = await fetchFaqData();
      setFaqData(data);
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };
  useEffect(() => {
    getPageData();
    fetchFaqListData();
  }, []);

  return (
    <>
      <Banner
        name={pageData?.banner?.title}
        indexpage="Home"
        indexvisit="/"
        activepage="FAQ's"
        bgImg={
          pageData?.banner?.background_image
            ? {
                src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.banner?.background_image}`,
              }
            : { src: "/assets/banner/faqbanner.webp" }
        }
      />
      <FaqsList faqsData={faqData} isLoading={isLoading} />
    </>
  );
};

export default PageContent;
