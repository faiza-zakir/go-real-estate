"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import FaqsList from "@/components/faqs/FaqsList";
// api
import { fatchPagesContent, fetchFaqData } from "@/app/apis/commonApi";
// img
import { toast } from "react-toastify";

const PageContent = () => {
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState({});

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("faqs");
      setPageData(resp?.data);
    } catch (err) {
      // toast.error("Opps!, something went wrong, please try again later");
      console.log("Err: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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
    getPageData();
    fetchFaqListData();
  }, []);

  return (
    <>
      <Banner
        // name={pageData?.content?.banner?.title}
        name="FAQ's"
        indexpage="Home"
        indexvisit="/"
        activepage="FAQ's"
        bgImg={
          pageData?.content?.banner?.background_image
            ? {
                src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
              }
            : { src: "/assets/banner/faqbanner.webp" }
        }
      />
      <FaqsList faqsData={faqData} isLoading={isLoading} />
    </>
  );
};

export default PageContent;
