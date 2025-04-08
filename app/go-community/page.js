import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("go-community");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "GO Community | Global Opportunities Real Estate (GO Real Estate)",
    description:
      data?.content?.seo?.meta_description ||
      "Join the GO Community at Global Opportunities Real Estate, where investors and homeowners connect, share insights, and explore the best real estate opportunities.",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/go-community",
    },
  };
}

const GoCommunity = () => {
  return <PageContent />;
};

export default GoCommunity;
