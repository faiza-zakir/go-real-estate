import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title:
      "Commercial Property for Sale| Global Opportunities Real Estate India| FAQs",
    description:
      "Got questions about buying commercial real estate? Our FAQs provide quick answers on property for sale, financing options, zoning regulations, and the purchasing process.",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/faqs",
    },
  };
}

const Faqs = () => {
  return <PageContent />;
};

export default Faqs;
