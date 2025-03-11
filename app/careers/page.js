import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title:
      "Careers real estate agents India| Global Opportunities Real Estate| Property India",
    description:
      "Careers GO real estate agents India for reliable real estate services in India. Connect with experienced agents and offices to efficiently buy, sell, or rent properties.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/careers",
    },
  };
}

const Careers = () => {
  return <PageContent />;
};

export default Careers;
