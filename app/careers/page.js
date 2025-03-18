import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title:
      "Real Estate Careers in Dubai | GO Real Estate Jobs",
    description:
      "Explore exciting real estate careers in Dubai with GO Real Estate. Join our team of experts and grow your career in the thriving UAE property market. Apply today!",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/careers",
    },
  };
}

const Careers = () => {
  return <PageContent />;
};

export default Careers;
