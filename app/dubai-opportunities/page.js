import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("dubai-opportunities");
  return {
    title:
      data?.content?.seo?.meta_title ||
      "Dubai Property Market | GO Real Estate - Dubai Opportunities",
    description:
      data?.content?.seo?.meta_description ||
      "Explore Dubai’s thriving property market with GO Real Estate. Discover top investment opportunities, tax benefits, and luxury living in the heart of Dubai.",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/dubai-opportunities",
    },
  };
}

const AbuDhabiOpportunities = () => {
  return <PageContent />;
};

export default AbuDhabiOpportunities;
