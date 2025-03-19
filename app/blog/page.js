import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("blog");
  return {
    title:
      data?.content?.seo?.meta_title ||
      "GO Real Estate Blogs | Real Estate Market Analysis & Trends",
    description:
      data?.content?.seo?.meta_description ||
      "Explore GO Real Estate blogs for expert insights, trends, and market analysis. Stay updated on the latest in real estate investments and opportunities. Read now",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/blog",
    },
  };
}

const Blog = () => {
  return <PageContent />;
};

export default Blog;
