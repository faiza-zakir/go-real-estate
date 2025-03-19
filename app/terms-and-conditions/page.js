import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("terms-and-conditions");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Global Opportunities Real Estate | Terms & Conditions",
    description:
      data?.content?.seo?.meta_description ||
      "Read the terms & conditions of GO Real Estate to understand our policies, services, and legal guidelines for using our website and real estate solutions. Join now",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/terms-and-conditions",
    },
  };
}

const TermsAndConditions = () => {
  return (
    <div>
      <PageContent />
    </div>
  );
};
export default TermsAndConditions;
