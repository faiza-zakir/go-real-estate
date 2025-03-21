import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import moment from "moment";
import { Container } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// api
import { fetchBlogData } from "@/app/apis/commonApi";
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

const BlogSection = () => {
  const router = useRouter();
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogsData, setBlogsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBlogListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchBlogData();
        setBlogsData(data?.slice(0, 5));
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchBlogListData();
  }, []);

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

  const showArrows = blogsData?.length > settings.slidesToShow;

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
      disabled={currentSlide >= blogsData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="mt-60 blog-sec-area">
      <Container>
        <div className="header_wrap">
          <h3 className="main_sec_heading">Our Blogs</h3>
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
            {blogsData?.map((item) => (
              <div
                className="blog_item"
                key={item?.id}
                onClick={() => router.push(`/blog/${item?.route}`)}
              >
                <figure>
                  <Image
                    src={
                      item?.feature_image
                        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.feature_image}`
                        : "/assets/blog/blog1.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    alt={item?.title}
                  />
                  <span className="date">
                    {moment(item?.date)?.format("MMMM D")}
                  </span>
                </figure>
                <div>
                  <p className="para_comm">{item?.category?.title}</p>
                  <h3 className="sub_heading">{item?.title}</h3>
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

export default BlogSection;
