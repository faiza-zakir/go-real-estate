"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import TermsIntro from "@/components/common/terms-intro/TermsIntro";
import { fatchPagesContent } from "@/app/apis/commonApi";
import Loader from "@/components/common/loader/Loader";

function PageContent() {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const { data } = await fatchPagesContent("terms-and-conditions");
      setPageData(data?.content);
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner
            name={pageData?.banner?.title}
            indexpage="Home"
            indexvisit="/"
            activepage="Terms & Conditions"
            bgImg={
              pageData?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/termsbanner.webp" }
            }
          />
          <TermsIntro content={pageData?.intro} />
        </>
      )}
    </>
  );
}

export default PageContent;
