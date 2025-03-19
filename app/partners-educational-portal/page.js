import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "GO Real Estate | Partners Educational Portal for Investors",
    description:
      "Explore GO Real Estate’s Partners Educational Portal for expert insights, market trends, and investment strategies to maximize your real estate opportunities.",
    alternates: {
      canonical:
        "https://gogrouprealestate.vercel.app/partners-educational-portal",
    },
  };
}

const PartnersEducationalPortal = () => {
  return <PageContent />;
};

export default PartnersEducationalPortal;
