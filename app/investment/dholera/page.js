import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title:
      "Invest in Dholera Special Investment Region (DSIR) | Global Opportunities Real Estate",
    description:
      "Ready to take your investment to the next level? Discover Dholera Special Investment Region (DSIR) with Newedge!",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/investment/dholera",
    },
  };
}

const Dholera = () => {
  return <PageContent />;
};

export default Dholera;
