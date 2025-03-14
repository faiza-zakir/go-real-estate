import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "GO Property Management Services | Trusted Real Estate Agency",
    description:
      "GO, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/abu-dhabi-opportunities",
    },
  };
}

const DubaiOpportunities = () => {
  return <PageContent />;
};

export default DubaiOpportunities;
