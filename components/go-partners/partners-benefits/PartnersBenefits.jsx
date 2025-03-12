import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ChooseusCard from "../../common/why-choose-us-slide-card/ChooseusCard";
import "./styles.scss";

const PartnersBenefits = ({ benefitsData }) => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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
      }, 15);
    };

    if (isInView) {
      startAutoScroll();
    } else {
      clearInterval(scrollInterval);
    }

    return () => clearInterval(scrollInterval);
  }, [isInView]); // Depend only on `isInView`

  return (
    <div className="partners_benefits_sec mt-60" ref={sectionRef}>
      <Container>
        <div className="scroll-container" ref={scrollContainerRef}>
          <div className="scroll-content">
            <div className="why-choose">
              <h2 className="main_sec_heading">{benefitsData?.title}</h2>
              <p className="para_comm">{benefitsData?.description}</p>
              <button className="theme_btn2 me-3">Arabic Flyer</button>
              <button className="theme_btn3">English Flyer</button>
            </div>
            {benefitsData?.processData?.map((item, i) => (
              <ChooseusCard item={item} i={i} key={i} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PartnersBenefits;
