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

const EducationalWebinar = ({ educationalWebinarData, isLoading }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const downloadFile = (path) => {
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

  const showArrows = educationalWebinarData?.length > settings.slidesToShow;

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
      disabled={
        currentSlide >= educationalWebinarData?.length - settings.slidesToShow
      }
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="educational_webinar_sec mt-60">
      <Container>
        <div className="header_wrap">
          <h2 className="main_sec_heading">Educational Webinar</h2>
          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <button
              className="theme_btn3"
              onClick={() =>
                downloadFile(
                  "https://gogrouprealestate.com/webinars/wp-content/uploads/2024/05/GO-Real-Estate.pdf"
                )
              }
            >
              Download Flyer
            </button>
            <button
              className="theme_btn2"
              onClick={() =>
                downloadFile(
                  "https://gogrouprealestate.com/webinars/wp-content/uploads/2024/05/GO-Real-Estate-Brochure_compressed-1.pdf"
                )
              }
            >
              Download Brochure
            </button>
          </div>
        </div>
        {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : (
          <Slider
            {...settings}
            ref={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {educationalWebinarData?.map((item) => (
              <div key={item?.id}>
                <div className="edu_item">
                  <figure>
                    <Image
                      // src={
                      //   item?.featured_img
                      //     ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.featured_img}`
                      //     : "/assets/edu-portal/webinar.png"
                      // }
                      src={
                        item?.featured_img
                          ? item?.featured_img
                          : "/assets/edu-portal/webinar.png"
                      }
                      layout="fill"
                      objectFit="cover"
                      alt={item?.title}
                    />
                  </figure>
                  <div className="content_sec">
                    <h3 className="sub_heading">{item?.title}</h3>
                    <p className="para_comm">Date: {item?.date}</p>
                    <p className="para_comm m-0">Time: {item?.time}</p>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3 slider_btn">
                      <button
                        className="theme_btn3"
                        onClick={() => downloadFile(item?.registration_link)}
                      >
                        Registration Link
                      </button>
                      <button
                        className="theme_btn2"
                        onClick={() => downloadFile(item?.flyer_url)}
                      >
                        View Flyer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
        {showArrows && (
          <div className="slider_arrows">
            <PrevArrow />
            <NextArrow />
          </div>
        )}
      </Container>
    </div>
  );
};

export default EducationalWebinar;
