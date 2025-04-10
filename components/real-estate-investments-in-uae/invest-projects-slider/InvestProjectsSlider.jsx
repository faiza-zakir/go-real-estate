import Image from "next/image";
import { useState, useRef, useEffect } from "react";
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

const InvestProjectsSlider = ({
  propertyTypesData,
  projectsData,
  isLoading,
}) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (!activeFilter) {
      setFilterData(projectsData); // Default to all projects
    } else {
      setFilterData(
        projectsData?.filter(
          (project) => project?.property_types?.route === activeFilter
        )
      );
    }
  }, [projectsData, activeFilter]); // Depend on both to update when data changes

  const handleFilter = (type) => {
    if (activeFilter !== type) {
      setActiveFilter(type);
    }
  };

  const handleFlyerDownload = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const showArrows = filterData?.length > settings.slidesToShow;

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
      disabled={currentSlide >= filterData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="invest_project_sec mt-60">
      <Container>
        <div className="header_wrap">
          <div className=" d-flex flex-wrap justify-content-center gap-3">
            {propertyTypesData?.map((type) => (
              <button
                key={type?.id}
                className={`theme_btn3 ${
                  activeFilter === type?.route ? "active" : ""
                }`}
                onClick={() => handleFilter(type?.route)}
              >
                {type?.title}
              </button>
            ))}
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
        ) : filterData?.length == 0 ? (
          <p className="text-center para_comm my-5">
            No projects found for the selected category.
          </p>
        ) : (
          <Slider
            {...settings}
            ref={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {filterData?.map((project) => (
              <div key={project?.id}>
                <div className="project_item">
                  <span className="status_sec">{project?.property_for}</span>
                  <figure>
                    <Image
                      src={
                        project?.featured_img
                          ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${project?.featured_img}`
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
                    <p className="para_comm">{project?.locations?.title}</p>
                    <div className="btn_wrap mt-3">
                      {project?.arabic_flyer && (
                        <button
                          className="theme_btn3"
                          onClick={() =>
                            handleFlyerDownload(
                              process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                                project?.arabic_flyer
                            )
                          }
                        >
                          Arabic Flyer
                        </button>
                      )}
                      {project?.english_flye && (
                        <button
                          className="theme_btn3 engBtn"
                          onClick={() =>
                            handleFlyerDownload(
                              process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                                project?.english_flyer
                            )
                          }
                        >
                          English Flyer
                        </button>
                      )}
                    </div>
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
