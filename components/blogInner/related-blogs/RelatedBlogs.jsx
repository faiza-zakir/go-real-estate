import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import moment from "moment";
import { Container } from "react-bootstrap";
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

const RelatedBlogs = ({ blogData }) => {
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
  const showArrows = blogData?.length > settings.slidesToShow;
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
      disabled={currentSlide >= blogData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="mt-60 blog-slider-sec">
      <Container>
        <div className="header_wrap">
          <h3 className="main_sec_heading">Latest Articles</h3>
          {showArrows && (
            <div className="desktop_view">
              <PrevArrow />
              <NextArrow />
            </div>
          )}
        </div>
        <Slider
          {...settings}
          ref={sliderRef}
          afterChange={(index) => setCurrentSlide(index)}
        >
          {/* {blogData?.map((item, i) => ( */}
          {[1, 2, 3, 4, 5, 6]?.map((item, i) => (
            <div className="blog_item" key={item?.id}>
              <figure>
                <Image
                  // src={
                  //   item?.feature_image
                  //     ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  //       item?.feature_image
                  //     : "/assets/blog/blog1.png"
                  // }
                  src="/assets/blog/blog1.png"
                  layout="fill"
                  objectFit="cover"
                  // alt={item?.title}
                  alt="blog"
                />
                <span className="date">
                  July 28
                  {/* {moment(item?.date)?.format("MMMM D")} */}
                </span>
              </figure>
              <div>
                <p className="para_comm">
                  Living Room
                  {/* {item?.category} */}
                </p>
                <h3
                  className="sub_heading"
                  onClick={() => router.push(`/blog/${item?.route}`)}
                >
                  {/* {item?.title} */}
                  Private Contemporary Home Balancing Openess
                </h3>
              </div>
            </div>
          ))}
        </Slider>
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

export default RelatedBlogs;
