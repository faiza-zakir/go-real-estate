"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Banner from "@/components/common/common-banner/CommonBanner";
import Details from "@/components/blogInner/Details/Details";
import RelatedBlogs from "@/components/blogInner/related-blogs/RelatedBlogs";
import ContactSection from "@/components/home/contact-section/ContactSection";
import FAQSection from "@/components/home/faq-section/FAQSection";
import Loader from "@/components/common/loader/Loader";
// api
import {
  fetchBlogData,
  fetchBlogDeatilsData,
  fatchPagesContent,
} from "@/app/apis/commonApi";

const PageContent = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});
  const [relatedBlog, setRelatedBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const getPageData = async () => {
      try {
        setIsLoading(true);
        const resp = await fatchPagesContent("blog");
        setPageData(resp?.data);
      } catch (err) {
        console.log("Err: ", err);
      } finally {
        setIsLoading(false);
      }
    };
    getPageData();
  }, []);

  useEffect(() => {
    const fetchBlogListData = async () => {
      try {
        setIsLoading(true); // Show the loader

        const { data } = await fetchBlogData();
        const relBlogData = data?.filter((item) => item?.id !== id);
        setRelatedBlog(relBlogData);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    fetchBlogListData();
  }, [id]);

  useEffect(() => {
    const fetchSingleBlogData = async () => {
      try {
        setIsLoading(true); // Show the loader

        const { data } = await fetchBlogDeatilsData(id);
        setSingleBlog(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    fetchSingleBlogData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner
            name={singleBlog?.title}
            indexpage="Home"
            indexvisit="/"
            activepage={singleBlog?.title}
            bgImg={
              pageData?.content?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
                  }
                : { src: "/assets/banner/blogbanner.webp" }
            }
          />
          <Details singleBlog={singleBlog} />
          <RelatedBlogs blogData={relatedBlog} />
          <FAQSection faqsData={pageData?.content?.faqs} />
          <ContactSection />
        </>
      )}
    </>
  );
};

export default PageContent;
