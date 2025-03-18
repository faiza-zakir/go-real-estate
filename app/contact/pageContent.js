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
    question:
      "How can I contact Global Opportunities Real Estate for inquiries?",
    answer: `<p>You can reach out to us through our <strong>real estate office in Dubai</strong> via phone, email, or our online contact form. Whether you need assistance with <strong>real estate consultation services</strong> or general <strong>real estate inquiries in Dubai,</strong> our dedicated team is here to help.</p>`,
  },
  {
    id: 2,
    question: "How do I schedule an appointment with a property consultant?",
    answer: `<p>Booking a consultation is easy! Simply call our <strong>real estate agency phone number</strong>, send us an email, or fill out our online form to <strong>schedule an appointment</strong> with one of our experienced property advisors. Our team specializes in <strong>property consultation in Dubai</strong> and will assist you with all your real estate needs.</p>`,
  },
  {
    id: 3,
    question: "Can I arrange a property viewing in Dubai through your agency?",
    answer: `<p>Yes! We offer flexible options for clients to <strong>schedule a property viewing in Dubai</strong> at their convenience. Contact our <strong>Dubai property agency contact</strong> team to arrange a personalized tour of your preferred properties.</p>`,
  },
  {
    id: 4,
    question: "Do you offer email support for real estate consultations?",
    answer: `<p>Absolutely! Our team is available via email for any inquiries related to buying, selling, or investing in properties. If you need <strong>email real estate consultancy</strong>, feel free to reach out, and a <strong>property advisor contact in UAE</strong> will assist you promptly.</p>`,
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
