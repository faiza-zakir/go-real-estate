import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// api
// import { fetchTestimonialData } from "@/app/apis/commonApi";
// css
import "./styles.scss";

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

const Testimonials = ({ testimonialsData }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [testimonialsData, settestimonialsData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchTestimonialListData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await fetchTestimonialData();

  //       let updatedData = [...data]?.filter((item) => item?.type === "text");
  //       settestimonialsData(updatedData);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchTestimonialListData();
  // }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const TestimonialContent = ({ review }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <>
        <div
          className="general-details"
          dangerouslySetInnerHTML={{
            __html: isExpanded ? review : truncateText(review, 15), // Show full or truncated review
          }}
        />
        {review.split(" ").length > 15 && (
          <button
            className="read-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </>
    );
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

  const showArrows = testimonialsData?.length > settings.slidesToShow;

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
        currentSlide >= testimonialsData?.length - settings.slidesToShow
      }
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="testimonials-sec mt-60">
      <Container>
        <div className="header_wrap">
          <h2 className="main_sec_heading">Testimonials</h2>
          {showArrows && (
            <div className="desktop_view">
              <PrevArrow />
              <NextArrow />
            </div>
          )}
        </div>
        {/* {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : ( */}
        <Slider
          {...settings}
          ref={sliderRef}
          afterChange={(index) => setCurrentSlide(index)}
        >
          {testimonialsData?.map((item) => (
            <div className="testimonial_wrap" key={item?.id}>
              <div className="testimonial_item">
                <TestimonialContent review={item?.review} />
                <hr />
                <div className="d-flex align-items-center gap-3 mt-4">
                  <Image
                    // src={
                    //   item?.user_img
                    //     ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.user_img}`
                    //     : "/assets/about/userImg.webp"
                    // }
                    src={item?.user_img}
                    width={60}
                    height={60}
                    alt={item?.name}
                  />
                  <div className="content_sec">
                    <h3 className="sub_heading">{item?.name}</h3>
                    <p className="para_comm">{item?.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* )} */}
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

export default Testimonials;
