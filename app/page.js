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
import { fatchPagesContent, fatchProjectList } from "@/app/apis/commonApi";
import { toast } from "react-toastify";
//
const BannerForm = dynamic(() =>
  import("@/components/home/banner-section/banner-form/BannerForm")
);
const AppointmentSection = dynamic(() =>
  import("@/components/home/appointment-section/AppointmentSection")
);
const BlogSection = dynamic(() =>
  import("@/components/home/blog-section/BlogSection")
);
const ContactSection = dynamic(() =>
  import("@/components/home/contact-section/ContactSection")
);
const FAQSection = dynamic(() =>
  import("@/components/home/faq-section/FAQSection")
);
const TestimonialsSection = dynamic(() =>
  import("@/components/home/testimonials-section/TestimonialsSection")
);
const VideoTestimonialsSection = dynamic(() =>
  import(
    "@/components/home/video-testimonials-section/VideoTestimonialsSection"
  )
);
const ProjectSlider = dynamic(() =>
  import("@/components/home/project-slider/ProjectSlider")
);
const WhyChooseSection = dynamic(() =>
  import("@/components/home/why-choose-section/WhyChooseSection")
);

const AboutDubaiSection = dynamic(() =>
  import("@/components/home/about-dubai-section/AboutDubaiSection")
);

const Home = () => {
  const {
    bannerData,
    about,
    counts,
    featured_projects,
    about_dubai,
    residential,
    whyChoose,
    commercial,
    invest_places,
    appointment,
    testimonials,
    testimonialsVideo,
  } = homeData;
  const [residentialProjects, setResidentialProjects] = useState([]);
  const [commercialProjects, setCommercialProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  // const [pageData, setPageData] = useState({});

  // const getPageData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const resp = await fatchPagesContent("home");
  //     setPageData(resp?.data);
  //   } catch (err) {
  //     toast.error("Opps!, something went wrong, please try again later");
  //     console.log("Err: ", err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    const fetchProjectListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchProjectList();
        const projectlist = data?.filter(
          (project) => project?.featured_property === true
        );
        const residentialData = projectlist?.filter(
          (project) => project?.property_type?.route === "residential"
        );
        const commercialData = projectlist?.filter(
          (project) => project?.property_type?.route === "commercial"
        );
        setResidentialProjects(residentialData);
        setCommercialProjects(commercialData);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    // getPageData();
    fetchProjectListData();
  }, []);

  return (
    <>
      <BannerVideo
        showForm={showForm}
        setShowForm={setShowForm}
        // content={pageData?.content?.banner}
        content={bannerData}
      />
      <section className="form_mobile_view mt-60">
        <Container>{showForm && <BannerForm />}</Container>
      </section>
      <div ref={ref} style={{ minHeight: "20px" }}></div>
      {inView ? (
        <>
          <AboutSection
            // aboutData={pageData?.content?.intro}
            // countsData={pageData?.content?.counts}
            aboutData={about}
            countsData={counts}
          />
          <ProjectSlider
            tagLine="Our Projects"
            title="Featured Real Estate Projects"
            link="/residential"
            projectsData={featured_projects?.slice(0, 4)}
            isLoading={isLoading}
          />
          <AboutDubaiSection aboutData={about_dubai} />
          <ProjectSlider
            tagLine="Our Properties"
            title="Residential Properties"
            link="/residential"
            projectsData={residential?.slice(0, 4)}
            isLoading={isLoading}
          />
          <WhyChooseSection whyChooseData={whyChoose} />
          <AppointmentSection appointmentData={appointment} />
          <ProjectSlider
            tagLine="Our Properties"
            title="Commercial Properties"
            link="/residential"
            projectsData={commercial?.slice(0, 4)}
            isLoading={isLoading}
          />
          <ProjectSlider
            tagLine="Investment Places"
            title="Places To Invest In UAE"
            link="/residential"
            projectsData={invest_places?.slice(0, 4)}
            isLoading={isLoading}
          />
          <TestimonialsSection testimonialsData={testimonials} />
          <VideoTestimonialsSection testimonialsData={testimonialsVideo} />
          <BlogSection />
          <ContactSection />
          <FAQSection />
        </>
      ) : null}
    </>
  );
};

export default Home;
