import Projects from "@/components/projects/Projects";

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title:
      "Commercial Real Estate in Dubai| Office Space for Rent | Global Opportunities Real Estate",
    description:
      "Top-tier commercial properties and flexible office spaces are available for lease with Global Opportunities Real Estate. Explore options today!",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/commercial",
    },
  };
}

export default function Commercial() {
  return <Projects />;
}
