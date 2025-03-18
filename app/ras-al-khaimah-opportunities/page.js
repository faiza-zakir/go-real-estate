import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Ras Al Khaimah Property Investment | GO Real Estate",
    description:
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
