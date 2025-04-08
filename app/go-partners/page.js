import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("go-partners");
  return {
    title:
      data?.content?.seo?.meta_title ||
      "GO Partners Portal | Real Estate Partner Portal - GO Real Estate",
    description:
      data?.content?.seo?.meta_description ||
      "Join the GO Partners Portal by GO Real Estate for exclusive access to real estate opportunities, seamless collaboration, and profitable partnerships. Join now",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/go-partners",
    },
  };
}

const GoPartners = () => {
  return <PageContent />;
};

export default GoPartners;
