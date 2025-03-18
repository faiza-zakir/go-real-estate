import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "GO Community | Global Opportunities Real Estate (GO Real Estate)",
    description:
      "Join the GO Community at Global Opportunities Real Estate, where investors and homeowners connect, share insights, and explore the best real estate opportunities.",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/go-community",
    },
  };
}

const GoCommunity = () => {
  return <PageContent />;
};

export default GoCommunity;
