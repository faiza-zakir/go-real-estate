import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title:
      "Buy Property in Ahmedabad with Newedge | Expert Real Estate Solutions",
    description:
      "Looking to buy property in Ahmedabad? Newedge provides SEO-optimized listings, market insights, and expert advice for residential and commercial investments.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/investment/ahmadabad",
    },
  };
}

const Ahmadabad = () => {
  return <PageContent />;
};

export default Ahmadabad;
