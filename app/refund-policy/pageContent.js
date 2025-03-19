"use client";
import Banner from "@/components/common/common-banner/CommonBanner";
import RefundIntro from "@/components/common/refund-intro/RefundIntro";
// img
import { fatchPagesContent } from "@/app/apis/commonApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Loader from "@/components/common/loader/Loader";

import React from "react";

const intro = {
  title: "“Cancellation & Refund Policy”",
  description: `Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.`,
};

function PageContent() {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("refund-policy");
      setPageData(resp?.data);
    } catch (err) {
      // toast.error("Opps!, something went wrong, please try again later");
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
            // name={pageData?.content?.banner?.title}
            name="Cancellation & Refund Policy"
            indexpage="Home"
            indexvisit="/"
            activepage="Cancellation & Refund Policy"
            bgImg={
              pageData?.content?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/refundbanner.webp" }
            }
          />
          <RefundIntro
            // content={pageData?.content?.intro}
            content={intro}
          />
        </>
      )}
    </>
  );
}

export default PageContent;
