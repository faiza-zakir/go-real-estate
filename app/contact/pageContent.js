"use client";
import Banner from "@/components/common/common-banner/CommonBanner";
import ContactInfoSection from "@/components/contact/contact-info-section/ContactInfoSection";
import ContactFormSection from "@/components/contact/contact-form-section/ContactFormSection";
import FAQSection from "@/components/home/faq-section/FAQSection";
// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";
// import { fatchPagesContent } from "@/app/apis/commonApi";

const faqs = [
  {
    id: 1,
    question: "How can I contact Global Opportunities Real Estate for inquiries?",
    answer: `You can reach out to us through our real estate office in Dubai via phone, email, or our online contact form. Whether you need assistance with real estate consultation services or general real estate inquiries in Dubai, our dedicated team is here to help.`,
  },
  {
    id: 2,
    question: "How do I schedule an appointment with a property consultant?",
    answer: `Booking a consultation is easy! Simply call our real estate agency phone number, send us an email, or fill out our online form to schedule an appointment with one of our experienced property advisors. Our team specializes in property consultation in Dubai and will assist you with all your real estate needs.`,
  },
  {
    id: 3,
    question: "Can I arrange a property viewing in Dubai through your agency?",
    answer: `Yes! We offer flexible options for clients to schedule a property viewing in Dubai at their convenience. Contact our Dubai property agency contact team to arrange a personalized tour of your preferred properties.`,
  },
  {
    id: 4,
    question: "Do you offer email support for real estate consultations?",
    answer: `Absolutely! Our team is available via email for any inquiries related to buying, selling, or investing in properties. If you need email real estate consultancy, feel free to reach out, and a property advisor contact in UAE will assist you promptly.`,
  },
];

const PageContent = () => {
  // const [pageData, setPageData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const getPageData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const resp = await fatchPagesContent("contact");
  //     setPageData(resp?.data);
  //   } catch (err) {
  //     toast.error("Opps!, something went wrong, please try again later");
  //     console.log("Err: ", err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   getPageData();
  // }, []);
  return (
    <>
      <Banner
        // name={pageData?.content?.banner?.title}
        name="Contact Us"
        indexpage="Home"
        indexvisit="/"
        activepage="Contact Us"
        // bgImg={
        //   pageData?.content?.banner?.background_image
        //     ? {
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
        //       }
        //     : { src: "/assets/banner/contactbanner.webp" }
        // }
        bgImg={{ src: "/assets/banner/contactbanner.webp" }}
      />
      <ContactInfoSection
      // infoData={pageData?.content?.info}
      />
      <ContactFormSection />
      <FAQSection faqsData={faqs} />
    </>
  );
};

export default PageContent;
