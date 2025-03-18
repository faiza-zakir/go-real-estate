import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "GO Partners Portal | Real Estate Partner Portal - GO Real Estate",
    description:
      "Join the GO Partners Portal by GO Real Estate for exclusive access to real estate opportunities, seamless collaboration, and profitable partnerships. Join now",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/go-partners",
    },
  };
}

const GoPartners = () => {
  return <PageContent />;
};

export default GoPartners;
