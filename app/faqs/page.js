import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("faqs");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "FAQs | Global Opportunities Real Estate (GO Real Estate)",
    description:
      data?.content?.seo?.meta_description ||
      "Find answers to common real estate questions with GO Real Estate. Explore investment insights, buying guides, and expert advice for property decisions in Dubai.",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/faqs",
    },
  };
}

const Faqs = () => {
  return <PageContent />;
};

export default Faqs;
