import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Dubai Property Market | GO Real Estate - Dubai Opportunities",
    description:
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
