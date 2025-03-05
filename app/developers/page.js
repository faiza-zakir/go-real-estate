import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title:
      "Trusted Real Estate & Property Developers | Global Opportunities Real Estate India",
    description:
      "One-stop-shop for innovative projects and expertly crafted properties tailored to your residential and commercial needs. Global Opportunities Real Estate.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/developers",
    },
  };
}

const Developers = () => {
  return <PageContent />;
};

export default Developers;
