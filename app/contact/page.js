import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("contact-us");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Contact GO Real Estate at our Real Estate Office Dubai",
    description:
      data?.content?.seo?.meta_description ||
      "Get in touch with GO Real Estate, a trusted real estate office in Dubai. Schedule an appointment today for expert guidance on your property investments. Join now",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/contact",
    },
  };
}

const Contact = () => {
  return <PageContent />;
};

export default Contact;
