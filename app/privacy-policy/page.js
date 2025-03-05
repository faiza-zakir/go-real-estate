import PageContentData from "./PageContent";
// Generate metadata for the page
export async function generateMetadata() {
  return {
    title:
      "Privacy Policy | Global Opportunities Real Estate - Your Data, Our Priority",
    description:
      "Learn about Global Opportunities Real Estate's privacy policy and how we protect your personal data. We value your privacy and ensure secure real estate transactions.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/privacy-policy",
    },
  };
}

const PrivacyPolicy = () => {
  return (
    <div>
      <PageContentData />
    </div>
  );
};
export default PrivacyPolicy;
