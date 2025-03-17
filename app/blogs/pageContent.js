"use client";
// import { useState, useEffect } from "react";
import Banner from "@/components/common/common-banner/CommonBanner";
import BlogList from "@/components/blog/BlogList";
import FAQSection from "@/components/home/faq-section/FAQSection";
import ContactSection from "@/components/home/contact-section/ContactSection";
// api
// import { fatchPagesContent, fetchBlogData } from "@/app/apis/commonApi";
// img
// import { toast } from "react-toastify";

const faqs = [
  {
    id: 1,
    question: "What is Broker?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
  },
  {
    id: 2,
    question: "Can i pay my own taxes and insurance?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
  },
  {
    id: 3,
    question: "Can a home depreciate in value?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
  },
  {
    id: 4,
    question: "Is an old home as good a value as a new home?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
  },
];

const PageContent = () => {
  // const [blogData, setBlogData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [pageData, setPageData] = useState({});
  // const getPageData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const resp = await fatchPagesContent("blogs");
  //     setPageData(resp?.data);
  //   } catch (err) {
  //     toast.error("Opps!, something went wrong, please try again later");
  //     console.log("Err: ", err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   const fetchBlogListData = async () => {
  //     try {
  //       setIsLoading(true); // Show the loader

  //       const { data } = await fetchBlogData();
  //       setBlogData(data);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false); // Hide the loader
  //     }
  //   };
  //   getPageData();
  //   fetchBlogListData();
  // }, []);

  return (
    <>
      <Banner
        // name={pageData?.content?.banner?.title}
        name="Blog"
        indexpage="Home"
        indexvisit="/"
        activepage="Blog"
        // bgImg={
        //   pageData?.content?.banner?.background_image
        //     ? {
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
        //       }
        //     : { src: "/assets/banner/blogbanner.webp" }
        // }
        bgImg={{ src: "/assets/banner/blogbanner.webp" }}
      />
      <BlogList
      // blogsList={blogData} isLoading={isLoading}
      />
    <FAQSection faqsData={faqs} />
      <ContactSection />
    </>
  );
};

export default PageContent;
