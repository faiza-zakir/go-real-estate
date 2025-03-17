import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "About Us | Global Opportunities Real Estate - UAE Experts",
    description:
      "Learn about Global Opportunities Real Estate, part of Global Opportunities Group, offering expert real estate solutions in the UAE with unmatched market expertise",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/about",
    },
  };
}

const About = () => {
  return <PageContent />;
};

export default About;
