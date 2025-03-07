import PageContent from "./PageContent";
// Generate metadata for the page
export async function generateMetadata() {
  return {
    title:
      "Terms and Conditions | Global Opportunities Real Estate - Trusted Real Estate Partner",
    description:
      "Read Global Opportunities Real Estate's terms and conditions. We offer a trustworthy and transparent real estate service that puts your interests first in every transaction.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/terms-of-use",
    },
  };
}

const TermsOfUse = () => {
  return (
    <div>
      <PageContent />
    </div>
  );
};
export default TermsOfUse;
