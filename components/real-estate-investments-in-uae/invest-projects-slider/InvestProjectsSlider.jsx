import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// css
import "./style.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 4,
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

const InvestProjectsSlider = ({ projectsData, isLoading }) => {
  const router = useRouter();
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

  const showArrows = projectsData?.length > settings.slidesToShow;

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
      disabled={currentSlide >= projectsData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="invest_project_sec mt-60">
      <Container>
        <div className="header_wrap">
          <div className=" d-flex flex-wrap justify-content-center gap-3">
            <button className="theme_btn3 active">Ready To Move</button>
            <button className="theme_btn3">Off - Plan</button>
            <button className="theme_btn3">Residential</button>
            <button className="theme_btn3">Commercial</button>
          </div>
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
            {projectsData?.map((project) => (
              <div key={project?.id}>
                <div
                  className="project_item"
                  onClick={() =>
                    router.push(
                      `/${project?.property_type?.route}/${project?.route}`
                    )
                  }
                >
                  <figure>
                    <Image
                      // src={
                      //   project?.featured_img
                      //     ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${project?.featured_img}`
                      //     : "/assets/home/commercial1.webp"
                      // }
                      src={
                        project?.featured_img
                          ? project?.featured_img
                          : "/assets/home/commercial1.webp"
                      }
                      layout="fill"
                      objectFit="cover"
                      alt={project?.title}
                    />
                  </figure>
                  <div className="content_sec">
                    <p className="location">
                      <span>Starting from</span> AED {project?.price}
                    </p>
                    <h3 className="sub_heading">{project?.title}</h3>
                    <p className="para_comm">{project?.location}</p>
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

export default InvestProjectsSlider;
