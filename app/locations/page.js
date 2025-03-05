import PageContent from "./pageContent";

export async function generateMetadata() {

  return {
    title:
      "Land for Sale India | Newedge Property Locations| Real Estate India",
    description:
      "Explore prime land for sale in India. Find the best property locations and real estate locations in India with Newedge to meet your investment needs.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/locations",
    },
  };
}

const Locations = () => {
  return <PageContent />;
};

export default Locations;
