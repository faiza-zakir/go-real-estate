import PageContent from "./PageContent";
// Generate metadata for the page
export async function generateMetadata() {
  return {
    title:
      "Refund Policy | Global Opportunities Real Estate - Hassle-Free Real Estate Services",
    description:
      "Discover Global Opportunities Real Estate's clear and transparent refund policy. Learn how we ensure a seamless experience in real estate services, prioritizing customer satisfaction.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/refund-policy",
    },
  };
}

const RefundPolicy = () => {
  return (
    <div>
      <PageContent />
    </div>
  );
};
export default RefundPolicy;
