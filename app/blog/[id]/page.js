import { fetchBlogDeatilsData } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { id } = params;
  const { data } = await fetchBlogDeatilsData(id);

  return {
    title: data?.seo?.meta_title || "GO Property Management Services",
    description:
      data?.seo?.meta_description ||
      "GO, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
    alternates: {
      canonical: `https://gogrouprealestate.vercel.app/blog/${id}`,
    },
  };
}

const BlogInner = () => {
  return <PageContent />;
};

export default BlogInner;
