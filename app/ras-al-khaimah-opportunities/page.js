import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("ras-al-khaimah-opportunities");
  return {
    title:
      data?.content?.seo?.meta_title ||
      "Ras Al Khaimah Property Investment | GO Real Estate",
    description:
      data?.content?.seo?.meta_description ||
      "Explore Ras Al Khaimah property investment with GO Real Estate. Discover lucrative opportunities in a growing market with high returns and investor benefits.",
    alternates: {
      canonical:
        "https://gogrouprealestate.vercel.app/ras-al-khaimah-opportunities",
    },
  };
}

const RasAlKhaimahOpportunities = () => {
  return <PageContent />;
};

export default RasAlKhaimahOpportunities;
