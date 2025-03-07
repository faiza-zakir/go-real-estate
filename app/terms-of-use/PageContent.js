"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import TermsIntro from "@/components/common/terms-intro/TermsIntro";
// img
import { fatchPagesContent } from "@/app/apis/commonApi";
import { toast } from "react-toastify";

const intro = {
  title: "Terms of Use",
  description: `Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.`,
};

function PageContent() {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("terms-of-use");
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
    <div>
      {" "}
      <Banner
        // name={pageData?.content?.banner?.title}
        name="Terms of Use"
        indexpage="Home"
        indexvisit="/"
        activepage="Terms of Use"
        bgImg={
          pageData?.content?.banner?.background_image
            ? {
                src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
              }
            : { src: "/assets/banner/termsbanner.webp" }
        }
      />
      <TermsIntro
        // content={pageData?.content?.intro}
        content={intro}
      />
    </div>
  );
}

export default PageContent;
