"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import PrivacyIntro from "@/components/common/privacy-intro/PrivacyIntro";
import Loader from "@/components/common/loader/Loader";
// api
import { fatchPagesContent } from "@/app/apis/commonApi";

function PageContent() {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("privacy-policy");
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
            activepage="Privacy Policy"
            bgImg={
              pageData?.content?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/privacybanner.webp" }
            }
          />
          <PrivacyIntro content={pageData?.content?.intro} />
        </>
      )}
    </>
  );
}

export default PageContent;
