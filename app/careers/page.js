import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title:
      "Contact real estate agents India| Global Opportunities Real Estate| Property India",
    description:
      "Contact Newedge real estate agents India for reliable real estate services in India. Connect with experienced agents and offices to efficiently buy, sell, or rent properties.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/contact",
    },
  };
}

const Contact = () => {
  return <PageContent />;
};

export default Contact;
