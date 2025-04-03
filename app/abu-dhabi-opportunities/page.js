import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("abu-dhabi-opportunities");
  return {
    title:
      data?.content?.seo?.meta_title ||
      "Abu Dhabi Property Market | GO Real Estate Investment",
    description:
      data?.content?.seo?.meta_description ||
      "Explore Abu Dhabi's property market with GO Real Estate. Discover lucrative investment opportunities in a stable, growing market with high returns. Join us now",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/abu-dhabi-opportunities",
    },
  };
}

const AbuDhabiOpportunities = () => {
  return <PageContent />;
};

export default AbuDhabiOpportunities;
