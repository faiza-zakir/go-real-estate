import Projects from "@/components/projects/Projects";

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title:
      "Pre-Leased Property for Sale | Secure Investment Opportunities | Global Opportunities Real Estate",
    description:
      "Invest in high-return pre-leased properties with Global Opportunities Real Estate. Call us today! Global Opportunities Real Estate.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/pre-leased",
    },
  };
}

export default function PreLeased() {
  return <Projects />;
}
