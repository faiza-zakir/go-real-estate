import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("about-us");
  return {
    title:
      data?.content?.seo?.meta_title ||
      "About Us | Global Opportunities Real Estate - UAE Experts",
    description:
      data?.content?.seo?.meta_description ||
      "Learn about Global Opportunities Real Estate, part of Global Opportunities Group, offering expert real estate solutions in the UAE with unmatched market expertise",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/about",
    },
  };
}

const About = () => {
  return <PageContent />;
};

export default About;
