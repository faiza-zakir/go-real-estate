import Image from "next/image";
import { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// css
import "./style.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 800,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const CaseStudiesSlider = ({ caseStudiesData, isLoading }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const showArrows = caseStudiesData?.length > settings.slidesToShow;

  const PrevArrow = () => (
    <button
      className="slider_custom_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= caseStudiesData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="case_studies_sec mt-60">
      <Container>
        <div className="header_wrap">
          <h2 className="main_sec_heading">Our Case Studies</h2>
          {showArrows && (
            <div className="desktop_view">
              <PrevArrow />
              <NextArrow />
            </div>
          )}
        </div>
        {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : (
          <Slider
            {...settings}
            ref={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {caseStudiesData?.map((report) => (
              <div key={report?.id}>
                <div className="report_item">
                  <figure>
                    <Image
                      // src={
                      //   report?.featured_img
                      //     ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${report?.featured_img}`
                      //     : "/assets/home/commercial1.webp"
                      // }
                      src={
                        report?.featured_img
                          ? report?.featured_img
                          : "/assets/home/commercial1.webp"
                      }
                      layout="fill"
                      objectFit="cover"
                      alt={report?.title}
                    />
                  </figure>
                  <div className="content_sec">
                    <h3 className="sub_heading">{report?.title}</h3>
                    <p className="para_comm">{report?.description}</p>
                    <button className="theme_btn2">View Now</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
        {showArrows && (
          <div className="mobile_view">
            <PrevArrow />
            <NextArrow />
          </div>
        )}
      </Container>
    </div>
  );
};

export default CaseStudiesSlider;
