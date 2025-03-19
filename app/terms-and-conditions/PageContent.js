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
      const resp = await fatchPagesContent("terms-and-conditions");
      setPageData(resp?.data);
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
            name={pageData?.content?.banner?.title}
            indexpage="Home"
            indexvisit="/"
            activepage="Terms & Conditions"
            bgImg={
              pageData?.content?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/termsbanner.webp" }
            }
          />
          <TermsIntro content={pageData?.content?.intro} />
        </>
      )}
    </>
  );
}

export default PageContent;
