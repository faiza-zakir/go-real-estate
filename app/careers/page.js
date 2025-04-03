import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("careers");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Real Estate Careers in Dubai | GO Real Estate Jobs",
    description:
      data?.content?.seo?.meta_description ||
      "Explore exciting real estate careers in Dubai with GO Real Estate. Join our team of experts and grow your career in the thriving UAE property market. Apply today!",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/careers",
    },
  };
}

const Careers = () => {
  return <PageContent />;
};

export default Careers;
