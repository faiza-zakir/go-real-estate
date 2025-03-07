"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import PrivacyIntro from "@/components/common/privacy-intro/PrivacyIntro";
import { fatchPagesContent } from "@/app/apis/commonApi";
import Loader from "@/components/common/loader/Loader";
import { toast } from "react-toastify";

const intro = {
  title: "Privacy Policy",
  description: `Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.`,
};

function PageContent() {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("privacy-policy");
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
            name="Privacy Policy"
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
          <PrivacyIntro
            // content={pageData?.content?.intro}
            content={intro}
          />
        </>
      )}
    </>
  );
}

export default PageContent;
