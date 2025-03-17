import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Real Estate Investment in UAE | GO Real Estate Dubai",
    description:
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
