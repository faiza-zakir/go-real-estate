"use client";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import AboutSection from "@/components/home/about-section/AboutSection";
import BannerVideo from "@/components/home/banner-section/banner-video/BannerVideo";
// data
import { homeData } from "@/lib/homeData";
// api
import { fatchPagesContent, fatchProjects } from "@/app/apis/commonApi";

const BannerForm = dynamic(() =>
  import("@/components/home/banner-section/banner-form/BannerForm")
);
const AppointmentSection = dynamic(() =>
  import("@/components/home/appointment-section/AppointmentSection")
);
const ContactSection = dynamic(() =>
  import("@/components/home/contact-section/ContactSection")
);
const FAQSection = dynamic(() =>
  import("@/components/home/faq-section/FAQSection")
);
const ProjectSlider = dynamic(() =>
  import("@/components/home/project-slider/ProjectSlider")
);
const WhyChooseSection = dynamic(() =>
  import("@/components/home/why-choose-section/WhyChooseSection")
);
const WhyPartnerSection = dynamic(() =>
  import("@/components/home/why-partner-section/WhyPartnerSection")
);
const AboutDubaiSection = dynamic(() =>
  import("@/components/home/about-dubai-section/AboutDubaiSection")
);

const Home = () => {
  const { bannerData, why_choose, appointment, why_partners } = homeData;
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [residentialProperties, setResidentialProperties] = useState([]);
  const [commercialProperties, setCommercialProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const [pageData, setPageData] = useState({});

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("home");
      setPageData(resp?.data);
    } catch (err) {
      console.log("Err: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchProjectListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchProjects();
        const projectlist = data?.filter(
          (project) => project?.is_featured === true
        );
        const residentialData = data?.filter(
          (project) => project?.property_types?.route === "residential"
        );
        const commercialData = data?.filter(
          (project) => project?.property_types?.route === "commercial"
        );
        setProjects(data);
        setFeaturedProjects(projectlist);
        setResidentialProperties(residentialData);
        setCommercialProperties(commercialData);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    getPageData();
    fetchProjectListData();
  }, []);

  return (
    <>
      <BannerVideo
        showForm={showForm}
        setShowForm={setShowForm}
        content={pageData?.content?.banner}
        // content={bannerData}
      />
      {showForm && (
        <section className="form_mobile_view mt-60">
          <Container>
            <BannerForm />
          </Container>
        </section>
      )}
      <div ref={ref} style={{ minHeight: "20px" }}></div>
      {inView ? (
        <>
          <AboutSection
            aboutData={pageData?.content?.intro}
            countsData={pageData?.content?.counts}
          />
          <ProjectSlider
            title="Featured Real Estate Projects"
            projectsData={featuredProjects?.slice(0, 4)}
            isLoading={isLoading}
          />
          <AboutDubaiSection aboutDubaiData={pageData?.content?.about_dubai} />
          <ProjectSlider
            title="Residential Properties"
            projectsData={residentialProperties?.slice(0, 4)}
            isLoading={isLoading}
            isTrue={true}
          />
          <WhyChooseSection whyChooseData={why_choose} />
          <ProjectSlider
            title="Commercial Properties"
            projectsData={commercialProperties?.slice(0, 4)}
            isLoading={isLoading}
            isTrue={true}
          />
          <AppointmentSection appointmentData={appointment} />
          <ProjectSlider
            title="Places To Invest In UAE"
            projectsData={projects?.slice(0, 4)}
            isLoading={isLoading}
          />
          <WhyPartnerSection whyPartnersData={why_partners} />
          <FAQSection faqsData={pageData?.content?.faqs} />
          <ContactSection />
        </>
      ) : null}
    </>
  );
};

export default Home;
