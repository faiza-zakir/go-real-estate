import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Abu Dhabi Property Market | GO Real Estate Investment",
    description:
      "Explore Abu Dhabi's property market with GO Real Estate. Discover lucrative investment opportunities in a stable, growing market with high returns. Join us now",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/abu-dhabi-opportunities",
    },
  };
}

const DubaiOpportunities = () => {
  return <PageContent />;
};

export default DubaiOpportunities;
