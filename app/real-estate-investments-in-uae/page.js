import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Newedge Property Management Services | Trusted Real Estate Agency",
    description:
      "Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
    alternates: {
      canonical:
        "https://newedge-realty-next.vercel.app/real-estate-investments-in-uae",
    },
  };
}

const RealEstateInvestmentsInUae = () => {
  return <PageContent />;
};

export default RealEstateInvestmentsInUae;
