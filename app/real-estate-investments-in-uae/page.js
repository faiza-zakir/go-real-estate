import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("real-estate-investments-in-uae");
  return {
    title:
      data?.content?.seo?.meta_title ||
      "Real Estate Investment in UAE | GO Real Estate Dubai",
    description:
      data?.content?.seo?.meta_description ||
      "Explore lucrative investment in Dubai real estate with GO Real Estate. Secure high returns in UAE’s booming property market with expert guidance. Jon us today!",
    alternates: {
      canonical:
        "https://gogrouprealestate.vercel.app/real-estate-investments-in-uae",
    },
  };
}

const RealEstateInvestmentsInUae = () => {
  return <PageContent />;
};

export default RealEstateInvestmentsInUae;
