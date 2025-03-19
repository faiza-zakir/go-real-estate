import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./PageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("privacy-policy");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Read the Privacy Policy by Global Opportunities Real Estate",
    description:
      data?.content?.seo?.meta_description ||
      "Read the Privacy Policy of Global Opportunities Real Estate to learn how we collect, use, and protect your personal information while using our services. Join us",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/privacy-policy",
    },
  };
}

const PrivacyPolicy = () => {
  return <PageContent />;
};

export default PrivacyPolicy;
