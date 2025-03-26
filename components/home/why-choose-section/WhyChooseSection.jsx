import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ChooseusCard from "../../common/why-choose-us-slide-card/ChooseusCard";
import "./styles.scss";

const WhyChooseSection = ({ whyChooseData }) => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const handleFlyerDownload = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
    };
  }, []); // Run once when sectionRef is set

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 2;
        }
      }, 20);
    };

    if (isInView) {
      startAutoScroll();
    } else {
      clearInterval(scrollInterval);
    }

    return () => clearInterval(scrollInterval);
  }, [isInView]); // Depend only on `isInView`

  return (
    <div className="why-choose-sec mt-60" ref={sectionRef}>
      <Container>
        <div className="scroll-container" ref={scrollContainerRef}>
          <div className="scroll-content">
            <div className="why-choose">
              <h2 className="main_sec_heading">{whyChooseData?.title}</h2>
              <div
                className="general-details mb-4"
                dangerouslySetInnerHTML={{ __html: whyChooseData?.description }}
              />
              <button
                className="theme_btn2 me-3"
                onClick={() =>
                  handleFlyerDownload(
                    "https://gorealestate.b-cdn.net/Gallery/1742802626-0-file-sample150kB.pdf"
                  )
                }
              >
                Arabic Flyer
              </button>
              <button
                className="theme_btn3"
                onClick={() =>
                  handleFlyerDownload(
                    "https://gorealestate.b-cdn.net/Gallery/1742802626-0-file-sample150kB.pdf"
                  )
                }
              >
                English Flyer
              </button>
            </div>
            {whyChooseData?.processData?.map((item, i) => (
              <ChooseusCard item={item} i={i} key={i} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseSection;
